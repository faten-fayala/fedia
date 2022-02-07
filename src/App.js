import logo from './logo.svg';
import './App.css';
import Navbare from './Navbare';
 import FullName from './Component/Profile/FullName';
import Adresse from './Component/Profile/Adresse';
import Profil from './Component/Profile/Profil';


function App() {
  const lastname="foulen"
  const age="20"
  const alertme=()=>{
    alert("wassim")
  }
  return (
    <div className="App">
      <Navbare/>
    <FullName la9ab={lastname} amor={age} alertme={alertme}/>
    <Adresse/>
    <Profil/>
    </div>
  );
}

export default App;
