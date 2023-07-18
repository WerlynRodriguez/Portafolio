import Icon from "./Icon"

export default function Tag({
    name,
    icon
} : {
    /** The text of the tag */
    name: string
    /** The icon of the tag */
    icon?: string
    /** The size of the icon and the text */
}) {
    return (
        <span
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--bgSecondaryColor)',
                margin: '0.2rem',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--borderRadius)'
            }}
        >
            <Icon 
                name={name}
                size={1}
                style={{ marginRight: '0.5rem' }}
            />
            {name}
        </span>
    )
}