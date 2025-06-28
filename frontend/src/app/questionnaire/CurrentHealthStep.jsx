import React from "react";
import { TextAreaField } from "./TextAreaField";

export function CurrentHealthStep({ formData, updateFormData }) {
    return (
        <div className="space-y-6">
            <TextAreaField
                label="Current Medications"
                value={formData.currentMedications}
                onChange={(value) => updateFormData("currentMedications", value)}
                placeholder="List all current prescription medications..."
                required
            />
            <TextAreaField
                label="Over-the-Counter Medications"
                value={formData.otcMedications}
                onChange={(value) => updateFormData("otcMedications", value)}
                placeholder="List any OTC medications, vitamins, or supplements..."
            />
            <TextAreaField
                label="Ayurvedic Medications"
                value={formData.ayurvedicMedications}
                onChange={(value) => updateFormData("ayurvedicMedications", value)}
                placeholder="List any Ayurvedic medicines or herbal remedies..."
            />
            <TextAreaField
                label="Allopathic Medications"
                value={formData.allopathicMedications}
                onChange={(value) => updateFormData("allopathicMedications", value)}
                placeholder="List any other allopathic medications..."
            />
            <TextAreaField
                label="Ongoing Treatment"
                value={formData.ongoingTreatment}
                onChange={(value) => updateFormData("ongoingTreatment", value)}
                placeholder="Describe any ongoing treatments or therapies..."
            />
        </div>
    );
}
