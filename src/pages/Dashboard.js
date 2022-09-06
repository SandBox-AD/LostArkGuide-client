import React, { Component } from "react";
import { hasAuthenticated } from "../services/AuthApi";
class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: null,
            setIsAuthenticated: null
        };
        this.setState(hasAuthenticated())
      }
    render() {
        return (
            <div>
                <header>
                    <h2>Dashboard</h2>
                </header>
            </div>
            // <Login />
        );
    }
};
export default Dashboard;