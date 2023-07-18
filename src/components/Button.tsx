import React, { CSSProperties } from "react"
import Icon from "./Icon"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /** The name icon of the button */
    icon?: string
}

/** A button with an icon and text */
export default function Button(props: ButtonProps) {
    const { icon, children } = props
    return (
        <button
        type="button"
            {...props}
        >
            {icon && (
                <Icon 
                    name={icon}
                    size={1}
                    style={{ marginRight: '0.5rem' }}
                />
            )}
            {children}
        </button>
    )
}