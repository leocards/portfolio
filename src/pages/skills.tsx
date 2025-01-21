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
import Marquee from "@/components/ui/marquee";


const Skills = () => {
	return (
		<Container className="bg-background !min-h-fit">
			<div className="py-12 pt- 10 relative overflow-hidden bg-secondary rounded-b-[5rem]">
                <div
                    className="absolute top-0 left-0 w-[100vw] h-screen [mask-image:radial-gradient(#fff,transparent,75%)] [background-size:20%] dark:[background-size:25%] 
                    dark:opacity-5 max-sm:dark:opacity-15 inset-0 scale-[1.2] transform"
                    style={{
                        backgroundImage: `url(${noise})`,
                    }}
                ></div>

				<div className="px-8 md:px-10">
                    <Marquee pauseOnHover className="">
                        <GridCard>
                            <BxlTailwindCss className="size-14 !m-0 text-cyan-500 shrink-0" />
                            <div className="shrink-0 max-sm:hidde">Tailwind CSS</div>
                        </GridCard>

                        <GridCard>
                            <BxlJavascript className="size-14 !m-0 text-yellow-500 shrink-0" />
                            <div className="shrink-0 max-sm:hidde">JavaScript</div>
                        </GridCard>

                        <GridCard>
                            <MdiLanguageTypescript className="size-14 !m-0 text-[#3178c6] shrink-0" />
                            <div className="shrink-0 max-sm:hidde">TypeScript</div>
                        </GridCard>

                        <GridCard>
                            <AkarIconsPhpFill className="size-14 !m-0 text-[#474a8a] shrink-0" />
                            <div className="shrink-0 max-sm:hidde">PHP</div>
                        </GridCard>

                        <GridCard>
                            <MdiLaravel className="size-14 !m-0 text-rose-500 shrink-0" />
                            <div className="shrink-0 max-sm:hidde">Laravel</div>
                        </GridCard>

                        <GridCard>
                            <BxlReact className="size-14 !m-0 text-blue-400 shrink-0" />
                            <div className="shrink-0 max-sm:hidde">React</div>
                        </GridCard>

                        <GridCard>
                            <SimpleIconsMysql className="size-14 !m-0 text-[#00758f] shrink-0" />
                            <div className="shrink-0 max-sm:hidde">MySql</div>
                        </GridCard>
                    </Marquee>
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
				"rounded-lg flex items-center gap-2 font-bold p-1.5 pl-3 relative w-40 justify-center",
				className
			)}
		>
			{children}
		</div>
	);
};

export default Skills;
