import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"
import LeftSideBar from "./comp/LeftSideBar"
import FriendsActivity from "./comp/FriendsActivity"
import AudioPlayer from "./comp/AudioPlayer.tsx"
import PlayBackControls from "./comp/PlayBackControls.tsx"
import { useEffect, useState } from "react"



  const MainLayout = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  


  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup direction="horizontal" className="flex-1 flx h-full overflow-hidden p-2">
       <AudioPlayer />
       <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}>
          <LeftSideBar />
       </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>
    
       <ResizablePanel defaultSize={isMobile ? 80 : 60}>
        <Outlet />
       </ResizablePanel>

       {!isMobile && (
					<>
						<ResizableHandle className='w-2 bg-black rounded-lg transition-colors' />

						{/* right sidebar */}
						<ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
							<FriendsActivity />
						</ResizablePanel>
					</>
				)}
      </ResizablePanelGroup>
    <PlayBackControls />
    </div>
  )
}

export default MainLayout;
