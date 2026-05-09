"use client";

import { useState } from "react";
import { EditorNavbar } from "./editor-navbar";
import { ProjectSidebar } from "./project-sidebar";

interface EditorShellProps {
  children: React.ReactNode;
}

export function EditorShell({ children }: EditorShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex flex-col h-full overflow-hidden">
      <EditorNavbar 
        isSidebarOpen={isSidebarOpen} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <main className="flex-1 relative overflow-auto">
        {children}
      </main>

      <ProjectSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </div>
  );
}
