import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  variant?: 'subtle' | 'medium' | 'strong'
}

export default function GlassPanel({ children, variant = 'medium', className = '', ...props }: Props) {
  return <div className={`glass-panel glass-${variant} ${className}`} {...props}>{children}</div>
}
