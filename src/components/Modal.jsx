import "./Modal.css";

const majorColors = {
  "Computer Science":        { bg: "#e8f4fd", accent: "#2196f3" },
  "Data Science":            { bg: "#fdf3e8", accent: "#ff9800" },
  "Artificial Intelligence": { bg: "#f0e8fd", accent: "#9c27b0" },
};

function Modal({ student, onClose, onAdd, onRemove, isFav }) {
  if (!student) return null;
  const colors = majorColors[student.major] || { bg: "#f5f5f5", accent: "#607d8b" };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={function(e) { e.stopPropagation(); }}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header" style={{ background: colors.bg }}>
          <div className="modal-avatar" style={{ background: colors.accent }}>
            {student.name.split(" ").map(function(n) { return n[0]; }).join("")}
          </div>
          <div>
            <h2 className="modal-name">{student.name}</h2>
            <p className="modal-major" style={{ color: colors.accent }}>{student.major}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-grid">
            <div className="modal-item">
              <span className="modal-label">Roll Number</span>
              <span className="modal-value">{student.roll}</span>
            </div>
            <div className="modal-item">
              <span className="modal-label">Grade</span>
              <span className="modal-value" style={{ color: colors.accent, fontWeight: 700 }}>{student.grade}</span>
            </div>
            <div className="modal-item">
              <span className="modal-label">GPA</span>
              <span className="modal-value">{student.gpa} / 4.0</span>
            </div>
            <div className="modal-item">
              <span className="modal-label">Email</span>
              <span className="modal-value">{student.email}</span>
            </div>
            <div className="modal-item">
              <span className="modal-label">Phone</span>
              <span className="modal-value">{student.phone}</span>
            </div>
          </div>

          <div className="modal-bio">
            <span className="modal-label">About</span>
            <p className="modal-bio-text">{student.bio}</p>
          </div>

          <button
            className={"modal-fav-btn " + (isFav ? "modal-fav-btn--remove" : "modal-fav-btn--add")}
            onClick={function() {
              if (isFav) { onRemove(student.id); } else { onAdd(student); }
            }}
          >
            {isFav ? "✕ Remove from Favourites" : "★ Add to Favourites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
