import "./assets/fonts/MADE-Soulmaze.otf";
import "./assets/images/grains.webp";
import nextjs from "./assets/images/nextjs.webp";
import { menu, social } from "./menu";
import { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Baffle from "baffle-react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import GithubCorner from "react-github-corner";
import "./App.scss";
import Form from "./components/Form";
SwiperCore.use([Navigation, Autoplay]);

class App extends Component {
  isTouchDevice = navigator.userAgent.match(
    /(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/,
  );
  characters = "█▒/ ██▒▒▒ █▓█▓▒ ░▒/ █░>█▓ ▒▒</ ▒▓░ █▒▒░ ░░█▒";
  gallery = [];

  state = {
    activeSection: 0,
    obfuscate: false,
  };

  async componentDidMount() {
    const sites = await Promise.all([
      this.getNetlifySites(),
      this.getVercelSites(),
    ]);
    this.gallery = sites.flat();
  }

  getVercelSites = async function () {
    try {
      const res = await fetch("/api/vercel/projects");

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();

      const sites = await Promise.all(
        data.projects.map(async (project) => {
          return {
            id: project.id,
            url: project.url,
            name: project.name,
            screenshot_url: nextjs,
            build_settings: {
              repo_url: project.repo_url,
            },
            caption: project.caption,
          };
        }),
      );
      return sites;
    } catch (error) {
      console.error("getVercelProjects failed");
    }
  };

  getNetlifySites = async function () {
    try {
      const res = await fetch("/api/netlify/sites");

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      return data.sites;
    } catch (error) {
      console.error("getNetlifySites failed");
      return [];
    }
  };

  onLeave = (origin, destination) => {
    this.setState({ activeSection: destination.index, obfuscate: true });
  };

  afterLoad = () => {
    this.setState({ obfuscate: false });
  };

  render() {
    const { activeSection, obfuscate } = this.state;

    return (
      <>
        <header className="header">
          <nav className="nav">
            <ul className="menu" id="menu">
              {menu.map((anchor) => (
                <li
                  className="menu__item"
                  data-menuanchor={anchor}
                  key={anchor}
                >
                  <a
                    className="menu__link"
                    href={`#${anchor}`}
                    data-stroke={anchor}
                  >
                    {anchor}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <ReactFullpage
          scrollBar={this.isTouchDevice}
          anchors={menu}
          menu={"#menu"}
          paddingTop={"8vw"}
          paddingBottom={"8vw"}
          onLeave={this.onLeave}
          afterLoad={this.afterLoad}
          render={() => {
            return (
              <main>
                <section className="section about">
                  <div className="hero">
                    <h1 className="title">
                      <span className="highlighted" data-stroke="Hey,&nbsp;">
                        Hey,&nbsp;
                      </span>
                      <Baffle
                        speed={100}
                        characters={this.characters}
                        obfuscate={activeSection === 0 ? obfuscate : false}
                        revealDuration={2000}
                      >
                        I am Bogdan
                      </Baffle>
                    </h1>
                    <p className="subtitle">
                      <span
                        className="highlighted"
                        data-stroke="&nbsp;User&nbsp;"
                      >
                        &nbsp;User&nbsp;
                      </span>
                      <Baffle
                        speed={100}
                        characters={this.characters}
                        obfuscate={activeSection === 0 ? obfuscate : false}
                        revealDuration={2000}
                      >
                        Interface Developer
                      </Baffle>
                    </p>
                  </div>
                </section>
                {this.gallery.length && (
                  <section className="section work">
                    <Swiper
                      wrapperTag="ul"
                      breakpoints={{
                        0: { spaceBetween: 40 },
                        576: { spaceBetween: 80 },
                        768: { spaceBetween: 120 },
                      }}
                      navigation
                      slidesPerView={2}
                      centeredSlides={true}
                      autoplay={{ delay: 5000, disableOnInteraction: false }}
                      speed={400}
                      simulateTouch={false}
                    >
                      {this.gallery.map((item) => (
                        <SwiperSlide tag="li" key={item.id}>
                          <figure className="figure">
                            <a
                              className="figure__link"
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                className="figure__img"
                                alt={item.name}
                                width="960"
                                height="600"
                                src={item.screenshot_url}
                              />
                            </a>
                            <GithubCorner
                              href={item.build_settings.repo_url}
                              target="_blank"
                              ariaLabel="View on Github"
                              bannerColor="#fff"
                              octoColor="#050505"
                              size="70"
                            />
                            <figcaption className="figure__figcaption">
                              <a
                                className="figure__description"
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.caption}
                              </a>
                            </figcaption>
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </section>
                )}
                <section className="section contact">
                  <Form
                    activeSection={activeSection}
                    obfuscate={obfuscate}
                    setObfuscate={(obfuscate) => this.setState({ obfuscate })}
                    characters={this.characters}
                  />
                </section>
              </main>
            );
          }}
        />
        <footer className="footer">
          <ul className="social">
            {social.map((item) => (
              <li className="social__item" key={item.content}>
                <a
                  className="social__link"
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </>
    );
  }
}

export default App;
