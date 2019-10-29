import React, { Component } from "react";

let Loading = () => {
    return (
        <div className="loading">
            <div className="loadingcontent">
            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}

export default Loading;