export const menu = ['about', 'works', 'contact'];

export const gallery = [
  {
    srcset: {
      xs: require('./img/projects/xs-possible.webp'),
      sm: require('./img/projects/sm-possible.webp'),
      md: require('./img/projects/md-possible.webp'),
      lg: require('./img/projects/lg-possible.webp'),
      xl: require('./img/projects/possible.webp'),
    },
    description: 'Possible',
    href: 'https://bn-possible.netlify.app',
  },
  {
    srcset: {
      xs: require('./img/projects/xs-quote-machine.webp'),
      sm: require('./img/projects/sm-quote-machine.webp'),
      md: require('./img/projects/md-quote-machine.webp'),
      lg: require('./img/projects/lg-quote-machine.webp'),
      xl: require('./img/projects/quote-machine.webp'),
    },
    description: 'Quote Machine',
    href: 'https://bn-quote-machine.netlify.app',
    github: 'https://github.com/bogdan-niedzwiecki/quote-machine'
  },
  {
    srcset: {
      xs: require('./img/projects/xs-markdown-previewer.webp'),
      sm: require('./img/projects/sm-markdown-previewer.webp'),
      md: require('./img/projects/md-markdown-previewer.webp'),
      lg: require('./img/projects/lg-markdown-previewer.webp'),
      xl: require('./img/projects/markdown-previewer.webp'),
    },
    description: 'Markdown Previewer',
    href: 'https://bn-markdown-previewer.netlify.app',
    github: 'https://github.com/bogdan-niedzwiecki/markdown-previewer'    
  },
  {
    srcset: {
      xs: require('./img/projects/xs-drum-machine.webp'),
      sm: require('./img/projects/sm-drum-machine.webp'),
      md: require('./img/projects/md-drum-machine.webp'),
      lg: require('./img/projects/lg-drum-machine.webp'),
      xl: require('./img/projects/drum-machine.webp'),
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