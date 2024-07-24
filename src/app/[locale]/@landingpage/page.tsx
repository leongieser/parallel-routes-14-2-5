export default function LandingPage({
  params: { locale, slug },
}: Readonly<{ params: { locale: string; slug: Array<string> } }>) {
  console.log('Landing Page: ', slug);

  return (
    <div className="rounded-sm bg-zinc-50 p-12">
      <h1 className="mb-6 text-xl">Landing Page</h1>
      <a href="/de/foo/bar/baz">
        Go to <span className="text-blue-600">/foo/bar/baz</span>
      </a>
    </div>
  );
}
