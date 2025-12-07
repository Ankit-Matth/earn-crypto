'use client';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Circles */}
      <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      {/* Orbs */}
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-pink-500/30 rounded-full blur-3xl animate-float-slow-delayed"></div>
      <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-purple-500/25 rounded-full blur-3xl animate-float"></div>
    </div>
  );
}
