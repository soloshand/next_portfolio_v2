import {Container, Row, Col } from 'react-bootstrap';

export default function Portfolio() {

    return (
    <section id="portfolio">
    <div className="row projects">
      <div className="twelve columns collapsed">
        <h1>Portfolio</h1>
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="article-wrapper">
            <article className="col-12 col-12-xsmall work-item">
              <a href="https://www.etsu.edu/ehome/" className="image fit thumb" target="_blank" rel="noopener noreferrer">
                <img src="images/portfolio/thumbnail_etsu_website.png" alt="ETSU Main Website" /></a>
              <div className="art-description">
                <div className="text-wrapper">
                  <h3>ETSU Website</h3>
                  <p>
                  The ETSU University Web site is maintained by a group of web developers at ETSU of which I am a part of. The website is built on a multi-faceted technology stack 
                  containing full-stack sites. The university site is the main entry point for many current and potential university students throughout Northeast Tennessee Region. 
                  I have developed and assisted in building infrastructure for the back-end along with developing front-facing components and enhancements that are heavily customized 
                  from the baseline CMS implementation.
                  </p>
                </div>
                <ul className="actions">
                  <div className="actions-wrapper">
                    <li><a href="https://www.etsu.edu/ehome/" className="button project-button port-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                  </div>
                  <hr className="port-seperator" />
                  <div className="languages">
                    <i className="devicon-php-plain technology portfolio-lan"></i>
                    <i className="devicon-css3-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-javascript-plain technology portfolio-lan"></i>
                    <i className="devicon-jquery-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-nodejs-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-ruby-plain-wordmark technology portfolio-lan"></i>
                  </div>
                  <hr className="port-seperator" />
                </ul>
              </div>
            </article>
          </div>
          <div className="article-wrapper">
            <article className="col-12 col-12-xsmall work-item">
              <a href="https://www.etsu.edu/paying-for-college/estimator/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/portfolio/cost_estimator_thumb.png" alt="ETSU Cost Estimator" /></a>
              <div className="art-description">
                <div className="text-wrapper">
                  <h3>ETSU Cost Estimator</h3>
                  <p>The ETSU Student Cost Estimator was created for multiple departments within the ETSU student intake infrastructure. This tool was designed to help assist 
                    students and their families with analyzing potential cost estimates for new students to the university. The estimator was designed to help both 
                    Graduate and Undergraduate students asses the potential costs for items such as housing, meal plans, tuition, financial aid, and payment options 
                    should they choose to attend East Tennessee State University. </p>
                </div>
                <ul className="actions">
                  <div className="actions-wrapper">
                    <li><a href="https://www.etsu.edu/paying-for-college/estimator/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                  </div>
                  <hr className="port-seperator" />
                  <div className="languages">
                  <i className="devicon-php-plain technology portfolio-lan"></i>
                    <i className="devicon-css3-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-javascript-plain technology portfolio-lan"></i>
                    <i className="devicon-jquery-plain-wordmark technology portfolio-lan"></i>
                  </div>
                  <hr className="port-seperator" />
                </ul>
              </div>
            </article>
          </div>
          <div className="article-wrapper">
            <article className="col-12 col-12-xsmall work-item">
              <a href="https://www.etsu.edu/search/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/portfolio/etsu_search_app_thumb.png" alt="ETSU Search Application" /></a>
              <div className="art-description">
                <div className="text-wrapper">
                  <h3>ETSU Search Application</h3>
                  <p>
                    The ETSU Search application was a rebuild and upgrade of the original ASP.Net application that had to be moved from an older Window&apos;s based server to the university&apos;s 
                    new Linux based server. The application required a refit to also include the ability to not only search for information within the university, but it also required an 
                    addition that allow users to search for faculty, staff and students. The students search was required to be protected from off campus personnel and incorporated an 
                    authentication system to accomplish that goal. The search itself targets internal university resources for users to view, while also including additional information 
                    linked to East Tennessee State University from outside resources. 
                  </p>
                  <p>
                    During this time the university was under going a rebranding initiative, so I was able to use a new responsive graphic template that was created by 
                    my co-workers in the final solution that is now being used.
                  </p>
                </div>
                <ul className="actions">
                  <div className="actions-wrapper">
                    <li><a href="https://www.etsu.edu/search/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                  </div>
                  <hr className="port-seperator" />
                  <div className="languages">
                    <i className="devicon-php-plain technology portfolio-lan"></i>
                    <i className="devicon-javascript-plain technology portfolio-lan"></i>
                    <i className="devicon-css3-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-jquery-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-oracle-plain technology portfolio-lan"></i>
                  </div>
                  <hr className="port-seperator" />
                </ul>
              </div>
            </article>
          </div>
          <div className="article-wrapper">
            <article className="col-12 col-12-xsmall work-item">
              <a href=" https://diamondexchangetn.com/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/portfolio/diamond_exchange_thumb.png" alt="Diamond Exchange - Johnson City, TN" /></a>
              <div className="art-description">
                <div className="text-wrapper">
                  <h3>Diamond Exchange - Johnson City</h3>
                  <p>This is a site redesign, rebranding effort, and migration from a previous hosting platform Diamond Exchange located in Johnson City, TN.</p>
                  <p>The owners wanted an updated site that was more modern and functional, along with a way to manage the content of the website themselves without having to hire a full-time developer. 
                    The solution we decided upon was a content management system (CMS) with a custom template unique to the clients needs.
                </p>
                </div>
                <ul className="actions">
                  <div className="actions-wrapper">
                    <li><a href="https://diamondexchangetn.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                  </div>
                  <hr className="port-seperator" />
                  <div className="languages">
                    <i className="devicon-wordpress-plain-wordmark technolog portfolio-lan"></i>
                    <i className="devicon-php-plain technology portfolio-lan"></i>
                    <i className="devicon-css3-plain-wordmark technology portfolio-lan"></i>
                  </div>
                  <hr className="port-seperator" />
                </ul>
              </div>
            </article>
          </div>
          <div className="article-wrapper">
            <article className="col-12 col-12-xsmall work-item">
              <a href="#portfolio" className="image fit thumb" rel="noopener noreferrer"><img src="images/portfolio/webadmin_thumb.png" alt="ETSU WebAdmin System" /></a>
              <div className="art-description">
                <div className="text-wrapper">
                  <h3>ETSU WebAdmin Application</h3>
                  <p>The site was created for East Tennessee State University as part of my employment as a Programmer/Analyst II within the Office of Information Technology.</p>
                  <p>The site was an original concept that allows users to update and maintain various indexing lists for directories within the campus. These list can be harnessed 
                    as either imbedded tables, or there is a backend API associated to allow customization of the content on various departmental websites. The old method to update 
                    this information required constant updates via SQL scripts to a backend database by personnel within the Information Technology department, by creating this 
                    application it gave the same personnel a quick and efficient interface to enter, update, delete and modify this information. 
                    The university had just undergone rebranding as the project was nearing completion. So, I was able to use a new responsive graphic template created 
                    by my co-workers in the final deliverable. 
                </p>
                </div>
                <ul className="actions">
                
                  <hr className="port-seperator" />

                  <div className="languages">
                    <i className="devicon-dot-net-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-css3-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-jquery-plain-wordmark technology portfolio-lan"></i>
                    <i className="devicon-postgresql-plain-wordmark technology portfolio-lan"></i>
                  </div>

                  <hr className="port-seperator" />
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
</section>
    )

}