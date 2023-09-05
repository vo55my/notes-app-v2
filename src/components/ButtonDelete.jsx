import PropTypes from "prop-types";
import { MdOutlineDelete } from "react-icons/md";

function ButtonDelete({ id, onDelete }) {
	return (
		<button className="action" type="button" title="Hapus" onClick={() => onDelete(id)}><MdOutlineDelete /></button>
	);
}

ButtonDelete.propTypes = {
	id: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default ButtonDelete;
