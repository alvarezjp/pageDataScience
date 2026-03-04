import { PlaceHolderImages } from '@/lib/placeholder-images';
import { IconType } from "react-icons";
// import { FaAws, FaFigma, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
// import { FaGitAlt } from "react-icons/fa6";
// import { RiNextjsLine, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
// import { SiMysql, SiReactquery, SiRedux, SiStrapi } from "react-icons/si";
// import { TbBrandTypescript } from "react-icons/tb";
import { RiBarChart2Fill } from "react-icons/ri";

import {
  FaPython,
  FaGitAlt,
  FaGithub,
  FaAws,
} from 'react-icons/fa';

import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
  SiMysql,
  SiPostgresql,
  SiTableau,
  SiTensorflow,
  SiKeras
  // SiPowerbi,
} from 'react-icons/si';

export type Technology = {
  name: string;
  icon: IconType;
};

export const technologies: Technology[] = [
  { name: 'Python', icon: FaPython },
  { name: 'pandas', icon: SiPandas },
  { name: 'NumPy', icon: SiNumpy },
  { name: 'SQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'scikit-learn', icon: SiScikitlearn },
  { name: 'Google Colab', icon: SiGooglecolab },
  { name: 'Tableau', icon: SiTableau },
  { name: 'Power BI', icon: RiBarChart2Fill },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'AWS', icon: FaAws },
  { name: 'Tensor Flow', icon: SiTensorflow },
  { name: 'Keras', icon: SiKeras },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  dashboard?:string;
};

const project1Image = PlaceHolderImages.find(p => p.id === 'project-1');
const project2Image = PlaceHolderImages.find(p => p.id === 'project-2');
const project3Image = PlaceHolderImages.find(p => p.id === 'project-3');

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Análisis Ventas de un Hipermercado',
    description: 'Este analisis se enfoco en el comportamiento, identificacion y patrones estacionales.El proyecto incluye limpieza de datos, análisis descriptivo, visualización y conclusiones basadas en datos reales.',
    image: project1Image?.imageUrl || '',
    tags: ['Python', 'Pandas', 'NumPy','Matplotlib', 'Seaborn','scikit-learn'],
    liveUrl: 'https://github.com/alvarezjp/PortafolioDataScience/blob/main/01-HipermercadoTemporalidadVenta/Notebook/VentasTemporalidad.ipynb',
    githubUrl: 'https://github.com/alvarezjp/PortafolioDataScience/tree/main/01-HipermercadoTemporalidadVenta',
  },
  {
    id: 'project-2',
    title: 'Análisis de Campañas de Marketing',
    description: 'Este proyecto fue enfocado en el estudio del funnel de conversión, evaluando el comportamiento de los usuarios en cada etapa y detectando puntos de conversion.',
    image: project2Image?.imageUrl || '',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn'],
    liveUrl: 'https://github.com/alvarezjp/PortafolioDataScience/blob/main/02-CampanaMarketing/Notebook/marketingCampaignData.ipynb',
    githubUrl: 'https://github.com/alvarezjp/PortafolioDataScience/tree/main/02-CampanaMarketing',
  },
  {
    id: 'project-3',
    title: 'Analisis y modelo de Riesgo Crediticio',
    description: 'Proyecto enfocado en el análisis exploratorio y modelado predictivo del incumplimiento crediticio. ',
    image: project3Image?.imageUrl || '',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Scikit-learn', 'XGBoost'],
    liveUrl: 'https://github.com/alvarezjp/PortafolioDataScience/blob/main/03-RiesgoCrediticio/Notebook/03-Credit.ipynb',
    githubUrl: 'https://github.com/alvarezjp/PortafolioDataScience/tree/main/03-RiesgoCrediticio',
    dashboard: 'https://dashboardriesgocrediticio.streamlit.app/',
  },
];
