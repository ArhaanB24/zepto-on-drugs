"use client";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState } from 'react';

export default function HospitalLayout({ children }) {
    const [showSettings, setShowSettings] = useState(false);
    return (
        <div className="flex min-h-screen">
            <Sidebar role="hospital" />
            <div className="flex-1 flex flex-col">
                <Header role="hospital" />
                <main className="p-6 bg-gray-50 flex-1 relative">
                    {children}
                    {/* Quick Actions Floating Button */}
                    <button
                        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl hover:bg-blue-700 transition"
                        onClick={() => setShowSettings(!showSettings)}
                        aria-label="Quick Actions"
                    >
                        ⚙️
                    </button>
                    {/* Quick Actions Modal */}
                    {showSettings && (
                        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg p-8 shadow-xl min-w-[320px]">
                                <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
                                <ul className="space-y-3">
                                    <li><button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">+ New Trial</button></li>
                                    <li><button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">+ Add Participant</button></li>
                                    <li><button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">Generate Report</button></li>
                                </ul>
                                <button className="mt-6 text-blue-600 hover:underline" onClick={() => setShowSettings(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
