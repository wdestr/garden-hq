import { format, parseISO, differenceInDays } from 'date-fns'
import { Droplets, Sun, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import type { Plant } from '@/types/garden'
import { cn } from '@/lib/utils'
import { SIM_NOW } from '@/data/planting-windows'

const statusConfig: Record<Plant['status'], { label: string; variant: 'default' | 'success' | 'info' | 'warning' | 'outline' }> = {
  planned: { label: 'Planned', variant: 'outline' },
  planted: { label: 'Planted', variant: 'info' },
  growing: { label: 'Growing', variant: 'default' },
  harvesting: { label: 'Harvesting', variant: 'success' },
  done: { label: 'Complete', variant: 'outline' },
}

const waterLabels: Record<Plant['wateringFrequency'], string> = {
  'daily': 'Daily',
  'every-2-days': 'Every 2 days',
  'twice-weekly': '2x/week',
  'weekly': 'Weekly',
}

interface PlantCardProps {
  plant: Plant
  onClick?: () => void
}

export function PlantCard({ plant, onClick }: PlantCardProps) {
  const { label, variant } = statusConfig[plant.status]

  const growthPercent = plant.plantedDate && plant.expectedHarvest
    ? Math.min(100, Math.max(0, Math.round(
        (differenceInDays(SIM_NOW, parseISO(plant.plantedDate)) /
        differenceInDays(parseISO(plant.expectedHarvest), parseISO(plant.plantedDate))) * 100
      )))
    : 0

  return (
    <Card
      className={cn(
        "transition-all hover:shadow-md cursor-pointer group",
        plant.status === 'harvesting' && "ring-1 ring-garden-300"
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl" role="img" aria-label={plant.name}>
              {plant.emoji}
            </span>
            <div>
              <h3 className="font-semibold text-stone-900 group-hover:text-garden-700 transition-colors">
                {plant.name}
              </h3>
              <p className="text-xs text-stone-500">{plant.variety}</p>
            </div>
          </div>
          <Badge variant={variant}>{label}</Badge>
        </div>

        {/* Growth progress */}
        {plant.plantedDate && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
              <span>Growth</span>
              <span>{growthPercent}%</span>
            </div>
            <Progress value={growthPercent} />
          </div>
        )}

        {/* Quick stats */}
        <div className="flex items-center gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-1">
            <Droplets className="h-3 w-3 text-frost-400" />
            {waterLabels[plant.wateringFrequency]}
          </div>
          <div className="flex items-center gap-1">
            <Sun className="h-3 w-3 text-sun-400" />
            {plant.sunRequirement === 'full-sun' ? 'Full sun' : plant.sunRequirement === 'partial-shade' ? 'Partial' : 'Shade'}
          </div>
          {plant.expectedHarvest && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-stone-400" />
              {format(parseISO(plant.expectedHarvest), 'MMM d')}
            </div>
          )}
        </div>

        {/* Attunement */}
        <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs text-stone-400">Attunement</span>
          <span className={cn(
            "text-xs font-semibold",
            plant.attunement >= 90 ? "text-garden-600" :
            plant.attunement >= 75 ? "text-sun-600" :
            "text-stone-500"
          )}>
            {plant.attunement}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
