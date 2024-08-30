import React from 'react'
import waitrose from './assets/Waitrose&Partners.svg.png'
import bbk from './assets/Birkbeck.webp'
import ga from './assets/GeneralAssembly.png'

const Experience = () => {
  return (
    <section className="experience" id="Experience">
      <br />
      <br />
      <h2>Experience & Education</h2>
      <div className="experience">
        <div className="waitrose">
          <div className="waitrose-titlesImg">
            <div className="waitrose-img">
              <img src={waitrose} alt="" />
            </div>
            <div className="waitrose-titles">
              <h4><em><b>Waitrose & Partners</b></em></h4>
              <h5>Duty Partner</h5>
              <h6>Mar 11 - Present</h6>
            </div>
          </div>
          <div className="waitrose-text">
            <p>
              I have developed over a decade of experience in customer service and my ability to manage teams.
              While working as a Duty Partner at Waitrose I am regularly left to manage many partners.
              This role has meant that I constantly liaise with management, including decisions I have made on the operations of the branch daily, ideas going forward, and potential solutions or opportunities I may have discovered.
            </p>
          </div>
        </div>
        <br />
        <div className="birkbeck">
          <div className="bbk-titlesImg">
            <div className="bbk-img">
              <img src={bbk} alt="" />
            </div>
            <div className="bbk-titles">
              <h4><em><b>Birkbeck, University of London</b></em></h4>
              <h5>Business BSc</h5>
              <h6>Graduated in July 22</h6>
            </div>
          </div>
          <div className="bbk-text">
            <p>
              Birkbeck provided me with more of a theoretical understanding of the business world, in addition to time-constraint tasks and working on assignments within a group or individually.
              Studying business also gave me a greater understanding of business needs and consumer ones when it comes to products and services.
            </p>
          </div>
        </div>
        <br />
        <div className="ga">
          <div className="ga-titlesImg">
            <div className="ga-img">
              <img src={ga} alt="" />
            </div>
            <div className="ga-titles">
              <h4><em><b>General Assembly</b></em></h4>
              <h5>Software Engineering Immersive</h5>
              <h6>Dec 21 - Mar 22</h6>
            </div>
          </div>
          <div className="ga-text">
            <p>
              A 3-month, full-time, immersive, remote bootcamp, where I was introduced to new technologies by instructors.
              I developed many technical skills through classes, workshops, daily homework and projects (individual, paired and group).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience