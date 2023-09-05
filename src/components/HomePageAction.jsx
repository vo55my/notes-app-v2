import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function HomePageAction() {
	return (
		<div className="homepage__action">
			<Link className="action" title="Add" to="/notes/add"><FiPlus /></Link>
		</div>
	);
}

export default HomePageAction;
