import { format, parseISO } from 'date-fns'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { WeatherIcon } from './WeatherIcon'
import { mockWeather } from '@/data/mock'

export function ForecastStrip() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>7-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {mockWeather.forecast.map((day) => (
            <div
              key={day.date}
              className="flex items-center justify-between rounded-lg py-1.5 px-1 hover:bg-stone-50 transition-colors"
            >
              <span className="text-sm text-stone-600 w-20">
                {format(parseISO(day.date), 'EEE, M/d')}
              </span>
              <WeatherIcon condition={day.condition} className="h-4.5 w-4.5" />
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-stone-900">{day.high}&deg;</span>
                <span className="text-stone-400">{day.low}&deg;</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
