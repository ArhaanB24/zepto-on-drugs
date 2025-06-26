import React from "react";
import { ReviewSection } from "./ReviewSection";

export function ReviewSubmitStep({ formData }) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <span className="text-3xl">🎉</span>
                </div>
                <h3 className="font-editorial text-2xl text-primary mb-4">
                    Almost Complete!
                </h3>
                <p className="text-secondary-foreground/70 leading-relaxed">
                    Please review your information below. You can go back to make
                    any changes if needed.
                </p>
            </div>

            <div className="bg-secondary/10 rounded-2xl p-6 space-y-4">
                <ReviewSection
                    title="Personal Information"
                    data={{
                        Name: formData.name,
                        "Date of Birth": formData.dob,
                        Sex: formData.sex,
                        Residence: formData.residence,
                        Officiating: formData.officiating,
                        "Marital Status": formData.maritalStatus,
                        "Number of Children": formData.numberOfChildren,
                    }}
                />
                <ReviewSection
                    title="Physical Profile"
                    data={{
                        Weight: formData.weight ? `${formData.weight} kg` : "",
                        Height: formData.height ? `${formData.height} cm` : "",
                        Ethnicity: formData.ethnicity,
                    }}
                />
                <ReviewSection
                    title="Medical History"
                    data={{
                        "Past Medical Conditions": formData.pastMedicalConditions,
                        "Current Medical Conditions": formData.currentMedicalConditions,
                        "Surgical History": formData.surgicalHistory,
                        "Family History": formData.familyHistory,
                        Allergies: formData.allergies,
                    }}
                />
                <ReviewSection
                    title="Current Health"
                    data={{
                        "Current Medications": formData.currentMedications,
                        "OTC Medications": formData.otcMedications,
                        "Ayurvedic Medications": formData.ayurvedicMedications,
                        "Allopathic Medications": formData.allopathicMedications,
                        "Ongoing Treatment": formData.ongoingTreatment,
                    }}
                />
                <ReviewSection
                    title="Clinical Data"
                    data={{
                        "Heart Rate": formData.heartRate ? `${formData.heartRate} bpm` : "",
                        "Blood Pressure": formData.bloodPressure ? `${formData.bloodPressure} mmHg` : "",
                        "Liver Function Test": formData.liverFunctionTest,
                        "Renal Function Test": formData.renalFunctionTest,
                    }}
                />
            </div>
        </div>
    );
}
