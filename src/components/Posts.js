import React from "react";
import '../css/Posts.css';

export function Posts(){

    

    return(
        <div className="post">
            <div className="box">
                <div className="post-img">
                    <img className="post-logo"  src={ require('../images/html.jpg') }  alt="" />
                </div>
                <div className="post-detail">
                    <p>HTML</p>
                </div>
            </div>
            <div className="box">
                <div className="post-img">
                    <img className="post-logo"  src={ require('../images/css.jpg') }  alt="" />
                </div>
                <div className="post-detail">
                    <p>CSS</p>
                </div>
            </div>
            <div className="box">
                <div className="post-img">
                    <img className="post-logo"  src={ require('../images/js.jpg') }  alt="" />
                </div>
                <div className="post-detail">
                    <p>Java Script</p>
                </div>
            </div>

            <div className="box">
                <div className="post-img">
                    <img className="post-logo"  src={ require('../images/react.jpg') }  alt="" />
                </div>
                <div className="post-detail">
                    <p>React</p>
                </div>
            </div>
            <div className="box">
                <div className="post-img">
                    <img className="post-logo"  src={ require('../images/php.jpg') }  alt="" />
                </div>
                <div className="post-detail">
                    <p>PHP</p>
                </div>
            </div>
            <div className="box">
                <div className="post-img">
                    <img className="post-logo"  src={ require('../images/mssql.jpg') }  alt="" />
                </div>
                <div className="post-detail">
                    <p>SQL Server</p>
                </div>
            </div>

            <div className="box">
                <div className="post-img">
                    <img className="post-logo"  src={ require('../images/mysql.png') }  alt="" />
                </div>
                <div className="post-detail">
                    <p>My SQL</p>
                </div>
            </div>
        </div>
    );
}
