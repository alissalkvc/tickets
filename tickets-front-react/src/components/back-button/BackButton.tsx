import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

interface Props {
	previousRoute: string;
}

const BackButton = ({ previousRoute = "/" }: Props) => {
	return (
		<div className="flex">
			<Link to={previousRoute}>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
					<BsArrowLeft className="text-3xl" />
				</button>
			</Link>
		</div>
	);
};

export default BackButton;
