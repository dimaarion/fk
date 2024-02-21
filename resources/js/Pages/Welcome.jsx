import {Link, Head} from '@inertiajs/react';
import NavBar from "@/Components/myComponents/NavBar";
import Layout from "@/Layouts/Layout";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome"/>
        </>
    );
}
Welcome.layout = page => <Layout children={page} title="Welcome"/>
