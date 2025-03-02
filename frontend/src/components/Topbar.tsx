import {  SignedOut, UserButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons.tsx";
import { useAuthStore } from "@/stores/useAuthStores.ts";
import { cn } from "@/lib/utils.ts";
import { buttonVariants } from "./ui/button.tsx";

const Topbar = () => {
    const {isAdmin} = useAuthStore()
    console.log({isAdmin});

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75
    backdrop-blur-md z-10">
        <div className="flex gap-2 items-center text-md font-semibold">
            <img src="/spotify.png" alt="logo" className="size-12"/>
           Spotify
        </div>
        <div className="flex items-center gap-4">
        {isAdmin && (
            <Link to ={"/admin"}
            className={cn(
                buttonVariants({
                    variant:"outline",})
            )}
            >
            <LayoutDashboardIcon className="size-4 mr-2"/>
             Admin Dashboard
            </Link>)}

            <SignedOut>
                <SignInOAuthButtons />
            </SignedOut>
            
            <UserButton/>
        </div>

    </div>
  )
}

export default Topbar
