import { useState, useMemo } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PLANT_CATALOG, type CatalogEntry } from '@/data/plant-catalog'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  'All',
  ...Array.from(new Set(PLANT_CATALOG.map(p => p.category.split(' — ')[0]))),
]

interface AddPlantDialogProps {
  onAdd: (plant: { name: string; variety: string; emoji: string; daysToMaturity: number }) => void
}

export function AddPlantDialog({ onAdd }: AddPlantDialogProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedPlant, setSelectedPlant] = useState<CatalogEntry | null>(null)
  const [selectedVariety, setSelectedVariety] = useState('')

  const filtered = useMemo(() => {
    let results = PLANT_CATALOG
    if (category !== 'All') {
      results = results.filter(p => p.category.startsWith(category))
    }
    if (search) {
      const q = search.toLowerCase()
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.varieties.some(v => v.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      )
    }
    return results
  }, [search, category])

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
    setCategory('All')
    setSelectedPlant(null)
    setSelectedVariety('')
  }

  function handleOpenChange(val: boolean) {
    setOpen(val)
    if (!val) {
      setSearch('')
      setCategory('All')
      setSelectedPlant(null)
      setSelectedVariety('')
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Plant
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl max-h-[85vh] flex flex-col">
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

          {!selectedPlant ? (
            <>
              {/* Search */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search plants or varieties..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 bg-stone-50 py-2.5 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-garden-500 focus:border-transparent"
                />
              </div>

              {/* Category tabs */}
              <div className="flex gap-1.5 flex-wrap mb-3">
                {CATEGORIES.map(c => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer",
                      category === c
                        ? "bg-garden-600 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Results count */}
              <p className="text-[11px] text-stone-400 mb-2">
                {filtered.length} plant{filtered.length !== 1 ? 's' : ''} found
              </p>

              {/* Plant grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 overflow-y-auto flex-1 min-h-0">
                {filtered.map((plant) => (
                  <button
                    key={plant.name}
                    onClick={() => { setSelectedPlant(plant); setSelectedVariety('') }}
                    className="flex flex-col items-center gap-1 rounded-xl border border-stone-200 p-2.5 hover:border-garden-400 hover:bg-garden-50 transition-colors cursor-pointer"
                  >
                    <span className="text-xl">{plant.emoji}</span>
                    <span className="text-[11px] font-medium text-stone-700 text-center leading-tight">{plant.name}</span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="col-span-4 text-center text-sm text-stone-400 py-8">
                    No plants found
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="overflow-y-auto flex-1 min-h-0">
              <button
                onClick={() => setSelectedPlant(null)}
                className="text-xs text-garden-600 hover:text-garden-800 mb-3 cursor-pointer"
              >
                &larr; Back to all plants
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{selectedPlant.emoji}</span>
                <div>
                  <h3 className="font-semibold text-stone-900">{selectedPlant.name}</h3>
                  <p className="text-xs text-stone-500">{selectedPlant.daysToMaturity} days to maturity</p>
                  <p className="text-[10px] text-stone-400">{selectedPlant.category}</p>
                </div>
              </div>

              <p className="text-sm text-stone-600 mb-2">Choose a variety:</p>
              <div className="space-y-1.5">
                {selectedPlant.varieties.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariety(v)}
                    className={cn(
                      "w-full text-left rounded-lg border px-3 py-2 text-sm transition-colors cursor-pointer",
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
