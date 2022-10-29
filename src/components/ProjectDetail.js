import React from "react";
import '../css/ProjectDetail.css';

export function ProjectDetail() {
    
    return(
        <div>
             <div className="ProjectDetail-container">
                <div className="ProjectDetail-canvas">
                    <div className="ProjectDetail-box">
                        <img className="ProjectDetail-img" src={ require('../images/css.png' ) } alt="" />
                        <div className="ProjectDetail-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem amet asperiores reprehenderit neque. Tempora, voluptas ad? Culpa sit distinctio, aliquid molestias provident est accusamus amet illum ipsum dolorum corporis?
                            </p>
                        </div>
                    </div>
                    <div className="ProjectDetail-box">
                        <img className="ProjectDetail-img" src={ require('../images/mssql.png' ) } alt="" />
                        <div className="ProjectDetail-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem amet asperiores reprehenderit neque. Tempora, voluptas ad? Culpa sit distinctio, aliquid molestias provident est accusamus amet illum ipsum dolorum corporis?
                            </p>
                        </div>
                    </div>
                    <div className="ProjectDetail-box">
                        <img className="ProjectDetail-img" src={ require('../images/php.jpg' ) } alt="" />
                        <div className="ProjectDetail-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem amet asperiores reprehenderit neque. Tempora, voluptas ad? Culpa sit distinctio, aliquid molestias provident est accusamus amet illum ipsum dolorum corporis?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}