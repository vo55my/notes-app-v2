import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";

function ButtonAction({ id, archived, isArchived }) {
	return (
		<button
			className="action"
			type="button"
			title={archived ? "unArchive" : "Archived"}
			onClick={() => isArchived(id)}
		>
			{archived ? <BiArchiveOut /> : <BiArchiveIn />}
		</button>
	);
}

ButtonAction.propTypes = {
	id: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	isArchived: PropTypes.func.isRequired,
};

export default ButtonAction;
