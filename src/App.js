import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateQuize from "./features/create-quize";
import AppProvider from "./components/quize-data";
import EditQuize from "./features/edit-quize";
import Listing from "./features/home";
import Nav from "./components/Nav";
import Quiz from "./features/quiz-progress";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <AppProvider>
          <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/create-quize" element={<CreateQuize />} />
            <Route path="/edit-quize/:id" element={<EditQuize />} />
            <Route path="/quiz/:id" element={<Quiz />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
