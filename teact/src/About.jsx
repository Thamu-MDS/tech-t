import "./About.css";
import Navbar from "./Navbar";
const About = () => {
    return (
      <>
       <main>
        <section className="UI-info">
          <div className="UI-img">
            <img src="" alt="" />
          </div>

          <div className="UI-desc">
              <h2><span className="bg-black">Ui ux</span>  <span className="bg-orange" > Design</span> : Crafting Exceptional <br /> User Experiences</h2>

              <h3>User Research and Analysis :</h3>
              <p>In depth research to understand your users needs and preferences.</p>  

              <h3>Wireframing and Prototyping :</h3>
              <p>Creating interactive prototypes to test and refine user flows.</p>

              <h3>UI Design and Visual Branding :</h3>
              <p>Developing visually appealing interfaces that align with your brand identity.</p>
              

              <h3>Usability Testing :</h3>
              <p>Ensuring your designs are intuitive and easy to use. </p>
             
          </div>

        </section>
          

        <section className="WEB-info" >
          <h3 className="opas-bigfont" >02</h3>
          <h2><span className="bg-orange">Web Development </span>  : Building Powerful,Scalable Websites </h2> 
          <h3 className="opas-smallfont" >Service Includes:</h3>
          <img className="aligncentre" src="" alt="arrow-nav" />

          <div className="WEB-desc">
            <img src="" alt="HTML-loco" />
            <h3>Custom Website Development</h3>
            <p>Tailored websites that perfectly match your brand and business needs</p>
            <br />
            <button className="WEB-btn">HTML5</button>
            <button className="WEB-btn">CSS3</button>
            <button className="WEB-btn">JavaScript</button>

            <img src="" alt="cart-loco" />
            <h3>E-commerce Solutions</h3>
            <p>Full-featured online stores with secure payment integration</p>
            <br />
            <button className="WEB-btn">Shopify</button>
            <button className="WEB-btn">WooCommerce</button>
            <button className="WEB-btn">Payment Gateway</button>

            <img src="" alt="mobile-loco" />
            <h3>Content Management System</h3>
            <p>Flexible and Scalable CMS Solutions for Every Business Need</p>
            <br />
            <button className="WEB-btn">Contentful</button>
            <button className="WEB-btn">Sanity</button>
            <button className="WEB-btn">Ghost</button>

          </div>

          <div className="WEB-img">
            <img className="" src="" alt="" />
          </div>
        </section>

        <section className="DG-Mart">
          <h2>Our Digital Marketing <span className="bg-orange & circle" > Expertise </span> </h2>

          <div className="DG-Cont"> flex

            <img src="" alt="SEO- IMG" /><br />
            <h3>Search Engine <br /> Optimization <span className="bg-orange"> (SEO)</span></h3>
            <p>Rank higher on Google and stay ahead of your competition with our proven SEO techniques</p>

            <img src="" alt="PPC- IMG" /><br />
            <h3>Pay Per  click  <br />  <span className="bg-orange"> (PPC)</span></h3>
            <p>Maximize ROI with well-targeted ad campaigns on Google Ads and social media platforms. We manage budgets, track performance</p>

            <img src="" alt="SMart- IMG" /><br />
            <h3>Social Media <br /> Marketing </h3>
            <p>Boost your brand with our cutting-edge social media strategies! 🚀 Engage, grow, and convert like never before!</p>

            <img src="" alt="- IMG" /><br />
            <h3> <br />  <span className="bg-orange"> </span></h3>
            <p></p>

            <img src="" alt=" Email- IMG" /><br />
            <h3> <span className="bg-orange"> Email  </span> Marketing </h3>
            <p>Stay connected with your audience through beautifully crafted email campaigns that drive action  from welcome sequences to promotional blasts.</p>

            <img src="" alt="Cont- IMG" /><br />
            <h3>Content Marketing</h3>
            <p>Attract and educate your audience with powerful blogs, infographics, videos, and more. Content that speaks directly to your customers and builds brand authority.</p>

            <img src="" alt="Cont- IMG" /><br />
            <h3>Content Marketing</h3>
            <p>Your brand deserves a strategy that works. We align your digital identity with business goals to create consistent, compelling messaging across all channels.</p>
          </div>
        </section>  
        
        <section className="GRPH-Design" >
          
            <h2>Elevate Your Brand with <br /> Professionals <span className="bg-orange & circle" > Graphic Design </span></h2>

            <div className="GRAP-box">
              <h3>Branding & Identity Design</h3>
              <h3>Social Media Creatives</h3>
              <h3>Corporate Media Assets</h3>
              <h3>Product Packaging & Visual <br /> Mockups</h3>
              <h3>Infographics Design</h3>
            </div> 

      
              
            <div className="GRAP-desc">
              <h3>Graphic Design That Gives Your Brand a Unique Vibe</h3>

              <p>At Dimatrix, we don’t just design — we bring your brand to life. Whether you're just <br /> getting started or leveling up your look, our graphic design services are built to make <br /> your brand feel fresh, bold, and totally you. From crafting logos to picking the perfect <br /> colors, we’ve got your back.</p>
              
              <button>What We Do :</button>

              <ul>
              <li><img src="" alt="tik-mark" /><span className="bg-orange" >  Logo Design  </span>-Custom logos that vibe with your brand</li>
              <li><img src="" alt="" /><span className="bg-orange" >   Brand Colors   </span> - Handpicked color combos that pop</li>
              <li><img src="" alt="" /><span className="bg-orange" > Typography    </span> - Fonts that match your energy</li>
              <li><img src="" alt="" /><span className="bg-orange" >   Style Guide  </span> - A simple brand guide to keep it all consistent </li>
              <li><img src="" alt="" /><span className="bg-orange" >  Business Card Design   </span>-Sleek cards that make a statement</li>
              </ul>
              
            </div> 
        </section>

        <section className="" ><

          <div className="FAQ">
            <h3 className="bg-orange">FAQ</h3>
            <h2>Got Questions?  </h2>
            <h2>We've Got Answers!</h2>
            <p>At Dimatrix, we believe in clarity and transparency. Our FAQ <br /> section is designed to provide you with quick answers to the <br /> most common questions about our services, projects, and <br /> processes. </p>
            <button className="bg-orange">Learn More</button>
          </div>

          <div className="queries">
           <h3>What services does Dimatrix offer?</h3>
           <hr />
           <h3>How can I get a quote for my project?</h3>
           <hr />
           <h3>How does the process of working on a project work?</h3>
           <hr />
           <h3>Do you offer support after project completion ? </h3>
           <hr />

          </div>
        </section>
                  
      </main>

      <footer className="" >
        <section className="container">
        <h2>Stay Updated with DIMATRIX !</h2>
        <p>Never miss an update! Join our newsletter to get the latest industry insights, exclusive tips, and <br /> exciting news delivered straight to your inbox.</p>

        <form style="display: flex; align-items: center; gap: 10px;">
        <input
          type="email"
          placeholder="Your email"
          required
        
        />
        <button
          type="submit"
          
        >
          <span style="color: white; font-size: 20px; transform: rotate(45deg);">
            ➤
          </span>
        </button>
        </form>
        <button>GO TO TOP ➤</button>
        </section>

        <section className="footer-links">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">carrers</a></li>

          </ul>

          <img src="" alt="facebook" />
          <img src="" alt="twitter" />
          <img src="" alt="youtube" />

          <h4>Copyright © Tech Craft. All rights reserved.</h4>


        </section>


      </footer>
      </>
        
     
    );
  };
  
  export default About;
  