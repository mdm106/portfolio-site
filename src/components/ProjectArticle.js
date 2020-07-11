import React from "react";

const ProjectArticle = ({ title, image, skills, para1, para2, repoName, githubAvail, projectLink, linkAvail}) => (
            <article className="project-article">
                <h6 className="project-title">{title}</h6>
                <img className="project-image" src={image} alt={`Screenshot of ${title} project`}></img>
                <p className="main-text project-skills"><strong>{skills}</strong></p>
                <p className="main-text project-text">{para1}</p>
                {para2 ? 
                <p className="main-text project-text">{para2}</p> : null}
                <div className="project-links">
                    {githubAvail ?
                    <a href={`https://github.com/mdm106/${repoName}`}>
                        <i className="fab fa-github fa-2x"></i> 
                    </a>
                    : null}
                    {linkAvail ? 
                    <a href={projectLink}>
                        <i className="fas fa-link fa-2x"></i>
                    </a>
                    : null}
                </div>
            </article>

)

export default ProjectArticle
