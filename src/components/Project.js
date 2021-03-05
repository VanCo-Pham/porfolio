import React from 'react'

const ProjectVideo = ({data}) => {
    var count = 0;
    return (
        <>
        {data.map( project => (
            <article className="project" key={project.id} data-aos="flip-left">
                <span> {count += 1}</span>
            {
                count % 2 === 0 ? (
                    <>
                    <div className="project-description" >
                        <h2>{project.title}</h2>
                        <p>{project.description} </p>
                    </div>
                    <div className="iframe-container">{project.video}</div>
                    </>
                    ) : (
                    <>    
                        <div className="iframe-container">{project.video}</div>
                    <div className="project-description" >

                        <h2>{project.title}</h2>
                        <p>{project.description} </p>
                    </div>
                    </>
                    )

            }
        </article>
        ))}
        </>
    );
}

export default ProjectVideo