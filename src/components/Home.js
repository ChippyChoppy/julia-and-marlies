import React from "react";
import NavBar from "../containers/NavBar";
import PreLoader from "./PreLoader";


function Home() {
    return (
        <div>
        {/* <!--PRELOADER--> */}
        <PreLoader />
        <NavBar />
        {/* <!-- MAIN SLIDER --> */}
    	<section id="main-slider" class="flexslider fullscreen">      	
            
            {/* <!-- MAIN SLIDER TITLE OUTTER WRAPPER --> */}
        	<div class="slide-title-outter-wrapper">
            	
            	{/* <!-- MAIN SLIDER TITLE INNER WRAPPER --> */}
				<div class="slide-title-inner-wrapper">
                                
                    {/* <!-- TITLE --> */}
					<div class="slide-title align-middle">
                    
                    	<div class="container">
                        	<div class="row">
                        		<div class="col-md-12">
									
                                    <div id="slide-couplename-wrapper" class="animation delay1 fadeInUp">
                                    
                                    	<div id="slide-couplename" class="scale75-onmobile">
                                            <div id="slide-his-name">
                                        		Albert
                                        	</div>
                                        	<div id="slide-and-text">
				                            	<div id="curve-graphic">
                                            		<img src="images/and-banner.png" alt=""/>
                                            	</div>
                                           	 	<div id="and-text">
                                        			and
                                           		</div>
                                        	</div>
                                        	<div id="slide-her-name">
                                        		Emily
                                        	</div>
                                        </div>
                                        <h1 id="slide-other-text" class="animation delay2 fadeInUp">
                                        	WE ARE GETTING MARRIED
                                        </h1>
                                        
                                    </div>
                                                            
								</div> 
							</div>
						</div>
                        
					</div> 
                                
				</div>
                {/* <!-- END of MAIN SLIDER TITLE INNER WRAPPER --> */}
                
			</div> 
            {/* <!-- END of MAIN SLIDER TITLE OUTTER WRAPPER --> */}
                         
            {/* <!-- MAIN SLIDER IMAGES --> */}
            
  			<ul class="slides">
            	
                
    			<li>
                	{/* <!-- SLIDE IMAGE --> */}
                	<div data-stellar-ratio="0.5" class="slide-image" style={{
                        backgroundImage: "url(http://placehold.it/1920x1080)", 
                        backgroundPosition: "center 80%"
                        }}>
                    </div>
                    
                    {/* <!-- SLIDE OVERLAY --> */}
                    <div class="slide-overlay" style={{opacity: "0.3"}}> </div> 
                                                      
    			</li>
         
    			
  			</ul>
              {/* <!-- END of MAIN SLIDER IMAGES -->    */}
            
		</section>
        {/* <!-- ENF of MAIN SLIDER --> */}
        
        
        
        {/* <!--CONTENT SECTION--> */}
        <section id="content">
        
        	{/* <!--COUPLE SECTION-->     */}
            <section id="couple-section" class="section-block">
            	<div class="container">
                	<div class="row">
                    	<div class="col-md-offset-1 col-md-10 text-center animation fadeInUp">
	                        <h2 class="h4">HAPPY COUPLE</h2>
                            <p class="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc a pharetra. Pellentesque sit amet placerat magna. Nam ut interdum urna, vitae consequat odio. Nullam porttitor sagittis ex quis venenatis. Duis et neque pharetra, sagittis nisi nec, egestas risus.</p>
                        </div>
                    </div>
                    <div class="row">
                    	<div class="col-md-6 col-sm-6">
                        	{/* <!--PHOTO-ITEM--> */}
                             <div class="photo-item animation fadeInLeft">
								
                             		{/* <!--HIS-PHOTO--> */}
                                	<img src="http://placehold.it/453x453" alt="" class="hover-animation image-zoom-in"/>
                                            
                                    {/* <!--PHOTO OVERLAY--> */}
                           			<div class="layer wh95 hidden-black-overlay hover-animation fade-in">
                            		</div>
                                    {/* <!--END of PHOTO OVERLAY--> */}
                                     
                                    {/* <!--ICON LINK--> */}
                                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                                    	<div class="alignment">
                                    		<div class="v-align center-middle">
                                            
                                     			<div class="photo-name his-front-name">Albert</div>
                                                <div class="photo-name his-last-name">Fred</div>
                                                
                                      		</div>
                                        </div>
                                     </div>
                                     {/* <!--END of ICON LINK--> */}
							
							</div>
                            {/* <!--END of PHOTO-ITEM-->  */}
                           
                           	<div class="couple-excerpt animation fadeInLeft">
	                            <h2 class="h5"><a href="about-him.html">THE GROOM</a></h2>
                                <p>Sed tempor purus neque, luctus rutrum libero posuere quis. Sed sit amet nisl quam. Mauris elit enim, imperdiet a mollis ac, vestibulum scelerisque est. Maecenas egestas nunc at interdum scelerisque. Proin vel orci porta, dignissim lacus vitae, tincidunt leo. Duis auctor nunc leo.</p>
                          	</div>
                        </div>
                       	
                        <div class="col-md-6 col-sm-6">
                        	{/* <!--PHOTO-ITEM--> */}
                             <div class="photo-item animation fadeInRight">
								
                             		{/* <!--HER-PHOTO--> */}
                                	<img src="http://placehold.it/453x453" alt="" class="hover-animation image-zoom-in"/>
                                            
                                    {/* <!--PHOTO OVERLAY--> */}
                           			<div class="layer wh95 hidden-black-overlay hover-animation fade-in">
                            		</div>
                                    {/* <!--END of PHOTO OVERLAY--> */}
                                     
                                    {/* <!--ICON LINK--> */}
                                    <div class="layer wh100 hidden-link hover-animation delay1 fade-in">
                                    	<div class="alignment">
                                    		<div class="v-align center-middle">
                                            
                                     			<div class="photo-name her-front-name">Emily</div>
                                                <div class="photo-name her-last-name">Camila</div>
                                                
                                      		</div>
                                        </div>
                                     </div>
                                     {/* <!--END of ICON LINK--> */}
							
							</div>
                            {/* <!--END of PHOTO-ITEM-->  */}
                           
                           	<div class="couple-excerpt animation fadeInRight">
	                            <h2 class="h5"><a href="about-her.html">THE BRIDE</a></h2>
                                <p>Ut malesuada sed est sed porttitor. Vestibulum quis turpis at lacus commodo elementum sit amet et mauris. In non ligula facilisis, gravida felis at, consequat diam. Suspendisse at ante felis. Quisque sem risus, pellentesque vitae mauris ut, sagittis consequat enim. Maecenas ac nisl condimentum. </p>
                          	</div>
                        </div>
                       		
                    </div>
                </div>            	
            </section>
            {/* <!-- END of COUPLE SECTION--> */}
            
            
            {/* <!-- SAVE THE DATE SECTION --> */}
            <section id="save-the-date-section">
            	<div class="image-divider fixed-height" style={{backgroundImage: "url(http://placehold.it/1920x1080);"}} data-stellar-background-ratio="0.5">
                	
                    <div class="divider-overlay"></div>
                    
                    {/* <!--Use Center Middle Alignment to align middle the content for fixed-height parallax--> */}
                    <div class="alignment"> 
                    	<div class="v-align center-middle">                   	
                    
                    <div class="container">                 	 
                    	<div class="row">
                        	<div class="col-md-offset-1 col-md-10 text-center">
                            	<div id="adventure-begin-wrapper" class="animation fadeInUp">
                                	<div id="adventure-begin" class="scale75-onmobile">
                    					<div id="let-the" class="quote-top">Let the</div>
                                		<div id="adventure" class="quote-middle">Adventure</div>
                                		<div id="begin" class="quote-bottom">Begin</div>
                                   	</div>
                               	</div>
                                <h5 class="animation fadeInUp" style={{letterSpacing: "6px;"}}>MARCH 19, 2017</h5>
                     		</div>
                     	</div>
                     </div>
                     
                     	</div>
                   	</div>
                	
				</div>		
            </section>
            {/* <!-- END of SAVE THE DATE SECTION --> */}
            
            
            {/* <!--WEDDING SECTION-->     */}
            <section id="wedding-section" class="section-block">
            	<div class="container">
                	<div class="row">
                    	<div class="col-md-offset-1 col-md-10 text-center">
	                        <h2 class="h4 animation fadeInUp">OUR WEDDING</h2>
                            <p class="intro-text animation fadeInUp">Suspendisse nec dui ut turpis posuere sagittis viverra tincidunt lectus. Sed faucibus tristique purus, ac mattis lorem malesuada vel. Sed dignissim, orci eu porttitor suscipit, dolor mauris elementum dolor, eget posuere dui ante vel quam. Donec ut lacinia est, et convallis augue.</p>
                        </div>
                    </div>
                    <div class="row">
                    	{/* <!-- ITEM-1 --> */}
                        {/* <!-- =================================================================== --> */}
                        <div class="col-md-4 col-sm-4 wedding-item-wrapper">
                                    
                           	{/* <!--PHOTO-ITEM--> */}
                       		<div class="photo-item animation fadeIn">
								
                             	{/* <!--PHOTO--> */}
                                <img src="http://placehold.it/500x415" alt="" class="hover-animation image-zoom-in"/>
                                            
                               	{/* <!--PHOTO OVERLAY--> */}
                           		<div class="layer wh95 hidden-black-overlay hover-animation fade-in">
                            	</div>
                                {/* <!--END of PHOTO OVERLAY--> */}
                                				                                    
                                {/* <!--ICON LINK--> */}
                                <div class="layer wh95 hidden-link hover-animation delay1 fade-in">
                                    <div class="alignment">
                                    	<div class="v-align center-middle">
                                                    	
                                            <a href="#" class="de-button small rounded">
                                                MORE
                                            </a>
                                                        
                                      	</div>
                                      </div>
                             	</div>
                                 {/* <!--END of ICON LINK--> */}
							
							</div>
                            {/* <!--END of PHOTO-ITEM-->  */}
                                        
                            {/* <!-- TITLE & EXCERPT --> */}
                            <div class="title-excerpt animation fadeIn text-center">
                                <h5><a href="#">RECEPTION</a></h5>
                                <p>Nullam ultricies arcu a neque imperdiet, vitae lacinia nisi congue. Nullam eget.</p>
                           	</div>
                            {/* <!-- END of TITLE & EXCERPT --> */}
                                         
                    	</div>
                        {/* <!-- END of ITEM-1 --> */}
                                    
                                    
                       	{/* <!-- ITEM-2 --> */}
                        {/* <!-- =================================================================== --> */}
                        <div class="col-md-4 col-sm-4 wedding-item-wrapper">
                                    
                           	{/* <!--PHOTO-ITEM--> */}
                       		<div class="photo-item animation fadeIn">
								
                             	{/* <!--PHOTO--> */}
                                <img src="http://placehold.it/500x415" alt="" class="hover-animation image-zoom-in"/>
                                            
                               	{/* <!--PHOTO OVERLAY--> */}
                           		<div class="layer wh95 hidden-black-overlay hover-animation fade-in">
                            	</div>
                                {/* <!--END of PHOTO OVERLAY--> */}
                         
                                {/* <!--ICON LINK--> */}
                                <div class="layer wh95 hidden-link hover-animation delay1 fade-in">
                                    <div class="alignment">
                                    	<div class="v-align center-middle">
                                                    	
                                            <a href="#" class="de-button small rounded">
                                                MORE
                                            </a>
                                                        
                                      	</div>
                                      </div>
                             	</div>
                                 {/* <!--END of ICON LINK--> */}
							
							</div>
                            {/* <!--END of PHOTO-ITEM-->  */}
                                        
                            {/* <!-- TITLE & EXCERPT --> */}
                            <div class="title-excerpt animation fadeIn text-center">
                                <h5><a href="#">CEREMONY</a></h5>
                                <p>Phasellus vehicula nisi magna, vitae placerat orci porta id. Aliquam sagittis ac.</p>
                           	</div>
                            {/* <!-- END of TITLE & EXCERPT --> */}
                                         
                    	</div>
                        {/* <!-- END of ITEM-2 --> */}
                        
                        
                        {/* <!-- ITEM-3 --> */}
                        {/* <!-- =================================================================== --> */}
                        <div class="col-md-4 col-sm-4 wedding-item-wrapper">
                                    
                           	{/* <!--PHOTO-ITEM--> */}
                       		<div class="photo-item animation fadeIn">
								
                             	{/* <!--PHOTO--> */}
                                <img src="http://placehold.it/500x415" alt="" class="hover-animation image-zoom-in"/>
                                            
                               	{/* <!--PHOTO OVERLAY--> */}
                           		<div class="layer wh95 hidden-black-overlay hover-animation fade-in">
                            	</div>
                                {/* <!--END of PHOTO OVERLAY--> */}
                                				                                    
                                {/* <!--ICON LINK--> */}
                                <div class="layer wh95 hidden-link hover-animation delay1 fade-in">
                                    <div class="alignment">
                                    	<div class="v-align center-middle">
                                                    	
                                            <a href="#" class="de-button small rounded">
                                                MORE
                                            </a>
                                                        
                                      	</div>
                                      </div>
                             	</div>
                                 {/* <!--END of ICON LINK--> */}
							
							</div>
                            {/* <!--END of PHOTO-ITEM-->  */}
                                        
                            {/* <!-- TITLE & EXCERPT --> */}
                            <div class="title-excerpt animation fadeIn text-center">
                                <h5><a href="#">PARTY</a></h5>
                                <p>Donec ex ex, ullamcorper eget faucibus ac, sollicitudin at mauris. Nunc libero eros. </p>
                           	</div>
                            {/* <!-- END of TITLE & EXCERPT --> */}
                                         
                    	</div>
                        {/* <!-- END of ITEM-3 --> */}
                        
                        
                    </div>
                </div>            	
            </section>
            {/* <!-- END of WEDDING SECTION--> */}
            
            
            {/* <!-- DIVIDER SECTION --> */}
            <section id="divider-section">
            	<div class="image-divider fixed-height" style={{backgroundImage:"url(http://placehold.it/1920x1080)", height: "500px"}} data-stellar-background-ratio="0.5">
                	
                    <div class="divider-overlay"></div>
                    
				</div>		
            </section>
            {/* <!-- END of DIVIDER SECTION --> */}
            
            
            {/* <!--ATTENDING SECTION-->     */}
            <section id="attending-section" class="section-block more-grey">
            	<div class="container">
                	<div class="row">
                    	<div class="col-md-offset-1 col-md-10 text-center">
	                        <h2 class="h4 animation fadeInUp">ARE YOU ATTENDING?</h2>
                            <p class="intro-text animation fadeInUp">Vivamus eleifend, nunc vel sagittis sollicitudin, tortor massa malesuada leo, vitae consequat eros lectus ac purus. In consectetur dui vel nunc ultricies vestibulum. Mauris fringilla semper sapien, a auctor odio sollicitudin non. Curabitur semper turpis metus, at placerat risus suscipit quis. Donec faucibus turpis id felis vulputate ullamcorper vel id eros. Maecenas ultrices augue sed.</p>                                   
                        </div>
                    </div>
                    <div class="row">
	                    <div class="col-md-offset-2 col-md-8 text-center">
                    		<div id="countdown" class="countdown box-countdown animation fadeInUp"></div>
                        </div>
                    </div>
                    <div class="row">
	                    <div class="col-md-offset-2 col-md-8 text-center">
                    		<a href="rsvp.html" class="de-button small rounded animation fadeInUp">
                                RSVP
                            </a> 
                        </div>
                    </div>
                </div>            	
            </section>
            {/* <!-- END of ATTENDING SECTION-->             */}
            
        </section>
        
        {/* <!-- FOOTER SECTION --> */}
            <footer>
            	<div class="image-divider fixed-height" style={{backgroundImage:"url(http://placehold.it/1920x1080)"}} data-stellar-background-ratio="0.5" >
                
                	<div class="divider-overlay"></div>
                    
                    {/* <!-- Use Center Middle Alignment to align middle the content for fixed-height parallax --> */}
                    <div class="alignment"> 
                    	<div class="v-align center-middle">                  	
                    
                    		<div class="container">                 	 
                    			<div class="row">
                        			<div class="col-md-12">
                          				
                                        <div id="thank-you" class="scale75-onmobile">                                  
                     						<div id="thank" class="animation fadeInUp">
                                            	Thank
                                            </div>
                                            <div id="you" class="animation fadeInUp">
                                            	You
                                            </div>                                            
                                        </div>
                                        <h6 class="animation delay1 fadeInUp" style={{letterSpacing:"6px"}}>ALBERT & EMILY</h6>
                     				</div>
                     			</div>
                     		</div>
                     	</div>
                   	</div>
                </div>
            </footer>   
        </div>
    )
}
export default Home