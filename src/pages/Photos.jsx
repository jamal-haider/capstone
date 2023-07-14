// import Image from "../components/image"

import { useContext } from "react"
import { Context } from "../AppContext"
import Image from "../components/image"

import { getClass } from "../utils"

export default function Photos(){
    const { allPhotos } = useContext(Context)

    const imageElements = allPhotos.map((img, i) => (
        <Image
            key={img.id}
            img={img}
            className={getClass(i)}
        />
    ))
    return(
        <main className="photos">
            {imageElements}
        </main>
    )
}