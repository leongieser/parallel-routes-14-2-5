import { getSlug } from '@/lib/utils/server/getSlug';
export default async function EntrypointLayout({
  params: { locale },
  landingpage,
  cms,
}: Readonly<{
  params: { slug: Array<string>; locale: string };
  landingpage: React.ReactNode;
  cms: React.ReactNode;
}>) {
  const slug = getSlug();

  // Depending on the slug, we render the CMS page or the landing page

  // }: Readonly<{
  //   params: { slug: Array<string>; locale: string };

  //   landingpage: React.ReactNode; <------- These are slots that map to the folders
  //   cms: React.ReactNode; <--------------- @cms and @landingpage
  // }>) {

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-8">
      <h1 className="text-6xl">Locale Layout</h1>
      <main>{slug ? cms : landingpage}</main>
    </div>
  );
}
