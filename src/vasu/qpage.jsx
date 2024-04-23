import React, { useEffect } from "react";
import Granim from "granim";

const QPage = () => {
    useEffect(() => {
        new Granim({
            element: "#logo-canvas",
            direction: "left-right",
            opacity: [1, 1],
            states : {
                "default-state": {
                    gradients: [
                        ["#ffccff", "#800080"],
                        ["#ffb3ff", "#cc00cc"],
                        ["#db4dff", "#8f00b3"],
                        ["#ffb3e6", "#cc0088"],
                        ["#ff99cc", "#ff66b3"],
                        ["#ffccff", "#ffcccc"],
                    ],
                    transitionSpeed: 10000,
                }
            }
        })
    }, [])
    
    return (
        <div className="bloc-logo">
            <canvas id="logo-canvas" style={{ width: '100%', height: '100%' }} />
            <div className="logo-mask"> </div>
        </div>
    );
};

export default QPage;
