import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";

function DetailPageBody({ note }) {
  return (
    <>
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
      <div className="detail-page__body">{note.body}</div>
    </>
  );
}

DetailPageBody.propTypes = {
  note: PropTypes.object.isRequired,
};

export default DetailPageBody;
