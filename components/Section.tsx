import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
  color?: 'default' | 'white' | 'purple-700' | 'purple-50'
}

const Section = ({
  children,
  className,
  color = 'default',
}: Props): JSX.Element => {
  let colorClass = ''
  switch (color) {
    case 'white':
      colorClass = 'bg-white text-black'
      break
    case 'purple-700':
      colorClass = 'bg-purple text-white'
      break
    case 'purple-50':
      colorClass = 'bg-purple-50 text-black'
      break
    default:
      colorClass = 'bg-gray-700 text-white'
      break
  }

  return (
    <div className={`z-10 ${colorClass}`}>
      <div className={`${className} container px-8 py-12 text-center`}>
        {children}
      </div>
    </div>
  )
}

export default Section
