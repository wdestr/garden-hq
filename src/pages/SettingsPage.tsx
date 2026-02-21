import { useState } from 'react'
import { MapPin, User, Bell } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { mockUser } from '@/data/mock'

export function SettingsPage() {
  const [name, setName] = useState(mockUser.name)
  const [zip, setZip] = useState(mockUser.zipCode)
  const [notifications, setNotifications] = useState({
    frostAlerts: true,
    weeklyDigest: true,
    communityUpdates: false,
    plantReminders: true,
  })

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
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              maxLength={5}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
            />
          </div>
          <div className="rounded-lg bg-garden-50 p-3">
            <p className="text-sm text-garden-800">
              <span className="font-medium">Detected:</span> {mockUser.location} &middot; USDA Zone {mockUser.zone}
            </p>
            <p className="text-xs text-garden-600 mt-1">
              Your almanac recommendations are tuned for this zone.
            </p>
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

      <Button className="w-full sm:w-auto">Save Changes</Button>
    </div>
  )
}
