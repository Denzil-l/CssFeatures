import { useEffect, useState } from "react"
import { ImageContainer } from "./components/ImageContainer"
import './style.css'

type Images = string[]
type Bol = boolean[]

export const FirstPage = () => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const [enabled, setEnabled] = useState<Bol>([true, true, true, true])
    const [images, setImages] = useState<Images>(
        [
            'img1.jpg',
            'img2.jpg',
            'img3.jpg',
            'img4.jpg',
        ]
    )

    const changes = () => {
        if (currentPosition < 4) {
            const newEnabled = [...enabled]
            console.log(currentPosition)
            newEnabled[currentPosition] = !newEnabled[currentPosition]
            setEnabled(newEnabled)
            setCurrentPosition((prev) => prev + 1)
        } else {
            const newEnabled = [...enabled]
            newEnabled[0] = !newEnabled[0]
            setEnabled(newEnabled)
            setCurrentPosition(1)
        }



    }

    useEffect(() => {
        const interval = setInterval(() => {
            changes()
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [currentPosition, enabled])
    return (
        <>
            <div className="container">
                {enabled[0] && <ImageContainer path={images[0]} />}
                {enabled[1] && <ImageContainer path={images[1]} />}
                {enabled[2] && <ImageContainer path={images[2]} />}
                {enabled[3] && <ImageContainer path={images[3]} />}

                {!enabled[0] && <ImageContainer path={images[0]} />}
                {!enabled[1] && <ImageContainer path={images[1]} />}
                {!enabled[2] && <ImageContainer path={images[2]} />}
                {!enabled[3] && <ImageContainer path={images[3]} />}
            </div>

        </>
    )
}