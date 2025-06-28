import React from "react";
import { Button } from "@/components/ui/button";

export function NavigationButtons({
    currentStep,
    totalSteps,
    prevStep,
    nextStep,
    isStepValid,
    onSubmit
}) {
    return (
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-primary/10">
            <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                ← Previous
            </Button>

            {currentStep < totalSteps ? (
                <Button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`relative overflow-hidden ${isStepValid()
                            ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                            : "opacity-50 cursor-not-allowed"
                        }`}
                >
                    {isStepValid() && (
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:translate-x-full transition-transform duration-700" />
                    )}
                    <span className="relative z-10">Continue →</span>
                </Button>
            ) : (
                <Button
                    onClick={onSubmit}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                >
                    Submit Application ✨
                </Button>
            )}
        </div>
    );
}
