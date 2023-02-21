import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainContainerComponent from './MainContainerComponent';
// import ProductContext from "./ProductContextProvider";



function App() {
  return (
    // <ProductContext>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/:id" element=
          
              {<MainContainerComponent/>}
            
            />
          </Routes>

        </div>
      </Router>,
    {/* </ProductContext> */}
  );
}

export default App;
