export default function Sidebar({ role }) {
    const links = role === 'hospital'
        ? [
            { name: 'Dashboard', href: '/hospital' },
            { name: 'Trials', href: '/hospital/trials' },
            { name: 'Participants', href: '/hospital/participants' },
            { name: 'Reports', href: '/hospital/reports' },
        ]
        : [
            { name: 'Dashboard', href: '/nurse' },
            { name: 'Deliveries', href: '/nurse/deliveries' },
            { name: 'Tasks', href: '/nurse/tasks' },
        ];
    return (
        <aside className="w-56 bg-white border-r min-h-screen p-4">
            <div className="font-bold text-lg mb-8">{role === 'hospital' ? 'Hospital Admin' : 'Nurse'}</div>
            <nav>
                <ul>
                    {links.map(link => (
                        <li key={link.href} className="mb-4">
                            <a href={link.href} className="text-gray-700 hover:text-blue-600">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
