import { ArrowUpRight } from "../../icons/icons"

export const BtnSubmmit = ({ type, disabled }) => {
    return (
        <button type={type} disabled={disabled} className=" self-start py-3 px-20 border border-grey-text-2 rounded-lg mb-4 flex items-center gap-1 hover:shadow-submit-shadow ease-in-out duration-150">Enviar <ArrowUpRight /></button>
    )
}