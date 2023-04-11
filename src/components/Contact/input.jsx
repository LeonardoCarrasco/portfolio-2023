
export const Input = ({ id, type, name, placeholder, error }) => {
    return (
        <input required id={id} name={name} type={type} placeholder={placeholder} className={`py-3 px-3 rounded-md bg-transparent border-b ${error.length === 0 ? 'border-grey-text' : 'border-red-500'}  w-full`}/>
    )
}