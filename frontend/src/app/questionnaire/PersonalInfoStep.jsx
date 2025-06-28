import React from "react";
import { FormField } from "./FormField";
import { SelectField } from "./SelectField";

export function PersonalInfoStep({ formData, updateFormData }) {
    return (
        <div className="space-y-6">
            <FormField
                label="Full Name"
                type="text"
                value={formData.name}
                onChange={(value) => updateFormData("name", value)}
                placeholder="Enter your full name"
                required
            />
            <FormField
                label="Date of Birth"
                type="date"
                value={formData.dob}
                onChange={(value) => updateFormData("dob", value)}
                required
            />
            <SelectField
                label="Sex"
                value={formData.sex}
                onChange={(value) => updateFormData("sex", value)}
                options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "Other" },
                    { value: "prefer-not-to-say", label: "Prefer not to say" },
                ]}
                required
            />
            <FormField
                label="Residence"
                type="text"
                value={formData.residence}
                onChange={(value) => updateFormData("residence", value)}
                placeholder="City, State, Country"
                required
            />
            <FormField
                label="Officiating"
                type="text"
                value={formData.officiating}
                onChange={(value) => updateFormData("officiating", value)}
                placeholder="Your occupation or role"
            />
            <SelectField
                label="Marital Status"
                value={formData.maritalStatus}
                onChange={(value) => updateFormData("maritalStatus", value)}
                options={[
                    { value: "single", label: "Single" },
                    { value: "married", label: "Married" },
                    { value: "divorced", label: "Divorced" },
                    { value: "widowed", label: "Widowed" },
                    { value: "separated", label: "Separated" },
                ]}
            />
            <FormField
                label="Number of Children"
                type="number"
                value={formData.numberOfChildren}
                onChange={(value) => updateFormData("numberOfChildren", value)}
                placeholder="0"
                min="0"
            />
        </div>
    );
}
