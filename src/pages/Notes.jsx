import { CiSearch } from "react-icons/ci";
import NoteItem from "../components/NoteItem";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(search.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch ? (
          <h2 style={{color: '#fddf4eff'}}>My Notes</h2>
        ) : (
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder="Keyword..."
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {!showSearch ? <CiSearch /> : <MdClose />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && <p className="empty__notes">No notes found.</p>}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn add__btn" to="/create-note">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
