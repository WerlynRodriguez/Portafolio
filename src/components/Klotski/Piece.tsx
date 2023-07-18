import { PieceInfo } from "./interfaces"

export default function Piece(props: PieceInfo & { 
    index: number, 
    onClick?: (index: number) => void 
}) {
    const { index, name, id } = props

    return (
    <div
        className='piece'
        style={{
            animationDelay: `${index * 0.1}s`,
            backgroundImage: `url(/logos/${name}.svg)`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}
        onClick={() => props.onClick?.(props.index)}
        data-text={name}
        data-index={id}
    />
    )
}