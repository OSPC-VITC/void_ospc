import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-sm font-semibold relative",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        void: "relative text-white font-bold", // we'll custom render
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  if (variant === "void") {
    return (
      <div className={cn("relative flex items-center justify-center", className)} {...props}>
        {/* Halo glow behind */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.6)_0%,transparent_70%)] blur-2xl animate-pulse" />

        {/* Second animated glow layer */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.4)_0%,transparent_80%)] blur-3xl animate-spin-slow" />

        {/* Core void (black hole) */}
        <div className="relative z-10 rounded-full bg-black px-8 py-4 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
