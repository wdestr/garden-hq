import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PLANT_CATALOG } from '@/data/mock'
import { cn } from '@/lib/utils'

interface AddPlantDialogProps {
  onAdd: (plant: { name: string; variety: string; emoji: string; daysToMaturity: number }) => void
}

export function AddPlantDialog({ onAdd }: AddPlantDialogProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedPlant, setSelectedPlant] = useState<typeof PLANT_CATALOG[0] | null>(null)
  const [selectedVariety, setSelectedVariety] = useState('')

  const filtered = PLANT_CATALOG.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleAdd() {
    if (!selectedPlant || !selectedVariety) return
    onAdd({
      name: selectedPlant.name,
      variety: selectedVariety,
      emoji: selectedPlant.emoji,
      daysToMaturity: selectedPlant.daysToMaturity,
    })
    setOpen(false)
    setSearch('')
    setSelectedPlant(null)
    setSelectedVariety('')
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Plant
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="font-serif text-xl font-bold text-stone-900">
              Add a Plant
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-stone-400 hover:text-stone-600 cursor-pointer">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search plants..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setSelectedPlant(null) }}
              className="w-full rounded-lg border border-stone-300 bg-stone-50 py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
            />
          </div>

          {/* Plant grid */}
          {!selectedPlant ? (
            <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
              {filtered.map((plant) => (
                <button
                  key={plant.name}
                  onClick={() => { setSelectedPlant(plant); setSelectedVariety('') }}
                  className="flex flex-col items-center gap-1.5 rounded-xl border border-stone-200 p-3 hover:border-garden-400 hover:bg-garden-50 transition-colors cursor-pointer"
                >
                  <span className="text-2xl">{plant.emoji}</span>
                  <span className="text-xs font-medium text-stone-700">{plant.name}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-3 text-center text-sm text-stone-400 py-8">
                  No plants found
                </p>
              )}
            </div>
          ) : (
            <div>
              <button
                onClick={() => setSelectedPlant(null)}
                className="text-xs text-garden-600 hover:text-garden-800 mb-3 cursor-pointer"
              >
                &larr; Back to all plants
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{selectedPlant.emoji}</span>
                <div>
                  <h3 className="font-semibold text-stone-900">{selectedPlant.name}</h3>
                  <p className="text-xs text-stone-500">{selectedPlant.daysToMaturity} days to maturity</p>
                </div>
              </div>

              <p className="text-sm text-stone-600 mb-2">Choose a variety:</p>
              <div className="space-y-1.5">
                {selectedPlant.varieties.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariety(v)}
                    className={cn(
                      "w-full text-left rounded-lg border px-3 py-2.5 text-sm transition-colors cursor-pointer",
                      selectedVariety === v
                        ? "border-garden-500 bg-garden-50 text-garden-800 font-medium"
                        : "border-stone-200 hover:border-garden-300 text-stone-700"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleAdd}
                disabled={!selectedVariety}
                className="w-full mt-4"
              >
                Add {selectedPlant.name} to Garden
              </Button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
