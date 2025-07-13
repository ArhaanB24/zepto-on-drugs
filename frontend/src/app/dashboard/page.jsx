"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen font-serif bg-background">
        <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-editorial text-primary text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
              Welcome to TrialBridge
            </h1>
            <p className="text-secondary-foreground/70 text-lg sm:text-xl">
              You're successfully authenticated and ready to participate in clinical trials.
            </p>
          </div>

          {/* User Info Card */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-primary">{user.name}</h2>
                  <p className="text-secondary-foreground/70">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Authenticated</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">What would you like to do?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/questionnaire">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 hover:border-primary/25 transition-all duration-300 cursor-pointer group">
                  <div className="text-primary text-3xl mb-4">📋</div>
                  <h4 className="font-semibold text-lg mb-2">Complete Questionnaire</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Fill out your medical profile to match with suitable trials.
                  </p>
                </div>
              </Link>

              <Link href="/participants">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 hover:border-primary/25 transition-all duration-300 cursor-pointer group">
                  <div className="text-primary text-3xl mb-4">👥</div>
                  <h4 className="font-semibold text-lg mb-2">View Profile</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Check and update your participant information.
                  </p>
                </div>
              </Link>

              <Link href="/">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 hover:border-primary/25 transition-all duration-300 cursor-pointer group">
                  <div className="text-primary text-3xl mb-4">🏠</div>
                  <h4 className="font-semibold text-lg mb-2">Home</h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Return to the main page to learn more about trials.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Logout */}
          <div className="text-center mt-12">
            <Button variant="outline" onClick={logout}>
              Sign Out
            </Button>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
} 