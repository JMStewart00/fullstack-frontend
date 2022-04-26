import './App.css';
import { Outlet } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import NavBar from './components/NavBar';


function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
