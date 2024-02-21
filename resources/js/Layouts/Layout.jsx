import NavBar from "@/Components/myComponents/NavBar";

export default function Layout({children}) {
    return (
        <>
            <header>
                <NavBar children = {children.props}/>
            </header>
            <article>
                {children}
            </article>
            <footer>

            </footer>
        </>
    );
}
