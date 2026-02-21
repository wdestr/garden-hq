import { Sun, CloudSun, Cloud, CloudRain, CloudLightning, Snowflake, CloudFog } from 'lucide-react'
import type { WeatherCondition } from '@/types/garden'
import { cn } from '@/lib/utils'

const icons: Record<WeatherCondition, typeof Sun> = {
  'sunny': Sun,
  'partly-cloudy': CloudSun,
  'cloudy': Cloud,
  'rainy': CloudRain,
  'stormy': CloudLightning,
  'snowy': Snowflake,
  'foggy': CloudFog,
}

const colors: Record<WeatherCondition, string> = {
  'sunny': 'text-sun-500',
  'partly-cloudy': 'text-sun-400',
  'cloudy': 'text-stone-400',
  'rainy': 'text-frost-500',
  'stormy': 'text-purple-500',
  'snowy': 'text-frost-300',
  'foggy': 'text-stone-400',
}

interface WeatherIconProps {
  condition: WeatherCondition
  className?: string
}

export function WeatherIcon({ condition, className = 'h-5 w-5' }: WeatherIconProps) {
  const Icon = icons[condition]
  return <Icon className={cn(colors[condition], className)} />
}
