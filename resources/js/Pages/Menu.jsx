import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';

import {useEffect, useState} from "react";
import EditSvg from "@/Components/myComponents/EditSvg";
import DeleteSvg from "@/Components/myComponents/DeleteSvg";
import MenuModal from "@/Components/myComponents/MenuModal";
import MenuDeleteModal from "@/Components/myComponents/MenuDeleteModal";

export default function Menu(props) {
    const [showModalLg, setShowModalLg] = useState(false);
    const [showModalLgDelete, setShowModalLgDelete] = useState(false);
    const [btn, setBtn] = useState('');

    const [values, setValues] = useState({
        id: '',
        name: '',
        alias: '',
        title: '',
        keyword: '',
        description: '',
        sort: 500,
        parent_id: 0
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const dataSelect = [];

    props.menu.forEach((el, i) => {
        dataSelect[i] = {text: el.name, value: el.id};
    });


    useEffect(() => {
        console.log(values)
    }, [values]);


    function submit(e) {
        e.preventDefault()
        values.btn = btn;
        router.post('/dashboard/menu-update', values);
        if (values.name === "" && values.alias === "") {
            setShowModalLg(true);
        } else {
            setShowModalLg(false);
        }
        setShowModalLgDelete(false);
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Административная панель
                - Меню</h2>}
        >
            <Head title="Меню"/>
            <div className="flex justify-center">
                <div className="container">
                    <div className="mt-4 text-right">
                        <button
                            onClick={() => {
                                setValues(
                                    {
                                        id: '',
                                        name: '',
                                        alias: '',
                                        title: '',
                                        keyword: '',
                                        description: '',
                                        sort: 500,
                                        parent_id: 0
                                    }
                                )
                                setShowModalLg(true);
                                setBtn('add');
                            }}
                            type="button"
                            className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                        >
                            Добавить
                        </button>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" className="px-6 py-4">id</th>
                                                <th scope="col" className="px-6 py-4">Название</th>
                                                <th scope="col" className="px-6 py-4">Алиас</th>
                                                <th scope="col" className="px-6 py-4 text-center">Редактировать</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {props.menu.map((el) => <tr key={el.id + 'menu'}
                                                                        className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{el.id}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{el.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{el.alias}</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <div className="flex justify-center">
                                                        <div onClick={() => {
                                                            setShowModalLg(true);
                                                            setValues({
                                                                id: el.id,
                                                                name: el.name,
                                                                alias: el.alias,
                                                                title: el.title,
                                                                keyword: el.keyword,
                                                                description: el.description,
                                                                sort: el.sort,
                                                                parent_id: el.parent_id
                                                            });
                                                            setBtn('update');
                                                        }} className="mx-2 cursor-pointer"><EditSvg/></div>
                                                        <div
                                                            onClick={()=> {
                                                                setShowModalLgDelete(true);
                                                                setValues({
                                                                    id: el.id,
                                                                    name: el.name,
                                                                    alias: el.alias,
                                                                    title: el.title,
                                                                    keyword: el.keyword,
                                                                    description: el.description,
                                                                    sort: el.sort,
                                                                    parent_id: el.parent_id
                                                                });
                                                                setBtn('delete');
                                                            }}
                                                            className="mx-2 cursor-pointer"><DeleteSvg/></div>
                                                    </div>
                                                </td>
                                            </tr>)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <MenuModal data={values} setData={handleChange} showModalLg={showModalLg} setShowModalLg={setShowModalLg}
                       dataSelect={dataSelect} submit={submit}/>
            <MenuDeleteModal submit={submit} showModalLg={showModalLgDelete} setShowModalLg={setShowModalLgDelete} value = {values}/>

        </AuthenticatedLayout>
    );
}
