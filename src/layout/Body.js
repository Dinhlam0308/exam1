import React, { useEffect, useState } from 'react';
import MyClipData from './MyClip.json';
import './Body.css';

const Body = () => {
    const [clips, setClips] = useState([]);

    useEffect(() => {
        setClips(MyClipData);
    }, []);

    return (
        <div className="body">
            <div className="header-section">
                <h2>My Clip</h2>
                <img src="star/3start.png" alt="Ranking" className="ranking" />
            </div>
            <div className="video-container">
                {clips.length > 0 && (
                    <video width="600" controls>
                        <source src={clips[0].source_clip} type="video/mp4" />
                    </video>
                )}
            </div>
            <div className="side-video-container">
                <div className="side-videos">
                    {clips.slice(1, 3).map((clip, index) => (
                        <div key={index} className="clip">
                            <video width="300" controls>
                                <source src={clip.source_clip} type="video/mp4"/>
                            </video>
                            <h3>{clip.title}</h3>
                            <img src={clip.start} alt="Rating"/>
                            <div className="description">
                                <p>{clip.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="side-videos">
                    {clips.slice(3, 5).map((clip, index) => (
                        <div key={index} className="clip">
                            <video width="300" controls>
                                <source src={clip.source_clip} type="video/mp4"/>
                            </video>
                            <h3>{clip.title}</h3>
                            <img src={clip.start} alt="Rating"/>
                            <div className="description">
                                <p>{clip.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
