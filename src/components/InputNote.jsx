import { useContext, useState } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContexts";
import useInput from "../hooks/useInput";
import { FiCheck } from "react-icons/fi";

function NoteInput({ addNote }) {
  const [title, onTitleChange] = useInput("");
  const [body, setBody] = useState("");
  const { locale } = useContext(LocaleContext);

  function onInputHandler(event) {
    setBody(event.target.innerHTML);
  }

  function onSubmitHandler() {
    addNote({ title, body });
  }

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder={
            locale === "id" ? "Tambahkan Catatan" : "Add Notes"
          }
          value={title}
          onChange={onTitleChange}
        />
        <div
          className="add-new-page__input__body"
          contentEditable
          data-placeholder={
            locale === "id"
              ? "Tambahkan Teks"
              : "Add Teks"
          }
          onInput={(e) => onInputHandler(e)}
        ></div>
      </div>
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Simpan"
          onClick={onSubmitHandler}
        >
          <FiCheck />
        </button>
      </div>
    </section>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
