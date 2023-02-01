import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <Link to={`edit-note/${note.id}`} className="note">
      <h4>
        {note.title.length > 15 ? note.title.substr(0, 15) + "..." : note.title}
      </h4>
      <p>
        {note.details.length > 49 ? note.details.substr(0, 49) + "..." : note.details}
      </p>
      <small>{note.date}</small>
    </Link>
  );
};

export default NoteItem;
