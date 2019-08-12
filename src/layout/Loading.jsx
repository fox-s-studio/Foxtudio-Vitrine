import React from 'react';

function Loading() {
    return(
        <div className="Loading">
            <svg id="rectangle" viewBox="-3 -4 39 39">
                <polygon points="16,0 32,32 0,32">
                </polygon>
            </svg>
            <p>FoxStudio</p>
        </div>
    );
};

export default Loading;