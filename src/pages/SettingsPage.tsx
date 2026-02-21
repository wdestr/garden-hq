import { useState, useMemo } from 'react'
import { MapPin, User, Bell, Locate } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { mockUser } from '@/data/mock'
import { zipToZone } from '@/data/planting-windows'
import { toast } from 'sonner'

export function SettingsPage() {
  const [name, setName] = useState(mockUser.name)
  const [zip, setZip] = useState(mockUser.zipCode)
  const [notifications, setNotifications] = useState({
    frostAlerts: true,
    weeklyDigest: true,
    communityUpdates: false,
    plantReminders: true,
  })

  const detectedZone = useMemo(() => zipToZone(zip), [zip])

  function handleDetectLocation() {
    if (!navigator.geolocation) {
      toast.error('Geolocation not supported by your browser')
      return
    }
    toast.info('Detecting your location...')
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords
          // Use a free reverse geocoding API to get ZIP from coords
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
          const data = await res.json()
          const postcode = data.postcode
          if (postcode) {
            setZip(postcode)
            toast.success(`Location detected: ${data.locality || data.city || 'Unknown'}, ${data.principalSubdivision || ''} ${postcode}`)
          } else {
            toast.error('Could not determine ZIP code from your location')
          }
        } catch {
          toast.error('Failed to look up your location')
        }
      },
      () => {
        toast.error('Location access denied. Enter your ZIP manually.')
      }
    )
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Settings</h1>
        <p className="text-stone-500 mt-1">Manage your garden profile and preferences</p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-4.5 w-4.5 text-garden-600" />
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
            <input
              type="email"
              value={mockUser.email}
              disabled
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm text-stone-400"
            />
            <p className="text-xs text-stone-400 mt-1">Email can be changed through your account provider.</p>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-4.5 w-4.5 text-garden-600" />
            Location & Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">ZIP Code</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                maxLength={5}
                placeholder="e.g. 11201"
                className="flex-1 rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
              />
              <Button variant="outline" size="sm" onClick={handleDetectLocation} className="shrink-0 h-auto">
                <Locate className="h-4 w-4 mr-1.5" />
                Detect
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-garden-50 p-3">
            {detectedZone ? (
              <>
                <p className="text-sm text-garden-800">
                  <span className="font-medium">USDA Hardiness Zone {detectedZone}</span>
                  {zip.length === 5 && <span className="text-garden-600"> · ZIP {zip}</span>}
                </p>
                <p className="text-xs text-garden-600 mt-1">
                  Your planting windows and almanac recommendations are tuned for this zone.
                </p>
              </>
            ) : (
              <>
                <p className="text-sm text-stone-500">
                  Enter a valid US ZIP code to detect your growing zone.
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  This determines your planting windows and frost dates.
                </p>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-4.5 w-4.5 text-garden-600" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Object.entries(notifications).map(([key, value]) => (
            <label key={key} className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-stone-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                className={`relative h-6 w-11 rounded-full transition-colors cursor-pointer ${value ? 'bg-garden-500' : 'bg-stone-300'}`}
              >
                <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${value ? 'translate-x-5' : ''}`} />
              </button>
            </label>
          ))}
        </CardContent>
      </Card>

      <Button
        className="w-full sm:w-auto"
        onClick={() => {
          // In production this would persist to Supabase
          mockUser.name = name
          mockUser.zipCode = zip
          const newZone = detectedZone
          if (newZone) mockUser.zone = newZone
          toast.success('Settings saved!')
        }}
      >
        Save Changes
      </Button>
    </div>
  )
}
