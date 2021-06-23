import './index.css'

const About = () => (
  <div className="about-container">
    <img
      src="https://api.covid19india.org/website_data.json"
      alt="about"
      className="about-img"
    />
    <h1 className="about-heading">About</h1>
    <p className="about-paragraph">All about Blogs of Covid 19</p>
  </div>
)

export default About
