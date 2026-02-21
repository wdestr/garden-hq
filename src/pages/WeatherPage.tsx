import { format, parseISO } from 'date-fns'
import { Droplets } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { AlertBanner } from '@/components/weather/AlertBanner'
import { CurrentWeather } from '@/components/weather/CurrentWeather'
import { WeatherIcon } from '@/components/weather/WeatherIcon'
import { mockWeather, mockPlants } from '@/data/mock'
import { cn } from '@/lib/utils'

export function WeatherPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Weather & Alerts</h1>
        <p className="text-stone-500 mt-1">Stay ahead of conditions that affect your garden</p>
      </div>

      {/* Alerts */}
      {mockWeather.alerts.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-serif text-lg font-bold text-stone-900">Active Alerts</h2>
          {mockWeather.alerts.map(alert => (
            <AlertBanner key={alert.id} alert={alert} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CurrentWeather />

        {/* Extended forecast */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {mockWeather.forecast.map((day, i) => (
                <div
                  key={day.date}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-xl p-3 text-center transition-colors",
                    i === 0 ? "bg-garden-50 ring-1 ring-garden-200" : "bg-stone-50"
                  )}
                >
                  <span className="text-xs font-medium text-stone-500">
                    {format(parseISO(day.date), 'EEE')}
                  </span>
                  <span className="text-[11px] text-stone-400">
                    {format(parseISO(day.date), 'M/d')}
                  </span>
                  <WeatherIcon condition={day.condition} className="h-6 w-6" />
                  <div className="text-sm">
                    <span className="font-bold text-stone-900">{day.high}&deg;</span>
                    <span className="text-stone-400 ml-1">{day.low}&deg;</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-[10px] text-frost-500">
                    <Droplets className="h-2.5 w-2.5" />
                    {day.precipChance}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Plant-specific weather impact */}
      <Card>
        <CardHeader>
          <CardTitle>Garden Impact Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-stone-500 mb-4">How this week's weather affects your plants:</p>
          <div className="space-y-3">
            {mockPlants.filter(p => p.status === 'growing' || p.status === 'planted').map(plant => {
              const frostRisk = mockWeather.forecast.some(d => d.low <= 35)
              const isAffected = frostRisk && plant.sunRequirement === 'full-sun'

              return (
                <div key={plant.id} className={cn(
                  "flex items-center justify-between rounded-lg p-3",
                  isAffected ? "bg-red-50 border border-red-100" : "bg-stone-50"
                )}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{plant.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-stone-800">{plant.name}</p>
                      <p className="text-xs text-stone-500">{plant.variety}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {isAffected ? (
                      <p className="text-xs font-medium text-red-700">Frost risk - protect tonight</p>
                    ) : (
                      <p className="text-xs text-garden-600 font-medium">Conditions look good</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
