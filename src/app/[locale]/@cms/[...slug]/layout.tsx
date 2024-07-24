export default async function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Async Operation
  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 rounded-md bg-zinc-800 p-12">
      <h1 className="text-4xl text-zinc-100">CMS Page Layout</h1>
      {children}
    </div>
  );
}
