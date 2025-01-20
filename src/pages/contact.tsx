import Container from "@/layouts/container-layout";
import { Handshake } from "lucide-react";
import noise from "@/assets/img/noise.webp";

const Contact = () => {
	return (
		<Container className="!min-h-fit relative">
            <div className="absolute bottom-0 left-0 w-full h-screen bg-gradient-to-t from-white/10 -z-10 blur-md hidden dark:block" />

			<div className="relative rounded-t-[5rem] bg-secondary py-10 overflow-hidden [&>*:not(first-child)]:z-10">
				<div
					className="absolute top-0 left-0 w-[100vw] h-screen [mask-image:radial-gradient(#fff,transparent,75%)] [background-size:20%] dark:[background-size:25%] dark:opacity-5 inset-0 scale-[1.2] transform"
					style={{
						backgroundImage: `url(${noise})`,
					}}
				></div>

				<div className="relative">
                    <div className="w-fit mx-auto space-y-4">
                        <div className="rounded-full bg-primary flex justify-center items-center size-16 text-primary-foreground mx-auto">
                            <Handshake className="size-8 mt-1" />
                        </div>

                        <div className="text-center text-xl font-kanit">
                            Let's collaborate for your next project.
                        </div>
                    </div>

                    <hr className="my-2 border-t dark:border-white/20" />

                    <div className="text-center text-sm dark:text-foreground/60">
                        © Copyright{" "}
                        <span className="font-medium">Leomas Cardenio</span> | All
                        Rights Reserved
                    </div>
                </div>
			</div>
		</Container>
	);
};

export default Contact;
