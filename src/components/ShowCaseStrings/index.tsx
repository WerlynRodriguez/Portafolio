import { useEffect, useState } from "react"
import "./styles.css"

/** Show a list of strings, changing every 3 seconds */
export default function ShowCaseString({
    strings,
    item = () => <></>,
    time = 3000
}: {
    /** The list of strings to show */
    strings: string[]

    /** The component to show the string */
    item: (
        /** The string to show */
        text: string,

        /** The index of the string in the list */
        index: number,

        /** If you want an fade animation, add this style to the element */
        style: { animation: string }
    ) => JSX.Element
    
    /** The interval between each string change */
    time?: number
}) {
    const [pos, setPos] = useState(0)

    // Get a random Hint
    useEffect(() => {
        const interval = setInterval(() => {
            setPos((prev) => (prev + 1) % strings.length)
        }, time)

        return () => clearInterval(interval)
    }, [])

    return item(strings[pos], pos, { animation: 'show-case-fade 3s ease-in-out forwards' })
}