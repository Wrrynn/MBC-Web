// src/App.jsx
import React from "react";
import Aurora from "./components/Aurora";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            {/* Konten lain di atas aurora */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    zIndex: 10,
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "3rem" }}>Welcome to My Site</h1>
                <p>Aurora background by OGL + WebGL</p>
            </div>
        </div>
    );
}

export default App;
