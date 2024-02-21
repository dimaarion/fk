import {Link} from "@inertiajs/react";
import menu from '@/json/adminMenu.json';
export default function AdminMenu(props){
    return <>
        <nav className="flex justify-center mt-4">
            <div className="flex container justify-center">
                {menu.map((el)=><div><Link href = {el.link}>{el.name}</Link></div>)}
            </div>
        </nav>
    </>
}
