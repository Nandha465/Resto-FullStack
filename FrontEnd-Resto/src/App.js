import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mainpage from './Mainpage';
import Formlogin from './Formlogin'
import Formsignup from './Formsignup'
import Booktable from './Booktable';
import Userpage from './Userpage';

function App() {
  return (
    
    
    <div className="App">
     <BrowserRouter>
       <Routes>
       <Route path="/" element ={<Formlogin />}></Route>
       <Route path="/home" element ={<Mainpage />}></Route>
       <Route path="/signup" element ={<Formsignup />}></Route>
          <Route path="/book" element ={<Booktable />}></Route>
          <Route path="/update/:id" element ={<Booktable />}></Route>
          <Route path="/userpage" element ={<Userpage/>}></Route>
       </Routes>
       </BrowserRouter>
     </div>
     
    );
  }
  export default App;
  
