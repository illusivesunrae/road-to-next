import Link from "next/link";
import { initialTickets } from "../../data";

const TicketsPage = () => {
    return (
      <div>
        <h2>Tickets page</h2>
        {initialTickets.map((ticket) => (
          <div key={ticket.id}>
            <h3 className="text-lg">{ticket.title}</h3>
            <Link href={`/tickets/${ticket.id}`} className="text-sm underline">View</Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default TicketsPage;