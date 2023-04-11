import { Layout } from "../Layout"
import { Menu } from "../icons/icons"
import { useState } from "react"

const navLinks = [
    {
        name: "Home",
        href: "#home"
    },
    {
        name: "Sobre mi",
        href: "#sobremi"
    },
    {
        name: "Proyectos",
        href: "#proyectos"
    },
    {
        name: "Contacto",
        href: "#contacto"
    },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const styleFlex = "flex sm:flex-row items-center justify-end gap-1 sm:gap-2"
    return (
        <nav className={`border-b border-grey-text/50 py-4`}>
            <Layout>
                <div className={`font-medium font-kanit text-sm text-grey-text-2 ${styleFlex}`}>
                    <div className="sm:hidden">
                        <button onClick={()=> setIsOpen(!isOpen)} className="relative z-30"><Menu /></button>
                    </div>
                    <div className={`flex sm:flex-row items-center sm:justify-end gap-12 sm:gap-2 absolute bottom-0 top-0 bg-main-bg-color flex-col justify-start pt-20 sm:pt-0 text-5xl sm:text-sm z-20 border-b sm:border-b-0 ease-in-out duration-200 ${isOpen ? 'left-0':'-left-full'} w-full sm:static`}>
                        {navLinks.map(({ name, href }) => (
                            <a onClick={()=> setIsOpen(false)} href={href} className={`py-1 px-3 hover:text-white-text ${name == 'Home' ? ' text-white-text-2' : ''}`}>{name}</a>
                        ))}
                        
                    </div>
                </div>
            </Layout>
        </nav>
    )
}