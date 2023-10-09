import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Ticket } from "../../typings/Ticket";
import axios from "axios";
import BackButton from "../../components/back-button/BackButton";
import Spinner from "../../components/spinner/Spinner";
import moment from "moment";

const TicketsDetailsPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [ticket, setTicket] = useState<Ticket>({} as Ticket);
	const [loading, setLoading] = useState<boolean>(true);

	const getTicketById = async () => {
		if (!loading) setLoading(true);
		try {
			const { data } = await axios.get<Ticket>(`/Tickets/${id}`);
			setTicket(data);
		} catch (error) {
			console.log("Couldn't get tickets :(");
			navigate("/404");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getTicketById();
	}, []);

	return (
		<div className="pageGeneralClass">
			<BackButton previousRoute="/tickets" />
			{loading ? (
				<Spinner />
			) : (
				<>
					<h1 className="text-2xl sm:text-4x1 font-bold my-8">
						Tickets Details For {ticket && ticket.passengerName}
						<div className="ticketDetailsRow">
							<span>Ticket Id:</span>
							<span className="text-lg">{ticket?.id}</span>
						</div>
						<div className="ticketDetailsRow">
							<span>Passenger Name:</span>
							<span className="text-lg">{ticket?.passengerName}</span>
						</div>
						<div className="ticketDetailsRow">
							<span>Passenger SSN:</span>
							<span className="text-lg">{ticket?.passengerSSN}</span>
						</div>
						<div className="ticketDetailsRow">
							<span>From:</span>
							<span className="text-lg">{ticket?.from}</span>
						</div>
						<div className="ticketDetailsRow">
							<span>To:</span>
							<span className="text-lg">{ticket?.to}</span>
						</div>
						<div className="ticketDetailsRow">
							<span>Price:</span>
							<span className="text-lg">{ticket?.price}</span>
						</div>
						<div className="ticketDetailsRow">
							<span>Time:</span>
							<span className="text-lg">
								{moment(ticket?.time).format("YYYY-MM-DDDD")}
							</span>
						</div>
					</h1>
				</>
			)}
		</div>
	);
};

export default TicketsDetailsPage;
