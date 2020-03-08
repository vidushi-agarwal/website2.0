import React, { Component } from 'react';
import '../css/contact.css'
class Contact extends Component 
{
    style={
        // color:#818a91,
        
    }
    render() { 
        return (<div className="contact" >
            <div className="contactQuote">
                <h2>
                <span data-paroller-factor="0.3" data-paroller-type="foreground" data-paroller-direction="horizontal" data-paroller-transition="all 0.2s ease-in" style={{color:"#818a91"}}> You can't connect the dots looking</span> forward,
                </h2>
                <h2>
                    you can only connect them looking <span style={{color:"#818a91"}}>backwards</span>.
                </h2>
            </div>
            <footer>
                <div className="row">
            <div className="contactBrand" className="col-md-8">
                <h3> Vidushi </h3>   {/* change it to small image */}
            </div>
        <div className="contactIcons" className="col-md-4">
        <ul className="social-icons">
                <li >
                <div className="wow zoomIn" data-wow-duration="1.0s" data-wow-delay="0.5s">
                        <a href="https://medium.com/@vidushiagarwal1997"  className="fa fa-medium"></a>
                </div>
                </li>
                <li>
                    <div className="wow zoomIn" data-wow-duration="1.0s" data-wow-delay="0.5s">

                        <a href="https://www.linkedin.com/in/vidushi-agarwal-7b4b26142/"  className="fa fa-linkedin-square"></a>

                    </div>
                </li>


                <li >
                    <div className="wow zoomIn" data-wow-duration="1.0s" data-wow-delay="0.5s">
                        <a href="https://github.com/vidushi-agarwal"  className="fa fa-github"> </a>
                    </div>
                </li>

                <li  >
                    <div className="wow zoomIn" data-wow-duration="1.0s" data-wow-delay="0.5s">
                        <a href="mail.google.com" title="vidushiagarwal1997@gmail.com"  className="fa fa-envelope"></a></div>
                </li>

                <li  >
                    <div className="wow zoomIn" data-wow-duration="1.0s" data-wow-delay="0.5s">
                        <a href="https://www.facebook.com/vidushi.agarwal.562"  className="fa fa-facebook-f"> </a>
                    </div>
                </li>

            </ul>
        </div>
        </div>
        </footer>
        </div> );
    }
}
 
export default Contact;