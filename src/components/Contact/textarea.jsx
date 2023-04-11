
export const Textarea = ({ id, name, placeholder, error }) => {
    return (
        <textarea required minLength={14} name={name} id={id} rows="5" placeholder={placeholder} className={`py-3 px-3 min-h-[140px] max-h-96 w-full bg-transparent rounded-md border-b ${error.length === 0  ? ' border-grey-text': 'border-red-500'}`}/>
    )
}