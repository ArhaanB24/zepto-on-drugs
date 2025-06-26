import React from "react";

export function ProgressHeader({
    currentStep,
    totalSteps,
    stepData,
    progress,
    animatingProgress
}) {
    return (
        <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
                {/* Progress Bar */}
                <div className="relative mb-6">
                    <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${stepData[currentStep].color
                                } rounded-full transition-all duration-500 ease-out ${animatingProgress ? "animate-pulse" : ""
                                }`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="absolute -top-1 right-0 transform translate-x-1/2">
                        <div className="text-xs font-mono text-primary/60 bg-background px-2 py-1 rounded">
                            {currentStep}/{totalSteps}
                        </div>
                    </div>
                </div>

                {/* Step Indicator */}
                <div className="flex items-center justify-between text-center">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                            <span className="text-2xl">
                                {stepData[currentStep].icon}
                            </span>
                        </div>
                        <div className="text-left">
                            <h1 className="font-editorial text-2xl sm:text-3xl text-primary leading-tight">
                                {stepData[currentStep].title}
                            </h1>
                            <p className="text-secondary-foreground/60 text-sm">
                                {stepData[currentStep].subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Gamification Elements */}
                    <div className="hidden sm:flex items-center space-x-4">
                        <div className="text-right">
                            <div className="text-xs font-mono text-primary/60 mb-1">
                                COMPLETION
                            </div>
                            <div className="text-lg font-editorial text-primary">
                                {Math.round(progress)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
