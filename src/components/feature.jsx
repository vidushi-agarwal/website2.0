import React, { Component } from 'react';
import '../css/feature.css'
import im_dots from '../images/assistant_dots.png'
import im_menu from '../images/assistant_menu.PNG'
import im_thumb from '../images/assistant_thumb.png'
import tf1 from '../images/tensorflow1.svg'
import tf2 from '../images/tensorflow2.svg'
import gci from '../images/codein.png'
import un from '../images/un.png'
class Feature extends Component {
    render() { 
        return (<section>
                <div className="row">
                    <div className="col-md-12" style={{textAlign:"center"}}>
                        <h1 className="featureHeading">Feature</h1>

                        <article >
                            <div className="subFeature"><div className="row">
                                <div className="col-md-6" style={{backgroundImage:'URL('+im_menu+')', backgroundSize:'20%',backgroundRepeat:"no-repeat", backgroundPosition:"center"}} > 
                                </div>
                        
                                <div className="col-md-6" > 
                                    <div className="assistantFeature">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <img src={im_dots} />
                                            </div>
                                        </div>
                                        <p className="subFeatureText">“Hey Google, Talk to Thapar Mess”</p>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <img src={im_thumb} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div className="row">
                                 <div className="col-md-9" ><div className="articleText">
                                    <h3>Lorem Ipsum</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                </div></div>
                            </div>
                        </article>

                        <article >
                            <div className="subFeature"><div className="row">
                                <div className="col-md-4" ><img  className="tf2" src={tf2} width={"50%"} height={"70%"}/>
                                </div>
                        
                                <div className="col-md-4"  > <img className="tf1" src={tf1}/>
                                </div>
                                
                                <div className="col-md-4" > <img className="gci" src={gci} width={"65%"} height={"40%"}/>
                                </div>
                            </div></div>
                            <div className="row">
                                 <div className="col-md-9" ><div className="articleText">
                                    <h3>Lorem Ipsum</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                </div></div>
                            </div>
                        </article>

                        <article>
                            <div className="subFeature"><div className="row">
                                <div className="col-md-6">
                                    <img src={un} width={"25%"}/>
                                </div>

                                <div className="col-md-6" >
                                    <p className="subFeatureText" className="mun"><i className="fa fa-pencil" aria-hidden="true"></i> “ The pen is mighter than the sword.”</p>
                                </div>
                            </div></div>

                            <div className="row">
                                 <div className="col-md-9" ><div className="articleText">
                                    <h3>Lorem Ipsum</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                </div></div>
                            </div>
                        </article>


                    </div>
                </div>
            </section>
        );
    }
}
 
export default Feature;