
import banner from '../../public/assets/banner.jpg'
import Image from 'next/image'
import dp from '../../public/assets/ -18.jpg'
import NameBio from './NameBio'

export default function Profile() {

    return <div className="">
        <div className="flex justify-between px-5 mt-[-50px] items-end">
            <div className='border-red-500 border-4 rounded-full overflow-hidden'>
                <Image src = { dp } alt = {'profile picture'} width={100} height={100}/>
            </div>
            <button className='bg-zinc-900 border-zinc-700 border px-8 py-2 mb-2 rounded-full primary-button'>follow</button>
        </div>

        <NameBio />
    </div>
}