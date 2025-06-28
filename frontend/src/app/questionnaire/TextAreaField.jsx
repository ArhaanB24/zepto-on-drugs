import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextAreaField({ label, value, onChange, placeholder, required }) {
    return (
        <div className="group">
            <Label className="block text-sm font-medium text-secondary-foreground/80 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <Textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-primary/20 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none resize-none group-hover:border-primary/30"
            />
        </div>
    );
}
