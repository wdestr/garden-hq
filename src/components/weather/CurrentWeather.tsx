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
          <div className="rounded-lg bg-stone-50 p-3">
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-soil-500" />
              <p className="text-xs text-stone-500">Soil Temp</p>
            </div>
            <p className="text-sm font-semibold text-soil-600 mt-1">{current.soilTemp}&deg;F</p>
            <p className="text-[10px] text-stone-400 mt-0.5">
              {current.soilTemp >= 70 ? 'Warm — all crops OK' :
               current.soilTemp >= 60 ? 'Good for warm-season crops' :
               current.soilTemp >= 50 ? 'Cool-season crops only' :
               'Too cold for most seeds'}
            </p>
          </div>
          <div className="rounded-lg bg-stone-50 p-3">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-frost-500" />
              <p className="text-xs text-stone-500">Humidity</p>
            </div>
            <p className="text-sm font-semibold mt-1">{current.humidity}%</p>
            <p className="text-[10px] text-stone-400 mt-0.5">
              {current.humidity > 80 ? 'Watch for mildew' :
               current.humidity > 60 ? 'Comfortable for plants' :
               'Water more frequently'}
            </p>
          </div>
          <div className="rounded-lg bg-stone-50 p-3">
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-stone-500" />
              <p className="text-xs text-stone-500">Wind</p>
            </div>
            <p className="text-sm font-semibold mt-1">{current.wind} mph</p>
            <p className="text-[10px] text-stone-400 mt-0.5">
              {current.wind > 20 ? 'Stake tall plants' :
               current.wind > 10 ? 'Moderate — check supports' :
               'Calm — good for spraying'}
            </p>
          </div>
          <div className="rounded-lg bg-stone-50 p-3">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-sun-500" />
              <p className="text-xs text-stone-500">UV Index</p>
            </div>
            <p className="text-sm font-semibold mt-1">{current.uvIndex}</p>
            <p className="text-[10px] text-stone-400 mt-0.5">
              {current.uvIndex >= 8 ? 'Very high — use shade cloth' :
               current.uvIndex >= 6 ? 'High — great for sun-lovers' :
               current.uvIndex >= 3 ? 'Moderate' :
               'Low light today'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
