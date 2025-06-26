import React from "react";
import { FormField } from "./FormField";
import { SelectField } from "./SelectField";

export function PhysicalProfileStep({ formData, updateFormData }) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    label="Weight"
                    type="number"
                    value={formData.weight}
                    onChange={(value) => updateFormData("weight", value)}
                    placeholder="Weight in kg"
                    required
                    suffix="kg"
                />
                <FormField
                    label="Height"
                    type="number"
                    value={formData.height}
                    onChange={(value) => updateFormData("height", value)}
                    placeholder="Height in cm"
                    required
                    suffix="cm"
                />
            </div>
            <SelectField
                label="Ethnicity"
                value={formData.ethnicity}
                onChange={(value) => updateFormData("ethnicity", value)}
                options={[
                    { value: "asian", label: "Asian" },
                    { value: "black", label: "Black or African American" },
                    { value: "hispanic", label: "Hispanic or Latino" },
                    { value: "native-american", label: "Native American" },
                    { value: "pacific-islander", label: "Pacific Islander" },
                    { value: "white", label: "White" },
                    { value: "mixed", label: "Mixed Race" },
                    { value: "other", label: "Other" },
                    { value: "prefer-not-to-say", label: "Prefer not to say" },
                ]}
                required
            />
        </div>
    );
}
