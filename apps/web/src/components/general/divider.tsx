interface DividerProps {
  className?: string
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`min-h-20 max-h-80 w-1 my-4 bg-surface-dark dark:bg-accent-light z-content rounded-full ${className}`}
    />
  )
}
