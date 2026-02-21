import { useState, useEffect } from 'react'
import { Filter, X, Save, Trash2, Pencil } from 'lucide-react'
import { PlantCard } from '@/components/garden/PlantCard'
import { AddPlantDialog } from '@/components/garden/AddPlantDialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { useUser } from '@/context/UserContext'
import { mockPlants } from '@/data/mock'
import { getPlantingWindow, SIM_NOW } from '@/data/planting-windows'
import type { Plant, PlantStatus } from '@/types/garden'
import { cn } from '@/lib/utils'
import { format, parseISO, differenceInDays } from 'date-fns'
import { toast } from 'sonner'

const statusFilters: { value: PlantStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'planned', label: 'Planned' },
  { value: 'planted', label: 'Planted' },
  { value: 'growing', label: 'Growing' },
  { value: 'harvesting', label: 'Harvesting' },
  { value: 'done', label: 'Done' },
]

export function GardenPage() {
  const { user } = useUser()
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
      zone: user.zone,
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
        <PlantDetailPanel
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
          onSave={(updated) => {
            setPlants(prev => prev.map(p => p.id === updated.id ? updated : p))
            setSelectedPlant(updated)
            toast.success(`${updated.name} updated!`)
          }}
          onDelete={(id) => {
            setPlants(prev => prev.filter(p => p.id !== id))
            setSelectedPlant(null)
            toast.success('Plant removed from garden')
          }}
        />
      )}
    </div>
  )
}

/* ─── Editable Plant Detail Panel ─── */

const STATUS_OPTIONS: PlantStatus[] = ['planned', 'planted', 'growing', 'harvesting', 'done']
const WATER_OPTIONS: Plant['wateringFrequency'][] = ['daily', 'every-2-days', 'twice-weekly', 'weekly']
const SUN_OPTIONS: Plant['sunRequirement'][] = ['full-sun', 'partial-shade', 'shade']

const waterLabels: Record<Plant['wateringFrequency'], string> = {
  'daily': 'Daily',
  'every-2-days': 'Every 2 days',
  'twice-weekly': '2× per week',
  'weekly': 'Weekly',
}

const sunLabels: Record<Plant['sunRequirement'], string> = {
  'full-sun': 'Full sun',
  'partial-shade': 'Partial shade',
  'shade': 'Shade',
}

interface PlantDetailPanelProps {
  plant: Plant
  onClose: () => void
  onSave: (updated: Plant) => void
  onDelete: (id: string) => void
}

function PlantDetailPanel({ plant, onClose, onSave, onDelete }: PlantDetailPanelProps) {
  const { user } = useUser()
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<Plant>({ ...plant })
  const [confirmDelete, setConfirmDelete] = useState(false)

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const growthPercent = plant.plantedDate && plant.expectedHarvest
    ? Math.min(100, Math.max(0, Math.round(
        (differenceInDays(SIM_NOW, parseISO(plant.plantedDate)) /
        differenceInDays(parseISO(plant.expectedHarvest), parseISO(plant.plantedDate))) * 100
      )))
    : 0

  // Get zone-based planting window
  const zoneWindow = getPlantingWindow(plant.name, user.zone)

  function handleSave() {
    onSave(draft)
    setEditing(false)
  }

  function handleCancel() {
    setDraft({ ...plant })
    setEditing(false)
    setConfirmDelete(false)
  }

  const inputClass = "w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
  const selectClass = "w-full rounded-lg border border-stone-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 max-h-[85vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{plant.emoji}</span>
            <div>
              {editing ? (
                <>
                  <input
                    value={draft.name}
                    onChange={e => setDraft(d => ({ ...d, name: e.target.value }))}
                    className="font-serif text-xl font-bold text-stone-900 border-b border-stone-300 focus:border-garden-500 outline-none pb-0.5 w-full"
                    placeholder="Plant name"
                  />
                  <input
                    value={draft.variety}
                    onChange={e => setDraft(d => ({ ...d, variety: e.target.value }))}
                    className="text-sm text-stone-500 border-b border-stone-200 focus:border-garden-400 outline-none mt-1 w-full"
                    placeholder="Variety"
                  />
                </>
              ) : (
                <>
                  <h2 className="font-serif text-xl font-bold text-stone-900">{plant.name}</h2>
                  <p className="text-sm text-stone-500">{plant.variety}</p>
                </>
              )}
            </div>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600 transition-colors p-1 -mr-1 -mt-1 cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Status */}
        {editing ? (
          <div className="mb-4">
            <label className="block text-xs font-medium text-stone-500 mb-1.5">Status</label>
            <div className="flex flex-wrap gap-2">
              {STATUS_OPTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => setDraft(d => ({ ...d, status: s }))}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition-colors capitalize cursor-pointer",
                    draft.status === s
                      ? "bg-garden-600 text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <Badge variant={plant.status === 'harvesting' ? 'success' : plant.status === 'growing' ? 'default' : 'outline'}>
              {plant.status}
            </Badge>
          </div>
        )}

        {/* Growth progress (view mode only) */}
        {!editing && plant.plantedDate && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
              <span>Growth progress</span>
              <span>{growthPercent}%</span>
            </div>
            <Progress value={growthPercent} />
          </div>
        )}

        {/* Core fields */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs text-stone-500 mb-1">Planted</p>
            {editing ? (
              <input
                type="date"
                value={draft.plantedDate ?? ''}
                onChange={e => setDraft(d => ({ ...d, plantedDate: e.target.value || null }))}
                className="text-sm font-semibold bg-transparent border-b border-stone-300 focus:border-garden-500 outline-none w-full"
              />
            ) : (
              <p className="text-sm font-semibold">
                {plant.plantedDate ? format(parseISO(plant.plantedDate), 'MMM d, yyyy') : 'Not yet'}
              </p>
            )}
          </div>

          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs text-stone-500 mb-1">Expected Harvest</p>
            {editing ? (
              <input
                type="date"
                value={draft.expectedHarvest ?? ''}
                onChange={e => setDraft(d => ({ ...d, expectedHarvest: e.target.value || null }))}
                className="text-sm font-semibold bg-transparent border-b border-stone-300 focus:border-garden-500 outline-none w-full"
              />
            ) : (
              <p className="text-sm font-semibold">
                {plant.expectedHarvest ? format(parseISO(plant.expectedHarvest), 'MMM d, yyyy') : 'TBD'}
              </p>
            )}
          </div>

          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs text-stone-500 mb-1">Watering</p>
            {editing ? (
              <select
                value={draft.wateringFrequency}
                onChange={e => setDraft(d => ({ ...d, wateringFrequency: e.target.value as Plant['wateringFrequency'] }))}
                className={cn(selectClass, "!px-1 !py-1 text-sm font-semibold")}
              >
                {WATER_OPTIONS.map(w => (
                  <option key={w} value={w}>{waterLabels[w]}</option>
                ))}
              </select>
            ) : (
              <p className="text-sm font-semibold">{waterLabels[plant.wateringFrequency]}</p>
            )}
          </div>

          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-xs text-stone-500 mb-1">Sun</p>
            {editing ? (
              <select
                value={draft.sunRequirement}
                onChange={e => setDraft(d => ({ ...d, sunRequirement: e.target.value as Plant['sunRequirement'] }))}
                className={cn(selectClass, "!px-1 !py-1 text-sm font-semibold")}
              >
                {SUN_OPTIONS.map(s => (
                  <option key={s} value={s}>{sunLabels[s]}</option>
                ))}
              </select>
            ) : (
              <p className="text-sm font-semibold">{sunLabels[plant.sunRequirement]}</p>
            )}
          </div>
        </div>

        {/* Planting window (zone-aware) */}
        {zoneWindow && (
          <div className="rounded-lg bg-frost-50 p-3 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-frost-700">Optimal planting window for Zone {user.zone}</p>
                <p className="text-sm font-semibold text-frost-900 mt-0.5">{zoneWindow.start} – {zoneWindow.end}</p>
              </div>
              <Badge variant="info" className="text-[10px]">{user.location}</Badge>
            </div>
          </div>
        )}

        {/* Attunement */}
        <div className="mb-4">
          <p className="text-xs text-stone-500 mb-1">Attunement to local conditions</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 rounded-full bg-stone-200 overflow-hidden">
              <div className="h-full rounded-full bg-garden-500 transition-all" style={{ width: `${plant.attunement}%` }} />
            </div>
            <span className={cn(
              "text-sm font-semibold",
              plant.attunement >= 90 ? "text-garden-600" : plant.attunement >= 75 ? "text-sun-600" : "text-stone-500"
            )}>
              {plant.attunement}%
            </span>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-5">
          <p className="text-xs font-medium text-stone-500 mb-1.5">Notes</p>
          {editing ? (
            <textarea
              value={draft.notes}
              onChange={e => setDraft(d => ({ ...d, notes: e.target.value }))}
              rows={3}
              placeholder="Add growing notes, observations..."
              className={cn(inputClass, "resize-none")}
            />
          ) : (
            plant.notes ? (
              <div className="rounded-lg bg-garden-50 p-3">
                <p className="text-sm text-garden-700">{plant.notes}</p>
              </div>
            ) : (
              <p className="text-sm text-stone-400 italic">No notes yet. Click Edit to add some.</p>
            )
          )}
        </div>

        {/* Actions */}
        {editing ? (
          <div className="space-y-2">
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={handleCancel}>Cancel</Button>
              <Button className="flex-1" onClick={handleSave}>
                <Save className="h-4 w-4 mr-1.5" />
                Save Changes
              </Button>
            </div>
            {confirmDelete ? (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 mt-2">
                <p className="text-sm text-red-800 mb-2">Remove this plant from your garden?</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => setConfirmDelete(false)}>
                    Keep it
                  </Button>
                  <Button variant="destructive" size="sm" className="flex-1" onClick={() => onDelete(plant.id)}>
                    Yes, remove
                  </Button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setConfirmDelete(true)}
                className="w-full text-center text-xs text-red-400 hover:text-red-600 transition-colors py-2 cursor-pointer"
              >
                <Trash2 className="h-3 w-3 inline mr-1" />
                Remove from garden
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={onClose}>Close</Button>
              <Button className="flex-1" onClick={() => setEditing(true)}>
                <Pencil className="h-4 w-4 mr-1.5" />
                Edit Plant
              </Button>
            </div>
            {confirmDelete ? (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 mt-2">
                <p className="text-sm text-red-800 mb-2">Remove this plant from your garden?</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => setConfirmDelete(false)}>
                    Keep it
                  </Button>
                  <Button variant="destructive" size="sm" className="flex-1" onClick={() => onDelete(plant.id)}>
                    Yes, remove
                  </Button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setConfirmDelete(true)}
                className="w-full text-center text-xs text-red-400 hover:text-red-600 transition-colors py-2 cursor-pointer"
              >
                <Trash2 className="h-3 w-3 inline mr-1" />
                Remove from garden
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
