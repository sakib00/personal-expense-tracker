import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getTotalIncome, getTotalExpense } from '../redux/entrySlice';

const Header = () => {
    const { totalIncome, totalExpense } = useSelector((state) => state.entry);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalIncome());
        dispatch(getTotalExpense());
    }, [dispatch]);

    return (
        <div className='w-full flex flex-col justify-center items-center mt-20'>
            <h1 className='text-3xl font-bold'>Personal Expense Tracker</h1>
            <div className='text-xl flex space-x-40 my-10 bg-slate-100 py-16 px-20 rounded-xl'>
                <div className='font-semibold'>
                    <span>Income: </span>
                    <span>
                        <span className='text-green-400'>৳{totalIncome}</span>
                    </span>
                </div>
                <div className='font-semibold'>
                    <span>Expense: </span>

                    <span className='text-red-400'>৳{totalExpense}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
