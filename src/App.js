import './App.css';
import UserIdForm from './components/UserIdForm';
import UserNameForm from './components/UserNameForm';



function App() {
  return (
    <div className="d-flex justify-content-center">
    <UserIdForm/>
    <UserNameForm/>
    </div>
  );
}

export default App;
