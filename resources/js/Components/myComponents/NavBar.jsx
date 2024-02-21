import {Link} from "@inertiajs/react";
import {useEffect} from "react";
import Menu from "@/Components/classes/Menu";

export default function NavBar(props) {

    const menu = new Menu(props.children.menu);
    useEffect(()=>{
       menu.view();
    },[])

    return <>
        <nav className="flex justify-center bg-navbar">
            <div className="flex h-4">
                <button>
                    dd
                </button>
            </div>

            <div className="container flex justify-between">
                <div className="w-[200px] sm:w-[300px] absolute sm:relative">
                    <img className="w-full" src="/storage/log3.png"/>
                </div>
                <div className="mt-12 sm:flex menu">
                    {menu.getMenu().map((el)=> <ul className="self-end pb-1" key={el.id + 'menu'}>
                        <li className="relative mx-2"><Link className = "font-serif text-xl" href = {el.alias}>{el.name}</Link>
                            <ul className="m-auto sm:w-[335px] sm:ml-[-280px] bg-white px-4 rounded child">{el.child.map((c)=><li className="py-1" key={c.id + 'child'}><Link href = {c.alias}>{c.name}</Link></li>)}</ul>
                        </li>
                    </ul>)}
                </div>
            </div>
        </nav>
    </>
}
