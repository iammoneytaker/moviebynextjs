export default function MovieDetail({
  params: { id },
}: {
  params: { id: String };
}) {
  console.log(id);
  return <h1>Movie{id}</h1>;
}
