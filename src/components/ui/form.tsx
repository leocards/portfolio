import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
	FormProvider,
	useFormContext,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "./input";
import { AutosizeTextarea } from "./text-area";

const Form = FormProvider;

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
	name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
	{} as FormFieldContextValue
);

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	);
};

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext);
	const itemContext = React.useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();

	const fieldState = getFieldState(fieldContext.name, formState);

	if (!fieldContext) {
		throw new Error("useFormField should be used within <FormField>");
	}

	const { id } = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
	};
};

type FormItemContextValue = {
	id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
	{} as FormItemContextValue
);

const FormItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const id = React.useId();

	return (
		<FormItemContext.Provider value={{ id }}>
			<div ref={ref} className={cn("space-y-2", className)} {...props} />
		</FormItemContext.Provider>
	);
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();

	return (
		<Label
			ref={ref}
			className={cn(error && "text-destructive", className)}
			htmlFor={formItemId}
			{...props}
		/>
	);
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
	React.ElementRef<typeof Slot>,
	React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } =
		useFormField();

	return (
		<Slot
			ref={ref}
			id={formItemId}
			aria-describedby={
				!error
					? `${formDescriptionId}`
					: `${formDescriptionId} ${formMessageId}`
			}
			aria-invalid={!!error}
			{...props}
		/>
	);
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField();

	return (
		<p
			ref={ref}
			id={formDescriptionId}
			className={cn("text-[0.8rem] text-muted-foreground", className)}
			{...props}
		/>
	);
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error?.message) : children;

	if (!body) {
		return null;
	}

	return (
		<p
			ref={ref}
			id={formMessageId}
			className={cn(
				"text-[0.8rem] font-medium text-destructive",
				className
			)}
			{...props}
		>
			{body}
		</p>
	);
});
FormMessage.displayName = "FormMessage";

type CustomFormProps = {
    form: any;
    name: string;
    label: string | React.ReactNode;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
    type?: React.HTMLInputTypeAttribute;
    className?: string;
};

const FormInput: React.FC<CustomFormProps> = ({ form, name, label, required, ...props}) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({field}) => (
                <FormItem className="w-full grow">
                    <FormLabel className={cn(required && "required")}>{label}</FormLabel>
                    <FormControl>
                        <Input {...field} className={cn("form-input", props.className)} {...props} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

type FormTextAreaProps = CustomFormProps & {
    maxHeight?: number;
    minHeight?: number;
    textAreaClass?: string;
    labelClass?: string;
};
const FormTextArea: React.FC<FormTextAreaProps> = ({
    form,
    name,
    label,
    disabled,
    required = true,
    placeholder = "",
    minHeight = 52,
    maxHeight = 100,
    labelClass = "",
    textAreaClass = "",
}) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel
                        className={cn(required && "required", labelClass)}
                    >
                        {label}
                    </FormLabel>
                    <FormControl>
                        <AutosizeTextarea
                            {...field}
                            placeholder={placeholder}
                            disabled={disabled}
                            minHeight={minHeight}
                            maxHeight={maxHeight}
                            className={cn("shadow-sm p-3", textAreaClass)}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
FormTextArea.displayName = "FormTextArea";

export {
	useFormField,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	FormField,

    FormInput,
    FormTextArea,
};
