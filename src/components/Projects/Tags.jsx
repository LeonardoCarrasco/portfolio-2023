
export const Tags = ({ text, color }) => {
    const styles = `py-1 px-4 border rounded-2xl mr-2`;
    
    return (
        <span className={styles} style={{color: color, borderColor: color}}>{text}</span>
    )
}