import { Card } from "./Card"
import projects from "../../../projects.json"

export const Projects = () => {
    return (
        <section className="pt-10" id="projects">
            <div>
                <h2 className="font-semibold text-2xl sm:text-3xl">Proyectos Destacados 🚀</h2>
                <p className=" font-light text-sm text-grey-text-2">Coleccion de Proyectos personales.</p>
            </div>

            <div className="my-10">
                {projects.projects.map((project, index) => (
                    <Card key={index}
                        title={project.title}
                        img={project.image} 
                        desc={project.desc}
                        tags={project.tags}
                        links={project.links}  
                        order={project.order}
                     />
                ))}
            </div>

        </section>
    )
}