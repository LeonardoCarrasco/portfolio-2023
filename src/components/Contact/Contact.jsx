import Illustration from '../../assets/imgs/illustration-contact.png'
import { ContactForm } from './Form'

export const Contact = () => {
    return (
        <section className='lg:py-14 mt-14' id='contacto'>
            <h1 className="text-xl sm:text-3xl font-semibold mb-14">¡Pongámonos en contacto! ✌</h1>
            <div className='flex items-center py-4'>
                <div className='lg:w-3/5 w-full '>
                    <ContactForm />
                </div>
                <figure className='hidden lg:block'>
                    <img src={Illustration} alt="illustration for contact section" />
                </figure>
            </div>
        </section>
    )
}