import InJapan from './images/injapan.png'
import ChannelTech from './images/channel-tech.png'
import Cryptology from './images/cryptology.png'
import CSS from './images/CSS3.svg.png'
import Git from './images/git-logo.png'
import Gopher from './images/gopher-logo.png'
import JS from './images/javascript-logo.png'
import NodeJS from './images/nodejs-icon-logo.png'
import ReactLogo from './images/react-logo-vector.svg'
import MongoDB from './images/mongodb.png'
import MUI from './images/mui.svg'
import GCP from './images/GCP.png'
import PostGres from './images/PostgreSQL.png'
import Docker from './images/docker.png'
import Kubernetes from './images/kubernetes.png'
import Redis from './images/redis.png'

export const projects = [
  {
    title: 'InJapan',
    description:
      'A personal blog about living in Japan as a foreigner. InJapan is designed for those who are interested in learning about Japan in raw media form. Built with React + Golang.',
    image: InJapan,
    techStack: ['React', 'Go-Gin', 'Mongodb', 'CSS'],
    githubLink: 'https://github.com/teandresmith/injapan-golang-react-frontend',
    websiteLink: 'https://injapan.netlify.app',
  },
  {
    title: 'channel tech',
    description:
      'Fullstack technology eCommerce website. Contains features such as Authentication/Authorization, Filtering, Pagination and more. Built with React + Golang.',
    image: ChannelTech,
    techStack: ['React', 'Go-Gin', 'Mongodb', 'Material UI'],
    githubLink: 'https://github.com/teandresmith/channel-tech',
    websiteLink: 'https://channel-tech.netlify.app',
  },
  {
    title: 'Cryptology',
    description:
      'Cryptology is practically a cryptocurrency-based encylopedia that presents information about the current top crypto coins.',
    image: Cryptology,
    techStack: ['React', 'Ant Design', 'RTK', 'RapidAPI'],
    githubLink: 'https://github.com/teandresmith/cryptology',
    websiteLink: 'https://cryptology-web.netlify.app/',
  },
]

export const proficientSkills = [
  {
    logo: ReactLogo,
    name: 'React',
  },
  {
    logo: JS,
    name: 'JavaScript',
  },
  {
    logo: Gopher,
    name: 'Golang',
  },
  {
    logo: MongoDB,
    name: 'MongoDB',
  },
  {
    logo: MUI,
    name: 'Material UI',
  },
  {
    logo: NodeJS,
    name: 'Node.js',
  },
  {
    logo: Git,
    name: 'Git',
  },
  { logo: CSS, name: 'CSS' },
]

export const familiarSkills = [
  {
    logo: Kubernetes,
    name: 'Kubernetes',
  },
  {
    logo: GCP,
    name: 'GCP',
  },
  {
    logo: Docker,
    name: 'Docker',
  },

  {
    logo: PostGres,
    name: 'PostgreSQL',
  },
  {
    logo: Redis,
    name: 'Redis',
  },
]
