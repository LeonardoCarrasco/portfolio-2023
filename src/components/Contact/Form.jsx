import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from './input';
import { Textarea } from './textarea';
import { BtnSubmmit } from './BtnSubmmit';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mayzpkzv");
  if (state.succeeded) {
      return <p className='text-center text-2xl text-teal-400'>Mensaje enviado!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='flex flex-wrap flex-col gap-5 '>
        
        <div className='flex gap-10'>

          <div className='w-full'>
            <label htmlFor="name" className='block text-lg text-grey-text-2  mb-2'>
              Tu nombre
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Nombre"
              error={state.errors}
            />
            <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            />
          </div>

          <div className='w-full'>
            <label htmlFor="email" className='block text-lg text-grey-text-2  mb-2'>
              Tu email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="abc@.xyz"
              error={state.errors}
            />
            <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            />
          </div>

        </div>
        

      <div className='flex gap-10'>

        <div className='w-full'>
          <label htmlFor="asunto" className='block text-lg text-grey-text-2  mb-2'>
            Asunto
          </label>
          <Input
            id="asunto"
            type="asunto"
            name="asunto"
            placeholder="Asunto"
            error={state.errors}
          />
          <ValidationError
          prefix="Asunto"
          field="asunto"
          errors={state.errors}
          />
        </div>
      </div>
      
      
      <div className='w-full'>
        <label htmlFor="message" className='block text-lg text-grey-text-2 mb-2'>
          Mensaje
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje..."
          error={state.errors}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      {state.errors.length > 0 && <p className='text-red-500 font-semibold'>{state.errors[0].message}</p>}
      <BtnSubmmit type="submit" disabled={state.submitting} />
    </form>
  );
}