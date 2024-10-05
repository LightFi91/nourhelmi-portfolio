interface DividerProps {
  className?: string
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <div
      className={`w-full h-px my-4 bg-gradient-to-r from-transparent via-surface-dark dark:via-accent-light to-transparent z-content ${className}`}
    />
  )
}
