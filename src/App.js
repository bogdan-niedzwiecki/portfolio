import React, { Component, Fragment } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Baffle from "baffle-react";
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, Autoplay]);

let menu = ['about', 'works', 'contact'];

let gallery = [
  { src: require('./img/projects/survey-form.webp'), description: 'Survey Form', href: 'https://bogdan-niedzwiecki.github.io/survey-form/', },
  { src: require('./img/projects/possible.webp'), description: 'Possible', href: 'https://bn-possible.netlify.app', },
  { src: require('./img/projects/quote-machine.webp'), description: 'Quote Machine', href: 'https://bn-quote-machine.netlify.app', },
  { src: require('./img/projects/markdown-previewer.webp'), description: 'Markdown Previewer', href: 'https://bn-markdown-previewer.netlify.app', },
  { src: require('./img/projects/drum-machine.webp'), description: 'Drum Machine', href: 'https://bn-drum-machine.netlify.app', }
]

let social = [{ href: 'https://www.facebook.com/niedzwiecki/', content: 'Fb.' },
{ href: 'https://www.linkedin.com/in/bogdan-niedzwiecki', content: 'Li.' },
{ href: 'https://github.com/bogdan-niedzwiecki', content: 'Gh.' }];

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header anchors={menu} />
        <ReactFullpage
          anchors={menu}
          menu={"#menu"}
          paddingTop={'65px'}
          paddingBottom={'65px'}
          render={() => {
            return (
              <main>
                <section className="section about">
                  <div className="hero">
                    <h1 className="hero__title">
                      <span className="highlighted" data-stroke="Hey, ">Hey, </span>
                      <Baffle
                        speed={100}
                        characters="█▒/ ██▒▒▒ █▓█▓▒ ░▒/ █░>█▓ ▒▒</ ▒▓░ █▒▒░ ░░█▒"
                        obfuscate={false}
                        revealDuration={1500}
                      >I am Bogdan
                    </Baffle>
                    </h1>
                    <p className="hero__subtitle">
                      <Baffle
                        speed={100}
                        characters="█▒/ ██▒▒▒ █▓█▓▒ ░▒/ █░>█▓ ▒▒</ ▒▓░ █▒▒░ ░░█▒"
                        obfuscate={false}
                        revealDuration={2000}
                      >Junior
                    </Baffle>
                      <span className="highlighted" data-stroke="&nbsp;User "> User </span>
                      <Baffle
                        speed={100}
                        characters="█▒/ ██▒▒▒ █▓█▓▒ ░▒/ █░>█▓ ▒▒</ ▒▓░ █▒▒░ ░░█▒"
                        obfuscate={false}
                        revealDuration={2000}
                      >Interface Developer
                    </Baffle>
                    </p>
                  </div>
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
                  >
                    {gallery.map(item => (
                      <SwiperSlide tag="li" key={item.description}>
                        <figure className="figure">
                          <a className="figure__link" href={item.href} target="_blank" rel="noopener noreferrer">
                            <img className="figure__img" alt={item.description} src={item.src} />
                          </a>
                          <figcaption className="figure__figcaption"><a href={item.href} target="_blank" rel="noopener noreferrer" className="figure__description">{item.description}</a></figcaption>
                        </figure>
                      </SwiperSlide>))}
                  </Swiper>
                </section>
                <div className="section">
                  <h3>id="section2"</h3>
                </div>
              </main>
            );
          }}
        />
        <Footer anchors={social} />
      </Fragment>
    )
  }
}

export default App;
