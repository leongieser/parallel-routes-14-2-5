export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 rounded-md bg-zinc-800 p-12">
      <h1 className="text-4xl text-zinc-100">Landing Page Layout</h1>
      {children}
    </div>
  );
}
