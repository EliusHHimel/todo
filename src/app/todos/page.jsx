"use client";
import { useState } from 'react';

const page = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className='flex justify-center flex-col items-center px-4 py-10 bg-slate-300'>
            <h1 className='text-2xl font-bold p-2'>Things I need to do</h1>
            <div className="flex gap-3">
                <input
                    className='p-2 rounded'
                    type="text"
                    placeholder='What to do?'
                    value={todos}
                    onChange={e => setTodos(e.target.value)} />
                <button className='text-white bg-green-700 px-5 rounded border border-green-700 hover:text-green-700 hover:bg-white'>Add</button>
                <button className='text-white bg-red-700 px-5 rounded border border-red-700 hover:bg-white hover:text-red-700'>Clear</button>
            </div>
        </div>
    );
};

export default page;