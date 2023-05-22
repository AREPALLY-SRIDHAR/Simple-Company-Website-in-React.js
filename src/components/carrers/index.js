// Write your JS code here

import {Component} from 'react'

import './index.css'

const joblist = [
  {
    id: 'A1DE4',
    name: 'MERN Stack Developer',
    para:
      'MERN responsibilities involve developing and maintaining web applications using MongoDB, Express.js, React.js, and Node.js, including database management, server-side development, and client-side user interface implementation.',
    skills: 'MongoDB, Express.js, React.js, and Node.js,',
  },
  {
    id: 'B1HK5',
    name: 'Data Engineer',
    para:
      'Data Engineer responsibilities include designing, implementing, and maintaining data pipelines and infrastructure to ensure efficient data processing, storage, and retrieval for analytics and reporting purposes.',
    skills: 'Python, SQL, PowerBI,',
  },
  {
    id: 'A15KF',
    name: 'FrontEnd Developer',
    para:
      'Frontend Developer skills responsibilities include designing and developing user-friendly interfaces, implementing responsive layouts, and optimizing web performance to create visually appealing and seamless user experiences in web applications.',
    skills: 'HTML, CSS , JavaScript, React JS',
  },
  {
    id: 'A5PS5',
    name: 'Technical Support',
    para:
      'Technical Support skills responsibilities involve providing prompt and efficient troubleshooting assistance to customers, resolving technical issues related to software or hardware, and offering excellent customer service to ensure customer satisfaction.',
    skills: 'customer service,troubleshoot',
  },
  {
    id: 'G45PF',
    name: 'Backend Developer',
    para:
      'Backend developer skills responsibilities involve developing and maintaining server-side logic, managing databases, and integrating APIs to ensure efficient data processing and server functionality in web applications.',
    skills: 'Node.js,Python,SQL',
  },
  {
    id: 'HU89S',
    name: 'System Analyst',
    para:
      'Systems analyst skills responsibilities include analyzing business requirements, designing and implementing efficient IT systems, and conducting system testing and troubleshooting to ensure smooth operations and alignment with organizational needs.',
    skills: 'communication skills,interpersonal skills',
  },
]

class About extends Component {
  state = {searchtext: '', Lists: joblist}

  Search = event => {
    this.setState({searchtext: event.target.value})
  }

  render() {
    const {Lists, searchtext} = this.state
    const filterList = Lists.filter(each =>
      each.name.toLowerCase().includes(searchtext.toLowerCase()),
    )
    return (
      <div className="job-container">
        <h1 className="hh">Current Openings</h1>
        <input type="search" onChange={this.Search} />
        <ul className="items">
          {filterList.map(each => (
            <li className="item">
              <p>{each.name}</p>

              <p className="skill">
                <span className="hi">SKILLS : </span> {each.skills}
              </p>
              <p className="res">
                {' '}
                <span className="hi">RESPONBALITIES : </span> {each.para}
              </p>
              <button type="button" className="apply">
                Apply Now
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default About
