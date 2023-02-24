import React from 'react'
import football from './assets/ChampsLeagueBallLogo.png'
import gym from './assets/gym.png'
import superhero from './assets/superhero.png'

const Interests = () => {
  return (
    <section className="interests" id="Interests">
      <br />
      <br />
      <h2>Interests</h2>
      <div className="interests">
        <div className="football">
          <div className="football-tt-Img">
            <div className="football-img">
              <img src={football} alt="" />
            </div>
            <div className="football-tt">
              <h4><em>Football</em></h4>
              <p>
                I am a big fan of football, not just in the Premier League.
                In addition, I play fantasy football where I usually stay competitive most seasons.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="gym">
          <div className="gym-tt-Img">
            <div className="gym-img">
              <img src={gym} alt="" />
            </div>
            <div className="gym-tt">
              <h4><em>The Gym</em></h4>
              <p>
                I go to the gym regularly, aiming to do so at least 4 times a week.
                I find the process of slowly building and seeing the continued results very motivating and a big part of being able to mentally unwind.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="superhero">
          <div className="superhero-tt-Img">
            <div className="superhero-img">
              <img src={superhero} alt="" />
            </div>
            <div className="superhero-tt">
              <h4><em>Superhero Movies</em></h4>
              <p>
                Going from someone who wouldn’t watch superhero movies to a big enthusiast came when I first watched Christopher Nolan’s Dark Knight trilogy.
                It is now safe to say I am a big Marvel Cinematic Universe fan, with some of my favourites being Captain America Civil War, Spiderman No Way Home and all the Avengers movies.
                However, ironically I haven’t given DC comic movies much of a chance.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="other">
          <div className="other-title">
            <h5>Other Interests</h5>
          </div>
          <div className="other-text">
            <ul>
              <li>Formula 1</li>
              <li>Sci-Fi</li>
              <li>Video Games</li>
            </ul>
          </div>
          <div className="currently">
            <h5>Currently:</h5>
            <p>
              The Last of Us (TV Series)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interests