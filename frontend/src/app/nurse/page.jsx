"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FormField } from "@/app/questionnaire/FormField";
import { TextAreaField } from "@/app/questionnaire/TextAreaField";
import Link from "next/link";
import { ClipboardCheck, UserPlus, FileBarChart2, Stethoscope } from "lucide-react";

const dummyDeliveries = [
    {
        id: 1,
        patient: "Alice (Trial C)",
        medication: "Zeptril 10mg",
        status: "pending",
        avatar: "/pills.png",
    },
    {
        id: 2,
        patient: "Bob (Trial A)",
        medication: "Health Check",
        status: "pending",
        avatar: "/globe.svg",
    },
];

const quickActions = [
    {
        label: "+ New Delivery",
        icon: <ClipboardCheck className="w-5 h-5" />,
        href: "/nurse/new-delivery",
        gradient: "from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600",
    },
    {
        label: "Add Participant",
        icon: <UserPlus className="w-5 h-5" />,
        href: "/nurse/add-participant",
        gradient: "from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600",
    },
    {
        label: "Generate Report",
        icon: <FileBarChart2 className="w-5 h-5" />,
        href: "/nurse/generate-report",
        gradient: "from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600",
    },
];

export default function NurseDashboard() {
    const [handoverConfirmed, setHandoverConfirmed] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [vitals, setVitals] = useState({ temp: "", bp: "", notes: "" });
    const [selectedDelivery, setSelectedDelivery] = useState(dummyDeliveries[0]);
    const completed = handoverConfirmed && photo && vitals.temp && vitals.bp;

    return (
        <div className="min-h-screen font-serif bg-background py-8 relative">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
                <div className="absolute top-1/4 right-1/5 w-32 h-32 rounded-full border border-primary/10"></div>
                <div className="absolute bottom-1/3 left-1/6 w-24 h-24 rounded-full border border-primary/10"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                {/* Header & Progress */}
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold font-editorial text-primary">
                        Today’s Nurse Tasks
                    </h2>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                        Shift: 9am–5pm
                    </span>
                </div>
                <Progress value={completed ? 100 : 60} className="mb-4" />
                {/* Delivery Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dummyDeliveries.map((d) => (
                        <div
                            key={d.id}
                            className={`group relative p-6 rounded-2xl border border-primary/10 bg-white/60 backdrop-blur-sm shadow transition-all duration-300 cursor-pointer hover:scale-105 ${selectedDelivery.id === d.id
                                ? "ring-2 ring-primary/30"
                                : ""
                                }`}
                            onClick={() => setSelectedDelivery(d)}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <img
                                    src={d.avatar}
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full bg-primary/10"
                                />
                                <div>
                                    <div className="font-medium text-primary-foreground">
                                        {d.patient}
                                    </div>
                                    <div className="text-xs text-secondary-foreground/70">
                                        {d.medication}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${d.status === "pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {d.status === "pending" ? "Pending" : "Done"}
                                </span>
                                {selectedDelivery.id === d.id && (
                                    <span className="text-xs text-primary font-semibold">
                                        Selected
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Checklist Card */}
                <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 p-8 shadow-lg mt-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-primary">
                        Delivery Checklist
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="handover"
                                checked={handoverConfirmed}
                                onChange={(e) =>
                                    setHandoverConfirmed(e.target.checked)
                                }
                                className="accent-blue-600 w-5 h-5"
                            />
                            <label
                                htmlFor="handover"
                                className="text-gray-700"
                            >
                                Confirm medication handover
                            </label>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700">
                                Upload delivery photo
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                            {photo && (
                                <span className="text-xs text-green-600">
                                    Photo uploaded: {photo.name}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700">
                                Log participant vitals
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <FormField
                                    label="Temp (°C)"
                                    value={vitals.temp}
                                    onChange={(val) =>
                                        setVitals((v) => ({ ...v, temp: val }))
                                    }
                                    placeholder="36.5"
                                    required
                                />
                                <FormField
                                    label="BP (mmHg)"
                                    value={vitals.bp}
                                    onChange={(val) =>
                                        setVitals((v) => ({ ...v, bp: val }))
                                    }
                                    placeholder="120/80"
                                    required
                                />
                                <TextAreaField
                                    label="Notes"
                                    value={vitals.notes}
                                    onChange={(val) =>
                                        setVitals((v) => ({ ...v, notes: val }))
                                    }
                                    placeholder="Any observations..."
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
                        disabled={!completed}
                    >
                        Submit Checklist
                    </Button>
                </div>
                {/* Shift Summary Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 flex flex-col items-center">
                        <span className="text-3xl mb-2">🩺</span>
                        <div className="font-bold text-lg text-primary">
                            2 Deliveries
                        </div>
                        <div className="text-xs text-secondary-foreground/70">
                            Assigned today
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 flex flex-col items-center">
                        <span className="text-3xl mb-2">✅</span>
                        <div className="font-bold text-lg text-primary">
                            {completed ? 2 : 1} Completed
                        </div>
                        <div className="text-xs text-secondary-foreground/70">
                            Checklist
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 flex flex-col items-center">
                        <span className="text-3xl mb-2">⏰</span>
                        <div className="font-bold text-lg text-primary">
                            9am–5pm
                        </div>
                        <div className="text-xs text-secondary-foreground/70">
                            Current Shift
                        </div>
                    </div>
                </div>
                {/* Quick Actions Card */}
                <div className="bg-gradient-to-r from-blue-100 via-cyan-50 to-purple-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-10 shadow-2xl border border-primary/10 relative overflow-hidden mt-10">
                    <div className="flex-1">
                        <h4 className="font-editorial text-2xl text-primary mb-4 flex items-center gap-2">
                            <Stethoscope className="w-6 h-6 text-blue-500 animate-bounce" />
                            Quick Actions
                        </h4>
                        <div className="flex flex-col gap-4">
                            {quickActions.map((action) => (
                                <Link href={action.href} key={action.label} passHref legacyBehavior>
                                    <Button
                                        as="a"
                                        className={`w-full bg-gradient-to-r ${action.gradient} text-lg py-6 font-bold shadow-crazy flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white`}
                                    >
                                        {action.icon} {action.label}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <Progress value={completed ? 100 : 60} className="w-40 mb-3 animate-pulse" />
                        <div className="text-sm text-secondary-foreground/70 font-semibold tracking-wide">
                            Shift Progress
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .shadow-crazy {
                    box-shadow: 0 4px 32px 0 rgba(0, 200, 255, 0.15), 0 1.5px 8px 0 rgba(120, 0, 255, 0.10);
                }
                .drop-shadow-crazy {
                    filter: drop-shadow(0 2px 8px rgba(0, 200, 255, 0.15));
                }
                .font-bold, .font-extrabold, .font-semibold {
                    letter-spacing: 0.01em;
                }
                .text-primary-foreground, .text-primary-foreground/80, .text-secondary-foreground/70, .text-secondary-foreground/50 {
                    color: #1a202c !important;
                }
                .bg-white/90, .bg-gradient-to-r, .bg-gradient-to-br, .bg-blue-50, .bg-cyan-50, .bg-purple-50, .bg-blue-100, .bg-green-100, .bg-purple-100 {
                    color: #1a202c !important;
                }
            `}</style>
        </div>
    );
}
