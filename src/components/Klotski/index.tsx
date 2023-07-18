import { useEffect, useState } from 'react'
import Piece from './Piece'
import { PieceInfo } from "./interfaces"

import './styles.css'

const positions: number[][] = Array.from({ length: 9 }, (_, index) => {
    const x = index % 3
    const y = Math.floor(index / 3)

    return [x, y]
})

/** Mini puzzle for show my Principal Skills */
export default function Klotski (props : {
    data: string[]
    onCompleted?: () => void
    style?: React.CSSProperties
}) {
    const [mainSkills, setMainSkills] = useState<PieceInfo[]>([])
    const [empty, setEmpty] = useState<number>(4)
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        setMainSkills(() => {
            const shuffledSkills = 
            props.data.map((data, index) => ({ id: index + 1, name: data }))
            .sort(() => Math.random() - 0.5)

            shuffledSkills.push(null as unknown as PieceInfo);

            // Swap pieces to set empty piece in the middle
            [shuffledSkills[empty], shuffledSkills[8]] = [shuffledSkills[8], shuffledSkills[empty]]

            return shuffledSkills
        })
    }, [props.data])

    useEffect(() => { 
        if (completed) return
        if (empty !== 8) return

        const finish = mainSkills.every((piece, index) => piece ? piece.id === index + 1 : index === empty)
        if (!finish) return

        setCompleted(true)
        // Await for animation to finish
        const timeout = setTimeout(() => {
            props.onCompleted?.()
        }, 2000)

        return () => clearTimeout(timeout!)
    }, [empty])

    const onClickPiece = (index: number) => {
        if (completed) return

        const [x, y] = positions[index]
        const [emptyX, emptyY] = positions[empty]
        if (Math.abs(x - emptyX) + Math.abs(y - emptyY) !== 1) return

        setMainSkills((prev) => {
            const newSkills = [...prev];

            [newSkills[index], newSkills[empty]] = [newSkills[empty], newSkills[index]]

            return newSkills
        })

        setEmpty(index)
    }

    if (!mainSkills) return null

    return (
    <div 
        className={'klotski ' + (completed && 'completed')}
        style={props.style}
    >
        {mainSkills.map((piece, index) => piece ? (
            <Piece 
                key={piece.id+"I:"+index} 
                {...piece} 
                index={index} 
                onClick={onClickPiece}
            />
        ) : (
            <div key={index}/>
        ))}
    </div>
    )
}
