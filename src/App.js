import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Component/Header/header';
import Home from './Page/home';

function App() {
  return (
    <div>
      <Router>
          <Header/>
          <Routes>
            <Route path ="/" element ={<Home/>} />
            {/* <Route path="/seoservices" element={<SEO/>}/> */}
          </Routes>
      </Router>    
    </div>
  );
}

export default App;
