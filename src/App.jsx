import Counter from "./component/Counter.jsx"
import Navbar from "./component/navbar.jsx"
import Home from "./component/hooks/Home.jsx"
import { Routes, Route } from "react-router-dom";
import About from "./component/hooks/About.jsx"; // Assuming you have an About component
import Hooks from "./component/hooks/Hooks.jsx";
import Contact from "./component/Contact.jsx";
import State from "./component/hooks/State.jsx";  
import Effect from "./component/hooks/Effect.jsx";
import Ref from "./component/hooks/Ref.jsx";
import Login from "./component/hooks/Login.jsx";
import Reducer from "./component/hooks/Reducer.jsx";


const App = () => {
  var fruits = ["Apple", "Banana", "Cherry"];
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={fruits} />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/state" element={<State />} />
        <Route path='/effect' element={<Effect />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ref' element={<Ref />}/>
        <Route path='/reducer' element={<Reducer />} />
        {/* Add more routes as needed */}
      </Routes>
    </>


  )
}
export default App