import React from "react";

export function StepIndicators({
    totalSteps,
    currentStep,
    completedSteps,
    stepData
}) {
    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
            <div className="flex items-center space-x-2 bg-background/95 backdrop-blur-sm border border-primary/10 rounded-full px-4 py-2">
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
                    (step) => (
                        <div
                            key={step}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${completedSteps.has(step)
                                    ? "bg-green-500"
                                    : step === currentStep
                                        ? `bg-gradient-to-r ${stepData[step].color}`
                                        : "bg-secondary/30"
                                }`}
                        />
                    )
                )}
            </div>
        </div>
    );
}
