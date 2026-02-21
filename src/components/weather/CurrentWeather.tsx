import { Thermometer, Droplets, Wind, Sun } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { WeatherIcon } from './WeatherIcon'
import { mockWeather } from '@/data/mock'

export function CurrentWeather() {
  const { current } = mockWeather

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span>Today's Conditions</span>
          <WeatherIcon condition={current.condition} className="h-6 w-6" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <span className="text-4xl font-bold text-stone-900">{current.temp}&deg;F</span>
          <p className="text-sm text-stone-500 mt-1">Feels like {current.feelsLike}&deg;F</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-stone-50 p-3">
            <Thermometer className="h-4 w-4 text-soil-500" />
            <div>
              <p className="text-xs text-stone-500">Soil Temp</p>
              <p className="text-sm font-semibold text-soil-600">{current.soilTemp}&deg;F</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-stone-50 p-3">
            <Droplets className="h-4 w-4 text-frost-500" />
            <div>
              <p className="text-xs text-stone-500">Humidity</p>
              <p className="text-sm font-semibold">{current.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-stone-50 p-3">
            <Wind className="h-4 w-4 text-stone-500" />
            <div>
              <p className="text-xs text-stone-500">Wind</p>
              <p className="text-sm font-semibold">{current.wind} mph</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-stone-50 p-3">
            <Sun className="h-4 w-4 text-sun-500" />
            <div>
              <p className="text-xs text-stone-500">UV Index</p>
              <p className="text-sm font-semibold">{current.uvIndex}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
