export default function Header({ role }) {
    return (
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">
                {role === 'hospital' ? 'Hospital Admin Dashboard' : 'Nurse Dashboard'}
            </h1>
            <div className="text-gray-500">Welcome, {role === 'hospital' ? 'Admin' : 'Nurse'}</div>
        </header>
    );
}
