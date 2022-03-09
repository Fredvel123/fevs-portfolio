import React, { useEffect, useRef, useState } from 'react';
// styled componets
import { ProjectsStyles, Text } from '../../styles/work/projects';
// images
import notesApp from '../../images/notes-app.jpg'
import gameApp from '../../images/game-app.jpg'
import eCommApp from '../../images/eCommerce-app.jpg'
import photosApp from '../../images/photos-app.jpg'
import movieApp from '../../images/movie-app.jpg'
import dogApp from '../../images/dog-app.jpg'
import notesExpress from '../../images/notes_express.jpg'
// icons
import {RightOutlined, ArrowRightOutlined, ArrowLeftOutlined, InstagramFilled} from '@ant-design/icons';

function Projects() {
  const projects = [ 
    {
      id: '1',
      info: "App Web",
      img_id: "notesApp",
      title: "Notes App ",
      img: notesApp,
      text: "I made this little app to add new tasks and you also can get a Random Quote from Quotes APi ",
      github: "https://github.com/Fredvel123/notes-app",
      url: "https://notes-app-freddvel.netlify.app",
      tech: "React Router, Redux(toolkit), styled components, local storage, hooks, functional components"
    },
    {
      id: '2',
      info: 'FullStack App Web',
      img_id: 'notesAppExpress',
      title: "Notes App with express",
      img: notesExpress,
      text: "This app has a LogIn and SignUp section, where you can create you own user, this app also has a backend and database created in ExpressJs/NodeJs and MongoDb. It's kind of fullstack app",
      github: "https://github.com/Fredvel123/note_app_frontend",
      url: "https://notes-app-fredd.netlify.app/",
      tech: "ExpressJs, NodeJs, React Router, Redux(toolkit), styled components, local storage, hooks, functional components"
    },
    {
      id: '3',
      img_id: "gamesApp",
      info: "web Site",
      title: "Games App ",
      img: gameApp,
      text: "Games Info App, you can search any game and get the info from the RAWG API",
      github: "https://github.com/Fredvel123/Fredvel123.GameInfo.github.io",
      url: "https://gameinfoapi.netlify.app",
      tech: "UseContext, styled components, hooks, functional components, api Call"
    },
    {
      id: '4',
      img_id: "eCommerceApp",
      info: "App Web",
      title: "e Commerce App",
      img: eCommApp,
      text: 'I made a small application that allows you to "buy things". I used an API that provides you with a Fake Online Store.',
      github: "https://github.com/Fredvel123/e-commerce",
      url: "https://e-commerce-fredvel.netlify.app",
      tech: "Redux(toolkit), styled components, hooks, functional components, api Call"
  
    },
    {
      id: '5',
      img_id: "App Web",
      info: "unsplush",
      title: "Unsplusssh ",
      img: photosApp,
      text: "This is an app SPA (Single Page Aplication) to search photograph from the Unsplash API.",
      github: "https://github.com/Fredvel123/unsplush-app",
      url: "https://unsplusssh-app.netlify.app",
      tech: "UseContext, styled components, hooks, functional components, api Call"
    },
    {
      id: '6',
      img_id: "movieApp",
      info: "Web Site",
      title: "Movie App",
      img: movieApp,
      text: "This Movie App is made to search information about any movie, you can search your favorite movie and get information about: Actors, director, etc",
      github: "https://github.com/Fredvel123/MoviesOMDB-app",
      url: "https://movie-app-freddvel.netlify.app",
      tech: "React Router, useContext, styled components, hooks, functional components"
    },
    {
      id: '7',
      img_id: "dogApp",
      info: "Web Site",
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
    const value = projects.length - 2;
    if(count.current <= value ) {
      count.current += 1;
    }else {
      count.current = 0
    }
    // this is a combination beetwen css and javascript
    setTimeout(() => {
      setProject(projects[count.current])
    }, 700);
    imageAnimation();
    // code to remove the class visible
    const img = document.getElementById(`${project.img_id}`);
    img.classList.remove('visible')
  }
  const afterPage = () => {
    if(count.current >= 1 ) {
      count.current -= 1
    }else {
      count.current = projects.length - 1
    }
    // this is a combination beetwen css and javascript
    setTimeout(() => {
      setProject(projects[count.current])
    }, 700); // this setTimeout should be the same time (in this case 7 seconds). eiht the animation in css
    imageAnimation();
    // code to remove the class visible
    const img = document.getElementById(`${project.img_id}`);
    img.classList.remove('visible')
  }
  const color = {
    color: 'white',
    fontSize: '20px'
  }
  // images animation
  
  const callback = (observer) => {
    if(observer[0].isIntersecting) {
      setTimeout(() => {
        // observer[0].target.classList.remove('invisible');
        observer[0].target.classList.add('visible');
      }, 700);
    }else {
      observer[0].target.classList.remove('visible');
    }
  }
  const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.3
    }
  const element = useRef(null);
  const imageAnimation = () => {
    const observer = new IntersectionObserver(callback, options);
    // if(project.length > 0) {
    //   observer.observe(document.getElementById(`${project.img_id}`))
    // }else {
    // }
    observer.observe(element.current)
  }
  useEffect(() => {
    imageAnimation();
  }, []);
  
  return (
    <ProjectsStyles>
      <Text >
        <div className='buttons'>
          <button id='after' onClick={afterPage} ><ArrowLeftOutlined style={color} /></button>
          <h2> {`0${project.id}/06`} </h2>
          <button id='next' onClick={nextPage} ><ArrowRightOutlined style={color} /></button>
        </div>
        <h3>{project.title}</h3>
        <p>{project.info}</p>
        <h4>{project.text}</h4>
        <a className='github' href={project.github} target='__blank' >
          view code
          <RightOutlined />
        </a>
        <a href={project.url} target='__blank' >
          view demo
          <RightOutlined />
        </a>
      </Text>
      <img src={project.img} ref={element} id={project.img_id} alt="" />
    </ProjectsStyles>
  );
}

export default Projects;
