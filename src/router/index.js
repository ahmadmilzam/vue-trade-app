/* eslint-disable global-require */

const Home = (resolve) => {
  require.ensure([], () => resolve(require('@/components/staticpage/Home')), 'home');
};

const PortfolioList = (resolve) => {
  require.ensure([], () => resolve(require('@/components/portfolio/List')), 'portfolio');
};

const StockList = (resolve) => {
  require.ensure([], () => resolve(require('@/components/stocks/List')), 'stock');
};

const About = (resolve) => {
  require.ensure([], () => resolve(require('@/components/staticpage/About')), 'about');
};

const Contact = (resolve) => {
  require.ensure([], () => resolve(require('@/components/staticpage/Contact')), 'contact');
};

// function forceIDToNumber(route) {
//   return {
//     id: parseInt(route.params.id, 10),
//   };
// }

export default [
  {
    path: '/',
    name: 'homeURL',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolioURL',
    component: PortfolioList,
  },
  {
    path: '/stock',
    name: 'stockURL',
    component: StockList,
  },
  {
    path: '/about',
    name: 'aboutURL',
    component: About,
  },
  {
    path: '/contact',
    name: 'contactURL',
    component: Contact,
  },
  // {
  //   path: '/news/:id(\\d+)',
  //   name: 'newsDetailURL',
  //   component: NewsDetail,
  //   props: forceIDToNumber,
  //   children: [
  //     {
  //       path: 'edit',
  //       name: 'newsEditURL',
  //       component: NewsEdit,
  //     },
  //   ],
  // },
  {
    path: '*',
    redirect: {
      name: 'homeURL',
    },
  },
];
