export default function EditParticipantForm() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
            <h1 className="text-3xl font-bold text-yellow-700 mb-4">Edit Participant</h1>
            <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
                <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full border border-primary/20 rounded-lg px-4 py-2" required defaultValue="John Doe" />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Date of Birth</label>
                    <input type="date" className="w-full border border-primary/20 rounded-lg px-4 py-2" required defaultValue="1990-01-01" />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Contact Number</label>
                    <input type="tel" className="w-full border border-primary/20 rounded-lg px-4 py-2" required defaultValue="1234567890" />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full border border-primary/20 rounded-lg px-4 py-2" required defaultValue="john@example.com" />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">Address</label>
                    <input type="text" className="w-full border border-primary/20 rounded-lg px-4 py-2" required defaultValue="123 Main St" />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-bold py-3 rounded-lg hover:from-yellow-600 hover:to-orange-500 transition-all">Save Changes</button>
            </form>
        </div>
    );
}
