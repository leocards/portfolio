import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import ContactForm from "./contact-form";
import { useEffect, useRef, useState } from "react";
import cv from  "../../public/CV.pdf"

const Navigation = () => {
	const [showContact, setShowContact] = useState(false);
	const textRef = useRef<HTMLSpanElement>(null);
	const [copiedText, setCopiedText] = useState(false);
    const cvRef = useRef<HTMLAnchorElement>(null)

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
		<nav className="absolute top-0 w-full p-2 px-5 z-50 flex items-center">
			<div className="w-fit rounded-full border flex items-center p-1 dark:bg-secondary mr-auto">
				<div className="px-2.5 pl-4 text-sm font-medium line-clamp-1 max-sm:hidden">
					<span ref={textRef}>leomascardenio223@gmail.com</span>
				</div>
				<Button className="rounded-full !m-0 h-11 w-24" onClick={handleCopyText}>
					{copiedText ? (
						<span>Copied!</span>
					) : (
						<>
							Copy <span className="sm:hidden">email</span>
						</>
					)}
				</Button>
			</div>
			{/* <Button variant={"outline"} className="rounded-full mx-3 h-11 w-24" onClick={() => cvRef.current?.click()}>CV</Button> */}

			<div className="flex items-center gap-3">
				<Button
					className="rounded-full sm:hidden"
					size="icon"
					onClick={() => setShowContact(true)}
				>
					<Phone className="" />
				</Button>
				<Button
					className="rounded-full max-sm:hidden h-11 w-28"
					onClick={() => setShowContact(true)}
				>
					<Phone className="" />
					Contact
				</Button>
				<ModeToggle />
			</div>

			<ContactForm show={showContact} onClose={setShowContact} />

            <a href={cv} download ref={cvRef}></a>
		</nav>
	);
};

export default Navigation;
