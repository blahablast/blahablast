import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>

          <p>
            I am a lover of all things JavaScript. I do have preferences towards
            the libraries and frameworks such as React and Gatsby, but I also
            love to code in vanilla JavaScript. I like to be on top of the
            newest technologies and I will forever be a student of development,
            always studying a new language or stack. While some form of
            JavaScript can be used for most projects, I like to consider myself
            language agnostic. Whatever tool is needed for the job can be
            learned and used.
          </p>
          <p>
            Below, is a button leading you to the greatest images on the web, my
            amazing Pomsky Java! Made with just pure CSS, utilizing Flexbox.
          </p>
          <button>
            <a
              href="https://vigorous-davinci-18eb23.netlify.app/"
              target="_blank"
            >
              Java the Pomsky
            </a>
          </button>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          {/* <span className="image main">
            <img src={javascript} alt="" />
          </span> */}
          <p style={{ textAlign: 'center' }}>
            These are just a few projects I have been working on.{' '}
          </p>
          <hr />

          <p style={{ textAlign: 'center' }}>
            This is a breakout game made in JavaScript, using the JavaScript
            Canvas ( Only playable using a keyboard, does not work on a
            touchscreen ).
            <br />
            <br />
            <button>
              <a
                href="https://boring-lalande-10b07b.netlify.app/"
                target="_blank"
              >
                Breakout
              </a>
            </button>
          </p>

          <p style={{ textAlign: 'center' }}>
            This is a Contact Keeper app that allows a user to log in, create,
            store, update and delete contacts, specific to the user logged in.
            This is a Full Stack app, made with the MERN stack, hosted on
            Heroku.
            <br />
            <br />
            <button>
              <a
                href="https://desolate-waters-48976.herokuapp.com/login"
                target="_blank"
              >
                Contact Keeper
              </a>
            </button>
          </p>
          <p style={{ textAlign: 'center' }}>
            This is a fun typing game made from JavaScript. It has three
            difficulty settings, each setting affecting the time gained for
            typing the correct word differently. Simple, elegant and creative.
            <br />
            <br />
            <button>
              <a
                href="https://dazzling-cori-c20fc3.netlify.app/"
                target="_blank"
              >
                Typing Challenge
              </a>
            </button>
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          {/* <span className="image main">
            <img src={sam} alt="" />
          </span> */}
          <span>Hello!</span>
          <br />
          <br />
          <p>
            My Name is Sam Blaha, I'm and up and coming Full Stack developer
            living in the Cleveland, OH area.
          </p>
          <p>
            My passion is writing code and designing websites. I look at it as
            50% left side of my brain and 50% right side. In essence, I get to
            tap into my logical side and creative side cohesively. I have been
            in the IT field for nearly a decade, working for two major
            corporations in downtown Cleveland as a Windows System Administrator
            and in desktop support. As much as I do love tech and the whole
            hardware side of things, I found my real passion in software and
            creating it. To me, development is the pinnacle of IT. I have
            studied numerous programming languages and concepts over the years,
            building various projects, but it wasn't until I honed in on
            JavaScript that my passion was realized.
          </p>
          <p>
            Here are some of the technologies I work with:
            <ul>
              <li>JavaScript (ES6)</li>
              <li>React & Gatsby</li>
              <li>HTML & CSS</li>
              <li>Node.js</li>
              <li>PHP & Wordpress</li>
            </ul>
          </p>
          <p>Check out my "WORK" section for a handful of examples!</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Feel free to contact me by email.
            <br /> I am new to the development scene and currently looking for
            work.
          </p>
          <button>
            <a href="mailto:blahasam@gmail.com">blahasam@gmail.com</a>
          </button>

          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>

            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
