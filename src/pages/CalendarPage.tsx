import { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay, parseISO, addMonths, subMonths } from 'date-fns'
import { ChevronLeft, ChevronRight, Sprout } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockPlants, mockActions } from '@/data/mock'
import { cn } from '@/lib/utils'

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 3, 1)) // April 2026 to match mock data
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Pad the beginning of the month
  const startDay = monthStart.getDay()
  const paddedDays: (Date | null)[] = [...Array.from({ length: startDay }, (): null => null), ...days]

  // Find events for each day
  function getEventsForDay(date: Date) {
    const dateStr = format(date, 'yyyy-MM-dd')
    const plantEvents = mockPlants.filter(p =>
      (p.plantedDate && p.plantedDate === dateStr) ||
      (p.expectedHarvest && p.expectedHarvest === dateStr)
    )
    const actionEvents = mockActions.filter(a => a.dueDate === dateStr)
    return { plantEvents, actionEvents }
  }

  function getSelectedDayInfo() {
    if (!selectedDate) return null
    const { plantEvents, actionEvents } = getEventsForDay(selectedDate)
    return { plantEvents, actionEvents }
  }

  const selectedInfo = getSelectedDayInfo()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Planting Calendar</h1>
        <p className="text-stone-500 mt-1">Plan your season and track key dates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardContent className="p-4 sm:p-6">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h2 className="font-serif text-xl font-bold text-stone-900">
                {format(currentMonth, 'MMMM yyyy')}
              </h2>
              <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAY_NAMES.map(d => (
                <div key={d} className="text-center text-xs font-medium text-stone-400 py-1">{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {paddedDays.map((day, i) => {
                if (!day) return <div key={`pad-${i}`} />

                const { plantEvents, actionEvents } = getEventsForDay(day)
                const hasEvents = plantEvents.length > 0 || actionEvents.length > 0
                const selected = selectedDate && isSameDay(day, selectedDate)

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={cn(
                      "relative aspect-square rounded-lg p-1 text-sm transition-colors cursor-pointer flex flex-col items-center justify-start",
                      isToday(day) && "ring-2 ring-garden-500",
                      selected ? "bg-garden-100 text-garden-900" : "hover:bg-stone-100",
                      !isSameMonth(day, currentMonth) && "text-stone-300"
                    )}
                  >
                    <span className={cn(
                      "text-xs sm:text-sm font-medium",
                      isToday(day) && "text-garden-700 font-bold"
                    )}>
                      {format(day, 'd')}
                    </span>
                    {hasEvents && (
                      <div className="flex gap-0.5 mt-0.5">
                        {plantEvents.length > 0 && (
                          <span className="h-1.5 w-1.5 rounded-full bg-garden-500" />
                        )}
                        {actionEvents.length > 0 && (
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        )}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-stone-100 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-garden-500" />
                Plant events
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Actions due
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selected day details */}
        <div className="space-y-4">
          {selectedDate ? (
            <>
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                    {format(selectedDate, 'EEEE, MMMM d')}
                  </h3>
                  {selectedInfo && (selectedInfo.plantEvents.length > 0 || selectedInfo.actionEvents.length > 0) ? (
                    <div className="space-y-3 mt-3">
                      {selectedInfo.plantEvents.map(plant => (
                        <div key={plant.id} className="flex items-center gap-3 rounded-lg bg-garden-50 p-3">
                          <span className="text-xl">{plant.emoji}</span>
                          <div>
                            <p className="text-sm font-medium text-garden-800">{plant.name}</p>
                            <p className="text-xs text-garden-600">
                              {plant.plantedDate === format(selectedDate, 'yyyy-MM-dd') ? 'Planted' : 'Expected harvest'}
                            </p>
                          </div>
                        </div>
                      ))}
                      {selectedInfo.actionEvents.map(action => (
                        <div key={action.id} className="flex items-start gap-3 rounded-lg bg-amber-50 p-3">
                          <div className="mt-0.5 h-4 w-4 rounded-full border-2 border-amber-400" />
                          <div>
                            <p className="text-sm font-medium text-amber-800">{action.title}</p>
                            <p className="text-xs text-amber-600">{action.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-stone-400 mt-2">No events on this day.</p>
                  )}
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="p-5 text-center">
                <Sprout className="h-8 w-8 text-stone-300 mx-auto mb-2" />
                <p className="text-sm text-stone-400">Select a day to see details</p>
              </CardContent>
            </Card>
          )}

          {/* Planting windows */}
          <Card>
            <CardContent className="p-5">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-3">Planting Windows</h3>
              <div className="space-y-2">
                {mockPlants.filter(p => p.optimalPlantWindow.start).slice(0, 5).map(plant => (
                  <div key={plant.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span>{plant.emoji}</span>
                      <span className="text-stone-700">{plant.name}</span>
                    </div>
                    <Badge variant="default" className="text-[10px]">
                      {format(parseISO(plant.optimalPlantWindow.start), 'MMM d')} - {format(parseISO(plant.optimalPlantWindow.end), 'MMM d')}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
