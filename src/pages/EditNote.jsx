import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();

  const handleChange = (e) => {
    e.preventDefault();
    if (title && details) {
      console.log("saving updated note");
      const newNote = { ...note, title, details, date };
      // update notes Array
      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);

      // redirect to the homepage
      navigate("/");
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete")) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to={`/`} className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleChange}>
          Save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleChange}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          autoFocus
        />
        <textarea
          rows="28"
          value={details}
          placeholder="Note details..."
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
