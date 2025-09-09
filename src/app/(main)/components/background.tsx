"use client";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="relative h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-100/20"></div>
      </div>
    </div>
  );
}
