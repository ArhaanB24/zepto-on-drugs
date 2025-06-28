import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'TrialBridge - Clinical trials delivered to your door';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0D3DFF 0%, #0A2FCC 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background decorative elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: '10%',
                        right: '10%',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '15%',
                        left: '8%',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '30%',
                        left: '25%',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '2px solid rgba(255, 255, 255, 0.08)',
                    }}
                />

                {/* Pills Icon */}
                <div
                    style={{
                        position: 'absolute',
                        top: '80px',
                        right: '100px',
                        fontSize: '80px',
                        opacity: 0.3,
                    }}
                >
                    💊
                </div>

                {/* Main Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '0 80px',
                        maxWidth: '900px',
                    }}
                >
                    {/* Brand Name */}
                    <div
                        style={{
                            fontSize: '48px',
                            fontWeight: '800',
                            color: 'white',
                            marginBottom: '24px',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        TrialBridge
                    </div>

                    {/* Main Heading */}
                    <div
                        style={{
                            fontSize: '64px',
                            fontWeight: '700',
                            color: 'white',
                            lineHeight: '1.1',
                            marginBottom: '32px',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Earn. Contribute.
                        <br />
                        Advance Science.
                    </div>

                    {/* Subtitle */}
                    <div
                        style={{
                            fontSize: '28px',
                            fontWeight: '400',
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: '1.3',
                            marginBottom: '40px',
                            maxWidth: '700px',
                        }}
                    >
                        Clinical trials, delivered to your door. Get paid while helping shape the future of medicine.
                    </div>

                    {/* Features */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '48px',
                            alignItems: 'center',
                            fontSize: '18px',
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: '500',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.6)',
                                }}
                            />
                            HIPAA Compliant
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.6)',
                                }}
                            />
                            Licensed Professionals
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.6)',
                                }}
                            />
                            Fair Compensation
                        </div>
                    </div>
                </div>

                {/* Bottom accent line */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: '4px',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
