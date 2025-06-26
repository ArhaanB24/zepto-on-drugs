import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen font-serif bg-background">
      <main className="relative flex min-h-screen">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-1/4 right-1/5 w-32 h-32 rounded-full border border-primary/10"></div>
            <div className="absolute bottom-1/3 left-1/6 w-24 h-24 rounded-full border border-primary/10"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full border border-primary/15"></div>
          </div>

          <div className="w-full max-w-md relative z-10">
            {/* Logo/Brand */}
            <div className="text-center mb-12">
              <h1 className="font-editorial text-primary text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
                TrialBridge
              </h1>
              <div className="w-16 h-px bg-primary/20 mx-auto"></div>
            </div>

            {/* Welcome Text */}
            <div className="text-center mb-10">
              <h2 className="font-editorial text-2xl sm:text-3xl text-primary leading-tight mb-4">
                Welcome back
              </h2>
              <p className="text-secondary-foreground/70 text-sm sm:text-base leading-relaxed">
                Continue your journey in advancing medical science while earning
                fair compensation.
              </p>
            </div>

            {/* Login Card */}
            <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:bg-primary/3 bg-white/50 backdrop-blur-sm">
              {/* Decorative dot */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-125"></div>

              {/* Login Form */}
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-secondary-foreground/60 text-sm mb-6 font-mono tracking-wider">
                    SECURE LOGIN
                  </p>
                </div>

                {/* Google Auth Button */}
                <div className="relative group/button">
                  <Button
                    className="w-full h-14 text-base bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300 transition-all duration-300 relative overflow-hidden"
                    variant="outline"
                  >
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/button:translate-x-full transition-transform duration-700"></div>

                    <div className="flex items-center justify-center space-x-3 relative z-10">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="font-medium">Continue with Google</span>
                    </div>
                  </Button>
                </div>

                {/* Security Note */}
                <div className="text-center pt-4">
                  <p className="text-xs text-secondary-foreground/50 leading-relaxed">
                    Your privacy is protected by enterprise-grade encryption.
                    <br />
                    We never store your password locally.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-8">
              <p className="text-sm text-secondary-foreground/60">
                New to TrialBridge?{" "}
                <Link
                  href="/"
                  className="text-primary hover:text-primary/80 underline transition-colors duration-300"
                >
                  Learn more about our platform
                </Link>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 mt-12 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-secondary-foreground/60 font-mono">
                  HIPAA Compliant
                </span>
              </div>
              <div className="w-px h-4 bg-secondary-foreground/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-secondary-foreground/60 font-mono">
                  SOC 2 Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual/Info */}
        <div className="hidden lg:flex lg:flex-1 relative bg-primary text-primary-foreground overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-primary-foreground"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full border border-primary-foreground"></div>
            <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full border border-primary-foreground"></div>
            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full border border-primary-foreground"></div>
          </div>

          {/* Pills Image */}
          <div className="absolute top-16 right-16 opacity-30">
            <img src="/pills.png" alt="Pills" className="h-24 w-auto" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="w-16 h-px bg-primary-foreground/40"></div>
                <h3 className="font-editorial text-4xl xl:text-5xl leading-tight">
                  Your health data,
                  <br />
                  your control
                </h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
                  Join thousands of participants who are advancing medical
                  research while maintaining complete privacy and earning fair
                  compensation.
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-4 pt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary-foreground/60 rounded-full"></div>
                  <span className="text-primary-foreground/70 text-sm font-mono">
                    2,500+ Active Participants
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary-foreground/60 rounded-full"></div>
                  <span className="text-primary-foreground/70 text-sm font-mono">
                    95% Completion Rate
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary-foreground/60 rounded-full"></div>
                  <span className="text-primary-foreground/70 text-sm font-mono">
                    $2.3M+ Earned by Participants
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"></div>
        </div>
      </main>
    </div>
  );
}
