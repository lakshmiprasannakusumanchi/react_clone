import Nav from './Nav';
import About from './components/About';
import { Coll } from './components/Coll';
import Contact from './components/Contact';
import Men from './components/Men';
import Sne from './components/Sne';
import Women from './components/Women';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
   <div>
     <Nav/>
    <Routes>
    <Route path='/' element={<Sne/>}></Route>
    <Route path='Coll' element={<Coll/>}></Route>
    <Route path='Men' element={<Men/>}></Route>
    <Route path='Women' element={<Women/>}></Route>
    <Route path='About' element={<About/>}></Route>
    <Route path='Contact' element={<Contact/>}></Route>
    </Routes>
   </div>
  );
}

export default App;
