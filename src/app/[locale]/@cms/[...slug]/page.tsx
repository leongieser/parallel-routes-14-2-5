export async function generateMetadata({
  params: { locale, slug },
}: Readonly<{ params: { locale: string; slug: Array<string> } }>) {
  return {
    title: `${slug.at(-1)}`,
    description: `${slug.join(' ')}`,
  };
}

export default function CmsPage({
  params: { locale, slug },
}: Readonly<{ params: { locale: string; slug: Array<string> } }>) {
  console.log('CMS Page: ', slug);

  return (
    <div className="rounded-md bg-zinc-50 p-24">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-xl">CMS Page</h1>
        <hr className="h-2" />
        <div className="flex flex-col gap-4">
          <h2>
            <span className="font-bold">Slug: </span>
            {slug.join('/')}
          </h2>
          <h2>
            <span className="font-bold"> Meta title: </span>
            {slug.at(-1)}
          </h2>
          <h2>
            <span className="font-bold"> Meta description: </span>
            {slug.join(' ')}
          </h2>
        </div>
        <a href="/" className="text-blue-600">
          Home
        </a>
      </div>
    </div>
  );
}
