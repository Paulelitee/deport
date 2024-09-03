import Image from 'next/image'
import banner from '../../public/assets/banner.jpg'

export default function Banner() {

    return <div className='banner'>
    <Image src = { banner } alt = 'banner image' className='banner-image'/>
</div>
}