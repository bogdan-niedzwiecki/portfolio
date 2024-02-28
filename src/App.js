import './assets/fonts/MADE-Soulmaze.otf';
import './assets/images/grains.webp';
import { menu, social } from './menu';
import NetlifyAPI from 'netlify';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Baffle from "baffle-react";
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import GithubCorner from 'react-github-corner';
import './App.scss';
import Form from './components/Form';
SwiperCore.use([Navigation, Autoplay]);

class App extends Component {

  isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/);
  characters = '█▒/ ██▒▒▒ █▓█▓▒ ░▒/ █░>█▓ ▒▒</ ▒▓░ █▒▒░ ░░█▒';
  gallery = [];

  state = {
    activeSection: 0,
    obfuscate: false
  }

  componentDidMount() {
    this.getGallery().then(sites => this.handleGallery(sites));
  }

  getGallery = async function () {
    const client = new NetlifyAPI(process.env.REACT_APP_NETLIFY_ACCESS_TOKEN)
    const sites = await client.listSites()
    return sites
  }

  handleGallery(sites) {
    this.gallery = sites.filter(site => site.name !== 'niedzwiecki');
    this.gallery = this.gallery.map(item => ({ ...item, caption: this.createCaption(item.name) }));
  }

  createCaption(name) {
    return name.replace('bn-', '').replaceAll('-', ' ');
  }

  onLeave = (origin, destination) => {
    this.setState({ activeSection: destination.index, obfuscate: true });
  }

  afterLoad = () => {
    this.setState({ obfuscate: false });
  }

  render() {
    const { activeSection, obfuscate } = this.state;

    return (
      <>
        <header className="header">
          <nav className="nav">
            <ul className="menu" id="menu">
              {menu.map(anchor => (
                <li className="menu__item" data-menuanchor={anchor} key={anchor}>
                  <a className="menu__link" href={`#${anchor}`} data-stroke={anchor}>{anchor}</a>
                </li>))}
            </ul>
          </nav>
        </header>
        <ReactFullpage
          scrollBar={this.isTouchDevice}
          anchors={menu}
          menu={"#menu"}
          paddingTop={'8vw'}
          paddingBottom={'8vw'}
          onLeave={this.onLeave}
          afterLoad={this.afterLoad}
          render={() => {
            return (
              <main>
                <section className="section about">
                  <div className="hero">
                    <h1 className="title">
                      <span className="highlighted" data-stroke="Hey,&nbsp;">Hey,&nbsp;</span>
                      <Baffle
                        speed={100}
                        characters={this.characters}
                        obfuscate={activeSection === 0 ? obfuscate : false}
                        revealDuration={2000}
                      >I am Bogdan
                      </Baffle>
                    </h1>
                    <p className="subtitle">
                      <span className="highlighted" data-stroke="&nbsp;User&nbsp;">&nbsp;User&nbsp;</span>
                      <Baffle
                        speed={100}
                        characters={this.characters}
                        obfuscate={activeSection === 0 ? obfuscate : false}
                        revealDuration={2000}
                      >Interface Developer
                      </Baffle>
                    </p>
                  </div>
                </section>
                {this.gallery.length && <section className="section work">
                  <Swiper
                    wrapperTag="ul"
                    breakpoints={{ 0: { spaceBetween: 40 }, 576: { spaceBetween: 80 }, 768: { spaceBetween: 120 } }}
                    navigation
                    slidesPerView={2}
                    centeredSlides={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    speed={400}
                    simulateTouch={false}
                  >
                    {this.gallery.map(item => (
                      <SwiperSlide tag="li" key={item.id}>
                        <figure className="figure">
                          <a className="figure__link" href={item.url} target="_blank" rel="noopener noreferrer">
                            <img className="figure__img" alt={item.name} width="960" height="600"
                              src={item.screenshot_url}
                            />
                          </a>
                          <GithubCorner href={item.build_settings.repo_url} target="_blank" ariaLabel="View on Github" bannerColor="#fff" octoColor="#050505" size="70" />
                          <figcaption className="figure__figcaption"><a className="figure__description" href={item.url} target="_blank" rel="noopener noreferrer">{item.caption}</a></figcaption>
                        </figure>
                      </SwiperSlide>))}
                  </Swiper>
                </section>}
                <section className="section contact">
                  <Form activeSection={activeSection}
                    obfuscate={obfuscate}
                    setObfuscate={obfuscate => this.setState({ obfuscate })}
                    characters={this.characters} />
                </section>
              </main>
            );
          }}
        />
        <footer className="footer">
          <ul className="social">
            {social.map(item => (
              <li className="social__item" key={item.content}>
                <a className="social__link" href={item.href} rel="noopener noreferrer" target="_blank">{item.content}</a>
              </li>))}
          </ul>
        </footer>
      </>
    )
  }
}

export default App;
