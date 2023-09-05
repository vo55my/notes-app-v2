import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import InputNote from "../components/InputNote";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return <InputNote addNote={onAddNoteHandler} />;
}

export default AddPage;
