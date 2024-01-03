"use client";
import { useState } from 'react';

const page = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className='flex justify-center flex-col items-center px-4 py-10 bg-slate-300'>
            <h1 className='text-2xl font-bold p-2'>Things I need to do</h1>
            <div className="input_elements">
                <input
                    className='p-2 rounded'
                    type="text"
                    placeholder='What to do?'
                    value={todos}
                    onChange={e => setTodos(e.target.value)} />
                <button>Add</button>
                <button>Clear</button>
            </div>
        </div>
    );
};

export default page;