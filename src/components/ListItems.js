import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getEntries } from '../redux/entrySlice';

const ListItems = () => {
    const { entries, sort } = useSelector((state) => state.entry);

    const dispatch = useDispatch();
    const [sorted, setSorted] = useState([]);

    useEffect(() => {
        dispatch(getEntries());
    }, [dispatch]);
    useEffect(() => {
        let entriesCopy = [...entries];

        if (sort === 'asc') {
            entriesCopy.sort((a, b) => a.amount - b.amount);
            setSorted(entriesCopy);
        } else if (sort === 'desc') {
            entriesCopy.sort((a, b) => b.amount - a.amount);
            setSorted(entriesCopy);
        } else {
            setSorted(entriesCopy);
        }
    }, [entries, sort]);

    return (
        <div
            className='px-10 overflow-y-scroll h-96'
            style={{ scrollbarWidth: 'thin' }}
        >
            {sorted &&
                sorted.map((entry, key) => {
                    return (
                        <div
                            key={key}
                            className='bg-white rounded-xl px-10 py-5 my-5'
                        >
                            <div>
                                <span className='font-semibold'>
                                    Description:{' '}
                                </span>
                                <span>{entry.description}</span>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <div>
                                    <span className='font-semibold'>
                                        Category:{' '}
                                    </span>
                                    <span>{entry.category}</span>
                                </div>
                                <div>
                                    <span
                                        className={
                                            'font-semibold' +
                                            `${
                                                entry.type === 'Income'
                                                    ? ' text-green-400 '
                                                    : ' text-red-400 '
                                            }`
                                        }
                                    >
                                        {entry.type === 'Income' ? '+' : '-'} ৳
                                        {entry.amount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ListItems;
