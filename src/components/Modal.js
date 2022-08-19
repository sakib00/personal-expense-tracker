import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {
    setEntries,
    setTotalIncome,
    setTotalExpense,
} from '../redux/entrySlice';

const Modal = ({ setShowModal }) => {
    const [entry, setEntry] = useState({
        description: '',
        type: 'Income',
        category: 'Salary',
        amount: 0,
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEntry((values) => ({ ...values, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(setEntries(entry));
        if (entry.type === 'Income') {
            dispatch(setTotalIncome(entry.amount));
        } else if (entry.type === 'Expense') {
            dispatch(setTotalExpense(entry.amount));
        }
        handleModalClose();
    };

    const handleModalClose = () => {
        setShowModal(false);
    };
    return (
        <div className='fixed inset-0 z-50 '>
            <div
                className='absolute inset-0 bg-gray-900 bg-opacity-50'
                onClick={() => handleModalClose()}
            ></div>
            <div className='bg-gray-100 max-w-4xl rounded-2xl py-12 px-10 mx-auto relative mt-60'>
                <span
                    className='absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer'
                    onClick={() => handleModalClose()}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'
                        />
                    </svg>
                </span>

                <form onSubmit={onSubmit}>
                    <label>
                        Description: <br />
                        <textarea
                            className='px-2 py-1 border rounded-xl w-full'
                            placeholder='Enter your description'
                            type='textarea'
                            name='description'
                            rows={4}
                            value={entry.description}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <div className='mt-2'>
                        <p>Type:</p>
                        <div className='mt-1'>
                            <label className='mx-2 text-sm '>
                                <input
                                    className='mr-2 px-2  '
                                    type='radio'
                                    name='type'
                                    value='Income'
                                    onChange={handleChange}
                                    defaultChecked
                                />
                                Income
                            </label>
                            <label className='mx-2 text-sm '>
                                <input
                                    className='mr-2 px-2  '
                                    type='radio'
                                    name='type'
                                    onChange={handleChange}
                                    value='Expense'
                                />
                                Expense
                            </label>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <label>
                            Category: <br />
                            <select
                                className='rounded-lg px-2 py-1 border mt-1'
                                required
                                name='category'
                                onChange={handleChange}
                                defaultValue='Salary'
                            >
                                <option>Food</option>
                                <option>Travel</option>
                                <option>Salary</option>
                                <option>Utilities</option>
                                <option>Personal</option>
                                <option>Medical</option>
                            </select>
                        </label>
                    </div>
                    <div className='mt-2'>
                        <label>
                            Amount: <br />
                            ৳
                            <input
                                className=' mx-1 px-2 py-1 border rounded-xl '
                                type='number'
                                name='amount'
                                placeholder='Enter amount'
                                required
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='mt-5 justify-items-center'>
                        <button
                            className='border px-4 py-2 rounded-lg bg-slate-600 text-white '
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
