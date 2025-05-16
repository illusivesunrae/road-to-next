import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h2>Homepage</h2>

      <Link href={ticketsPath()} className="underline">
        Go to tickets
      </Link>
    </div>
  );
}

export default HomePage;