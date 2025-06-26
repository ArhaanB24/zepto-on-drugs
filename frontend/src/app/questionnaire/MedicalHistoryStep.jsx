import React from "react";
import { TextAreaField } from "./TextAreaField";

export function MedicalHistoryStep({ formData, updateFormData }) {
    return (
        <div className="space-y-6">
            <TextAreaField
                label="Past Medical Conditions"
                value={formData.pastMedicalConditions}
                onChange={(value) => updateFormData("pastMedicalConditions", value)}
                placeholder="List any past medical conditions, diseases, or diagnoses..."
                required
            />
            <TextAreaField
                label="Current Medical Conditions"
                value={formData.currentMedicalConditions}
                onChange={(value) => updateFormData("currentMedicalConditions", value)}
                placeholder="List any current medical conditions or ongoing health issues..."
            />
            <TextAreaField
                label="Surgical History"
                value={formData.surgicalHistory}
                onChange={(value) => updateFormData("surgicalHistory", value)}
                placeholder="List any surgeries or procedures you've had..."
                required
            />
            <TextAreaField
                label="Family History"
                value={formData.familyHistory}
                onChange={(value) => updateFormData("familyHistory", value)}
                placeholder="Family history of relevant diseases (diabetes, heart disease, cancer, etc.)..."
            />
            <TextAreaField
                label="Allergies"
                value={formData.allergies}
                onChange={(value) => updateFormData("allergies", value)}
                placeholder="List any allergies, especially to drugs or medications..."
            />
        </div>
    );
}
