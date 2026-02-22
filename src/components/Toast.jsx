import { useStudents } from "../StudentContext";
import "./Toast.css";

function Toast() {
  const { toasts } = useStudents();

  return (
    <div className="toast-container">
      {toasts.map(function(toast) {
        return (
          <div key={toast.id} className={"toast toast--" + toast.type}>
            <span className="toast-icon">
              {toast.type === "success" ? "✅" : toast.type === "error" ? "❌" : "⚠️"}
            </span>
            <span className="toast-message">{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Toast;
