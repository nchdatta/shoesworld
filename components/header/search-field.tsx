"use client"
import { } from 'react';
import { Input } from '../ui/input';

type SearchFieldProps = {}

const SearchField = ({ }: SearchFieldProps) => {
    return (
        <div className="w-25 text-gray-600 focus-within:text-gray-400  hidden md:block">
            <Input type="search" name="query" className="py-1 text-sm text-slate-800 bg-slate-50 rounded-full focus:outline-none focus:border-none focus:bg-slate-50 focus:text-gray-900" placeholder="Search..." />
        </div>
    );
};

export default SearchField;