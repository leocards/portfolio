import { useToast } from "@/hooks/use-toast";
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/components/ui/toast";
import { MailCheck, MailWarning, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function Toaster() {
    const { toasts } = useToast();

    const statusIcon = {
        error: <MailWarning className="size-4" strokeWidth={2.4} />,
        success: <MailCheck className="size-4" strokeWidth={2.4} />,
        process: <Send className="size-4" strokeWidth={2.4} />,
    }

    const titleColor = {
        error: "text-destructive",
        success: "text-green-500 dark:text-green-700",
        process: "text-blue-600",
    }

    const toastColor = {
        error: "border-destructive",
        success: "border-green-500 dark:border-green-700",
        process: "border-blue-500",
    }

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                action,
                ...props
            }) {
                return (
                    <Toast key={id} {...props} className={cn("", toastColor[props.status])}>
                        <div className="grid gap-1">
                            <div className={cn("flex gap-2 items-center", titleColor[props.status])}>
                                {statusIcon[props.status]}
                                {title && <ToastTitle>{title}</ToastTitle>}
                            </div>
                            {description && (
                                <ToastDescription>
                                    {description}
                                </ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose className={cn(toastColor[props.status])} />
                    </Toast>
                );
            })}
            <ToastViewport className="fixed top-0 right-0 flex flex-col space-y-2 p-2" />
        </ToastProvider>
    );
}
