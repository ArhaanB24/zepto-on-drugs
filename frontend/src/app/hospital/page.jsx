"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Activity, Users, FlaskConical, TrendingUp, PlusCircle, UserPlus, FileBarChart2, Clock } from "lucide-react";
import Link from "next/link";

const stats = [
    {
        icon: <FlaskConical className="w-8 h-8 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />, // Lucide icon
        label: "Active Trials",
        value: 3,
        color: "from-blue-500 via-cyan-400 to-cyan-500",
    },
    {
        icon: <Users className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />, // Lucide icon
        label: "Participants",
        value: 120,
        color: "from-green-500 via-emerald-400 to-emerald-500",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-purple-400 group-hover:-rotate-12 transition-transform duration-300" />, // Lucide icon
        label: "Compliance Rate",
        value: "92%",
        color: "from-purple-500 via-blue-400 to-blue-500",
    },
];

const activity = [
    {
        user: "John Doe",
        action: "enrolled in Trial A",
        avatar: <UserPlus className="w-10 h-10 text-blue-500 bg-blue-100 rounded-full p-2 shadow-md animate-bounce" />,
        time: "2h ago",
    },
    {
        user: "Nurse Smith",
        action: "delivered medication to Jane",
        avatar: <Activity className="w-10 h-10 text-green-500 bg-green-100 rounded-full p-2 shadow-md animate-pulse" />,
        time: "3h ago",
    },
    {
        user: "System",
        action: "Compliance alert: Missed dose (Trial B)",
        avatar: <Clock className="w-10 h-10 text-purple-500 bg-purple-100 rounded-full p-2 shadow-md animate-spin-slow" />,
        time: "5h ago",
    },
];

const quickActions = [
    {
        label: "+ New Trial",
        icon: <FlaskConical className="w-5 h-5" />,
        href: "/hospital/new-trial",
        gradient: "from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600",
    },
    {
        label: "+ Add Participant",
        icon: <UserPlus className="w-5 h-5" />,
        href: "/hospital/add-participant",
        gradient: "from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600",
    },
    {
        label: "Generate Report",
        icon: <FileBarChart2 className="w-5 h-5" />,
        href: "/hospital/generate-report",
        gradient: "from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600",
    },
];

export default function HospitalDashboard() {
    return (
        <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 py-12 relative overflow-x-hidden">
            {/* Decorative crazy background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/5 w-40 h-40 rounded-full bg-gradient-to-br from-blue-300/30 to-cyan-200/20 blur-2xl animate-pulse" />
                <div className="absolute bottom-1/3 left-1/6 w-32 h-32 rounded-full bg-gradient-to-tr from-purple-300/30 to-blue-200/20 blur-2xl animate-pulse delay-200" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-200/20 via-blue-100/10 to-cyan-100/10 blur-3xl animate-spin-slow" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto space-y-14">
                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className={`group p-10 rounded-3xl bg-gradient-to-br ${s.color} shadow-2xl flex flex-col items-center border-2 border-white/30 hover:scale-105 hover:shadow-crazy transition-all duration-300 relative overflow-hidden`}
                        >
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse" />
                            <span className="mb-3">{s.icon}</span>
                            <div className="font-extrabold text-4xl text-primary-foreground mb-1 drop-shadow-crazy">
                                {s.value}
                            </div>
                            <div className="text-lg text-primary-foreground/80 tracking-wide">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Recent Activity Timeline */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-primary/10 p-10 shadow-xl relative overflow-hidden">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-10 bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-xl animate-pulse" />
                    <h3 className="font-bold text-2xl mb-8 flex items-center gap-3 text-primary">
                        <FileBarChart2 className="w-6 h-6 text-blue-500 animate-bounce" />
                        Recent Activity
                    </h3>
                    <ul className="space-y-7">
                        {activity.map((a, i) => (
                            <li key={i} className="flex items-center gap-5 group hover:bg-blue-50/40 rounded-xl px-3 py-2 transition-all duration-200">
                                <div>{a.avatar}</div>
                                <div>
                                    <div className="font-semibold text-primary-foreground text-lg">
                                        {a.user}
                                    </div>
                                    <div className="text-xs text-secondary-foreground/70">
                                        {a.action}
                                    </div>
                                </div>
                                <span className="ml-auto text-xs text-secondary-foreground/50 group-hover:text-blue-500">
                                    {a.time}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Quick Actions Card */}
                <div className="bg-gradient-to-r from-blue-100 via-cyan-50 to-purple-100 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl border border-primary/10 relative overflow-hidden">
                    <div className="absolute -bottom-8 right-8 w-32 h-16 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-xl animate-pulse" />
                    <div className="flex-1">
                        <h4 className="font-editorial text-2xl text-primary mb-4 flex items-center gap-2">
                            <PlusCircle className="w-6 h-6 text-green-500 animate-bounce" />
                            Quick Actions
                        </h4>
                        <div className="flex flex-col gap-4">
                            {quickActions.map((action, idx) => (
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
                        <Progress value={80} className="w-40 mb-3 animate-pulse" />
                        <div className="text-sm text-secondary-foreground/70 font-semibold tracking-wide">
                            Platform Uptime
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
                .animate-spin-slow {
                    animation: spin 4s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                /* Accessibility: Ensure high contrast for text */
                .text-primary-foreground, .text-primary-foreground/80, .text-secondary-foreground/70, .text-secondary-foreground/50 {
                    color: #1a202c !important;
                }
                .bg-white/90, .bg-gradient-to-r, .bg-gradient-to-br, .bg-blue-50, .bg-cyan-50, .bg-purple-50, .bg-blue-100, .bg-green-100, .bg-purple-100 {
                    color: #1a202c !important;
                }
                .font-bold, .font-extrabold, .font-semibold {
                    letter-spacing: 0.01em;
                }
            `}</style>
        </div>
    );
}
