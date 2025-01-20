import { useForm } from "react-hook-form";
import Modal, { ModalProps } from "./Modal";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormInput, FormTextArea } from "./ui/form";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const CONTACTSCHEMA = z.object({
	firstname: z.string().min(1, "The first name field is required."),
	lastname: z.string().min(1, "The last name field is required."),
	email: z
		.string()
		.min(1, "The email field is required.")
		.email({ message: "The email must be a valid email format." }),
	message: z.string().min(1, "The Message field is required."),
});

type IFormContact = z.infer<typeof CONTACTSCHEMA>;

export default function ContactForm({ show, onClose }: ModalProps) {
	const { toast } = useToast();
    const [loading, setLoading] = useState(false)
	const form = useForm<IFormContact>({
		resolver: zodResolver(CONTACTSCHEMA),
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			message: "",
		},
	});

	const onSubmitForm = async (formData: IFormContact) => {
        try {
            setLoading(true)
			toast({
				title: "Sending message...",
				status: "process",
			});

			let sendEmail = await emailjs.send(
				"service_vdyxly9",
				"contact_form",
				{
					name: formData.firstname + " " + formData.lastname,
					email: formData.email,
					message: formData.message,
				},
				{
					publicKey: "6No_nFB9sASO2AkeB",
				}
			);

            if(sendEmail.text !== "OK")
                throw new Error('Something went wrong.')

            toast({
				title: "Message Sent",
				status: "success",
			});

            onClose(false)

		} catch (error: any) {
            toast({
				title: "Failed to send message",
                description: error?.message,
				status: "error",
			});
        } finally {
            setLoading(false)
        }

	};

	useEffect(() => {
		if (show) {
			form.reset();
		}
	}, [show, loading]);

	return (
		<Modal
			show={show}
			onClose={onClose}
			header={{ title: "Get in touch", size: "text-2xl" }}
			maxWidth="lg"
			dialogStyle="rounded-2xl"
			center
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmitForm)}
					className="space-y-4"
				>
					<div className="flex gap-4 w-full">
						<FormInput
							form={form}
							name="lastname"
							label="Last Name"
							required
						/>
						<FormInput
							form={form}
							name="firstname"
							label="First Name"
							required
						/>
					</div>

					<FormInput
						form={form}
						name="email"
						label="Email"
						required
					/>

					<FormTextArea
						form={form}
						name="message"
						label="Message"
						maxHeight={300}
						minHeight={100}
					/>

					<div className="flex justify-between">
						<Button
							type="button"
							variant="outline"
							onClick={() => onClose(false)}
                            disabled={loading}
						>
							Cancel
						</Button>
						<Button className="pr-5" disabled={loading}>
							<Send />
							Send
						</Button>
					</div>
				</form>
			</Form>
		</Modal>
	);
}
