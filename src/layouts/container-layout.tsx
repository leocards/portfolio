import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"

type Props = {
    className?: string
} & PropsWithChildren

const Container: React.FC<Props> = ({ children, className }) => {
    return (
        <main className={cn("container max-w-full mx-auto min-h-screen", className)}>
            {children}

            {createPortal(<Toaster />, document.body)}

        </main>
    )
}

export default Container