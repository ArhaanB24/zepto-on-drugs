import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FormField({
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    required,
    suffix,
    min,
    ...props
}) {
    return (
        <div className="group">
            <Label className="block text-sm font-medium text-secondary-foreground/80 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <div className="relative">
                <Input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    min={min}
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 outline-none group-hover:border-primary/30"
                    {...props}
                />
                {suffix && (
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-foreground/50 text-sm">
                        {suffix}
                    </span>
                )}
            </div>
        </div>
    );
}
