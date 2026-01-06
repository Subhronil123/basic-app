import { NavLink } from 'react-router-dom';

const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Settings', path: '/settings' },
];

export default function Sidebar() {
    return (
        <div className="w-64 bg-gray-900 text-gray-100 flex flex-col">
            <div className="p-6 py-5 text-2xl font-bold border-b border-gray-800">AI Insight</div>
            <nav className="flex-1 px-2 py-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg transition ${isActive ? 'bg-gray-800' : 'hover:bg-gray-700'}`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}