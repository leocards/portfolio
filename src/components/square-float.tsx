import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";
import { BorderBeam } from "./ui/border-beam";

interface Props extends PropsWithChildren {
	size?: string | number;
	direction?: string | number;
    delay?: number
}

const SquareFloat: React.FC<Props> = ({ size = "size-9", direction, delay = 9, children }) => {
	return (
		<div 
            className={cn(
                "shadow-sm absolute rounded-lg overflow-hidden",
                typeof size == "string" && size,
                typeof direction == "string" && direction
            )}
            style={{ 
                width: (typeof size == "number" && size) || undefined, 
                height: (typeof size == "number" && size) || undefined, 
                left: (typeof direction == "number" && direction) || undefined,
                right: (typeof direction == "number" && direction) || undefined,
            }}
        >
            <div
                className={cn(
                    "border border-border overflow-hidden size-[inherit] rounded-[inherit] flex items-center justify-center z-10 bg-slate-100 dark:bg-secondary [box-shadow:_inset_0_1px_0_0_#ffffff0d]",
                )}
            >
                {children}

                <div className="absolute bottom-0 left-0 size-full blur-[3px] bg-gradient-to-tl from-white/5 to-transparent z-10"/>
            </div>
            <BorderBeam className="" size={40} duration={12} delay={delay} colorFrom="#3b82f6" colorTo="#2dd4bf" />
        </div>
	);
};

export default SquareFloat;
