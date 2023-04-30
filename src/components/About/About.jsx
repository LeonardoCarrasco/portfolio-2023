import { Skills } from "./Skills"
import me from "../../assets/imgs/profile-pic.png"
import eclipse from "../../assets/imgs/eclipse-gradient.svg"

const beatmakingStyle = {
    textDecoration: "underline",
    color: "#D6FF79",
}

export const About = () => {
    return (
        <section className="lg:py-14 py-5" id="sobremi">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-7">Sobre mi 🧑🏻‍💻</h1>

            <div className=" text-grey-text-2 text-[17px] flex items-center flex-col sm:flex-row gap-4 sm:gap-0">
                <div className="">
                    <p className="mb-4">
                        Tengo <em className=" text-green-400">24 años</em>, estoy aprendiendo desarrollo Front End con <strong className="text-[#58B9C7]">React.</strong> 
                        <br/>Me interesa la tecnología y los nuevos avances.
                    </p>
                    <p className="mb-4">
                        Actualmente, estoy estudiando la <em className=" text-fuchsia-400">Tecnicatura en Desarrollo Web</em> en la Universidad del Comahue Neuquen, Arg. para <em>mejorar mis habilidades</em> y adquirir <em>conocimientos más avanzados.</em>
                    </p>
                    <p className="mb-4">
                        En mi tiempo libre, me gusta experimentar con nuevas tecnologías y herramientas. También disfruto de jugar videjuegos, Producir ritmos (<a style={beatmakingStyle} href="https://www.youtube.com/@iLeoBeatz" target="blank">BeatMaking</a>) y andar en Skate.
                    </p>
                </div>
                <figure className="w-full relative">
                    <div className="absolute z-0 scale-125 -top-8 hidden lg:block">
                        <img src={eclipse} alt="gradient eclipse" className="animate-pulse" />
                    </div>
                    <img src={me} alt="me" className="relative z-10 mx-auto shadow-lg"/>
                </figure>
            </div>

            <div className="flex sm:flex-row flex-col items-start lg:gap-40 gap-10 mt-20">
                <Skills />

                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4">Lenguajes</h1>
                    <div className="mt-8 text-base">
                        <p><strong className=" text-grey-text-2">Español:</strong> <em>Nativo</em></p>
                        <p><strong className=" text-grey-text-2">Ingles:</strong> <em>A2</em></p>
                    </div>
                </div>
            </div>
        </section>
    )
}