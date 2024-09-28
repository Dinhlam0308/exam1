
import React, { useEffect, useState } from 'react';
import MyClipData from './MyClip.json';

const Body = () => {
    const [clips, setClips] = useState([]);

    useEffect(() => {
        setClips(MyClipData);
    }, []);

    return (
        <div className="body">
            <h2>My Clips</h2>
            {clips.map((clip, index) => (
                <div key={index} className="clip">
                    <video width="300" controls>
                        <source src={clip.source_clip} type="video/mp4" />
                    </video>
                    <h3>{clip.title}</h3>
                    <p>{clip.description}</p>
                    <img src={clip.start} alt="Rating" />
                </div>
            ))}
        </div>
    );
};

export default Body;
