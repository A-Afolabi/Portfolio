import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import project4 from './assets/project-4.png'
import project3 from './assets/project-3.png'
import project2 from './assets/project-2.png'
import project1 from './assets/project-1.png'

const Projects = () => {
  return (
    <>
      <section className="projects" id="Projects">
        <br />
        <br />
        <h2>Projects</h2>
        <Carousel fade variant="dark">
          <Carousel.Item>
            <div className="p-content">
              <h3><em>Horse Outdoors</em></h3>
              <a href="https://horseoutdoors.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="d-block w-100"
                  src={project4}
                  alt=""
                />
              </a>
              <Carousel.Caption>
              </Carousel.Caption>
              <h5>
                <h6>
                  Tech used during this project:
                </h6>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>JSX</li>
                  <li>Axios</li>
                  <li>Google Font</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Python REST Framework</li>
                  <li>Pyjwt</li>
                  <li>PostgreSQL</li>
                  <li>Psycopg2</li>
                  <li>Insomnia</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Heroku</li>
                </ul>
              </h5>
              <h6>
                Paired Project - 9 Days
              </h6>
              <div className="desc">
                <p>
                  Full-Stack <b>Python</b>, <b>Django</b> and <b>React</b> app with <b>CRUD</b> functionality.
                  The two of us decided to go along the route of a horse riding app that would allow the user to search for different horse-riding vacations.
                  I worked on most of the back-end individually, particularly the relationships, REST framework and Serializers, with everything else done together.
                  For the front-end, we both worked on the majority together, but I individually built the navigation route between pages and the vacation cards functionality.
                </p>
              </div>
              <div className="bottom-links">
                <a href="https://github.com/A-Afolabi/Project-4/blob/ayo/README.md" target="_blank" rel="noopener noreferrer">ReadMe</a>
                <a href="https://horseoutdoors.herokuapp.com/" target="_blank" rel="noopener noreferrer">Open In Browser</a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-content">
              <h3><em>FaceCook</em></h3>
              <a href="https://facecook.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="d-block w-100"
                  src={project3}
                  alt=""
                />
              </a>
              <Carousel.Caption>
              </Carousel.Caption>
              <h5>
                <h6>
                  Tech used during this project:
                </h6>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>JSX</li>
                  <li>Axios</li>
                  <li>Google Font</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>JsonWebToken</li>
                  <li>Cloudinary</li>
                  <li>Insomnia</li>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Heroku</li>
                </ul>
              </h5>
              <h6>
                Group Project - 9 Days
              </h6>
              <div className="desc">
                <p>
                  Full-Stack <b>MongoDB</b>, <b>Express</b>, <b>React</b>, <b>Node.js</b> app with <b>CRUD</b> functionality.
                  Within my group, we quickly settled on an app that allows users to see and create recipes.
                  This would also have the functionality to follow, favourite, and rate recipes and users, with different serving sizes for each recipe.
                  We all worked on the back-end together before splitting up into individual pages for most of the front-end.
                  Collaboration was evident on the front-end, where I worked on most of the recipe page.
                </p>
              </div>
              <div className="bottom-links">
                <a href="https://github.com/A-Afolabi/Project-3/blob/ayo/README.md" target="_blank" rel="noopener noreferrer">ReadMe</a>
                <a href="https://facecook.herokuapp.com/" target="_blank" rel="noopener noreferrer">Open In Browser</a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-content">
              <h3><em>Disney Characters</em></h3>
              <a href="https://disneycharactersga.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img
                  className="d-block w-100"
                  src={project2}
                  alt=""
                />
              </a>
              <Carousel.Caption>
              </Carousel.Caption>
              <h5>
                <h6>
                  Tech used during this project:
                </h6>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>JSX</li>
                  <li>Axios</li>
                  <li>Bootstrap</li>
                  <li>Insomnia</li>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Netlify</li>
                </ul>
              </h5>
              <h6>
                Solo Project - 36 Hours
              </h6>
              <div className="desc">
                <p>
                  I was able to build a <b>React</b> app that used an external API.
                  This project developed confidence in my ability as I was initially concerned with what I could achieve alone in a day and a half.
                  This was also where I further developed both my time management and planning skills, which led me to sort ideas into MVPs and stretch goals.
                </p>
              </div>
              <div className="bottom-links">
                <a href="https://github.com/A-Afolabi/Project-2/blob/main/README.md" target="_blank" rel="noopener noreferrer">ReadMe</a>
                <a href="https://disneycharactersga.netlify.app/" target="_blank" rel="noopener noreferrer">Open In Browser</a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-content">
              <h3><em>Thanos Wins</em></h3>
              <div className="img-atag">
                <a href="https://a-afolabi.github.io/Project-1/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="d-block w-100"
                    src={project1}
                    alt=""
                  />
                </a>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
              <h5>
                <h6>
                  Tech used during this project:
                </h6>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Google Fonts</li>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
              </h5>
              <h6>
                Solo Project - 7 Days
              </h6>
              <div className="desc">
                <p>
                  Using <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>, I built an Avengers-themed game, based on the classic frogger game.
                  The project allowed me to put the skills learnt in 3 weeks.
                  The short timeframe taught me to prioritise my work and focus on what was essential.
                </p>
              </div>
              <div className="bottom-links">
                <a href="https://github.com/A-Afolabi/Project-1/tree/main#readme/" target="_blank" rel="noopener noreferrer">ReadMe</a>
                <a href="https://a-afolabi.github.io/Project-1/" target="_blank" rel="noopener noreferrer">Open In Browser</a>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  )
}

export default Projects