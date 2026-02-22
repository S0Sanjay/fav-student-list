import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export function useStudents() {
  return useContext(StudentContext);
}

const initialStudents = [
  { id: 1,  name: "Aisha Patel",       roll: "CS-101", grade: "A",  gpa: 3.9, major: "Computer Science",        email: "aisha@academia.edu",   phone: "9876543210", bio: "Loves algorithms and competitive programming." },
  { id: 2,  name: "Luca Marino",       roll: "CS-102", grade: "B+", gpa: 3.4, major: "Computer Science",        email: "luca@academia.edu",    phone: "9876543211", bio: "Passionate about web development and UI design." },
  { id: 3,  name: "Yuki Tanaka",       roll: "DS-201", grade: "A+", gpa: 4.0, major: "Data Science",            email: "yuki@academia.edu",    phone: "9876543212", bio: "Data enthusiast with a love for visualizations." },
  { id: 4,  name: "Omar Hassan",       roll: "DS-202", grade: "A-", gpa: 3.7, major: "Data Science",            email: "omar@academia.edu",    phone: "9876543213", bio: "Interested in predictive analytics and ML." },
  { id: 5,  name: "Sofia Reyes",       roll: "AI-301", grade: "B+", gpa: 3.5, major: "Artificial Intelligence", email: "sofia@academia.edu",   phone: "9876543214", bio: "Researching natural language processing." },
  { id: 6,  name: "Ethan Brooks",      roll: "AI-302", grade: "A",  gpa: 3.8, major: "Artificial Intelligence", email: "ethan@academia.edu",   phone: "9876543215", bio: "Building autonomous systems and robotics." },
  { id: 7,  name: "Priya Sharma",      roll: "CS-103", grade: "A+", gpa: 4.0, major: "Computer Science",        email: "priya@academia.edu",   phone: "9876543216", bio: "Full stack developer with cloud expertise." },
  { id: 8,  name: "Marcus Johnson",    roll: "DS-203", grade: "B",  gpa: 3.2, major: "Data Science",            email: "marcus@academia.edu",  phone: "9876543217", bio: "Exploring big data and distributed systems." },
  { id: 9,  name: "Amara Osei",        roll: "AI-303", grade: "A",  gpa: 3.9, major: "Artificial Intelligence", email: "amara@academia.edu",   phone: "9876543218", bio: "Deep learning researcher with computer vision focus." },
  { id: 10, name: "Diego Fernandez",   roll: "CS-104", grade: "B+", gpa: 3.4, major: "Computer Science",        email: "diego@academia.edu",   phone: "9876543219", bio: "Cybersecurity enthusiast and ethical hacker." },
  { id: 11, name: "Mei Lin",           roll: "DS-204", grade: "A+", gpa: 4.0, major: "Data Science",            email: "mei@academia.edu",     phone: "9876543220", bio: "Statistical modelling and data storytelling." },
  { id: 12, name: "Kofi Asante",       roll: "AI-304", grade: "A-", gpa: 3.6, major: "Artificial Intelligence", email: "kofi@academia.edu",    phone: "9876543221", bio: "Reinforcement learning and game AI specialist." },
  { id: 13, name: "Nina Petrov",       roll: "CS-105", grade: "A",  gpa: 3.8, major: "Computer Science",        email: "nina@academia.edu",    phone: "9876543222", bio: "Mobile app developer and open source contributor." },
  { id: 14, name: "Rajan Mehta",       roll: "DS-205", grade: "B+", gpa: 3.3, major: "Data Science",            email: "rajan@academia.edu",   phone: "9876543223", bio: "Business analytics and data-driven decisions." },
  { id: 15, name: "Elena Vasquez",     roll: "AI-305", grade: "A+", gpa: 4.0, major: "Artificial Intelligence", email: "elena@academia.edu",   phone: "9876543224", bio: "AI ethics researcher and policy advocate." },
  { id: 16, name: "James Okafor",      roll: "CS-106", grade: "B",  gpa: 3.1, major: "Computer Science",        email: "james@academia.edu",   phone: "9876543225", bio: "Systems programming and OS development." },
  { id: 17, name: "Hana Yoshida",      roll: "DS-206", grade: "A",  gpa: 3.9, major: "Data Science",            email: "hana@academia.edu",    phone: "9876543226", bio: "Healthcare data analytics and bioinformatics." },
  { id: 18, name: "Carlos Mendez",     roll: "AI-306", grade: "B+", gpa: 3.5, major: "Artificial Intelligence", email: "carlos@academia.edu",  phone: "9876543227", bio: "Speech recognition and audio processing." },
  { id: 19, name: "Zara Ahmed",        roll: "CS-107", grade: "A-", gpa: 3.7, major: "Computer Science",        email: "zara@academia.edu",    phone: "9876543228", bio: "Blockchain developer and crypto enthusiast." },
  { id: 20, name: "Leo Dubois",        roll: "DS-207", grade: "A+", gpa: 4.0, major: "Data Science",            email: "leo@academia.edu",     phone: "9876543229", bio: "Financial data science and algorithmic trading." },
  { id: 21, name: "Fatima Al-Rashid",  roll: "AI-307", grade: "A",  gpa: 3.8, major: "Artificial Intelligence", email: "fatima@academia.edu",  phone: "9876543230", bio: "Generative AI and creative machine learning." },
  { id: 22, name: "Samuel Park",       roll: "CS-108", grade: "B+", gpa: 3.4, major: "Computer Science",        email: "samuel@academia.edu",  phone: "9876543231", bio: "Game development and graphics programming." },
  { id: 23, name: "Ingrid Hansen",     roll: "DS-208", grade: "A-", gpa: 3.6, major: "Data Science",            email: "ingrid@academia.edu",  phone: "9876543232", bio: "Climate data analysis and environmental science." },
  { id: 24, name: "Arjun Nair",        roll: "AI-308", grade: "A+", gpa: 4.0, major: "Artificial Intelligence", email: "arjun@academia.edu",   phone: "9876543233", bio: "Medical imaging and diagnostic AI systems." },
  { id: 25, name: "Chloe Martin",      roll: "CS-109", grade: "A",  gpa: 3.9, major: "Computer Science",        email: "chloe@academia.edu",   phone: "9876543234", bio: "DevOps engineer and cloud infrastructure." },
  { id: 26, name: "Kwame Boateng",     roll: "DS-209", grade: "B",  gpa: 3.2, major: "Data Science",            email: "kwame@academia.edu",   phone: "9876543235", bio: "Social media analytics and sentiment analysis." },
  { id: 27, name: "Aria Pham",         roll: "AI-309", grade: "A",  gpa: 3.8, major: "Artificial Intelligence", email: "aria@academia.edu",    phone: "9876543236", bio: "Conversational AI and chatbot development." },
  { id: 28, name: "Tobias Weber",      roll: "CS-110", grade: "B+", gpa: 3.5, major: "Computer Science",        email: "tobias@academia.edu",  phone: "9876543237", bio: "Compiler design and programming languages." },
  { id: 29, name: "Layla Ibrahim",     roll: "DS-210", grade: "A+", gpa: 4.0, major: "Data Science",            email: "layla@academia.edu",   phone: "9876543238", bio: "Sports analytics and performance data science." },
  { id: 30, name: "Ryan Nakamura",     roll: "AI-310", grade: "A-", gpa: 3.7, major: "Artificial Intelligence", email: "ryan@academia.edu",    phone: "9876543239", bio: "Autonomous vehicles and sensor fusion research." },
];

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);
  const [toasts, setToasts] = useState([]);

  function showToast(message, type) {
    const id = Date.now();
    setToasts(function(prev) { return [...prev, { id, message, type }]; });
    setTimeout(function() {
      setToasts(function(prev) { return prev.filter(function(t) { return t.id !== id; }); });
    }, 3000);
  }

  function addFavourite(student) {
    if (favourites.find(function(s) { return s.id === student.id; })) {
      showToast("Already in favourites!", "warning");
      return;
    }
    setFavourites(function(prev) { return [...prev, student]; });
    showToast(student.name + " added to favourites!", "success");
  }

  function removeFavourite(id) {
    const student = favourites.find(function(s) { return s.id === id; });
    setFavourites(function(prev) { return prev.filter(function(s) { return s.id !== id; }); });
    if (student) showToast(student.name + " removed from favourites!", "error");
  }

  function isFavourite(id) {
    return favourites.some(function(s) { return s.id === id; });
  }

  return (
    <StudentContext.Provider
      value={{
        students: initialStudents,
        favourites: favourites,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
        isFavourite: isFavourite,
        toasts: toasts,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
