export const menu = ['about', 'works', 'contact'];

export const gallery = [
  {
    srcset: {
      xs: require('./assets/images/projects/xs-quote-machine.webp'),
      sm: require('./assets/images/projects/sm-quote-machine.webp'),
      md: require('./assets/images/projects/md-quote-machine.webp'),
      lg: require('./assets/images/projects/lg-quote-machine.webp'),
      xl: require('./assets/images/projects/quote-machine.webp'),
    },
    description: 'Quote Machine',
    href: 'https://bn-quote-machine.netlify.app',
    github: 'https://github.com/bogdan-niedzwiecki/quote-machine'
  },
  {
    srcset: {
      xs: require('./assets/images/projects/xs-markdown-previewer.webp'),
      sm: require('./assets/images/projects/sm-markdown-previewer.webp'),
      md: require('./assets/images/projects/md-markdown-previewer.webp'),
      lg: require('./assets/images/projects/lg-markdown-previewer.webp'),
      xl: require('./assets/images/projects/markdown-previewer.webp'),
    },
    description: 'Markdown Previewer',
    href: 'https://bn-markdown-previewer.netlify.app',
    github: 'https://github.com/bogdan-niedzwiecki/markdown-previewer'    
  },
  {
    srcset: {
      xs: require('./assets/images/projects/xs-drum-machine.webp'),
      sm: require('./assets/images/projects/sm-drum-machine.webp'),
      md: require('./assets/images/projects/md-drum-machine.webp'),
      lg: require('./assets/images/projects/lg-drum-machine.webp'),
      xl: require('./assets/images/projects/drum-machine.webp'),
    },
    description: 'Drum Machine',
    href: 'https://bn-drum-machine.netlify.app',
    github: 'https://github.com/bogdan-niedzwiecki/drum-machine'
  }
];

export const social = [
  { href: 'https://www.facebook.com/niedzwiecki/', content: 'Fb.' },
  { href: 'https://www.linkedin.com/in/bogdan-niedzwiecki', content: 'Li.' },
  { href: 'https://github.com/bogdan-niedzwiecki', content: 'Gh.' }
];
