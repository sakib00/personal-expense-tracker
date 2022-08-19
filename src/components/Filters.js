import React from 'react';

const Filters = () => {
    return (
        <div className='lg:w-1/4 border border-slate-200 rounded-xl p-5'>
            <h1 className='font-bold'>Filters</h1>
            <div className='my-5 '>
                <div className=''>
                    <p className='text-sm font-semibold'>Range</p>
                    <form className='flex flex-col space-y-2 my-2'>
                        <label>
                            Max: <br />৳
                            <input
                                className='mx-2 px-2 border rounded-xl w-1/3'
                                placeholder='0'
                                type='number'
                                name='max'
                            />
                        </label>
                        <label>
                            Min:
                            <br />৳
                            <input
                                className='mx-2 px-2 border rounded-xl  w-1/3'
                                placeholder='0'
                                type='number'
                                name='max'
                            />
                        </label>
                    </form>
                </div>

                <div className='my-5'>
                    <p className='text-sm font-semibold'>Type</p>
                    <form className='flex flex-col space-y-2 my-2'>
                        <label className='text-sm'>
                            <input
                                className='mr-2 px-2 border rounded-xl '
                                type='radio'
                                name='type'
                                value='Income'
                            />
                            Income
                        </label>
                        <label className='text-sm'>
                            <input
                                className='mr-2 px-2 border rounded-xl '
                                type='radio'
                                name='type'
                                value='Income'
                            />
                            Expense
                        </label>
                    </form>
                </div>

                <div className='my-5'>
                    <p className='text-sm font-semibold'>Category</p>
                    <form className='flex flex-col space-y-2 my-2'>
                        <label className='text-sm'>
                            <input
                                className='mr-2 px-2 border rounded-xl '
                                type='checkbox'
                                name='max'
                            />
                            Food
                        </label>
                        <label className='text-sm'>
                            <input
                                className='mr-2 px-2 border rounded-xl '
                                type='checkbox'
                                name='max'
                            />
                            Travel
                        </label>
                        <label className='text-sm'>
                            <input
                                className='mr-2 px-2 border rounded-xl '
                                type='checkbox'
                                name='max'
                            />
                            Salary
                        </label>
                        <label className='text-sm'>
                            <input
                                className='mr-2 px-2 border rounded-xl '
                                type='checkbox'
                                name='max'
                            />
                            Utilities
                        </label>
                        <label className='text-sm'>
                            <input
                                className='mr-2 px-2 border rounded-xl '
                                type='checkbox'
                                name='max'
                            />
                            Personal
                        </label>
                        <label className='text-sm'>
                            <input
                                className='mr-2 px-2 border rounded-xl '
                                type='checkbox'
                                name='max'
                            />
                            Medical
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Filters;
