import logo from './logo.svg';
import './App.css';
// import SignupFrm from './pages/SignupFrm';
// import LoginFrm from './pages/LoginFrm';
import UserTable from './pages/Table';
import AuthPage from './pages/Auth';

function App() {
  return (
    <div className="App">
      <AuthPage/>,
      <UserTable/>,
    </div>
  );
}

export default App;
