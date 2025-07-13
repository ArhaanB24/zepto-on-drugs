"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if user is authenticated on app load
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Check if there's a user ID in URL params (from OAuth callback)
                const urlParams = new URLSearchParams(window.location.search);
                const userId = urlParams.get('user_id');

                if (userId) {
                    // Fetch user data from backend
                    const response = await fetch(`http://127.0.0.1:8000/api/user/${userId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setUser(data.user);
                    }
                }
            } catch (error) {
                console.error('Auth check failed:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/auth/login?action=start_auth", {
                method: "POST",
            });

            if (!response.ok) {
                throw new Error("Failed to send request");
            }

            const data = await response.json();
            if (data.auth_url) {
                window.location.href = data.auth_url;
            }
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        // Clear any stored auth data
        localStorage.removeItem('auth_user');
        // Redirect to home page
        window.location.href = '/';
    };

    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 