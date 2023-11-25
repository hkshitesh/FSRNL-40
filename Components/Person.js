import React, { Component } from "react";
import { Man } from "./Man";
class Person extends Component {
    render(){
        return(
            <div> 
                <div> Name: John Smith</div>
                <div>Salary :1000$</div>
                <Man></Man>
            </div>
        );
    }
}

export default Person;