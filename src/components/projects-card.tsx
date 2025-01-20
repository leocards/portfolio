import { MdiGithub } from "./Icons/github";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import BlurFade from "./ui/blur-fade";
import noise from "@/assets/img/noise.webp";
import { cn } from "@/lib/utils";

type Props = {
	url: string;
	src: string;
	title: string;
	description: string;
    inViewDelay: number;
    imageClass?: string;
};

const ProjectsCard = ({ url, src, title, description, inViewDelay, imageClass }: Props) => {
	return (
		<BlurFade delay={inViewDelay} inView>
			<Card className="shadow-none p-0 border-none overflow-hidden">
				<CardContent className="relative overflow-hidden p-0 h-[17rem] group">
					<div className="absolute top-0 right-0 p-2 w-full flex justify-end z-50 overflow-hidden">
						<Button
							className="rounded-lg text-primary-foreground dark:text-foreground"
							size={"icon"}
							variant="ghost"
							onClick={() => window.open(url, "_blank")}
						>
							<MdiGithub />
						</Button>
					</div>
					<img
						src={src}
						className={cn("object-cover object-center w-full group-hover:scale-[1.10] transition-all relative duration-200 ease-in", imageClass)}
					/>
					<div
						className="absolute top-0 left-0 w-[100vw] h-screen [mask-image:radial-gradient(#fff,transparent,75%)] opacity-25 inset-0 scale-[1.2] transform"
						style={{
							backgroundImage: `url(${noise})`,
							backgroundSize: "16%",
						}}
					></div>
					<div className="bg-gradient-to-t from-black to-transparent sticky -bottom-1 left-0 h-full w-full z-10"></div>
					<div className="bg-slate-700 opacity-40 absolute bottom-0 left-0 size-full"></div>

					<div className="absolute bottom-0 left-0 w-full p-3 z-30">
						<div className="font-medium font-kanit text-lg leading-5 text-primary-foreground dark:text-foreground">
							{title}
						</div>
						<p className="text-sm mt-2 text-primary-foreground/90 dark:text-foreground/70">
							{description}
						</p>
					</div>
				</CardContent>
			</Card>
		</BlurFade>
	);
};

export default ProjectsCard;
