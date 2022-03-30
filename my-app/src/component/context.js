import React, { Component } from 'react'
import axios from "axios";



const Context = React.createContext();

export class Provider extends Component {
    handler = (action, newObject) => {
        switch (action) {
            case "ADD_PROJECT":
                this.setState({
                    projects: [newObject, ...this.state.projects],
                });
                break;

            case "ADD_RECOMMENDATION":
                this.setState({
                    recommendations: [newObject, ...this.state.recommendations],
                });
                break;

        }

    };



    state = {
        handler: this.handler,
        recommendations: [
            {
                id: 1,
                name: "Random",
                company: "ABC company",
                designation: "CEO",
                message: "He is a good engineer with excellent skills",
            },
            {
                id: 2,
                name: "Random guy 2",
                company: "ABC company",
                designation: "Director",
                message: "He is a lazy person",
            },
            {
                id: 3,
                name: "Random guy 3",
                company: "ABC company",
                designation: "Manager",
                message: "He is an excellent developer",
            },
            {
                id: 4,
                name: "Random guy 4",
                company: "ABC company",
                designation: "SDE",
                message: "He gets things done so quickly",
            },
        ],


        Skills: [
            {
                name: "HTML",
                activestars: 3,
                totalstars: 3,
                imageurl: "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
            },
            {
                name: "CSS",
                activestars: 3,
                totalstars: 3,
                imageurl: "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
            },
            {
                name: "JS",
                activestars: 2,
                totalstars: 3,
                imageurl: "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
            },
            {
                name: "BOOTSTRAP",
                activestars: 3,
                totalstars: 3,
                imageurl: "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
            },
            {
                name: "REACT",
                activestars: 2,
                totalstars: 3,
                imageurl: "https://storage.googleapis.com/unschool-portfolio-website/react.png",
            },
            {
                name: "PYTHON",
                activestars: 3,
                totalstars: 3,
                imageurl: "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
            },
            {
                name: "MYSQL",
                activestars: 3,
                totalstars: 3,
                imageurl: "https://storage.googleapis.com/unschool-portfolio-website/python.png",
            },
            {
                name: "FLASK",
                activestars: 3,
                totalstars: 3,
                imageurl: "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
            },
        ],

        projects: [
            {
                id: 1,
                title: "Project 1",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                excerpt: "This is my project about ....",
                body: "Body 1",
            },
            {
                id: 2,
                title: "Project 2",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
                excerpt: "This is my project about ....",
                body: "Body 2",
            },
            {
                id: 3,
                title: "Project 3",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
                excerpt: "This is my project about ....",
                body: "Body 3",
            },
            {
                id: 4,
                title: "Project 4",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
                excerpt: "This is my project about ....",
                body: "Body ",
            },
        ],
    };
    async componentDidMount() {
        const [
            responseRecommendations,
            responseSkills,
            responseProjects,

        ] = await Promise.all([
            axios.get("http://127.0.0.1:9000/api/recommendations"),
            axios.get("http://127.0.0.1:9000/api/skills"),
            axios.get("http://127.0.0.1:9000/api/projects"),
            axios.get("http://127.0.0.1:9000/api/blogs"),
        ]);

        const newState = {};
        if (
            responseRecommendations.data.isSuccessful &&
            responseRecommendations.data.results.length !== 0
        ) {
            newState.recommendations = responseRecommendations.data.results;
        }

        if (
            responseSkills.data.isSuccessful &&
            responseSkills.data.results.length !== 0
        ) {
            newState.skills = responseSkills.data.results;
        }

        if (
            responseProjects.data.isSuccessful &&
            responseProjects.data.results.length !== 0
        ) {
            newState.projects = responseProjects.data.results;
        }


        this.setState(newState);
    }

    render() {
        return (

            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}


export const Consumer = Context.Consumer;