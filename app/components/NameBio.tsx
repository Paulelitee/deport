
import banner from '../../public/assets/banner.jpg'
import Image from 'next/image'
import check from '../../public/assets/image-removebg-preview (1).png'

export default function NameBio() {

    return <div className="px-5 my-4">
        <div className='flex h-10 items-center'>
            <h1>Paul Elite</h1>
            <Image src = { check } alt = {'verification'} width={20} height={20} fill = { false } className='object-cover w-8 h-8 mx-2'/>
        </div>
        <div>
            <p>Bring ideas to life with code</p>
            <p>Senior Web Engineer, Creative Developer, Content Creator, Whimsical Speacialist. International Speaker. Ex-Google.</p>
        </div>
    </div>
}