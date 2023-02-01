import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNotes from "./pages/CreateNote";
import EditNotes from "./pages/EditNote";
import Notes from "./pages/Notes";
// import dummyNotes from "./dummy_notes";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  console.log(notes)
  localStorage.setItem("notes", notes)
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-note" element={<CreateNotes setNotes={setNotes} />} />
          <Route path="/edit-note/:id" element={<EditNotes />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
