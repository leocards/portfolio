import BlurIn from "@/components/ui/blur-in";
import Container from "@/layouts/container-layout";
import Profile3d from "@/assets/img/profile.png";
// import { AppWindow, Code } from "lucide-react";
// import SquareFloat from "@/components/square-float";
// import { AkarIconsPhpFill } from "@/components/Icons/php";
// import { BxlTailwindCss } from "@/components/Icons/tailwind";
// import { SimpleIconsMysql } from "@/components/Icons/mysql";
// import { MdiLaravel } from "@/components/Icons/laravel";
import noise from "@/assets/img/noise.webp";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const Welcome = () => {
	return (
		<Container className="flex flex-col relative font-hanken bg-secondary overflow-hidden">
			<div
				className="absolute top-0 left-0 h-screen [mask-image:radial-gradient(#fff,transparent,75%)] [background-size:20%] dark:[background-size:25%] dark:opacity-5 inset-0 scale-[1.2] transform"
				style={{
					backgroundImage: `url(${noise})`,
				}}
			/>



			<div className="grow flex flex-col bg-background rounded-b-[5rem] relative z-10 overflow-hidden">
				{/* <DotPattern className="[mask-image:radial-gradient(50rem_circle_at_center,white,transparent,transparent)]" /> */}
                <GridPattern
                    width={40}
                    height={40}
                    squares={[
                        [4, 4],
                        [4, 1],
                        [14, 2],
                        [24, 2],
                        [9, 3],
                        [9, 6],
                        [2, 6],
                        [6, 10],
                        [10, 10],
                        [12, 15],
                        [15, 11],
                        [15, 10],
                        [10, 15],
                        [24, 15],
                        [30, 14],
                        [35, 14],
                        [35, 10],
                      ]}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom_right,#e9d5ff,transparent,#e9d5ff)] stroke-blue-400/10 dark:stroke-blue-400/20 fill-blue-200/30 dark:fill-blue-200/20",
                    )}
                />

				<div className="m-auto px-4 text-center">
					<div className="size-16 rounded-full overflow-hidden ring ring-blue-600 bg-background mx-auto mb-4 shadow relative z-10">
						<img
							src={Profile3d}
							className="size-full object-contain"
						/>
					</div>
					<BlurIn
						word="Hi, I’m"
						className="!text-2xl font-semibold text-foreground/50"
					/>
					<BlurIn
						word="Leomas V. Cardenio"
						className="text-3xl sm:text-5xl font-kanit font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-300"
					/>
					<BlurIn
						word="A Bachelor of Science in Information Technology graduate
                            with a passion for creating web applications. Over the
                            years, I’ve honed my skills by working on real-world
                            projects and providing coding solutions for various needs."
						className="!text-lg max-w-3xl font-medium text-foreground/80 max-sm:max-w-md"
					/>
				</div>

				{/* <SquareFloat direction={"left-[20%] top-[20%]"} delay={15}>
					<Code className="size-4" />
				</SquareFloat>

				<SquareFloat direction={"left-[10%] top-[45%]"}>
					<SimpleIconsMysql className="size-5" />
				</SquareFloat>

				<SquareFloat direction={"left-[25%] bottom-[20%]"} delay={20}>
					<MdiLaravel className="size-5" />
				</SquareFloat>

				<SquareFloat direction={"right-[20%] top-[19%]"}>
					<AppWindow className="size-4" />
				</SquareFloat>

				<SquareFloat direction={"right-[10%] top-[45%]"}>
					<AkarIconsPhpFill className="size-5" />
				</SquareFloat>

				<SquareFloat direction={"right-[25%] bottom-[20%]"} delay={15}>
					<BxlTailwindCss className="size-5" />
				</SquareFloat> */}
			</div>
		</Container>
	);
};

export default Welcome;
