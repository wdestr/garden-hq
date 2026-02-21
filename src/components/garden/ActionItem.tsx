import { useState } from 'react'
import { format, parseISO } from 'date-fns'
import { Check, ChevronDown, ChevronUp, AlertTriangle, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { GardenAction } from '@/types/garden'
import { cn } from '@/lib/utils'

const priorityConfig = {
  urgent: { variant: 'urgent' as const, icon: AlertTriangle },
  high: { variant: 'warning' as const, icon: Clock },
  medium: { variant: 'default' as const, icon: null },
  low: { variant: 'outline' as const, icon: null },
}

interface ActionItemProps {
  action: GardenAction
  onToggle: (id: string) => void
}

export function ActionItem({ action, onToggle }: ActionItemProps) {
  const [expanded, setExpanded] = useState(false)
  const { variant, icon: PriorityIcon } = priorityConfig[action.priority]

  return (
    <div
      className={cn(
        "rounded-xl border bg-white transition-all",
        action.completed ? "border-stone-200 opacity-60" : "border-stone-200",
        action.priority === 'urgent' && !action.completed && "border-red-200 bg-red-50/30"
      )}
    >
      <div className="flex items-start gap-3 p-4">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(action.id)}
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors cursor-pointer",
            action.completed
              ? "border-garden-500 bg-garden-500 text-white"
              : "border-stone-300 hover:border-garden-400"
          )}
        >
          {action.completed && <Check className="h-3 w-3" />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className={cn(
              "font-medium text-sm",
              action.completed && "line-through text-stone-400"
            )}>
              {action.title}
            </h4>
            {PriorityIcon && !action.completed && (
              <PriorityIcon className="h-3.5 w-3.5 text-amber-500" />
            )}
            <Badge variant={variant} className="text-[10px]">
              {action.priority}
            </Badge>
          </div>
          <p className="text-xs text-stone-500 mt-0.5">{action.description}</p>

          {/* Expandable details */}
          {expanded && (
            <div className="mt-3 space-y-2 text-sm">
              <div className="rounded-lg bg-stone-50 p-3">
                <p className="text-xs font-medium text-stone-700 mb-1">Why:</p>
                <p className="text-xs text-stone-600">{action.reason}</p>
              </div>
              <div className="rounded-lg bg-garden-50 p-3">
                <p className="text-xs font-medium text-garden-800 mb-1">How:</p>
                <p className="text-xs text-garden-700">{action.howTo}</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 mt-2">
            <span className="text-[11px] text-stone-400">
              Due {format(parseISO(action.dueDate), 'MMM d')}
            </span>
            <span className="text-[11px] text-garden-500 font-medium">
              {action.attunement}% Attuned
            </span>
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-auto text-[11px] text-stone-400 hover:text-stone-600 flex items-center gap-0.5 cursor-pointer"
            >
              {expanded ? (
                <>Less <ChevronUp className="h-3 w-3" /></>
              ) : (
                <>More <ChevronDown className="h-3 w-3" /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
