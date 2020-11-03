import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import aboutServices from './cmps/about-services.cmp.js'
import aboutTeam from './cmps/about-team.cmp.js'


const myRoutes = [{
        path: '/book',
        component: bookApp
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage,
        children: [{
                path: 'services',
                component: aboutServices
            },
            {
                path: ':team?',
                component: aboutTeam
            }
        ]
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })