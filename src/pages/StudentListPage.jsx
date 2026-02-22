import { useState } from "react";
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

function StudentListPage() {
  const { students, addFavourite, removeFavourite, isFavourite } = useStudents();

  const [search, setSearch]         = useState("");
  const [filterMajor, setFilterMajor] = useState("All");
  const [sortOrder, setSortOrder]   = useState("default");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const majors = ["All", "Computer Science", "Data Science", "Artificial Intelligence"];

  let filtered = students.filter(function(s) {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                        s.roll.toLowerCase().includes(search.toLowerCase());
    const matchMajor  = filterMajor === "All" || s.major === filterMajor;
    return matchSearch && matchMajor;
  });

  if (sortOrder === "az") {
    filtered = filtered.slice().sort(function(a, b) { return a.name.localeCompare(b.name); });
  } else if (sortOrder === "za") {
    filtered = filtered.slice().sort(function(a, b) { return b.name.localeCompare(a.name); });
  } else if (sortOrder === "roll") {
    filtered = filtered.slice().sort(function(a, b) { return a.roll.localeCompare(b.roll); });
  }

  return (
    <div className="page">
      <Navbar activePage="list" />
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

      <div className="page-hero">
        <div className="hero-inner">
          <h2 className="page-title">Student Directory</h2>
          <p className="page-desc">{students.length} students enrolled across 3 departments</p>
        </div>
      </div>

      <main className="page-main">
        {}
        <div className="controls">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search by name or roll number..."
              value={search}
              onChange={function(e) { setSearch(e.target.value); }}
            />
            {search && (
              <button className="search-clear" onClick={function() { setSearch(""); }}>✕</button>
            )}
          </div>

          <div className="filter-row">
            <select
              className="filter-select"
              value={filterMajor}
              onChange={function(e) { setFilterMajor(e.target.value); }}
            >
              {majors.map(function(m) { return <option key={m} value={m}>{m}</option>; })}
            </select>

            <select
              className="filter-select"
              value={sortOrder}
              onChange={function(e) { setSortOrder(e.target.value); }}
            >
              <option value="default">Default Order</option>
              <option value="az">Name: A → Z</option>
              <option value="za">Name: Z → A</option>
              <option value="roll">Roll Number</option>
            </select>
          </div>
        </div>

        {}
        <p className="results-info">
          Showing {filtered.length} of {students.length} students
        </p>

        {}
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3 className="empty-title">No students found</h3>
            <p className="empty-desc">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="student-grid">
            {filtered.map(function(student) {
              const colors = majorColors[student.major] || { bg: "#f5f5f5", accent: "#607d8b" };
              const fav = isFavourite(student.id);
              return (
                <div
                  key={student.id}
                  className={"student-card " + (fav ? "student-card--fav" : "")}
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
                      className={"fav-btn " + (fav ? "fav-btn--remove" : "fav-btn--add")}
                      onClick={function(e) {
                        e.stopPropagation();
                        if (fav) { removeFavourite(student.id); } else { addFavourite(student); }
                      }}
                    >
                      {fav ? "✓ In Favourites" : "★ Add to Favourites"}
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

export default StudentListPage;
