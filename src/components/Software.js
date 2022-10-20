import React from "react";
import '../css/Software.css';

export function Software() {
    
    return(
        <div>
             <div className="Software-container">
                <div className="Software-canvas">
                    <div className="Software-box">
                        <p className="Software-title">อื่นๆ</p>
                        <div className="cal-grad">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/AHmCH7iB_IM`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}