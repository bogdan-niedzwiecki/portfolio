
import { menu, gallery, social } from './api';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Baffle from "baffle-react";
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoMarkGithub } from 'react-icons/go';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './App.scss';
import Form from './components/Form'
SwiperCore.use([Navigation, Autoplay]);

class App extends Component {

  state = {
    activeSection: 0,
    obfuscate: false
  }

  onLeave = (origin, destination) => {
    this.setState({ activeSection: destination.index, obfuscate: true });
  }

  afterLoad = () => {
    this.setState({ obfuscate: false });
  }

  render() {
    const { activeSection, obfuscate } = this.state;
    const isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/);
    const characters = '█▒/ ██▒▒▒ █▓█▓▒ ░▒/ █░>█▓ ▒▒</ ▒▓░ █▒▒░ ░░█▒';

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
          scrollBar={isTouchDevice}
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
                  <h1 className="title">
                    <span className="highlighted" data-stroke="Hey,&nbsp;">Hey,&nbsp;</span>
                    <Baffle
                      speed={100}
                      characters={characters}
                      obfuscate={activeSection === 0 ? obfuscate : false}
                      revealDuration={2000}
                    >I am Bogdan
                    </Baffle>
                  </h1>
                  <p className="subtitle">
                    <Baffle
                      speed={100}
                      characters={characters}
                      obfuscate={activeSection === 0 ? obfuscate : false}
                      revealDuration={2000}
                    >Junior
                      </Baffle>
                    <span className="highlighted" data-stroke="&nbsp;User&nbsp;">&nbsp;User&nbsp;</span>
                    <Baffle
                      speed={100}
                      characters={characters}
                      obfuscate={activeSection === 0 ? obfuscate : false}
                      revealDuration={2000}
                    >Interface Developer
                      </Baffle>
                  </p>
                </section>
                <section className="section work">
                  <Swiper
                    wrapperTag="ul"
                    breakpoints={{ 0: { spaceBetween: 40 }, 576: { spaceBetween: 80 }, 768: { spaceBetween: 120 } }}
                    navigation
                    slidesPerView={2}
                    centeredSlides={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    speed={400}
                    simulateTouch={false}
                  >
                    {gallery.map(item => (
                      <SwiperSlide tag="li" key={item.description}>
                        <figure className="figure">
                          <a className="figure__link" href={item.href} target="_blank" rel="noopener noreferrer">
                            <img className="figure__img" alt={item.description} width="768" height="432"
                              srcSet={`${item.srcset.xs} 320w, ${item.srcset.sm} 768w, ${item.srcset.md} 1024w, ${item.srcset.lg} 1440w, ${item.srcset.xl}`}
                              src={item.srcset.xl}
                              sizes="60vw" />
                          </a>
                          {item.github ? <a className="figure__code" href={item.github} target="_blank" rel="noopener noreferrer"><GoMarkGithub size={'calc(2vw + 1rem)'}/></a> : <></>}
                          <figcaption className="figure__figcaption"><a className="figure__description" href={item.href} target="_blank" rel="noopener noreferrer">{item.description}</a></figcaption>
                        </figure>
                      </SwiperSlide>))}
                  </Swiper>
                </section>
                <section className="section contact">
                  <Form activeSection={activeSection}
                    obfuscate={obfuscate}
                    setObfuscate={obfuscate => this.setState({ obfuscate })}
                    characters={characters} />
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
