import './Main.css'

function Main () {
  return (
    <>
      <div className='title--bio'>
        <h1>Romain Delimal</h1>
        <h4>FullStack Developer</h4>
        <a href='https://romprd.github.io/'>Portfolio</a>
      </div>
      <div className='Buttons'>
        <button className='Email'>Email</button>
        <button className='Linkedin'>LinkedIn</button>
      </div>
      <div className="About">
        <h3>About</h3>
        <p>I'm a FullStack Web Developer.
          I recently graduated from LeWagon's bootcamp in Paris.
          I'm passionate about coding and try to consolidate my knowledge.
          I'm currently learning React.
        </p>
      </div>
      <div className="Interests">
        <h3>Interests</h3>
        <p>
          code enthusiast, Basketball fan.
        </p>
      </div>
    </>
  )
}

export default Main;
