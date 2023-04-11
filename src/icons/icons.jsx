import { AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdFileDownload } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
import { BsArrowUpRight } from 'react-icons/bs';
import { RiMenu3Fill } from 'react-icons/ri';

export const Twitter = () => {
    return (
        <AiOutlineTwitter />
    )
}

export const Instagram = () => {
    return (
        <AiOutlineInstagram />
    )
}

export const Linkedin = () => {
    return (
        <AiFillLinkedin />
    )
}

export const Github = () => {
    return (
        <AiFillGithub />
    )
}

export const Download = () => {
    return (
        <MdFileDownload className='text-[20px]' />
    )
}

export const ExternalLink = () => {
    return (
        <FiExternalLink />
    )
}

export const ArrowUpRight = () => {
    return (
        <BsArrowUpRight />
    )
}

export const Menu = () => {
    return (
        <RiMenu3Fill  className='text-4xl'/>
    )
}