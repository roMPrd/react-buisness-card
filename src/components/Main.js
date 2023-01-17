import Email from '../images/email.png'
import './Main.css'

function Main () {
  return (
    <div className='bio--container'>
      <div className='title--bio'>
        <h2>Romain Delimal</h2>
        <p>FullStack Developer</p>
        <a href='https://romprd.github.io/'>romprd.github.io</a>
      </div>
      <div className='button--bio'>
        <a href="mailto: rom.delimal@gmail.com" target="_blank">
          <img src={Email} alt='linkedin'/>
          <span>Email</span>
        </a>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>I'm a FullStack Web Developer.
          I recently graduated from LeWagon's bootcamp in Paris.
          I'm passionate about coding and try to consolidate my knowledge.
          I'm currently learning React.
        </p>
      </div>
      <div className="interests">
        <h3>Interests</h3>
        <p>
          code enthusiast, Basketball fan.
        </p>
      </div>
    </div>
  );
}

export default Main;
