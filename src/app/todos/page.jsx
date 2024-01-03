"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const page = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([1, 2, 3]);
    const [editTodo, setEditTodo] = useState(false);

    if (true) {
        return (
            <>
                <div className='flex justify-center flex-col items-center px-4 py-10 bg-slate-300'>
                    <h1 className='text-2xl font-bold mb-2'>Edit To Do</h1>
                    <div className='flex gap-2'>
                        <input className='p-2 rounded' type="text" placeholder='Edit To Do' />
                        <input type="checkbox" name="" id="" />
                        <button></button>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='flex justify-center flex-col items-center px-4 py-10 bg-slate-300'>
            <h1 className='text-2xl font-bold p-2'>Things I need to do</h1>
            <div className="flex gap-3">
                <input
                    className='p-2 rounded'
                    type="text"
                    placeholder='What to do?'
                    value={inputText}
                    onChange={e => setInputText(e.target.value)} />
                <button className='text-white bg-green-700 px-5 rounded border border-green-700 hover:text-green-700 hover:bg-white'>Add</button>
                <button className='text-white bg-red-700 px-5 rounded border border-red-700 hover:bg-white hover:text-red-700'>Clear</button>
            </div>
            <div className="todo_list">
                {todos.map((todo, index) => {
                    return (
                        <div key={index} className='flex justify-between items-center p-2 bg-white rounded my-3 shadow-md gap-2 w-60 pointer'>
                            <input type="checkbox" name="" id="" />
                            <div>{todo} Hi</div>
                            <div className='flex gap-2'>
                                <FontAwesomeIcon icon={faPenToSquare} className='text-green-700 cursor-pointer' />
                                <FontAwesomeIcon icon={faTrashCan} className='text-red-500 cursor-pointer' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default page;