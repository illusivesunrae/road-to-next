type TicketPageProps = {
    params: {
        ticketId: string;
    };
}

const TicketPage = ({ params }: TicketPageProps) => {
    return (
      <div>
        <h2>Ticket page {params.ticketId} </h2>
      </div>
    );
  }
  
  export default TicketPage;