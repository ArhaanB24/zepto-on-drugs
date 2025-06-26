import React from "react";
import { FormField } from "./FormField";
import { TextAreaField } from "./TextAreaField";

export function ClinicalDataStep({ formData, updateFormData }) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    label="Heart Rate"
                    type="number"
                    value={formData.heartRate}
                    onChange={(value) => updateFormData("heartRate", value)}
                    placeholder="beats per minute"
                    required
                    suffix="bpm"
                />
                <FormField
                    label="Blood Pressure"
                    type="text"
                    value={formData.bloodPressure}
                    onChange={(value) => updateFormData("bloodPressure", value)}
                    placeholder="120/80"
                    required
                    suffix="mmHg"
                />
            </div>
            <TextAreaField
                label="Liver Function Test Results"
                value={formData.liverFunctionTest}
                onChange={(value) => updateFormData("liverFunctionTest", value)}
                placeholder="Recent liver function test results (ALT, AST, Bilirubin, etc.)..."
            />
            <TextAreaField
                label="Renal Function Test Results"
                value={formData.renalFunctionTest}
                onChange={(value) => updateFormData("renalFunctionTest", value)}
                placeholder="Recent kidney function test results (Creatinine, BUN, GFR, etc.)..."
            />
        </div>
    );
}
