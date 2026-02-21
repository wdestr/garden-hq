import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-garden-100 text-garden-800",
        urgent: "bg-red-100 text-red-800",
        warning: "bg-amber-100 text-amber-800",
        info: "bg-frost-100 text-frost-700",
        success: "bg-emerald-100 text-emerald-800",
        outline: "border border-stone-300 text-stone-600",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
