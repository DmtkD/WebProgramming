import facebook from '../../assert/img/facebook.svg';
import instagram from '../../assert/img/instagram.svg';
import twitter from '../../assert/img/twitter.svg';
import logo from '../../assert/img/logo.png'
import './Footer.css'

function Footer() {
    return (
        <footer className='Footer'>
            <div>
                <div className='FooterText'>
                    <h3>Camera Company</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo</span>
                </div>
                <img src={logo} alt='logo' className='Logo' />
                <div className='FooterImg'>
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
            <hr/>
            <span>2022 IoT © Copyright all rights reserved, Pavlo Turchynyak</span>
        </footer>
    )
}

export default Footer;