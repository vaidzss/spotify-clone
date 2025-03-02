import { Card, CardContent } from "@/components/ui/card"
import { axiosInstance } from "@/lib/axios"
import { useUser } from "@clerk/clerk-react"
import { Loader } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

const AuthCallbackPage = () => {
  const { isLoaded, user} = useUser()
  const navigate = useNavigate()
  const syncAttempted = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      if(!isLoaded || !user || syncAttempted.current) return ;

      try {
        syncAttempted.current = true

        await axiosInstance.post("/auth/callback", {
         id:user.id,
         firstName:user.firstName,
         lastName:user.lastName,
         imageUrl:user.imageUrl,
        });
        

      } catch (error) {
        console.log("Error in auth callback: ", error)
        
      }finally{
        navigate("/",)
      }
    }
    syncUser()
  },[isLoaded,user,navigate])
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <Card className="w-[90%] max-w-md bg-zinc-900 gap-4 pt-6">
        <CardContent className="flex flex-col items-center gap-4 pt-6">
          <Loader className="size-6 text-emerald-500 animate-spin"></Loader>
           <h3 className="text-zinc-400 text-xl font-bold">Logging you in</h3>
           <p className="text-zinc-400 text-sm">Redirecting...</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthCallbackPage
