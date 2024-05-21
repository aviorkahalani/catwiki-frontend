import clsx from 'clsx'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  const classes = clsx('container mx-auto px-4', className)
  return <div className={classes}>{children}</div>
}
