import { LucideBug } from "lucide-react"
import Link from "next/link"
import { homePath, ticketsPath } from "@/paths"
import { ThemeSwitcher } from "./theme/theme-switcher"
import { buttonVariants } from "./ui/button"


const Header = () => {
    return (
        <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
            <div className="flex align-items gap-x-2">
                <Link href={homePath()} className={buttonVariants({ variant: "ghost"})}>
                    <h1 className="text-lg font-semibold">BugBounty</h1><LucideBug />
                </Link>
            </div>
            <div className="flex align-items gap-x-2">
                <ThemeSwitcher />
                <Link href={ticketsPath()} className={buttonVariants({ variant: "default"})}>Tickets</Link>
            </div>
        </nav>
    )
}

export { Header }