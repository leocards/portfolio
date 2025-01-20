import { BxlJavascript } from "@/components/Icons/javascript";
import { MdiLaravel } from "@/components/Icons/laravel";
import { SimpleIconsMysql } from "@/components/Icons/mysql";
import { AkarIconsPhpFill } from "@/components/Icons/php";
import { BxlReact } from "@/components/Icons/react";
import { BxlTailwindCss } from "@/components/Icons/tailwind";
import { MdiLanguageTypescript } from "@/components/Icons/typescript";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import noise from "@/assets/img/noise.webp";
import Container from "@/layouts/container-layout";


const Skills = () => {
	return (
		<Container className="bg-background !min-h-fit">
			<div className="py-16 pt-10 relative overflow-hidden bg-secondary rounded-b-[5rem]">
                <div
                    className="absolute top-0 left-0 w-[100vw] h-screen [mask-image:radial-gradient(#fff,transparent,75%)] [background-size:20%] dark:[background-size:25%] dark:opacity-5 inset-0 scale-[1.2] transform"
                    style={{
                        backgroundImage: `url(${noise})`,
                    }}
                ></div>

                <div className="my-4 mb-8 relative max-w-3xl mx-auto">
                    <hr className="border-t border-border dark:border-primary/70" />
                    <div className="bg-primary text-primary-foreground font-semibold font-kanit tracking-wider px-5 py-1.5 w-fit rounded-full -rotate-[10deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Skills
                    </div>
                </div>

				<div className="px-10">
                    <div className="flex mx-auto w-fit gap-3 sm:gap-8 relative z-10">
                        <GridCard>
                            <BxlTailwindCss className="size-10 !m-0 text-cyan-500 shrink-0" />
                            <div className="shrink-0 max-sm:hidden">Tailwind CSS</div>
                        </GridCard>

                        <GridCard>
                            <BxlJavascript className="size-10 !m-0 text-yellow-500 shrink-0" />
                            <div className="shrink-0 max-sm:hidden">JavaScript</div>
                        </GridCard>

                        <GridCard>
                            <MdiLanguageTypescript className="size-10 !m-0 text-[#3178c6] shrink-0" />
                            <div className="shrink-0 max-sm:hidden">TypeScript</div>
                        </GridCard>

                        <GridCard>
                            <AkarIconsPhpFill className="size-10 !m-0 text-[#474a8a] shrink-0" />
                            <div className="shrink-0 max-sm:hidden">PHP</div>
                        </GridCard>

                        <GridCard>
                            <MdiLaravel className="size-10 !m-0 text-rose-500 shrink-0" />
                            <div className="shrink-0 max-sm:hidden">Laravel</div>
                        </GridCard>

                        <GridCard>
                            <BxlReact className="size-10 !m-0 text-blue-400 shrink-0" />
                            <div className="shrink-0 max-sm:hidden">React</div>
                        </GridCard>

                        <GridCard>
                            <SimpleIconsMysql className="size-10 !m-0 text-[#00758f] shrink-0" />
                            <div className="shrink-0 max-sm:hidden">MySql</div>
                        </GridCard>
                    </div>
                </div>
			</div>
		</Container>
	);
};

const GridCard: React.FC<PropsWithChildren & { className?: string }> = ({
	children,
	className,
}) => {
	return (
		<div
			className={cn(
				"rounded-lg flex items-center gap-2 font-bold p-1.5 pl-3 relative justify-center",
				className
			)}
		>
			{children}
		</div>
	);
};

export default Skills;
