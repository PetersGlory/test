import React, { useState } from "react"
import "./SelectionBox.css"

export const Sidenav =()=>{
    const [color, setColor] = useState(false)
    // const box = document.getElementsByClassName(".box")
    const handleDrag =(e)=>{
        e.preventDefault();
        setColor(true);
       if (color ===true) {
        e.target.style.background = 'blue';
       }
    }
    const handleDrop = () =>{
        var elements = document.getElementsByClassName("box");
        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].style.background = "white";
            setColor(false)
        }
    }
    return (
        <div className="root">
            <div className="row">
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
            </div>
            <div className="row">
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
            </div>
            <div className="row">
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
            </div>
            <div className="row">
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
            </div>
            <div className="row">
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
                <div className="box" onDragOver={handleDrag} onDrop={handleDrop} />
            </div>
      </div>
    )
}
