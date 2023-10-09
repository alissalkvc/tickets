import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { TicketsIndex } from "../pages/tickets/TicketsIndex";
import TicketsCreatePage from "../pages/tickets/TicketsCreatePage";
import TicketsDetailsPage from "../pages/tickets/TicketsDetailsPage";

const Global = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/tickets">
				<Route index element={<TicketsIndex />} />
				<Route path="create" element={<TicketsCreatePage />} />
				<Route path=":id" element={<TicketsDetailsPage />} />
			</Route>
			<Route path="/404" element={<NotFoundPage />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};

export default Global;
