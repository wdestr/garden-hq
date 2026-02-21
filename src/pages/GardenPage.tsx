import { useState } from 'react'
import { Filter } from 'lucide-react'
import { PlantCard } from '@/components/garden/PlantCard'
import { AddPlantDialog } from '@/components/garden/AddPlantDialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockPlants } from '@/data/mock'
import type { Plant, PlantStatus } from '@/types/garden'
import { cn } from '@/lib/utils'

const statusFilters: { value: PlantStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'planned', label: 'Planned' },
  { value: 'planted', label: 'Planted' },
  { value: 'growing', label: 'Growing' },
  { value: 'harvesting', label: 'Harvesting' },
  { value: 'done', label: 'Done' },
]

export function GardenPage() {
  const [plants, setPlants] = useState<Plant[]>(mockPlants)
  const [filter, setFilter] = useState<PlantStatus | 'all'>('all')
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)

  const filtered = filter === 'all' ? plants : plants.filter(p => p.status === filter)

  function handleAddPlant(data: { name: string; variety: string; emoji: string; daysToMaturity: number }) {
    const newPlant: Plant = {
      id: String(Date.now()),
      name: data.name,
      variety: data.variety,
      emoji: data.emoji,
      status: 'planned',
      plantedDate: null,
      expectedHarvest: null,
      daysToMaturity: data.daysToMaturity,
      notes: '',
      zone: '7a',
      optimalPlantWindow: { start: '', end: '' },
      wateringFrequency: 'every-2-days',
      sunRequirement: 'full-sun',
      attunement: 75,
    }
    setPlants(prev => [...prev, newPlant])
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">My Garden</h1>
          <p className="text-stone-500 mt-1">{plants.length} plants &middot; {plants.filter(p => p.status === 'growing').length} growing</p>
        </div>
        <AddPlantDialog onAdd={handleAddPlant} />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="h-4 w-4 text-stone-400" />
        {statusFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer",
              filter === f.value
                ? "bg-garden-600 text-white"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            )}
          >
            {f.label}
            {f.value !== 'all' && (
              <span className="ml-1 opacity-70">
                ({plants.filter(p => p.status === f.value).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Plant grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onClick={() => setSelectedPlant(plant)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <span className="text-4xl block mb-3">🌱</span>
          <p className="text-stone-500">No plants in this category yet.</p>
          <p className="text-sm text-stone-400 mt-1">Add a plant to get started!</p>
        </div>
      )}

      {/* Plant detail panel */}
      {selectedPlant && (
        <PlantDetailPanel plant={selectedPlant} onClose={() => setSelectedPlant(null)} />
      )}
    </div>
  )
}

function PlantDetailPanel({ plant, onClose }: { plant: Plant; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{plant.emoji}</span>
            <div>
              <h2 className="font-serif text-xl font-bold text-stone-900">{plant.name}</h2>
              <p className="text-sm text-stone-500">{plant.variety}</p>
            </div>
          </div>
          <Badge variant={plant.status === 'harvesting' ? 'success' : plant.status === 'growing' ? 'default' : 'outline'}>
            {plant.status}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs text-stone-500">Planted</p>
            <p className="text-sm font-semibold">{plant.plantedDate ?? 'Not yet'}</p>
          </div>
          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs text-stone-500">Expected Harvest</p>
            <p className="text-sm font-semibold">{plant.expectedHarvest ?? 'TBD'}</p>
          </div>
          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs text-stone-500">Watering</p>
            <p className="text-sm font-semibold capitalize">{plant.wateringFrequency.replace(/-/g, ' ')}</p>
          </div>
          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs text-stone-500">Sun</p>
            <p className="text-sm font-semibold capitalize">{plant.sunRequirement.replace(/-/g, ' ')}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-stone-500 mb-1">Attunement to local conditions</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 rounded-full bg-stone-200 overflow-hidden">
              <div className="h-full rounded-full bg-garden-500" style={{ width: `${plant.attunement}%` }} />
            </div>
            <span className="text-sm font-semibold text-garden-600">{plant.attunement}%</span>
          </div>
        </div>

        {plant.notes && (
          <div className="rounded-lg bg-garden-50 p-3 mb-4">
            <p className="text-xs font-medium text-garden-800 mb-1">Notes</p>
            <p className="text-sm text-garden-700">{plant.notes}</p>
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={onClose}>Close</Button>
          <Button className="flex-1">Edit Plant</Button>
        </div>
      </div>
    </div>
  )
}
