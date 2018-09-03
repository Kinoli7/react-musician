import React, { Component } from 'react';

class Cms extends Component {

    constructor(){
        super();
    }

    getDashboard() {
    fetch('https://orchestra.pangea.org/api/', {
            method: 'get',
            headers: {
                'Authorization': 'Token '+ this.props.token }
        })
        .then(response => response.json())
        .then(json =>
            {
                console.log("Then")
                console.log(json)
            })
        .catch(error => {
            console.log("Error")
            console.log(error)
        })
    }

    render() {

        this.getDashboard()
        
        return (
            <h1>Dashboard</h1>    
        )
    }    

}

export default Cms;