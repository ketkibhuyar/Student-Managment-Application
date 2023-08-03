import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentListComponent from "./components/student-list.component";
import HeaderComponent from "./components/header.component";
import StudentFormComponent from "./components/student-form.component";
import UpdateStudentComponent from "./components/update.component";
function App() {
  return (
    <div>
        <Router>
          <HeaderComponent />
          <div className="App grid place-items-center">
            <Routes>
              <Route exact path="/" Component={StudentListComponent}></Route>
              <Route
                path="/students"
                Component={StudentListComponent}
              ></Route>
              <Route
                path="/add-student"
                Component={StudentFormComponent}
              ></Route>
                <Route
                path="/update-student/:id"
                Component={UpdateStudentComponent}
              ></Route>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
