import Link from "next/link";

export default function ParticipantsPage() {
    // Dummy data for demonstration
    const participants = [
        { id: 1, name: "John Doe", dob: "1990-01-01", contact: "1234567890", email: "john@example.com" },
        { id: 2, name: "Jane Smith", dob: "1985-05-12", contact: "9876543210", email: "jane@example.com" },
    ];
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">Participants</h1>
            <p className="text-lg text-gray-700 max-w-xl text-center mb-8">View and manage all participants here. You can add, edit, or remove participants as needed.</p>
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-lg">Participants List</span>
                    <Link href="/participants/add" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold px-4 py-2 rounded-lg hover:from-green-700 hover:to-emerald-600 transition-all">+ Add Participant</Link>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-blue-50">
                            <th className="p-2">Name</th>
                            <th className="p-2">DOB</th>
                            <th className="p-2">Contact</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants.map((p) => (
                            <tr key={p.id} className="border-b hover:bg-blue-50/50">
                                <td className="p-2">{p.name}</td>
                                <td className="p-2">{p.dob}</td>
                                <td className="p-2">{p.contact}</td>
                                <td className="p-2">{p.email}</td>
                                <td className="p-2 flex gap-2">
                                    <Link href={`/participants/edit?id=${p.id}`} className="text-blue-600 hover:underline">Edit</Link>
                                    <button className="text-red-600 hover:underline">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
