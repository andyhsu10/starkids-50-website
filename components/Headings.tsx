import { ReactChild } from 'react'
import classNames from 'classnames'

type TProps = {
  children: ReactChild | ReactChild[]
  className?: string
}

export const H1 = ({ children, className = '' }: TProps): JSX.Element => {
  return (
    <h1
      className={classNames(
        'text-3xl tracking-widest mb-4 font-semibold cursor-default select-none',
        className
      )}
    >
      {children}
    </h1>
  )
}

export const H2 = ({ children, className = '' }: TProps): JSX.Element => {
  return (
    <h2
      className={classNames(
        'text-2xl tracking-widest mb-8 cursor-default select-none',
        className
      )}
    >
      {children}
    </h2>
  )
}

export const H3 = ({ children, className = '' }: TProps): JSX.Element => {
  return (
    <h3 className={classNames('text-xl tracking-widest', className)}>
      {children}
    </h3>
  )
}

export const H4 = ({ children, className = '' }: TProps): JSX.Element => {
  return (
    <h4 className={classNames('text-lg tracking-wider', className)}>
      {children}
    </h4>
  )
}
