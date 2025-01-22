import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button size="icon" className="rounded-full size-11" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100" />
		</Button>
	);
}
