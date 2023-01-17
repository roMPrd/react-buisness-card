import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <a href="https://github.com/roMPrd" target="_blank" rel='noreferrer'>
        <img src={Github} alt='github'/>
      </a>
      <a href="https://www.linkedin.com/in/romain-delimal/" target="_blank" rel='noreferrer'>
        <img src={Linkedin} alt='linkedin'/>
      </a>
    </div>
  );
}

export default Footer;
