import {
    TEInput, TEModal,
    TEModalBody,
    TEModalContent,
    TEModalDialog,
    TEModalHeader,
    TESelect,
    TETextarea
} from "tw-elements-react";

export default function MenuModal(props){
    return <>
        <TEModal show={props.showModalLg} setShow={props.setShowModalLg}>
            <TEModalDialog size="lg">
                <TEModalContent>
                    <TEModalHeader>
                        {/* <!--Modal title--> */}
                        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                            Добавить пункт меню
                        </h5>
                        {/* <!--Close button--> */}
                        <button
                            type="button"
                            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            onClick={() => props.setShowModalLg(false)}
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </TEModalHeader>
                    {/* <!--Modal body--> */}
                    <TEModalBody>
                        <form onSubmit={props.submit}>


                            <div className="my-4 mx-2">
                                <TEInput
                                    value={props.data.name}
                                    onChange={props.setData}
                                    type="text"
                                    id="name"
                                    label="Название"
                                />
                            </div>
                            <div className="my-4 mx-2">
                                <TEInput
                                    value={props.data.alias}
                                    onChange={props.setData}
                                    type="text"
                                    id="alias"
                                    label="Алиас"
                                />
                            </div>
                            <div className="my-4 mx-2">
                                <TEInput
                                    value={props.data.title}
                                    onChange={props.setData}
                                    type="text"
                                    id="title"
                                    label="Заголовок"
                                />
                            </div>
                            <div className="my-4 mx-2">
                                <TEInput
                                    value={props.data.keyword}
                                    onChange={props.setData}
                                    type="text"
                                    id="keyword"
                                    label="Ключевые слова"
                                />
                            </div>
                            <div className="my-4 mx-2">
                                <TETextarea
                                    value={props.data.description}
                                    onChange={props.setData}
                                    id="description"
                                    label="Описание"
                                    rows={4}/>
                            </div>
                            <div className="my-4 mx-2">
                                <TEInput
                                    value={props.data.sort}
                                    onChange={props.setData}
                                    max={500}
                                    min={0}
                                    type="number"
                                    id="sort"
                                    required
                                    pattern={/[0-9]/g}
                                    label="Сортировка"
                                />
                            </div>
                            <div className="my-4 mx-2">
                                <div className="flex justify-center">
                                    <div className="relative mb-3 md:w-96 pt-5">
                                        <select id="parent_id" className="w-full border rounded p-2" value={props.data.parent_id} onChange={props.setData} >
                                            <option value="0" >Нет</option>
                                            {props.dataSelect.map((el)=><option key={el.value + 'select'}  value = {el.value}>{el.text}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                                >
                                    Сохранить
                                </button>
                            </div>
                        </form>
                    </TEModalBody>
                </TEModalContent>
            </TEModalDialog>
        </TEModal>
    </>
}
