import './App.css';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn'
import HeaderComp from './Components/header/HeaderComp';

import Dashboard from '../src/pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     {/* <SignUp/> */}
     {/* <SignIn/> */}
     <Dashboard/>
     {/* <TakeNoteThree/> */}
    </div>
  );
}

export default App;
