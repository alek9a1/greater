import React from "react";
import ReactHtmlParser from 'react-html-parser';
import {
    Link
  } from "react-router-dom";

let SingleContent = (props) => {
    var item = props.item;
    let styles = {
        backgroundImage: 'url('+item._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url+')'
    };
    return (
        <div className="single-news shadow">
            <div className="sn-image" style={styles}></div>
            <div className="pSmall">
                <h3>{item.title.rendered}</h3>
                <div>{ReactHtmlParser(item.excerpt.rendered)}</div>
            </div>
            <Link className="btn-first mt-auto align-self-start ml-30" to={`/blog/${item.slug}`}>Więcej</Link>
        </div>
    )
}

export default SingleContent;