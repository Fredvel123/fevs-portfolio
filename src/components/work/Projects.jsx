import React, { useEffect, useRef, useState } from 'react';
// styled componets
import { ProjectsStyles } from '../../styles/work/projects';
// images
import notesApp from '../../images/notes-app.jpg'
import gameApp from '../../images/game-app.jpg'
import eCommApp from '../../images/eCommerce-app.jpg'
import photosApp from '../../images/photos-app.jpg'
import movieApp from '../../images/movie-app.jpg'
import dogApp from '../../images/dog-app.jpg'
// icons
import {ArrowRightOutlined, ArrowLeftOutlined} from '@ant-design/icons';

function Projects() {
  const projects = [ 
    {
      id: '1',
      title: "Notes App ",
      img: notesApp,
      text: "I made this little app to add new tasks and you also can get a Random Quote from Quotes APi ",
      github: "https://github.com/Fredvel123/notes-app",
      url: "https://notes-app-freddvel.netlify.app",
      tech: "React Router, Redux(toolkit), styled components, local storage, hooks, functional components"
    },
    {
      id: '2',
      title: "Games App ",
      img: gameApp,
      text: "Games Info App, you can search any game and get the info from the RAWG API",
      github: "https://github.com/Fredvel123/Fredvel123.GameInfo.github.io",
      url: "https://gameinfoapi.netlify.app",
      tech: "UseContext, styled components, hooks, functional components, api Call"
    },
    {
      id: '3',
      title: "e Commerce App",
      img: eCommApp,
      text: 'I made a small application that allows you to "buy things". I used an API that provides you with a Fake Online Store.',
      github: "https://github.com/Fredvel123/e-commerce",
      url: "https://e-commerce-fredvel.netlify.app",
      tech: "Redux(toolkit), styled components, hooks, functional components, api Call"
  
    },
    {
      id: '4',
      title: "Unsplusssh ",
      img: photosApp,
      text: "This is an app SPA (Single Page Aplication) to search photograph from the Unsplash API.",
      github: "https://github.com/Fredvel123/unsplush-app",
      url: "https://unsplusssh-app.netlify.app",
      tech: "UseContext, styled components, hooks, functional components, api Call"
    },
    {
      id: '5',
      title: "Movie App",
      img: movieApp,
      text: "This Movie App is made to search information about any movie, you can search your favorite movie and get information about: Actors, director, etc",
      github: "https://github.com/Fredvel123/MoviesOMDB-app",
      url: "https://movie-app-freddvel.netlify.app",
      tech: "React Router, useContext, styled components, hooks, functional components"
    },
    {
      id: '6',
      title: "Search Dog App",
      img: dogApp,
      text: "This is a very simple app, but this is consuming another Api, and I love to consume APIs",
      github: "https://github.com/Fredvel123/FredVel123.github.io",
      url: "https://dogapi-freddyvelarde.netlify.app/",
      tech: "Hooks, functional components, api Call"
    }
  ]
  const [project, setProject] = useState({});
  const count = useRef(0);

  useEffect(() => {
    setProject(projects[count.current]);
  }, []);  
  const nextPage = () => {
    if(count.current <= 4) {
      count.current += 1;
    }else {
      count.current = 0
    }
    setProject(projects[count.current])
  }
  const afterPage = () => {
    if(count.current >= 1 ) {
      count.current -= 1
    }else {
      count.current = 5
    }
    setProject(projects[count.current])
  }
  return (
    <ProjectsStyles>
      <h2>projects</h2>
      {project ?
        <div>
          <h2>{project.title}</h2>
      <img src={project.img} width={500} alt="" />
        </div>
      : null }
      <button id='next' onClick={nextPage} ><ArrowRightOutlined /></button>
      <button id='after'onClick={afterPage} ><ArrowLeftOutlined /></button>

    </ProjectsStyles>
  );
}

export default Projects;
