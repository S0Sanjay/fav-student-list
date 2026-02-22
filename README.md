# 🎓 Fav Student List

A **Favourite Student List** application built with React JS demonstrating routing, global state management, and modern UI features.

---

live demo : https://fav-student-list-psi.vercel.app/

## 🚀 Live Features

- 🌿 **Light / Dark Theme** — Toggle between soft green and midnight purple themes, saved to localStorage
- 🔍 **Live Search** — Search students by name or roll number in real time
- 📚 **Filter by Department** — Filter students by Computer Science, Data Science, or Artificial Intelligence
- 🔤 **Sort Options** — Sort alphabetically A→Z, Z→A, or by roll number
- 👤 **Student Detail Modal** — Click any card to view full student info (GPA, email, phone, bio)
- 🔔 **Toast Notifications** — Instant feedback when adding, removing, or duplicating favourites
- ⭐ **Favourite Students** — Add/remove students and access them across pages
- 🚫 **No Duplicates** — Prevents adding the same student twice

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React JS | UI framework |
| React Router DOM | Client-side routing |
| useContext + createContext | Global state management |
| useState + useEffect | Local state & side effects |
| localStorage | Theme persistence |
| CSS Variables | Light / Dark theming |
| Google Fonts | Nunito + Poppins typography |
| Vite | Build tool & dev server |

---

## 📁 Project Structure

```
fav-student-list/
├── public/
├── src/
│   ├── App.jsx                  # Router setup + Provider wrapper
│   ├── main.jsx                 # React entry point
│   ├── StudentContext.jsx       # Student data + favourites global state
│   ├── ThemeContext.jsx         # Light/Dark theme global state
│   ├── pages/
│   │   ├── StudentListPage.jsx  # / route — browse all 30 students
│   │   ├── FavouritesPage.jsx   # /favourites route — view saved students
│   │   └── pages.css            # Shared page styles + theme variables
│   └── components/
│       ├── Navbar.jsx           # Navigation + theme toggle
│       ├── Navbar.css
│       ├── Modal.jsx            # Student detail popup
│       ├── Modal.css
│       ├── Toast.jsx            # Notification toasts
│       └── Toast.css
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```



## 🎨 Theme Colors

| | Light Theme | Dark Theme |
|---|---|---|
| Background | `#f2fbf6` soft mint | `#0f0a1e` deep midnight |
| Cards | `#ffffff` white | `#1e1030` dark plum |
| Navbar | `#2d6a4f` forest green | `#2d1b4e` deep purple |
| Accent | `#52b788` pastel green | `#c084fc` pink-violet |
| Text | `#1b4332` dark green | `#f5d0fe` lavender |

---

## 🧩 Key Concepts Demonstrated

- **createContext / useContext** — StudentContext and ThemeContext share state globally across all pages
- **React Router** — `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>` for SPA navigation
- **useState / useEffect** — local UI state and localStorage sync
- **Array methods** — `map()`, `filter()`, `find()`, `some()`, `sort()` for dynamic rendering
- **Component composition** — Reusable Navbar, Modal, Toast components
- **CSS Variables** — Theme switching with `data-theme` attribute on `<html>`

---

## 👥 Students Data

30 students across 3 departments:

| Department | Students | Roll Range |
|---|---|---|
| Computer Science | 10 | CS-101 to CS-110 |
| Data Science | 10 | DS-201 to DS-210 |
| Artificial Intelligence | 10 | AI-301 to AI-310 |

Each student has: **name, roll number, grade, GPA, major, email, phone, bio**


## 🙌 Acknowledgements

- Fonts: [Google Fonts](https://fonts.google.com/) — Nunito & Poppins
- Icons: Unicode emoji
- Built as part of **WEEK 9** — Error Makes Clever

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
