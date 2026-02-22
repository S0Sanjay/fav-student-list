import { useState } from "react";
import { Link } from "react-router-dom";
import { useStudents } from "../StudentContext";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Toast from "../components/Toast";
import "./pages.css";

const majorColors = {
  "Computer Science":        { bg: "#e8f4fd", accent: "#2196f3" },
  "Data Science":            { bg: "#fdf3e8", accent: "#ff9800" },
  "Artificial Intelligence": { bg: "#f0e8fd", accent: "#9c27b0" },
};

function FavouritesPage() {
  const { favourites, addFavourite, removeFavourite, isFavourite } = useStudents();
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="page">
      <Navbar activePage="favourites" />
      <Toast />

      {selectedStudent && (
        <Modal
          student={selectedStudent}
          onClose={function() { setSelectedStudent(null); }}
          onAdd={addFavourite}
          onRemove={removeFavourite}
          isFav={isFavourite(selectedStudent.id)}
        />
      )}

      <div className="page-hero page-hero--accent">
        <div className="hero-inner">
          <h2 className="page-title">★ Favourite Students</h2>
          <p className="page-desc">
            {favourites.length === 0
              ? "No students added yet"
              : favourites.length + " student" + (favourites.length > 1 ? "s" : "") + " in your list"}
          </p>
        </div>
      </div>

      <main className="page-main">
        {favourites.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">⭐</div>
            <h3 className="empty-title">Your favourites list is empty</h3>
            <p className="empty-desc">Go to the student directory and add your favourites!</p>
            <Link to="/" className="back-btn">Browse Students →</Link>
          </div>
        ) : (
          <div className="student-grid">
            {favourites.map(function(student) {
              const colors = majorColors[student.major] || { bg: "#f5f5f5", accent: "#607d8b" };
              return (
                <div
                  key={student.id}
                  className="student-card student-card--fav"
                  onClick={function() { setSelectedStudent(student); }}
                >
                  <div className="card-header" style={{ background: colors.bg }}>
                    <div className="student-avatar" style={{ background: colors.accent }}>
                      {student.name.split(" ").map(function(n) { return n[0]; }).join("")}
                    </div>
                    <div className="card-meta">
                      <span className="roll-badge">{student.roll}</span>
                      <span className="grade-badge" style={{ color: colors.accent, borderColor: colors.accent }}>
                        {student.grade}
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className="student-name">{student.name}</h3>
                    <p className="student-major" style={{ color: colors.accent }}>{student.major}</p>
                    <button
                      className="fav-btn fav-btn--remove"
                      onClick={function(e) {
                        e.stopPropagation();
                        removeFavourite(student.id);
                      }}
                    >
                      ✕ Remove from Favourites
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default FavouritesPage;
