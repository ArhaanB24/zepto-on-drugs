import React from "react";

export function ReviewSection({ title, data }) {
    return (
        <div className="space-y-2">
            <h4 className="font-editorial text-lg text-primary">{title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {Object.entries(data).map(
                    ([key, value]) =>
                        value && (
                            <div key={key} className="flex justify-between">
                                <span className="text-secondary-foreground/60">{key}:</span>
                                <span className="text-secondary-foreground font-medium">
                                    {value}
                                </span>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}
