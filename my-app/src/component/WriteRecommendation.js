
import { Component } from "react";
import { Consumer } from "./context";
import {v4 as uuid} from "uuid";

class WriteRecommendation extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            company:"",
            designation:"",
            recommendationMessage:"",
            submitMessage:"",
            submitMessageTextColour:"",
        };
        
        }
        onChange = (event) =>{
            this.setState({
                [event.target.name]: event.target.value,
            });
        };

        onSumbit= (handler,event)=>{
            event.preventDefault();

            let isSuccessful =true;
            const{name}=this.state;
            if(isSuccessful)
            {
                this.setState({
                    submitMessage:`Thank you ${name} for the recommendation!! I really appreciate it!!`,
                    submitMessageTextColour:"text-info"
                });
            }else {
                this.setState({
                    submitMessage:"Oops! Something went wrong .Please try again later :(",
                    submitMessageTextColour:"text-danger"
                });
            }

            const newRecommendation={
                id: uuid(),
                name:this.state.name,
                company:this.state.company,
                designation:this.state.designation,
                message:this.state.recommendationMessage,
            };

            handler("ADD_RECOMMENDATION",newRecommendation);
        };
    
   
    render(){
        return <Consumer>
            {value => {
                      const{submitMessageTextColour,submitMessage}=this.state;
                      const {handler}=value;

                      return(
                          <div className="container my-5">
                              <h1 className="font-weight-light text-center py-5">
                                  <span className="text-info">Thank you!</span>for your taking your time! 
                              </h1>
                              <div className="d-flex flex-row  justify-content-center">
                                  <div className="col-11 col-lg-5">
                                      <form onSubmit={this.onSumbit.bind(this,handler)} >
                                          <div className="form-group">
                                              <label htmlFor="name">Name*</label>
                                              <input type="text" name="name" className="form-control" required onChange={this.onChange}/>
                                          </div>
                                          <div className="form-group">
                                              <label htmlFor="email">Email*</label>
                                              <input type="email" name="email" className="form-control" required onChange={this.onChange} />
                                          </div>
              
                                          <div className="form-group">
                                              <label htmlFor="company">Company/Institution*</label>
                                              <input type="text" name="company" className="form-control" required onChange={this.onChange}/>
                                          </div>
              
                                          <div className="form-group">
                                              <label htmlFor="Designation">Designation*</label>
                                              <input type="text" name="designation" className="form-control" required onChange={this.onChange}/>
                                          </div>
              
                                          <div className="form-group">
                                              <label htmlFor="recommendationMessage">Recommendation *</label>
                                              <textarea name="recommendationMessage"   className="form-control" rows="5" required onChange={this.onChange}></textarea>
                                          </div>
                                          <button type="submit" className="btn btn-dark float-right" style={{backgroundColor:"black"}}>
                                              Thank you 
                                          </button>
                                      </form>
                                  </div>
                              </div>
              
                              <div className="py-5 mx-2 text">
                                  <h5 className={submitMessageTextColour}>{submitMessage}</h5>
              
                              </div>
                          </div>
                          
                          
                         
                      )
                  }
              
            }
        </Consumer>

    }
  
}
export default WriteRecommendation;

