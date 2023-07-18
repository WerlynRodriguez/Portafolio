import { useEffect, useState } from "react"
import "./styles.css"

interface DropdownProps<T> {
    /** The component to show */
    component: (onClick: () => void, className: string) => JSX.Element
    /** The selected option */
    selected: T
    /** The options to display in the dropdown */
    options: T[]
    /** The function to call when the selected option changes */
    onChange: (selected: T) => void
    /** The function to call to display the option */
    displayExtractor: (option: T) => string
    /** The function to call to display the option */
    valueExtractor?: (option: T) => string
}

/** Show any component, and when it is clicked, call a dropdown */
export default function Dropdown({
    component,
    selected,
    options,
    onChange,
    displayExtractor = (option) => option,
    valueExtractor = (option) => option
} : DropdownProps<any>) {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.addEventListener('click', handleClickOutside)
            document.addEventListener('keydown', handleKeyDown)
        }
        else {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
        }
    
        return () => {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [open])

    /** When click something outside the dropdown, close it (except the .icon) */
    const handleClickOutside = (event: MouseEvent) => 
        !(event.target as HTMLElement)?.classList.contains('dropdown_initial') &&
        setOpen(false)
    

    /** When press the escape key, close the dropdown */
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)

    return (<>
    {component(() => setOpen((prev) => !prev), "dropdown_initial")}
    <ul className={`dropdown-content ${open ? 'open' : ''}`}>
        {options.map((option, index) => (
            <li
                key={`opt${index}`}
                className="button"
                onClick={() => {
                    const sel = valueExtractor(option)
                    if (sel === selected) return
                    onChange(sel)
                }}
            >
                {displayExtractor(option)}
            </li>
        ))}
    </ul>
    </>)
}