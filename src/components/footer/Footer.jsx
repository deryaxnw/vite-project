
import "./footer.css"
import 'boxicons'


function Footer(){
    return (
        <>
        <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>Logo</h1>
                <p>it's all about your dreams.
                </p>

                <div id="footer_social_media">

                    <a href="#" className="footer-link" id="instagram">
                    <box-icon name='instagram' type='logo' ></box-icon>
                    </a>

                    <a href="#" className="footer-link" id="whatsapp">
                    <box-icon type='logo' name='whatsapp'></box-icon>

                    </a>
                </div>
            </div>
        
         <ul className="footer-list">

            <li>
                <h3>Blog</h3>
            </li>
            <li>
                <a href="#" className="footer-link">Tech</a>
            </li>
            <li>
                <a href="#" className="footer-link">Adventures</a>
            </li>
            <li>
                <a href="#" className="footer-link">Music</a>
            </li>
         </ul>

         <ul className="footer-list">

            <li>
                <h3>Products</h3>
            </li>
            <li>
                <a href="#" className="footer-link">App</a>
            </li>
            <li>
                <a href="#" className="footer-link">Desktop</a>
            </li>
            <li>
                <a href="#" className="footer-link">Cloud</a>
            </li>
         </ul>

         <div id="footer_subscribe">
            <h3>Subscribe</h3>

            <p>
                Enter your e-mail to get notified about
                our news solution
            </p>
            <div id="input_group">
                <input type="email" id="email"/>
               
            </div>

          </div>
        </div>

        <div id="footer_copyright">
            2024 all rights reserved
        </div>
    </footer>
        
        </>
    )
};

export default Footer;