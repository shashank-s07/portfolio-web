import { Component } from "react";

class Contact extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            description:"",
            submitMessage:"",
            submitMessageTextColour:"",
        };
        
        }
        onChange = (event) =>{
            this.setState({
                [event.target.name]: event.target.value,
            });
        };

        onSumbit= (event)=>{
            event.preventDefault();


            let isSuccessful =true;
            const{name}=this.state;
            if(isSuccessful)
            {
                this.setState({
                    submitMessage:`Thank you ${name}.I will contact you soon!!`,
                    submitMessageTextColour:"text-info"
                });
            }else {
                this.setState({
                    submitMessage:"Oops! Something went wrong .Please try again later :(",
                    submitMessageTextColour:"text-danger"
                });
            }
        };
    
   
    render(){
        const{submitMessageTextColour,submitMessage}=this.state;
        return(
            <div className="container my-5">
                <h1 className="font-weight-light text-center py-5">
                    <span className="text-info">Thank you!</span>for your interest 
                </h1>
                <div className="d-flex flex-row  justify-content-center">
                    <div className="col-11 col-lg-5">
                        <form onSubmit={this.onSumbit} >
                            <div className="form-group">
                                <label htmlFor="name">Name*</label>
                                <input type="text" name="name" id="name" className="form-control" onChange={this.onChange}/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input type="email" name="email" id="email" className="form-control" onChange={this.onChange} />
                            </div>
                            

                        
                            <div className="form-group">
                                <label htmlFor="description">Tell me about your project *</label>
                                <textarea name="description" id="description"  className="form-control" rows="5" onChange={this.onChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark float-right" style={{backgroundColor:"black"}}>
                                Let's talk 
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
export default Contact;