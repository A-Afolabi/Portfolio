import React from 'react'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import vsCode from './assets/vsCode.png'
import react from './assets/react.png'
import sass from './assets/sass.png'
import node from './assets/nodeJS.png'
import insomnia from './assets/insomnia.png'
import python from './assets/python.png'
import bootstrap from './assets/bootstrap.svg'
import trello from './assets/trello.png'
import mongo from './assets/mongoDB.png'
import tp from './assets/tablePlus.png'
import sql from './assets/postgreSQL.png'
import express from './assets/express.png'
import npm from './assets/npm.png'
import slack from './assets/slack.png'
import github from './assets/github.png'
import git from './assets/git.png'
import django from './assets/django.png'
import jquery from './assets/jQuery.png'
// import ts from './assets/typescript.png'

const Skills = () => {
  return (
    <section className="skills" id="Skills">
      <br />
      <br />
      <h2>Skills</h2>
      <h5><em>Confident: </em></h5>
      <div className="icons-h4">
        <div className="confident">
          <div className="icon">
            <img className="image" src={html} alt="" />
            <div className="content">
              <div className="text">HTML5</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={css} alt="" />
            <div className="content">
              <div className="text">CSS3</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={js} alt="" />
            <div className="content">
              <div className="text">JavaScript</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={vsCode} alt="" />
            <div className="content">
              <div className="text">VS Code</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={react} alt="" />
            <div className="content">
              <div className="text">ReactJS</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={sass} alt="" />
            <div className="content">
              <div className="text">SASS</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={node} alt="" />
            <div className="content">
              <div className="text">NodeJS</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={mongo} alt="" />
            <div className="content">
              <div className="text">MongoDB</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={insomnia} alt="" />
            <div className="content">
              <div className="text">Insomnia</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={python} alt="" />
            <div className="content">
              <div className="text">Python</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={bootstrap} alt="" />
            <div className="content">
              <div className="text">Bootstrap</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={trello} alt="" />
            <div className="content">
              <div className="text">Trello</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={sql} alt="" />
            <div className="content">
              <div className="text">PostgreSQL</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={express} alt="" />
            <div className="content">
              <div className="text">Express</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={npm} alt="" />
            <div className="content">
              <div className="text">NPM</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={slack} alt="" />
            <div className="content">
              <div className="text">Slack</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h5><em>Comfortable: </em></h5>
      <div className="icons-h4">
        <div className="comfortable">
          <div className="icon">
            <img className="image" src={github} alt="" />
            <div className="content">
              <div className="text">GitHub</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={git} alt="" />
            <div className="content">
              <div className="text">Git</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={django} alt="" />
            <div className="content">
              <div className="text">Django</div>
            </div>
          </div>
          <div className="icon">
            <img className="image" src={tp} alt="" />
            <div className="content">
              <div className="text">TablePlus</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h5><em>Dabbled in: </em></h5>
      <div className="icon-h4">
        <div className="dabbled">
          {/* <div className="icon">
          <img className="image" src={ts} alt="" />
          <div className="content">
            <div className="text">TypeScript</div>
          </div>
        </div> */}
          <div className="icon">
            <img className="image" src={jquery} alt="" />
            <div className="content">
              <div className="text">jQuery</div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Skills