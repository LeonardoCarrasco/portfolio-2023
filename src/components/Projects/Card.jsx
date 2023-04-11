import { Github, ExternalLink } from "../../icons/icons"
import { Tags } from "./Tags"

export const Card = ({ title = 'titulo', desc='desc', order=0, img, tags, links }) => {
    const styleOrder = order == 1 ? 'sm:ml-8 sm:order-1' : 'sm:mr-8';
    
    return (
        <article className="sm:p-8 p-4 border border-white-text/30 rounded-md flex items-center flex-col sm:flex-row  bg-gradient-to-r from-[#010101]/5 to-bg-card-bg-color mb-8">
            <figure className={`max-w-sm ${styleOrder} shadow-lg mb-4 sm:mb-0`}>
                <img src={img} alt={title} className="rounded-md " />
            </figure>

            <div className="flex flex-col self-stretch">
                <header className="text-xl sm:text-2xl flex lg:flex-row justify-between flex-wrap flex-col gap-2 sm:gap-0">
                    <h1>{title}</h1>
                    <div className="flex items-center gap-2 text-grey-text-2">
                        <a href={links[0].github} className="hover:text-white-text hover:scale-110 ease-in-out duration-100"><Github /></a>
                        <a href={links[0].site} className="hover:text-white-text hover:scale-110 ease-in-out duration-100"><ExternalLink /></a>
                    </div>
                </header>
                <p className="mt-2 text-grey-text font-thin sm:text-base ">{desc}</p>
                <div className="font-thin sm:mt-auto mt-4 flex flex-wrap gap-2">
                     {tags.map((tag, index) => (
                         <Tags key={index} text={tag.tag} color={tag.color} />
                     ))}
                </div>
            </div>
        </article>
    )
}