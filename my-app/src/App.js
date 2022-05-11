import './App.css';
import Aboutme from './component/Aboutme';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Project from './component/Projects';
import Recommendation from './component/Recommendation';
import SkillSection from './component/SkillSection';
import Title from './component/Title';
import Contact from './component/Contact';
import WriteRecommendation from './component/WriteRecommendation';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NotFound from './component/NotFound';
import ProjectPage from './component/ProjectPage';
import HomePage from './component/HomePage';
import AddProject from './component/AddProject';
import { Provider } from './component/context';
import AllProjects from './component/AllProjects';
import { v4 as uuid } from "uuid"
import ScrollToTop from './component/ScrollToTop';


function App() {
  
  return(
  <BrowserRouter>
    <Provider >
          <ScrollToTop />
        
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
         
  
          <Route exact path="/contact" element={<Contact/>} />
    
  
          <Route exact path="/write-a-recommendation" element={< WriteRecommendation />} />

          <Route exact path="/allprojects" element={<AllProjects />} />
  
          <Route exact  path="/project/add" element={<AddProject/>} />   
  
          <Route exact path="/project/:id" element={<ProjectPage />} />
  
          <Route element={< NotFound />}  />
     
        </Routes>
         <Footer />
      

    </Provider>
  </BrowserRouter>



  
  );
  
}


export default App;
