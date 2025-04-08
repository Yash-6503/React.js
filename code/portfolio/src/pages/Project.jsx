import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    const [project, setProject] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const arr = JSON.parse(localStorage.getItem("projects"));
            const p = arr?.filter((v) => v.id == id);
            setProject(p[0]);
            setLoading(false);
        }, 2000);
    }, [id])

    if (loading) {
        return (
            <div className="flex flex-col gap-y-2 justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                <h2 className='text-lg font-semibold'>Loading...</h2>
            </div>
        );
    }

    return (
        <div className='md:h-screen md:flex justify-around items-center text-left' style={{ margin: '0px 30px' }}>
            <div style={{ margin: '10px 0px' }} className='md:w-[40%]'>
                <img src={project.image} className='w-full h-50  object sm:h-90 aspect-square md:aspect-auto sm:object-contain' alt="" />

            </div>
            <div className='' style={{}}>
                <h1 className='text-2xl font-bold'>{project.name}</h1>
                <h2 className='text-xl font-semibold' style={{ margin: '10px 0px' }}>Project Description</h2>
                <ul>
                    <li>&#8226; <span className='font-medium'>Technologies Used:</span> {project.frontend}</li>
                    <li>&#8226; <span className='font-medium'>APIs:</span> {project.APIs}</li>
                    <li>&#8226; <span className='font-medium'>StateManagement:</span> {project.StateManagement}</li>
                    <li>&#8226; <span className='font-medium'>Routing:</span> {project.Routing}</li>
                    <li>&#8226; <span className='font-medium'>Styling:</span> {project.Styling}</li>
                    <li>&#8226; <span className='font-medium'>Deployment:</span> {project.Deployment}</li>
                    <li>&#8226; <span className='font-medium'>Website Link: </span>
                        <a href={project.weblink}>
                            {project.weblink}
                        </a>
                    </li>
                    <li>&#8226; <span className='font-medium'>Source Code: </span>
                        <a href={project.sourceCode}>
                            {project.sourceCode}
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default Project;
