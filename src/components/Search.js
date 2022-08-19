import React, { useState } from 'react';
import Modal from './Modal';
import { setSort } from '../redux/entrySlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';

const Search = () => {
    const { sort } = useSelector((state) => state.entry);

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const onClick = () => {
        if (sort === 'asc') {
            dispatch(setSort('desc'));
        } else if (sort === 'desc') {
            dispatch(setSort('asc'));
        } else {
            dispatch(setSort('asc'));
        }
    };

    return (
        <div className='flex justify-between py-10 px-10'>
            <div className='flex'>
                <form className=''>
                    <label className='text-sm'>
                        <input
                            className='p-1  border-b border-slate-300 w-full bg-slate-100 '
                            placeholder='Search...'
                            type='text'
                            name='Income'
                        />
                    </label>
                </form>
                <button
                    className='mx-5 font-semibold text-sm'
                    onClick={onClick}
                >
                    {sort === 'desc' ? 'Descending' : 'Ascending'}
                </button>
            </div>
            <button
                className='flex-row-reverse'
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Add
            </button>
            {showModal && <Modal setShowModal={setShowModal} />}
        </div>
    );
};

export default Search;
