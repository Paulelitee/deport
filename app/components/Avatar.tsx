import Image from "next/image"
import dp from '../../public/assets/ -18.jpg'

interface Props  {
    width: number,
    height: number
}

export default function Avatar({ width, height}: Props) {

    return <div className="">
        <Image src = { dp } alt = {'profile-photo'} width = {width} height = {height}/>
    </div>
}