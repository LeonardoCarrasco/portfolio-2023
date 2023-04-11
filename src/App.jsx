import { Layout } from "./Layout"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Socials } from "./components/Socials"
import LineWave from './assets/imgs/Line-Wave.svg'
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer"

function App() {

  return (
    <div className="App" id="home">
      <header>
        <Navbar/>
      </header>
      <Layout >

        <section>

          <p className="text-grey-text text-xl my-6">📍 Argentina</p>
          <h1 className="text-4xl sm:text-5xl  md:text-6xl font-karla font-semibold">
            <span className="block">Hola, Soy Leo! 👋</span>
            Estudiante de Desarrollo Web.
          </h1>
          <div className="sm:my-14 my-8">
            <Socials />
          </div>

        </section>

        <Projects />

        <figure className="sm:py-20 py-10">
          <img src={LineWave} alt="line wave" />
        </figure>

        <About />

        <Contact />

        <div className="w-full h-[1px] bg-grey-text-2/50 mb-4"></div>

        <Footer/>

      </Layout>
    </div>
  )
}

export default App
