import React from "react";

function NavBar() {
    return (
        < >
    	<header id="nav-header">
        <nav id="nav-bar" class="top-bar fluid-width transparent nav-center hide-logo-on-desktop sticky-nav animation fadeInDown">
            
            <div id="nav-wrapper">
                {/* <!-- NAV LOGO --> */}
                <div class="logo-wrapper">
                    <div class="nav-logo">J<span class="theme-color">&</span>M</div>
                </div>                   
                
                <div id="mobile-nav">
                    <i class="de-icon-menu"></i>
                </div>
            
                <ul id="nav-menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                       <li>
                        <a href="#">About Us</a>
                        <ul>
                            <li>
                                <a href="about-her.html">Marlies' Story</a>
                            </li>
                            <li>
                                <a href="about-him.html">Julia's Story</a>
                            </li>
                            <li>
                                <a href="our-story.html">Our Story</a>
                            </li>
                           </ul> 	
                    </li>
                    <li>
                        <a href="#">The Wedding</a>
                        <ul>
                            <li><a href="location.html">Location</a></li>
                            <li><a href="bridesmaid.html">Bridesmaid</a></li>
                            <li><a href="groomsmen.html">Groomsmen</a></li>
                            <li><a href="gift.html">Gift Registry</a></li>
                        </ul>
                    </li>
                    <li><a href="gallery.html">GALLERY</a></li>
                    <li>
                        <a href="#">PAGES</a>
                         <ul>
                             <li>
                                <a href="#">More Pages</a>
                                <ul>
                                     <li><a href="index-2.html">Home (Version 2)</a></li>
                                    <li><a href="bridesmaid-2.html">Bridesmaid (Version 2)</a></li>
                                    <li><a href="accomodation.html">Accomodation</a></li>
                                    <li><a href="gallery-masonry.html">Gallery (Masonry)</a></li>
                                    <li><a href="gallery-full-grid.html">Gallery (Full Grid)</a></li>
                                    <li><a href="rsvp-2.html">RSVP (Version 2)</a></li>
                                    <li><a href="rsvp-3.html">RSVP (Version 3)</a></li>
                                   </ul>
                            </li> 
                            <li>
                                <a href="#">More Sections</a>
                                <ul>
                                    <li><a href="section-events.html">Events</a></li>
                                    <li><a href="section-timeline.html">Timeline</a></li>
                                    <li><a href="section-map.html">Map</a></li>
                                    <li><a href="section-countdown.html">Countdown</a></li>
                                    <li><a href="section-registry.html">Gift Registry</a></li>
                                     <li><a href="section-interest-places.html">Interest Places</a></li>
                                   </ul>
                            </li>                             	
                            <li>
                                <a href="#">Slider</a>
                                <ul class="move1-to-top">
                                     <li><a href="slider-fade.html">Fade Effect</a></li>
                                    <li><a href="slider-slide.html">Slide Effect</a></li>
                                    <li><a href="slider-fade-image-animation.html">Image Animation</a></li>
                                    <li><a href="slider-multiple-title.html">Multiple Title</a></li>
                                    <li><a href="slider-multiple-title-animation.html">Multiple Title &amp; Image Animation</a></li>
                                    <li><a href="slider-single-video.html">Single Video</a></li>
                                    <li><a href="slider-multiple-video.html">Multiple Video</a></li>
                                   </ul>
                            </li>
                            <li>
                                <a href="#">Background Music</a>
                                <ul>
                                     <li><a href="audio-soundcloud.html">Soundcloud</a></li>
                                    <li><a href="audio-html5.html">HTML5 Audio</a></li>
                                   </ul>
                            </li>   
                            <li>
                                <a href="#">Elements</a>
                                <ul class="move2-to-top">
                                     <li><a href="elements-typography.html">Typography</a></li>
                                    <li><a href="elements-icon-button.html">Icon &amp; Button</a></li>
                                    <li><a href="elements-divider.html">Section Divider</a></li>
                                    <li><a href="elements-photo-item.html">Photo Item</a></li>
                                    <li><a href="elements-popup-video.html">Popup Video</a></li>
                                    <li><a href="elements-carousel.html">Carousel</a></li>
                                    <li><a href="elements-form.html">Form</a></li>
                                   </ul>
                              </li>
                            <li>
                                <a href="#">Navigation</a>
                                <ul class="move5-to-top">
                                    <li><a href="nav-logo-center.html">With Logo on Center</a></li>
                                    <li><a href="nav-logo-left.html">With Logo on Left</a></li>
                                    <li><a href="nav-fluid-width.html">Fluid Width</a></li>
                                     <li><a href="index.html">Top Transparent</a></li>
                                    <li><a href="nav-top-color.html">Top Color</a></li>
                                    <li><a href="nav-bottom-transparent.html">Bottom Transparent</a></li>
                                    <li><a href="nav-bottom-color.html">Bottom Color</a></li>
                                    <li><a href="nav-bottom-outside-slider.html">Bottom Outside Slider</a></li>
                                    <li><a href="nav-hide-first.html">Hide First</a></li>                                        
                                   </ul>
                              </li>
                            <li>
                                <a href="index-onepage.html" target="_blank">One Page Version</a>
                              </li>
                        </ul>
                    </li>                    	
                    <li>
                        <a href="rsvp.html">RSVP</a>
                    </li>
                </ul>
                
                <div class="clearboth"></div>
                
            </div>
            
        </nav>
    </header> 
    </ >
    )
}
export default NavBar