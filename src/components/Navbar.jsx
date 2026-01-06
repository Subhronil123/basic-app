import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
            <h1 className="text-2xl font-bold text-gray-800">
                Dashboard
            </h1>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-20 pr-4 py-2 border rounded-lg text-sm focus:outline-none"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">SM
                </div>
            </div>
        </header>
    );
}