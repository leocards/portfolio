import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import ContactForm from "./contact-form";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
	const [showContact, setShowContact] = useState(false);
	const textRef = useRef<HTMLSpanElement>(null);
	const [copiedText, setCopiedText] = useState(false);

	const handleCopyText = () => {
		if (textRef.current) {
			const textToCopy = textRef.current.innerText; // Get the text from the element
			navigator.clipboard
				.writeText(textToCopy)
				.then(() => {
					setCopiedText(true);
				})
				.catch((err) => {
					console.error("Failed to copy text: ", err);
				});
		}
	};

	useEffect(() => {
		if (copiedText) {
			setTimeout(() => {
				setCopiedText(false);
			}, 2500);
		}
	}, [copiedText]);

	return (
		<nav className="sticky top-0 w-full p-2 px-5 bg-background/50 backdrop-blur z-50 flex items-center">
			<div className="w-fit rounded-full border flex items-center p-1 dark:bg-secondary mr-auto">
				<div className="px-2.5 pl-4 text-sm font-medium line-clamp-1 max-sm:hidden">
					<span ref={textRef}>leomascardenio223@gmail.com</span>
				</div>
				<Button className="rounded-full !m-0" onClick={handleCopyText}>
					{copiedText ? (
						<span>Copied!</span>
					) : (
						<>
							Copy <span className="sm:hidden">email</span>
						</>
					)}
				</Button>
			</div>
			{/* <Button variant={"secondary"} className="rounded-full mx-3">CV</Button> */}

			<div className="flex items-center gap-3">
				<Button
					className="rounded-full sm:hidden"
					size="icon"
					onClick={() => setShowContact(true)}
				>
					<Phone className="" />
				</Button>
				<Button
					className="rounded-full max-sm:hidden"
					onClick={() => setShowContact(true)}
				>
					<Phone className="" />
					Contact
				</Button>
				<ModeToggle />
			</div>

			<ContactForm show={showContact} onClose={setShowContact} />
		</nav>
	);
};

export default Navigation;
