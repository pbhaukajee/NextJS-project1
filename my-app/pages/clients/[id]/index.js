import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  return (
    <div>
      <h1>The projects of a Given Client</h1>
    </div>
  );
}

export default ClientProjectsPage;
