import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = async () => {
  const pokemonData = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const response = await pokemonData.json();
  return (
    <div className="mt-10 px-4">
      <h1 className="text-black text-xl my-6">Pokemon Data</h1>
      <Table>
        <TableCaption>Pokemon Data</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {response?.results?.map((result, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{result.name}</TableCell>
              <TableCell>{result.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
