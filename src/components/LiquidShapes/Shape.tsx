import { useMemo } from "react"

const sM = "var(--m)"

/** Render a shape at the given position. 
 * @param x - The x position of the shape.
 * @param y - The y position of the shape. 
 **/
const Shape = ({
    x,
    y,
    pos,
    count
}: {
    x: number
    y: number
    pos: number
    count: number
}) => {
    const rotate = useMemo(() => 360 / count * pos, [count])
    const strings = useMemo<{
        aDelay: string
        aDuration: string
    }>(() => {
        const time =  Math.random() * 2

        return {
            aDelay: `${pos * 0.1}s, ${2 + time}s, ${2 - time}s`,
            aDuration: `${1 + (pos * 0.5)}s, ${2 + time}s, ${1.5 + time}s`
        }
    }, [])

    return (
    <div
        className='shape'
        style={{
            left: `calc(${x}px - ${sM} - 3em)`,
            top: `calc(${y}px - ${sM})`,
            transform: `rotate(${rotate}deg)`,
            transformOrigin: `calc(${sM} + 3em)`,
            animationDelay: `${strings.aDelay}`,
            animationDuration: `${strings.aDuration}`
        }}
    />)
}

export default Shape