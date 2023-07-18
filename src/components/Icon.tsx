import { CSSProperties } from "react"

export const makeSrc = (name: string) => 
`https://cdn.simpleicons.org/${name}`

/** This icon component is used to display icons from the simpleicons.org website. */
export default function Icon({
    name,
    title,
    size = 2,
    style,
    onClick
} : {
    /** The name of the icon on the simpleicons.org website */
    name: string
    /** The title of the icon */
    title?: string
    /** The size of the icon in em */
    size?: number
    /** The style of the icon */
    style?: CSSProperties
    /** The function to call when the icon is clicked */
    onClick?: () => void
}) {
    return (
    <img
        className="icon"
        src={makeSrc(name)}
        alt={name}
        onClick={onClick}
        title={title}
        style={{
            ...style,
            height: `${size}em`,
            width: `${size}em`,
            WebkitTapHighlightColor: 'transparent'
        }}
        onError={(e) => {
            e.preventDefault()
            // If the icon is not found, set a imagebase64 in a shape of a question mark
            e.currentTarget.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+CjxzdmcgZmlsbD0iIzAwMDAwMCIgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjx0aXRsZT5xdWVzdGlvbjwvdGl0bGU+DQo8cGF0aCBkPSJNMjAuMTkxIDQuODE2Yy0xLjIxNy0wLjY3My0yLjY2OS0xLjA3MC00LjIxMi0xLjA3MC0xLjU1MyAwLTMuMDEzIDAuNDAxLTQuMjgxIDEuMTA1bDAuMDQ1LTAuMDIzYy0xLjc5OCAxLjAwMS0yLjk5NCAyLjg5LTIuOTk0IDUuMDU4IDAgMC4wNDEgMCAwLjA4MiAwLjAwMSAwLjEyM2wtMC0wLjAwNmMwLjAwMiAwLjY4OSAwLjU2MSAxLjI0NiAxLjI1IDEuMjQ2IDAgMCAwIDAgMCAwaDAuMDA0YzAuNjg5LTAuMDAyIDEuMjQ2LTAuNTYxIDEuMjQ2LTEuMjUgMC0wLjAwMSAwLTAuMDAzIDAtMC4wMDR2MGMtMC4wMDEtMC4wMzEtMC4wMDItMC4wNjgtMC4wMDItMC4xMDUgMC0xLjI1MiAwLjcwMy0yLjM0IDEuNzM1LTIuODkybDAuMDE4LTAuMDA5YzAuODYzLTAuNDY0IDEuODg4LTAuNzM3IDIuOTc3LTAuNzM3IDEuMDg2IDAgMi4xMDggMC4yNzEgMy4wMDQgMC43NDlsLTAuMDM0LTAuMDE3YzEuMDc5IDAuNTYgMS44MDMgMS42NjkgMS44MDMgMi45NDcgMCAwLjAyMy0wIDAuMDQ3LTAuMDAxIDAuMDcwbDAtMC4wMDNjMCAyLjQ4LTAuNjY4IDMuMDYyLTIuMjg5IDMuODcyLTIuNDYgMS4xNzYtMy43MDkgMy41NzQtMy43MTEgNy4xMjggMCAwIDAgMCAwIDAgMCAwLjY5IDAuNTU5IDEuMjQ5IDEuMjQ5IDEuMjVoMC4wMDFjMCAwIDAgMCAwLjAwMSAwIDAuNjkgMCAxLjI0OS0wLjU1OSAxLjI0OS0xLjI0OSAwLTAgMC0wIDAtMC4wMDF2MGMwLjAwMi0zLjM4OCAxLjMwNy00LjQwMyAyLjMwOS00Ljg4MiAyLjIwMi0wLjg2NCAzLjczMi0yLjk3MSAzLjczMi01LjQzNSAwLTAuMjQyLTAuMDE1LTAuNDgxLTAuMDQzLTAuNzE1bDAuMDAzIDAuMDI4YzAtMC4wMTkgMC0wLjA0MSAwLTAuMDYzIDAtMi4yMDEtMS4yMjQtNC4xMTYtMy4wMjktNS4xMDJsLTAuMDMwLTAuMDE1ek0xNi44OCAyNS4xMTljLTAuMjI4LTAuMjE4LTAuNTM4LTAuMzUyLTAuODgtMC4zNTJzLTAuNjUyIDAuMTM0LTAuODggMC4zNTNsMC4wMDEtMGMtMC4xMjQgMC4xMDYtMC4yMiAwLjI0LTAuMjc4IDAuMzk0bC0wLjAwMiAwLjAwN2MtMC4wNTEgMC4xMzYtMC4wODAgMC4yOTItMC4wODAgMC40NTYgMCAwLjAwOSAwIDAuMDE3IDAgMC4wMjZsLTAtMC4wMDFjMCAwLjAwMiAwIDAuMDA0IDAgMC4wMDYgMCAwLjM0MSAwLjEzOCAwLjY0OSAwLjM2IDAuODczbC0wLTBjMC4yMjEgMC4yMzUgMC41MzMgMC4zODEgMC44OCAwLjM4MXMwLjY1OS0wLjE0NiAwLjg3OS0wLjM4bDAuMDAxLTAuMDAxYzAuMjI5LTAuMjI0IDAuMzc0LTAuNTM0IDAuMzgtMC44NzhsMC0wLjAwMWMtMC4wMDUtMC4xNzQtMC4wNDEtMC4zMzktMC4xMDQtMC40ODlsMC4wMDMgMC4wMDljLTAuMDYwLTAuMTYtMC4xNTYtMC4yOTUtMC4yNzgtMC4zOTlsLTAuMDAxLTAuMDAxeiI+PC9wYXRoPg0KPC9zdmc+'
        }}
    />
    )
}

const basicStyles = {
    width: '2em',
    fill: 'currentColor',
    pointerEvents: 'none'
}

export const ILang = () => <svg {...basicStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m5.876,9.4c-.038,0-.071.026-.079.063l-.811,3.437h1.757l-.787-3.437c-.009-.037-.041-.063-.079-.063Z"/><path d="m19,4h-6v16h6c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5Zm3,5.637c0,.34-.276.616-.616.616h-.316c-.121,1.275-.617,2.731-1.607,3.866.542.329,1.192.564,1.984.639.315.03.555.296.555.613v.021c0,.366-.316.648-.68.613-1.137-.109-2.059-.489-2.808-1.022-.753.538-1.686.915-2.832,1.022-.364.034-.679-.248-.679-.613v-.021c0-.321.248-.584.568-.614.788-.075,1.438-.307,1.977-.635-.331-.379-.607-.794-.833-1.227-.213-.408.089-.896.55-.896h.01c.226,0,.437.122.541.323.185.352.416.691.693,1.002.818-.92,1.192-2.108,1.303-3.071h-4.191c-.34,0-.616-.276-.616-.616v-.021c0-.34.276-.616.616-.616h2.257v-.384c0-.34.276-.616.616-.616h.021c.34,0,.616.276.616.616v.384h2.257c.34,0,.616.276.616.616v.021Z"/><path d="m11,4h-6C2.238,4,0,6.239,0,9v6C0,17.762,2.238,20,5,20h6V4Zm-2.988,12h-.002c-.326,0-.609-.225-.682-.543l-.265-1.157h-2.409l-.274,1.161c-.075.316-.356.539-.681.539-.451,0-.784-.421-.681-.86l1.413-5.993c.201-.866,1.137-1.406,2.056-1.021.439.184.734.606.842,1.07l1.363,5.948c.1.438-.232.856-.682.856Z"/></svg>