"use client";

import { useState } from "react";
import { TOTAL_STEPS, STEP_DATA } from "./constants";
import { ProgressHeader } from "./ProgressHeader";
import { StepIndicators } from "./StepIndicators";
import { NavigationButtons } from "./NavigationButtons";
import { PersonalInfoStep } from "./PersonalInfoStep";
import { PhysicalProfileStep } from "./PhysicalProfileStep";
import { MedicalHistoryStep } from "./MedicalHistoryStep";
import { CurrentHealthStep } from "./CurrentHealthStep";
import { ClinicalDataStep } from "./ClinicalDataStep";
import { ReviewSubmitStep } from "./ReviewSubmitStep";

export default function Questionnaire() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: "",
    dob: "",
    sex: "",
    residence: "",
    officiating: "",
    maritalStatus: "",
    numberOfChildren: "",
    // Physical Profile
    weight: "",
    height: "",
    ethnicity: "",
    // Medical History
    pastMedicalConditions: "",
    currentMedicalConditions: "",
    surgicalHistory: "",
    familyHistory: "",
    allergies: "",
    // Current Health
    currentMedications: "",
    otcMedications: "",
    ayurvedicMedications: "",
    allopathicMedications: "",
    ongoingTreatment: "",
    // Clinical Data
    heartRate: "",
    bloodPressure: "",
    liverFunctionTest: "",
    renalFunctionTest: "",
  });

  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [animatingProgress, setAnimatingProgress] = useState(false);

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]));
      setAnimatingProgress(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setAnimatingProgress(false);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.name && formData.dob && formData.sex && formData.residence
        );
      case 2:
        return formData.weight && formData.height && formData.ethnicity;
      case 3:
        return (
          formData.pastMedicalConditions !== "" &&
          formData.surgicalHistory !== ""
        );
      case 4:
        return formData.currentMedications !== "";
      case 5:
        return formData.heartRate && formData.bloodPressure;
      case 6:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <PhysicalProfileStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <MedicalHistoryStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <CurrentHealthStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 5:
        return (
          <ClinicalDataStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 6:
        return <ReviewSubmitStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-serif bg-background">
      <main className="relative">
        {/* Progress Header */}
        <ProgressHeader
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          stepData={STEP_DATA}
          progress={progress}
          animatingProgress={animatingProgress}
        />

        {/* Form Content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute top-1/4 right-1/5 w-32 h-32 rounded-full border border-primary/10"></div>
              <div className="absolute bottom-1/3 left-1/6 w-24 h-24 rounded-full border border-primary/10"></div>
            </div>

            {/* Form Card */}
            <div className="relative z-10 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-8 md:p-12">
              {renderStepContent()}

              {/* Navigation */}
              <NavigationButtons
                currentStep={currentStep}
                totalSteps={TOTAL_STEPS}
                prevStep={prevStep}
                nextStep={nextStep}
                isStepValid={isStepValid}
                onSubmit={() => alert("Form submitted! (Demo)")}
              />
            </div>
          </div>
        </div>

        {/* Step Indicators at Bottom */}
        <StepIndicators
          totalSteps={TOTAL_STEPS}
          currentStep={currentStep}
          completedSteps={completedSteps}
          stepData={STEP_DATA}
        />
      </main>
    </div>
  );
}
