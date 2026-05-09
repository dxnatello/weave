"use client";

import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Backdrop (optional, but spec says floating above canvas) */}
      {/* The spec says "opening it should not push page content" and "slides in from the left" */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 w-80 bg-surface border-r border-border-default shadow-2xl transition-transform duration-300 ease-in-out z-[60] flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-14 border-b border-border-subtle flex items-center justify-between px-4 shrink-0">
          <h2 className="text-lg font-semibold text-text-primary">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-text-muted hover:text-text-primary"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Tabs defaultValue="my-projects" className="flex-1 flex flex-col">
          <div className="px-4 py-2">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="flex-1">
            <TabsContent value="my-projects" className="px-4 py-8 text-center text-text-muted">
              <p className="text-sm italic">No projects yet.</p>
            </TabsContent>
            <TabsContent value="shared" className="px-4 py-8 text-center text-text-muted">
              <p className="text-sm italic">No shared projects.</p>
            </TabsContent>
          </ScrollArea>
        </Tabs>

        <div className="p-4 border-t border-border-subtle">
          <Button className="w-full justify-start gap-2" variant="secondary">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>

      {/* Optional overlay if we want to click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[55]" 
          onClick={onClose}
        />
      )}
    </>
  );
}
