"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <nav className="h-14 border-b border-border-default bg-base flex items-center px-4 shrink-0 z-50">
      <div className="flex-1 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="text-text-secondary hover:text-text-primary"
          title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>
      
      <div className="flex-1 flex justify-center">
        {/* Center section placeholder */}
      </div>

      <div className="flex-1 flex justify-end">
        {/* Right section placeholder */}
      </div>
    </nav>
  );
}
