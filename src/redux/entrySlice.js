import { createSlice } from '@reduxjs/toolkit';

export const entrySlice = createSlice({
    name: 'entry',
    initialState: { entries: [], totalIncome: 0, totalExpense: 0, sort: '' },
    reducers: {
        getEntries: (state) => {
            return {
                ...state,
                entries: localStorage.getItem('entries')
                    ? JSON.parse(localStorage.getItem('entries'))
                    : [],
            };
        },
        setEntries: (state, action) => {
            localStorage.setItem(
                'entries',
                JSON.stringify([...state.entries, action.payload])
            );

            return { ...state, entries: [...state.entries, action.payload] };
        },
        getTotalIncome: (state) => {
            return {
                ...state,
                totalIncome:
                    localStorage.getItem('totalIncome') > 0
                        ? JSON.parse(localStorage.getItem('totalIncome'))
                        : 0,
            };
        },
        setTotalIncome: (state) => {
            let entries = JSON.parse(localStorage.getItem('entries'));
            let totalIncome = 0;
            if (entries.length > 0) {
                entries.forEach((entry) => {
                    if (entry.type === 'Income') {
                        totalIncome += parseInt(entry.amount);
                    }
                });
            }

            localStorage.setItem('totalIncome', totalIncome);
            return { ...state, totalIncome: totalIncome };
        },
        getTotalExpense: (state) => {
            return {
                ...state,
                totalExpense:
                    localStorage.getItem('totalExpense') > 0
                        ? JSON.parse(localStorage.getItem('totalExpense'))
                        : 0,
            };
        },
        setTotalExpense: (state, action) => {
            let entries = JSON.parse(localStorage.getItem('entries'));
            let totalExpense = 0;
            entries.forEach((entry) => {
                if (entry.type === 'Expense') {
                    totalExpense += parseInt(entry.amount);
                }
            });

            localStorage.setItem('totalExpense', totalExpense);
            state.totalExpense = totalExpense;
        },
        setSort: (state, action) => {
            localStorage.setItem(
                'sort',
                JSON.stringify([...state.sort, action.payload])
            );
            return { ...state, sort: action.payload };
        },
    },
});

export const {
    getEntries,
    setEntries,
    getTotalIncome,
    setTotalIncome,
    getTotalExpense,
    setTotalExpense,
    setSort,
    sortEntries,
} = entrySlice.actions;
export default entrySlice.reducer;
