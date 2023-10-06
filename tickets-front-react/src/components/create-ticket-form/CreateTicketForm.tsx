import { useForm } from "react-hook-form";
import { useState } from "react";
import { TicketCreateDto } from "../../typings/Ticket";
import Spinner from "../spinner/Spinner";
import axios from "axios";

interface Props {
	onSuccessHandler: () => void;
}

const CreateTicketForm = ({ onSuccessHandler }: Props) => {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<TicketCreateDto>({});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = form;

	const onSubmit = async (data: TicketCreateDto) => {
		console.log(data);
		try {
			setLoading(true);
			await axios.post("/Tickets/create", data);
			onSuccessHandler();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{loading && <Spinner />}
			<>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={`border-2 border-gray-200 w-[400px] max-w-full mx-auto mt-8 p-2 rounded-lg ${
						loading ? "blur-xl" : ""
					}`}
					noValidate>
					<div className="m-4">
						<label className="text-slate-500" htmlFor="ticket-time">
							Ticket Time
						</label>
						<input
							type="datetime-local"
							{...register("time", {
								required: "Ticket time is required",
								valueAsDate: true,
							})}
						/>
						<span className="text-red-600">{errors?.time?.message}</span>
					</div>
					<div className="m-4">
						<label className="text-slate-500" htmlFor="ticket-passenger">
							Passenger name
						</label>
						<input
							autoComplete="off"
							type="text"
							{...register("passengerName", {
								required: "Passenger name is required",
							})}
						/>
						<span className="text-red-600">
							{errors?.passengerName?.message}
						</span>
					</div>
					<div className="m-4">
						<label className="text-slate-500" htmlFor="ticket-passenger-ssn">
							Passenger SSN
						</label>
						<input
							type="number"
							{...register("passengerSSN", {
								required: "Passenger SSN is required",
							})}
						/>
						<span className="text-red-600">
							{errors?.passengerSSN?.message}
						</span>
					</div>
					<div className="m-4">
						<label className="text-slate-500" htmlFor="ticket-from">
							From
						</label>
						<input
							autoComplete="off"
							type="text"
							{...register("from", {
								required: "Source (from) is required",
							})}
						/>
						<span className="text-red-600">{errors?.from?.message}</span>
					</div>
					<div className="m-4">
						<label className="text-slate-500" htmlFor="ticket-to">
							To
						</label>
						<input
							autoComplete="off"
							type="text"
							{...register("to", {
								required: "Destination (to) is required",
							})}
						/>
						<span className="text-red-600">{errors?.to?.message}</span>
					</div>
					<div className="m-4">
						<label className="text-slate-500" htmlFor="ticket-price">
							Ticket Price
						</label>
						<input
							type="number"
							{...register("price", {
								required: "Ticket price is required",
							})}
						/>
						<span className="text-red-600">{errors?.price?.message}</span>
					</div>
					<div className="flex justify-between items-center">
						<button
							className="bg-orange-600 text-white px-4 py-2 rounded-lg"
							onClick={() => reset()}
							type="button">
							Reset
						</button>
						<button
							className="bg-sky-800 text-white px-4 py-2 rounded-lg"
							type="submit">
							Submit
						</button>
					</div>
				</form>
			</>
		</>
	);
};

export default CreateTicketForm;
