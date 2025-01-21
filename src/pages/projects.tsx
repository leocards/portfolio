import Container from "@/layouts/container-layout";
import accreditation from "@/assets/img/Accreditation.png";
import tams from "@/assets/img/tams.png";
import ecp from "@/assets/img/ecp.png";
import sdnhshris from "@/assets/img/sdnhshris.png";
import ProjectsCard from "@/components/projects-card";

const Projects = () => {
	return (
		<Container className="bg-bac kground flex flex-col pb-10">
			<div className="max-w-6xl w-full mx-auto">
				<div className="mt-16 relative">
					<hr className="border-t border-border dark:border-primary/60 max-lg:w-[80%] max-lg:mx-auto" />
					<div className="bg-primary text-primary-foreground font-semibold font-kanit tracking-wider px-5 py-1.5 w-fit rounded-full -rotate-[10deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						Projects
					</div>
				</div>

				<div className="mt-12 text-center max-sm:px-10">
					Take a look at my projects to see what I’ve been working on!
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3 px-6 mt-8">
					<ProjectsCard
						url={"https://github.com/leocards/dnsc_accreditation"}
						src={accreditation}
						title="Accreditation Document Management System"
						description="Streamlines the document management and evaluation of the accreditation in the college."
                        inViewDelay={0.25}
                        imageClass="object-cover h-full"
					/>

					<ProjectsCard
						url={"https://github.com/leocards/eventManagement"}
						src={tams}
						title="Training Attendance Monitoring System"
						description="Monitors the trainings attended by an employee, along with the evaluation report."
                        inViewDelay={0.50}
					/>

					<ProjectsCard
						url={"https://github.com/leocards/ellie_cheesy_pizza"}
						src={ecp}
						title="Ellie's Cheesy Pizza Inventory Management System"
						description="A simple stock-in and stock-out of product with ordering."
                        inViewDelay={0.75}
                        imageClass="object-cover h-full"
					/>

					<ProjectsCard
						url={"https://github.com/leocards/SDNHSHRIS"}
						src={sdnhshris}
						title="Human Resource Information System"
						description="Seamlessly manage employee information and leave applications with email notification and real-time chat."
                        inViewDelay={1}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Projects;
