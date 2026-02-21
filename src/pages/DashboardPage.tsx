import { useState } from 'react'
import { Sprout, TrendingUp, Scissors, Snowflake, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { AlertBanner } from '@/components/weather/AlertBanner'
import { ActionItem } from '@/components/garden/ActionItem'
import { CurrentWeather } from '@/components/weather/CurrentWeather'
import { ForecastStrip } from '@/components/weather/ForecastStrip'
import { CommunityPulse } from '@/components/garden/CommunityPulse'
import { mockUser, mockStats, mockActions, mockWeather, mockSuccessions } from '@/data/mock'

export function DashboardPage() {
  const [actions, setActions] = useState(mockActions)
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  function toggleAction(id: string) {
    setActions(prev =>
      prev.map(a => a.id === id ? { ...a, completed: !a.completed } : a)
    )
  }

  const pendingActions = actions.filter(a => !a.completed).sort((a, b) => {
    const order = { urgent: 0, high: 1, medium: 2, low: 3 }
    return order[a.priority] - order[b.priority]
  })
  const completedCount = actions.filter(a => a.completed).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
          {greeting}, {mockUser.name}! <span className="inline-block">🌿</span>
        </h1>
        <p className="text-stone-500 mt-1">
          {mockUser.location} &middot; Zone {mockUser.zone}
        </p>
      </div>

      {/* Alerts */}
      {mockWeather.alerts.map(alert => (
        <AlertBanner key={alert.id} alert={alert} />
      ))}

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-garden-100">
              <Sprout className="h-5 w-5 text-garden-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900">{mockStats.activePlants}</p>
              <p className="text-xs text-stone-500">Active Plants</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun-100">
              <Scissors className="h-5 w-5 text-sun-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900">{mockStats.harvestedThisSeason}</p>
              <p className="text-xs text-stone-500">Harvested</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-frost-100">
              <Snowflake className="h-5 w-5 text-frost-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900">{mockStats.daysUntilFirstFrost}</p>
              <p className="text-xs text-stone-500">Days to Frost</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-garden-100">
              <TrendingUp className="h-5 w-5 text-garden-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-garden-700">{mockStats.overallAttunement}%</p>
              <p className="text-xs text-stone-500">Attunement</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* This week's actions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-serif text-xl font-bold text-stone-900">This Week's Actions</h2>
              <span className="text-xs text-stone-400">{completedCount}/{actions.length} done</span>
            </div>
            <div className="space-y-2">
              {pendingActions.map(action => (
                <ActionItem key={action.id} action={action} onToggle={toggleAction} />
              ))}
              {actions.filter(a => a.completed).map(action => (
                <ActionItem key={action.id} action={action} onToggle={toggleAction} />
              ))}
            </div>
          </div>

          {/* What's next - Succession suggestions */}
          <div>
            <h2 className="font-serif text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-garden-600" />
              What's Next?
            </h2>
            <p className="text-sm text-stone-500 mb-3">
              You have {mockStats.daysUntilFirstFrost} days until first frost. Consider these succession crops:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {mockSuccessions.map((s) => (
                <Card key={s.plant.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <span className="text-3xl mb-2 block">{s.plant.emoji}</span>
                    <h4 className="font-semibold text-stone-900 text-sm">{s.plant.name}</h4>
                    <p className="text-xs text-stone-500">{s.plant.variety}</p>
                    <div className="mt-2 space-y-1 text-xs text-stone-600">
                      <p>Plant: {s.plantWindow}</p>
                      <p>Harvest: {s.harvestDate}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-1">
                      <Progress value={s.attunement} className="w-16 h-1.5" />
                      <span className="text-[10px] text-garden-600 font-medium">{s.attunement}%</span>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3 w-full text-xs">
                      Add to Garden
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Weather & Community */}
        <div className="space-y-4">
          <CurrentWeather />
          <ForecastStrip />
          <CommunityPulse />

          <Link to="/garden">
            <Button variant="outline" className="w-full gap-2 mt-2">
              View All Plants <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
