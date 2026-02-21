import { AlertTriangle, CloudSnow, Flame, CloudRain, Wind as WindIcon, X } from 'lucide-react'
import { useState } from 'react'
import type { WeatherAlert } from '@/types/garden'
import { cn } from '@/lib/utils'

const alertIcons = {
  frost: CloudSnow,
  heat: Flame,
  storm: AlertTriangle,
  wind: WindIcon,
  rain: CloudRain,
}

const alertStyles = {
  warning: 'bg-red-50 border-red-200 text-red-900',
  watch: 'bg-amber-50 border-amber-200 text-amber-900',
  advisory: 'bg-frost-50 border-frost-200 text-frost-700',
}

interface AlertBannerProps {
  alert: WeatherAlert
}

export function AlertBanner({ alert }: AlertBannerProps) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  const Icon = alertIcons[alert.type]

  return (
    <div className={cn('rounded-xl border p-4', alertStyles[alert.severity])}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-sm">{alert.title}</h3>
            <span className="inline-flex items-center rounded-full bg-white/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              {alert.severity}
            </span>
          </div>
          <p className="text-sm opacity-90 mb-2">{alert.message}</p>
          <div className="rounded-lg bg-white/50 p-3 text-sm">
            <p className="font-medium">What to do:</p>
            <p className="mt-0.5 opacity-80">{alert.actionRequired}</p>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-current opacity-40 hover:opacity-70 transition-opacity cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
