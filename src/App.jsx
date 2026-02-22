import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import { ThemeProvider } from "./ThemeContext";
import StudentListPage from "./pages/StudentListPage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StudentListPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </BrowserRouter>
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;
