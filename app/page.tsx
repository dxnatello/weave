export default function Home() {
  return (
    <div className="w-full h-full bg-elevated/50 flex items-center justify-center relative">
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px' 
        }} 
      />
      <div className="text-text-faint text-sm font-medium uppercase tracking-widest">
        Canvas Workspace
      </div>
    </div>
  );
}
