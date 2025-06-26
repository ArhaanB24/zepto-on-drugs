import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function SelectField({ label, value, onChange, options, required }) {
    return (
        <div className="group">
            <Label className="block text-sm font-medium text-secondary-foreground/80 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full px-4 py-3 bg-background border border-primary/20 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none group-hover:border-primary/30">
                    <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
