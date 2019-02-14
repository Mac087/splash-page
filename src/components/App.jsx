import React, { Component } from 'react';
import Icon from './Icon'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
      titles: ['Brand Awareness', 'Relatability', 'Event RSVP', 'Interview Request'],
      alt: ['Star', 'People', 'Calendar', 'Handshake']
    };
    this.getIcon = this.getIcon.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getIcon(id, title, image, altText, text) {
    return (
      <div id={id} className="col-lg-3 d-lg-block icon-box" onClick={this.handleClick}>
        <h2>{title}</h2>
        <img src={image} alt={altText} className="center-block text-center" />
        <p className="mt-2">{text}</p>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ activeID: e.currentTarget.id });
  }

  render() {
    return (
      <div>
        <section id="icons">
          <div className="container-fluid icon-class">
            <div className="row">
              {this.getIcon(1, 'Brand Awareness', 'img/icon1.png', 'Icon Star', 'Enable student relate to your brand and your mission. Getting students familiar with your brand early on helps with forming positive brand association.')}
              {this.getIcon(2, 'Relatability', 'img/icon2.png', 'Icon People', 'The best asset your company has in being able to relate to students is your current employees carerre experiences. We help you leverage these in a powerful way.')}
              {this.getIcon(3, 'Event RSVP', 'img/icon3.png', 'Icon Calendar', 'Are students aware of your on campus events? We target your messaging by school and class type to ensure the students you care about are in the know.')}
              {this.getIcon(4, 'Interview Request', 'img/icon4.png', 'Icon Handshake', 'We give students the opportunity to connect directly with you to request more information, to ask questions, and ultimately apply for a job. We keep things organized and simple.')}
            </div>
          </div>
        </section>
        {this.state.activeID ? <Icon
          id={this.state.activeID}
          title={this.state.titles[this.state.activeID - 1]}
          alt={`Icon Big ${this.state.alt[this.state.activeID - 1]}`}
        />
          : ''}
      </div>
    );
  }
}

export default App;
