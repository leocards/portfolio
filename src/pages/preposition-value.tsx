import Container from "@/layouts/container-layout";
import Particles from "@/components/ui/particles";
import Profile3d from "@/assets/img/profile.png";
import { CardContent } from "@/components/ui/card";

const PrepositionValue = () => {
	return (
		<Container className="relative flex flex-col !min-h-96 overflow-hidden">
			<Particles
				className="absolute inset-0 text-black"
				quantity={150}
				ease={80}
				refresh
                color="#2563eb"
			/>

			<CardContent className="mx-6 md:mx-auto max-w-3xl my-auto relative bg-secondary shadow dark:shadow-lg p-6 rounded-2xl border">
				<div className="size-16 shrink-0 rounded-full overflow-hidden ring ring-blue-600 bg-background mx-auto mb-4 shadow z-10">
					<img src={Profile3d} className="size-full object-contain" />
				</div>
				<div className="font-medium italic text-xl text-center">
					Whether it’s building responsive websites or crafting
					dynamic web applications, I love turning ideas into reality.
					My goal is to deliver effective and intuitive digital
					solutions that make an impact.
				</div>
			</CardContent>
		</Container>
	);
};

export default PrepositionValue;
