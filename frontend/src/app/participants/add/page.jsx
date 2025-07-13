export default function AddParticipantForm() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Add New Participant</h1>
            <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
                <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full border border-primary/20 rounded-lg px-4 py-2" required />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Date of Birth</label>
                    <input type="date" className="w-full border border-primary/20 rounded-lg px-4 py-2" required />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Contact Number</label>
                    <input type="tel" className="w-full border border-primary/20 rounded-lg px-4 py-2" required />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full border border-primary/20 rounded-lg px-4 py-2" required />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Address</label>
                    <input type="text" className="w-full border border-primary/20 rounded-lg px-4 py-2" required />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold py-3 rounded-lg hover:from-green-700 hover:to-emerald-600 transition-all">Add Participant</button>
            </form>
        </div>
    );
}
