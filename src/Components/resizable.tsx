import { useEffect, useState } from 'react'
import { ResizableBox, ResizableBoxProps } from 'react-resizable'
import './resizable.css'

interface ResizableProps {
  direction: 'horizontal' | 'vertical'
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    let timer: any

    const listener = () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight)
        setInnerWidth(window.innerWidth)
      }, 300)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  let resizableProps: ResizableBoxProps

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      width: innerWidth * 0.75,
      height: Infinity,
      resizeHandles: ['e'],
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
    }
  } else {
    resizableProps = {
      width: Infinity,
      height: 300,
      resizeHandles: ['s'],
      maxConstraints: [Infinity, innerHeight * 0.9],
      minConstraints: [Infinity, 24],
    }
  }

  return (
    <ResizableBox {...resizableProps}>
      {children}
    </ResizableBox>
  )
}

export default Resizable
