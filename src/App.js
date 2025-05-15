import logo from './logo.svg';
import './App.css';
// import SignupFrm from './pages/SignupFrm';
// import LoginFrm from './pages/LoginFrm';
import UserTable from './pages/Table';
import AuthPage from './pages/Auth';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <AuthPage/>,
      <ToastContainer />
    </div>
  );
}

export default App;
