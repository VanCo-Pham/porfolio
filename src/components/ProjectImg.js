import React from 'react'

const ProjectImg = ({data}) => {
    var count = 0;
    return (
        <div>
        {data.map( project => (
            <article className="project" key={project.id} data-aos="flip-left">
               <span> {count = count + 1}</span>
            {
                count % 2 === 0 ? (
                    <>
                    <div className="project-description" >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                            
                    </div>  
                    <img  src={project.src} alt=""/>
                    </>
                    ) : (
                    <>    
                    <div className="project-image">
                    <img  src={project.src} alt=""/>
                    </div>
                    <div className="project-description" >
                        <h2>{project.title}</h2>
                        <p>{project.description}..</p>
                        <a href="https://vanco-pham.github.io/responsiveWeb/" target="_blank" rel="noreferrer">Visit the website.</a>
                    </div>
                    </>
                    )
            }  
        </article>
        ))}
        </div>
    );
}

export default ProjectImg