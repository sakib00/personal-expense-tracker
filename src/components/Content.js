import React from 'react';
import Search from './Search';
import ListItems from './ListItems';

const Content = () => {
    return (
        <div className='w-3/4 bg-slate-100 rounded-xl'>
            <Search />
            <div className='scroll-smooth'>
                <ListItems />
            </div>
        </div>
    );
};

export default Content;
