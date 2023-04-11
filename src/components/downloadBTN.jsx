import { Download } from "../icons/icons";

export const DownloadBTN = () => {

    const handleClick = () => {
        window.open('/portfolio-2023/projects-images/CV/LeonardoCarrascoCV.pdf', '_blank');
    };
    const styles = 'ml-2 border border-white-text-2/30 rounded-[16px] text-white-text-2 text-sm flex items-center gap-1 py-2 px-3 bg-gradient-to-r from-main-bg-color to-[#0E8EC5] hover:scale-110 ease-in-out duration-150 lg:font-semibold'

    return (
        <button className={styles} onClick={handleClick}>Descargar CV <Download/></button>
    )
}