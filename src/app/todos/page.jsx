"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const page = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        async function getTodos() {
            const res = await axios.get('/api/todos');
            console.log(res);
            setTodos(res.data.todos);
        }
        getTodos();
    }, [])

    async function addTodo() {
        const data = {
            text: inputText
        }
        const res = await axios.post('/api/todos', data);
        console.log(res.data);

        setTodos([...todos, res.data]);
        setInputText("");
    }

    async function clearTodo() {
        const res = await axios.delete('/api/todos');
        console.log(res.data);
        setTodos([]);
    }

    async function deleteTodo(id) {
        const res = await axios.delete(`/api/todos/${id}`);
        console.log(res.data);
    }

    async function editTodo() {
        const res = await axios.put('/api/todos');
        console.log(res.data);
    }

    if (editMode) {
        return (
            <>
                <div className='flex justify-center flex-col items-center px-4 py-10 bg-slate-300'>
                    <h1 className='text-2xl font-bold mb-2'>Edit To Do</h1>
                    <div className='flex gap-2'>
                        <input className='p-2 rounded' type="text" placeholder='Edit To Do' />
                        <input type="checkbox" name="" id="" />
                        <button className='bg-blue-400 p-2 rounded border border-blue-400 hover:bg-white' onClick={editTodo}>Submit</button>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='flex justify-center flex-col items-center px-4 py-10 bg-slate-300' >
            <h1 className='text-2xl font-bold p-2'>Things I need to do</h1>
            <div className="flex gap-3">
                <input
                    className='p-2 rounded'
                    type="text"
                    placeholder='What to do?'
                    value={inputText}
                    onChange={e => setInputText(e.target.value)} />
                <button className='text-white bg-green-700 px-5 rounded border border-green-700 hover:text-green-700 hover:bg-white' onClick={addTodo}>Add</button>
                <button className='text-white bg-red-700 px-5 rounded border border-red-700 hover:bg-white hover:text-red-700' onClick={clearTodo}>Clear</button>
            </div>
            <div className="todo_list">
                {todos.map((todo) => {
                    return (
                        <div key={todo._id} className='flex justify-between items-center p-2 bg-white rounded my-3 shadow-md gap-3 pointer w-[450px]'>
                            <div className='flex gap-2'>
                                <input type="checkbox" checked={todo.status} />
                                <p className='text-justify'>{todo.text}</p>
                            </div>
                            <div className='flex gap-2'>
                                <FontAwesomeIcon icon={faPenToSquare} className='text-green-700 cursor-pointer' onClick={() => setEditMode(true)} />
                                <FontAwesomeIcon icon={faTrashCan} className='text-red-500 cursor-pointer' onClick={() => deleteTodo(todo.id)} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    );
};

export default page;