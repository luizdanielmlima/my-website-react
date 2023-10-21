export interface PortfolioCardModel {
  title: string;
  type: 'commercial' | 'side project';
  description?: string;
  thumbUrl: string;
  gitHubUrl?: string;
  previewUrl?: string;
  previewType?: 'externalUrl' | 'youtubeModal';
  youtubeVideoId?: string;
}

export const portfolioCardsData: PortfolioCardModel[] = [
  {
    title: 'Moztra',
    type: 'commercial',
    description:
      'An Angular app to create interactive presentations (content management system)',
    thumbUrl: 'portfolio_moztra_crop.png',
    previewType: 'youtubeModal',
    youtubeVideoId: 'https://www.youtube.com/embed/VSWYHQtCzmI',
  },
  {
    title: 'Movieviz (React)',
    type: 'side project',
    description:
      'I rewrote with React/Ionic the same Movieviz app I made in Angular/Ionic, with data from the tmdb API.',
    thumbUrl: 'portf_movieviz_react_crop.png',
    gitHubUrl: 'https://github.com/luizdanielmlima/movieviz-react',
    previewUrl: 'https://movievizreact.web.app/',
    previewType: 'externalUrl',
  },
  {
    title: 'Logrock',
    type: 'commercial',
    description:
      'A Next.js web application focused on helping truck companies manage all things related to compliance. Built as a Logrock employee, no github available.',
    thumbUrl: 'portf_logrock_crop.png',
  },
  {
    title: 'First Key Homes',
    type: 'commercial',
    description:
      'An internal web app application used by FKH employees to evaluate real state assets, built with React. Built as GFT employee, no github available.',
    thumbUrl: 'portf_fkh_crop.png',
  },
  {
    title: 'Womem Foundation',
    type: 'commercial',
    description:
      'A React/Ionic app to help people get information and donate to women candidates in Latin America. Built as Nth freelancer, no github available.',
    thumbUrl: 'portf_womenfoundation_crop.png',
  },
  {
    title: 'Soya Coin',
    type: 'commercial',
    description:
      'An Angular web app focused on investors who want to invest and exchange digital coins such as Bitcoin and Ethereum.Built as Nth freelancer, no github available.',
    thumbUrl: 'portf_soyacoin_crop.png',
  },
  {
    title: 'WEMC',
    type: 'commercial',
    description:
      'An Angular 9 app that shows historical climate and carbon emissions data through an interactive map in an educational way. Built as Nth freelancer, no github available.',
    thumbUrl: 'portf_wemc_crop.png',
    previewUrl: 'https://tealtool.earth/',
    previewType: 'externalUrl',
  },
  {
    title: 'Movieviz (Angular)',
    type: 'side project',
    description:
      'An Ionic / Angular app I developed, with data obtained through Movie DB API.',
    thumbUrl: 'portf_movieviz2_crop.jpg',
    previewUrl: 'https://movieviz.web.app/',
    previewType: 'externalUrl',
  },
  {
    title: 'Cooktub',
    type: 'side project',
    description: `An Ionic4 / Angular app with some selected cooking channels, playlists and videos (data from Youtube's API).`,
    thumbUrl: 'portf_cooktub_crop.jpg',
    gitHubUrl: 'https://github.com/luizdanielmlima/cooktub',
    previewUrl: 'https://cooktub.web.app/',
    previewType: 'externalUrl',
  },
  {
    title: 'Patagonia',
    type: 'side project',
    description:
      'A website about my trip to Patagonia, in special the Map/Gallery page, where I learned a lot about the Google Maps API, a nice way to show the landscape.',
    thumbUrl: 'portf_patagonia_crop.png',
    gitHubUrl: 'https://github.com/luizdanielmlima/trip-patagonia',
    previewUrl: 'https://luizdanielmlima.github.io/trip-patagonia/',
    previewType: 'externalUrl',
  },
  {
    title: 'Path Finding',
    type: 'side project',
    description:
      'Quite a fun project, where I had the chance to learn Paper.js and a path finding library. The "game terrain" can be randomized, give it a try!',
    thumbUrl: 'portf_pathfinding_crop.jpg',
    gitHubUrl: 'https://github.com/luizdanielmlima/pathfindit',
    previewUrl: 'https://luizdanielmlima.github.io/pathfindit/',
    previewType: 'externalUrl',
  },
  {
    title: 'Quiz',
    type: 'side project',
    description:
      'Quite a fun project, where I had the chance to learn Paper.js and a path finding library. The "game terrain" can be randomized, give it a try!',
    thumbUrl: 'portf_quiz_crop.png',
    gitHubUrl: 'https://github.com/luizdanielmlima/simplequiz',
    previewUrl: 'https://luizdanielmlima.github.io/simplequiz/',
    previewType: 'externalUrl',
  },
];
