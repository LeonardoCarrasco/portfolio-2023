import { Twitter, Instagram, Linkedin, Github } from '../icons/icons'
import { DownloadBTN } from './downloadBTN'

export const Socials = () => {
    return (
        <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center lg:gap-3 gap-2 lg:text-[28px] text-2xl text-grey-text-2">
                <a href="https://twitter.com/iLeoCarrasco" className='hover:text-white-text hover:scale-125 ease-in-out duration-150'><Twitter/></a>
                <a href="https://www.instagram.com/ileocarrasco/" className='hover:text-white-text hover:scale-125 ease-in-out duration-150'><Instagram/></a>
                <a href="https://www.linkedin.com/in/leonardo-carrasco-5026b8246/" className='hover:text-white-text hover:scale-125 ease-in-out duration-150'><Linkedin/></a>
                <a href="https://github.com/LeonardoCarrasco" className='hover:text-white-text hover:scale-125 ease-in-out duration-150'><Github/></a>
            </div>
            <DownloadBTN />
        </div>
    )
}