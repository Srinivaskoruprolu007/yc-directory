import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Connect with new age startup founders</h1>
        <p className="sub-heading !max-w-3xl">
          Put your ideas here, get noticed, and get funding for your project.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
