export const Layout = ({ children }) => {
    const styles = "lg:max-w-[1024px] lg:mx-auto w-full px-4 lg:px-0";
    return (
        <div className={styles}>
            {children}
        </div>
    )
}