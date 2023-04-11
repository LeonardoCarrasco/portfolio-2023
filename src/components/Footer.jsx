import { Github } from "../icons/icons"
import { Socials } from "./Socials"

export const Footer = () => {
    return (
        <footer className="py-2">
            <div className="flex items-center justify-between my-4 flex-col lg:flex-row">
                <div className="flex flex-row items-center justify-end sm:gap-2 font-medium font-kanit text-sm sm:text-base text-grey-text-2 mb-10">
                    <a href="#home" className="py-1 px-3 hover:text-white-text text-white-text-2">Home</a>
                    <a href="#sobremi" className="py-1 px-3 hover:text-white-text">Sobre mi</a>
                    <a href="#proyectos" className="py-1 px-3 hover:text-white-text">Proyectos</a>
                    <a href="#contacto" className="py-1 px-3 hover:text-white-text">Contacto</a>
                </div>
                <Socials />

            </div>
            <p className="text-center mt-10 mb-2 text-xs sm:text-base">&copy; 2023</p>
            <a href="https://github.com/LeonardoCarrasco" className="flex items-center justify-center gap-1 text-xs sm:text-base">Hecho por Leonardo A. Carrasco <Github/></a>
        </footer>
    )
}