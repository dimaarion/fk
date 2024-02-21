import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import AdminMenu from "@/Components/myComponents/AdminMenu";
export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Административная
                панель</h2>}
        >
            <Head title="Административная панель"/>


        </AuthenticatedLayout>
    );
}
