import React from "react";
import PostCard from "./PostCard"

const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <PostCard/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;