import React, { Component } from 'react'
import '../css/timeline.css'
import coffee from '../images/nerd/coffee.png'
import keyboard1 from '../images/nerd/keyboard1.png'
import mobile from '../images/nerd/mobile_gif.gif'
import typewriter1 from '../images/nerd/typewriter1.gif'
class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            
            <div className="row">
              <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h1 className="colorlib-heading animate-box">Timeline</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="timeline-centered">

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>Lorem Ipsum <span>2019-present</span></h3>
                        <p className="timelineText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>Lorem Ipsum<span>2015-2019</span></h3>
                        <p className="timelineText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h3>Lorem Ipsum <span>2003-2015</span></h3>
                        <p className="timelineText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>

             
                <div className="col-md-6" style={{marginBottom:'10%'}}>
                  <div className="row">
                    <div className ="col-md-4" className="timelinePhoto coffee" style={{marginTop:'10%',backgroundImage:'URL('+coffee+')'}}></div>
                    <div className ="col-md-8" className="timelinePhoto mobile" style={{backgroundImage:'URL('+mobile+')'}}></div>         
                  </div>
                  <div className="row">
                    <div className="col-md-12" >
                      <div className="timelinePhoto typewriter1" style={{backgroundImage:'URL('+typewriter1+')'}}></div>
                      <div className="timelinePhoto keyboard1" style={{backgroundImage:'URL('+keyboard1+')'}}></div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Timeline;