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
import {BrowserRouter,Route,Switch} from "react-router-dom";
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
    <Provider >
          <BrowserRouter>
          <ScrollToTop />
        
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
         
  
          <Route exact path="/contact" component={Contact} />
    
  
          <Route exact path="/write-a-recommendation" component={WriteRecommendation} />

          <Route exact path="/allprojects" component={AllProjects} />
  
          <Route exact  path="/project/add" component={AddProject} />   
  
          <Route exact path="/project/:id" component={ProjectPage} />
  
          <Route component={NotFound} />
     
        </Switch>
         <Footer />
      
      </BrowserRouter>

    </Provider>



  
  );
  
}


export default App;
