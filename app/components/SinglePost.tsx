
import GlobalConfig from '../app.config'
import Avatar from './Avatar'

export default function SinglePost() {

    return <div className="flex px-5 gap-2">
        <div className='rounded-full h-fit w-12 bg-yellow-500 overflow-hidden'>
            <Avatar width={200} height={200}/>
        </div>
        <div className='w-5/6'>
            <div className='flex gap-2 items-center'>
                {GlobalConfig.name}
                <p className='text-sm opacity-30'>20 Jan 2023</p>
            </div>
            <div>
                Tag list
            </div>
            <h1>
                Hello World!
            </h1>
            <p>
                This is my site where i try and post what i am up to and how to fo things with code. you can follow along with RSS by hitting the  button up above or if you are only interested in stuff i wrote about, check out writing.
            </p>
            <div>
                
            </div>
        </div>
    </div>
}