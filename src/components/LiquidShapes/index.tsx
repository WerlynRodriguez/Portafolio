import { useEffect, useState } from 'react'
import Shape from './Shape'
import './style.css'

/** Render a container with "liquid" shapes that follow the mouse. */
export default function LiquidShapes ({
  count
} : {
  count: number
}) {
  const [state, setState] = useState<{[key: string]: number}>({
    x: 0,
    y: 0,
    xBaby: 0,
    yBaby: 0,
    xMouse: 0,
    yMouse: 0
  })

  const variations = [
    ["x", "y"],
    ["xBaby", "yBaby"],
    ["xBaby", "y"],
    ["x", "yBaby"]
  ]

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) =>
      setState((prev) => ({
      ...prev,
      xMouse: event.clientX,
      yMouse: event.clientY
      }))

    const interval = setInterval(() => {
      setState((prev) => {
        const { x, y, xBaby, yBaby, xMouse, yMouse } = prev

        const factor = 1 / 6;
        const offset = 2.5;

        return {
          ...prev,
          x: Math.round(x + (xMouse - x) * factor),
          y: Math.round(y + (yMouse - y) * factor),
          xBaby: Math.round(xBaby + (x - xBaby) * factor + offset),
          yBaby: Math.round(yBaby + (y - yBaby) * factor + offset),
        }
      })
      
    }, 30)

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={'effect_container'}>
      {
        Array.from({ length: count }, (_, i) => i).map((_, i) => (
          <Shape 
            key={`shape${i}`}
            x={state[variations[i % 4][0]]}
            y={state[variations[i % 4][1]]}
            pos={i + 1}
            count={count}
          />
        ))
      }
    </div>
  )
}