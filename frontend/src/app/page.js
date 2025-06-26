import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-serif">
      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative flex min-h-screen flex-col justify-center py-12 sm:py-16 lg:py-20">
          {/* Pills Image - Positioned at top center */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 sm:top-12 md:top-16 lg:top-20">
            <img
              src="/pills.png"
              alt="Pills"
              className="h-32 w-auto sm:h-40 md:h-48 lg:h-56 xl:h-64"
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 mx-auto max-w-4xl text-center pt-40 sm:pt-48 md:pt-56 lg:pt-64 xl:pt-72">
            <h1 className="font-editorial text-primary text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Earn. Contribute. Advance Science.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground sm:text-xl md:text-2xl lg:leading-relaxed">
              Clinical trials, delivered to your door. Get paid while helping
              shape the future of medicine.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button className="text-base sm:text-lg px-8 py-3">
                Join a Trial
              </Button>
              <Button
                variant="outline"
                className="text-base sm:text-lg px-8 py-3"
              >
                Explore How It Works
              </Button>
            </div>

            {/* Lab Partnership Line */}
            <p className="mt-8 text-sm text-secondary-foreground/70 sm:text-base">
              Are you a research lab looking for participants?{" "}
              <a
                href="#"
                className="underline hover:text-primary transition-colors"
              >
                Partner with us
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Why Section - Full Width Primary Background */}
      <section className="w-full bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-16 w-40 h-40 rounded-full border border-primary-foreground"></div>
          <div className="absolute bottom-24 left-12 w-20 h-20 rounded-full border border-primary-foreground"></div>
          <div className="absolute top-1/3 right-1/3 w-28 h-28 rounded-full border border-primary-foreground"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-6 mb-16 md:mb-20">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              Why
            </h2>
            <div className="hidden sm:block h-px bg-primary-foreground/20 flex-1 ml-6"></div>
          </div>

          <div className="space-y-16 md:space-y-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative">
                <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed font-light mb-6">
                  Research shouldn&apos;t be limited to lab settings.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80 max-w-3xl mx-auto">
                  We&apos;re bringing clinical trials directly to participants —
                  making medical research more accessible, inclusive, and
                  representative of real-world conditions.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="group relative p-8 rounded-2xl border border-primary-foreground/10 hover:border-primary-foreground/25 transition-all duration-500 hover:bg-primary-foreground/3 hover:transform hover:scale-105">
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary-foreground/40 rounded-full group-hover:bg-primary-foreground/80 transition-all duration-300 group-hover:scale-125"></div>
                <div className="mb-6">
                  <div className="w-12 h-px bg-primary-foreground/40 mb-4"></div>
                  <span className="text-sm font-mono text-primary-foreground/70 tracking-widest">
                    01
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl mb-4 group-hover:text-primary-foreground transition-colors duration-300 leading-snug">
                  On-demand medical delivery by certified professionals
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Licensed nurses bring trial medications directly to your
                  location
                </p>
              </div>

              <div className="group relative p-8 rounded-2xl border border-primary-foreground/10 hover:border-primary-foreground/25 transition-all duration-500 hover:bg-primary-foreground/3 hover:transform hover:scale-105">
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary-foreground/40 rounded-full group-hover:bg-primary-foreground/80 transition-all duration-300 group-hover:scale-125"></div>
                <div className="mb-6">
                  <div className="w-12 h-px bg-primary-foreground/40 mb-4"></div>
                  <span className="text-sm font-mono text-primary-foreground/70 tracking-widest">
                    02
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl mb-4 group-hover:text-primary-foreground transition-colors duration-300 leading-snug">
                  Digital health tracking that actually works
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Intuitive apps for logging symptoms, side effects, and daily
                  health metrics
                </p>
              </div>

              <div className="group relative p-8 rounded-2xl border border-primary-foreground/10 hover:border-primary-foreground/25 transition-all duration-500 hover:bg-primary-foreground/3 hover:transform hover:scale-105">
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary-foreground/40 rounded-full group-hover:bg-primary-foreground/80 transition-all duration-300 group-hover:scale-125"></div>
                <div className="mb-6">
                  <div className="w-12 h-px bg-primary-foreground/40 mb-4"></div>
                  <span className="text-sm font-mono text-primary-foreground/70 tracking-widest">
                    03
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl mb-4 group-hover:text-primary-foreground transition-colors duration-300 leading-snug">
                  Fair compensation meets data privacy
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Transparent payments and complete control over your personal
                  health data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Trust Section */}
      <section className="w-full bg-secondary/5 py-20 md:py-28 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-16 w-36 h-36 rounded-full border border-primary/10"></div>
          <div className="absolute bottom-16 right-20 w-24 h-24 rounded-full border border-primary/10"></div>
          <div className="absolute top-2/3 left-1/4 w-32 h-32 rounded-full border border-primary/10"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-6 mb-16 md:mb-20">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-primary">
              Designed for Trust
            </h2>
            <div className="hidden sm:block h-px bg-primary/20 flex-1 ml-6"></div>
          </div>

          <div className="space-y-16 md:space-y-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative">
                <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed font-light mb-6 text-primary">
                  Security and transparency aren&apos;t optional.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-70 max-w-3xl mx-auto text-secondary-foreground">
                  Every interaction, payment, and data point is protected by
                  enterprise-grade security and complete transparency protocols.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:gap-8 lg:gap-10 lg:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:bg-primary/3 hover:transform hover:scale-105 bg-white/50">
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary/40 rounded-full group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-125"></div>
                <div className="mb-6">
                  <div className="w-12 h-px bg-primary/40 mb-4"></div>
                  <span className="text-sm font-mono text-primary/70 tracking-widest">
                    SECURITY
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl mb-4 group-hover:text-primary transition-colors duration-300 leading-snug text-primary">
                  End-to-end encrypted health logs
                </h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  Your health data is encrypted before it leaves your device and
                  remains private throughout the entire research process
                </p>
              </div>

              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:bg-primary/3 hover:transform hover:scale-105 bg-white/50">
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary/40 rounded-full group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-125"></div>
                <div className="mb-6">
                  <div className="w-12 h-px bg-primary/40 mb-4"></div>
                  <span className="text-sm font-mono text-primary/70 tracking-widest">
                    VERIFICATION
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl mb-4 group-hover:text-primary transition-colors duration-300 leading-snug text-primary">
                  Nurse-verified medication handoffs
                </h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  Every medication delivery is confirmed by licensed healthcare
                  professionals with digital chain of custody
                </p>
              </div>

              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:bg-primary/3 hover:transform hover:scale-105 bg-white/50">
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary/40 rounded-full group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-125"></div>
                <div className="mb-6">
                  <div className="w-12 h-px bg-primary/40 mb-4"></div>
                  <span className="text-sm font-mono text-primary/70 tracking-widest">
                    TRANSPARENCY
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl mb-4 group-hover:text-primary transition-colors duration-300 leading-snug text-primary">
                  Open, anonymized progress reporting
                </h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  Track your trial&apos;s progress and impact while maintaining
                  complete participant anonymity
                </p>
              </div>

              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:bg-primary/3 hover:transform hover:scale-105 bg-white/50">
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary/40 rounded-full group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-125"></div>
                <div className="mb-6">
                  <div className="w-12 h-px bg-primary/40 mb-4"></div>
                  <span className="text-sm font-mono text-primary/70 tracking-widest">
                    ENGAGEMENT
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl mb-4 group-hover:text-primary transition-colors duration-300 leading-snug text-primary">
                  Intuitive interfaces for lasting habits
                </h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  Thoughtfully designed apps that make consistent health
                  tracking feel natural and rewarding
                </p>
              </div>

              <div className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/25 transition-all duration-500 hover:bg-primary/3 hover:transform hover:scale-105 bg-white/50 lg:col-span-2 xl:col-span-1">
                <div className="absolute top-6 right-6 w-3 h-3 bg-primary/40 rounded-full group-hover:bg-primary/80 transition-all duration-300 group-hover:scale-125"></div>
                <div className="mb-6">
                  <div className="w-12 h-px bg-primary/40 mb-4"></div>
                  <span className="text-sm font-mono text-primary/70 tracking-widest">
                    PAYMENTS
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl mb-4 group-hover:text-primary transition-colors duration-300 leading-snug text-primary">
                  Direct, transparent compensation
                </h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  Payments deposited directly to your account with full
                  visibility into compensation structure and timing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local & Ethical Section */}
      <section className="w-full bg-secondary text-secondary-foreground py-20 md:py-28 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-24 right-12 w-44 h-44 rounded-full border border-secondary-foreground"></div>
          <div className="absolute bottom-20 left-16 w-28 h-28 rounded-full border border-secondary-foreground"></div>
          <div className="absolute top-1/2 left-1/3 w-36 h-36 rounded-full border border-secondary-foreground"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 relative z-10">
          <div className="flex items-center gap-6 mb-16 md:mb-20">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              Local & Ethical
            </h2>
            <div className="hidden sm:block h-px bg-secondary-foreground/20 flex-1 ml-6"></div>
          </div>

          <div className="space-y-16 md:space-y-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative">
                <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed font-light mb-6">
                  Only verified trials. Only certified professionals.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80 max-w-3xl mx-auto">
                  We partner exclusively with accredited local clinics and
                  research institutions. Every trial undergoes rigorous ethics
                  and safety review before reaching participants.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 max-w-5xl mx-auto">
              <div className="group relative">
                <div className="absolute -left-6 top-0 w-2 h-full bg-secondary-foreground/10 rounded-full"></div>
                <div className="pl-12">
                  <div className="absolute -left-8 top-3 w-5 h-5 bg-secondary-foreground rounded-full"></div>
                  <div className="mb-6">
                    <span className="text-sm font-mono text-secondary-foreground/60 tracking-widest mb-3 block">
                      VERIFICATION
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
                      Rigorous trial validation
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed opacity-80 mb-6">
                    Every clinical trial is pre-screened by our medical advisory
                    board and must meet FDA guidelines before participant
                    enrollment begins.
                  </p>
                  <ul className="space-y-3 text-secondary-foreground/70">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary-foreground/40 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm">
                        IRB-approved protocols only
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary-foreground/40 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm">
                        Continuous safety monitoring
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary-foreground/40 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm">Independent ethics review</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -left-6 top-0 w-2 h-full bg-secondary-foreground/10 rounded-full"></div>
                <div className="pl-12">
                  <div className="absolute -left-8 top-3 w-5 h-5 bg-secondary-foreground rounded-full"></div>
                  <div className="mb-6">
                    <span className="text-sm font-mono text-secondary-foreground/60 tracking-widest mb-3 block">
                      PARTNERSHIPS
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
                      Trusted local healthcare networks
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed opacity-80 mb-6">
                    We work directly with established medical institutions in
                    your area, ensuring continuity of care and local oversight.
                  </p>
                  <ul className="space-y-3 text-secondary-foreground/70">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary-foreground/40 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm">
                        Licensed healthcare facilities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary-foreground/40 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm">
                        Board-certified medical staff
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-secondary-foreground/40 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-sm">
                        Community-based care approach
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-background py-20 md:py-28 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/4 right-1/5 w-32 h-32 rounded-full border border-primary/10"></div>
          <div className="absolute bottom-1/3 left-1/6 w-24 h-24 rounded-full border border-primary/10"></div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-10 relative z-10 text-center">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-6">
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight text-primary">
                Advance science. Earn fairly. Stay safe.
              </h2>

              <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-light text-secondary-foreground max-w-2xl mx-auto">
                Your journey begins here.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-8 max-w-lg mx-auto">
              <Button className="text-lg px-10 py-4 h-auto">
                Sign Up for a Trial
              </Button>
              <div className="flex items-center justify-center">
                <span className="text-secondary-foreground/60 font-light">
                  or
                </span>
              </div>
              <Button variant="outline" className="text-lg px-10 py-4 h-auto">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-secondary/10 border-t border-primary/10 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <div className="flex flex-col items-center space-y-8">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-8 text-secondary-foreground/70">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300 text-sm tracking-wide"
              >
                About
              </a>
              <span className="text-secondary-foreground/30">·</span>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300 text-sm tracking-wide"
              >
                Privacy
              </a>
              <span className="text-secondary-foreground/30">·</span>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300 text-sm tracking-wide"
              >
                Research Partners
              </a>
              <span className="text-secondary-foreground/30">·</span>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300 text-sm tracking-wide"
              >
                Contact
              </a>
            </nav>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-secondary-foreground/50 text-sm">
                © 2025{" "}
                <span className="font-editorial text-primary">TrialBridge</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
