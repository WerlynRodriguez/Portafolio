import { useMemo } from "react"

interface GradientStep {
    /** The color of the gradient step. Hexadecimal format. */
    color: string
    /** The opacity of the gradient step. */
    opacity: number
    /** The position of the gradient step. */
    pos: number
}

interface BackgroundImageProps {
    /** The image source. */
    imageSrc: string
    /** The gradient steps for linear Gradient*/
    gradientSteps?: GradientStep[]
    /** The direction of the gradient. */
    direction?: 'top' | 'bottom' | 'left' | 'right'
    /** The background size. */
    backgroundSize?: 'cover' | 'contain' | number
    /** The children to display. */
    children?: React.ReactNode
    /** The style of the component. */
    style?: React.CSSProperties
    /** The className of the component. */
    className?: string
    /** The onClick event. */
    onClick?: () => void
}

function opacityToHex(opacity: number) {
    const hex = Math.round(opacity * 255).toString(16)
    return hex.length === 1 ? `0${hex}` : hex
}

/** Displays a background image with a linear gradient. */
export default (props: BackgroundImageProps) => {
    const { gradientSteps, direction, imageSrc, backgroundSize, onClick } = props

    const gradient = gradientSteps &&
    useMemo(() =>
        `linear-gradient(to ${direction ?? 'bottom'}, ${gradientSteps?.map(step => `${step.color}${opacityToHex(step.opacity)} ${step.pos}%`)})`
    , [gradientSteps, direction])

    return (
    <div
        onClick={() => { onClick?.() }}
        className={props?.className}
        style={{
            ...props?.style,
            background: `${gradient ? gradient + ',' : ''} url(${imageSrc})`,
            backgroundSize: typeof backgroundSize === 'number' ? `${backgroundSize}%` : backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
    >
            {props.children}
    </div>
    )
}