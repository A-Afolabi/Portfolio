import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import project2 from './assets/project-2.png'
import project1 from './assets/project-1.png'

const Projects = () => {
  return (
    <>
      <section className="projects" id="Projects">
        <br />
        <br />
        <h2>Projects</h2>

        <Carousel fade>

          <Carousel.Item>
            <div className="p-content">
              <h3><em>Horse Outdoors</em></h3>
              <img
                className="d-block w-100"
                src=""
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
              <h5>
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
              <p>
                Horse Outdoors is intended to be a place where a user can view different horse riding holidays and activities in different countries around the world.
                As well as this, users will be able to post reviews on destinations, log in and out, add an event, and have their own profile page.
              </p>
              <div className="readme">
                <p>...ReadMe...</p>
              </div>
            </div>
          </Carousel.Item>


          <Carousel.Item>
            <div className="p-content">
              <h3><em>FaceCook</em></h3>
              <img
                className="d-block w-100"
                src=""
                alt=""
              />
              <Carousel.Caption>
              </Carousel.Caption>
              <h5>
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
              <p>
                FaceCook is a social media application with the main purpose being the ability to share and see other recipes.
                Without the need to log in, users can search and browse through recipes.
                With an account and logged in, the additional features a user gets are the ability to create and edit a recipe, leave comments, like recipes and follow other faceCook users.
                In addition, the ability to customise their own profile page, create meal plans and even generate shopping lists.
              </p>
              <div className="readme">
                <p>...ReadMe...</p>
              </div>
            </div>
          </Carousel.Item>


          <Carousel.Item>
            <div className="p-content">
              <h3><em>Disney Characters</em></h3>
              <a href="https://disneycharactersga.netlify.app/">
                <img
                  className="d-block w-100"
                  src={project2}
                  alt=""
                />
              </a>
              <Carousel.Caption>
              </Carousel.Caption>
              <h5>
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
              <p>
                Disney Characters is a React app where the user has the ability to select a character and see all the films, video games, park attractions, etc., related to that character.
                This included using an external API.
              </p>
              <div className="readme">
                <p>...ReadMe...</p>
              </div>
            </div>
          </Carousel.Item>


          <Carousel.Item>
            <div className="p-content">
              <h3><em>Thanos Wins</em></h3>
              <div className="img-atag">
                <a href="https://a-afolabi.github.io/Project-1/">
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
              <div className="info">
                <p>
                  After quickly settling on Frogger as my game of choice, I started to think about how I could add my theme and how it would work, following the same principles as frogger.
                  This led me to an Avengers-themed game, but the player is playing as Thanos and seeking the infinity stones at the top of the grid.
                  Like frogger there would be obstacles, these being the Avengers (heroes) trying to stop him.
                </p>
                <div className="readme">
                  <p>...ReadMe...</p>
                </div>
              </div>
            </div>
          </Carousel.Item>

        </Carousel>

      </section>
    </>
  )
}

export default Projects