import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    const [project, setProject] = useState({})
    const {id} = useParams()
    useEffect(() => {
        console.log(id);
        const arr = JSON.parse(localStorage.getItem("projects"))
        console.log(arr);
        const p = setProject(arr.filter((v) => v.id == id));
        console.log(p);
        // setProject(p);
    },[id])
    return (
        <div>
            {/* <img src={project.image} alt="" /> */}
            <h1>{project.name}</h1>
            
            
        </div>
    );
};

export default Project;
