import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async (props: TicketPageProps) => {
  const params = await props.params;
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId)

  if (!ticket) {
    return <Placeholder label="Ticket not found" button={<Button asChild variant="outline"><Link href={ticketsPath()}>Return to tickets</Link></Button>} />;
  }

  return ( 
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
}
  
  export default TicketPage;