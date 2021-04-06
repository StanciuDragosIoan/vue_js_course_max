import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/',
      redirect: 'teams',
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      }, //our-domain.com/teams =>,
      // alias: '/'
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },

    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter }, //our-domain.com/teams =>
      beforeEnter(to, from, next) {
        console.log('users beforeEnter', to, from);
        next();
      }
    },

    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  scrollBehavior(_, _2, savedPosition) {
    // console.log('TEST');
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
  // linkActiveClass: 'active',
});

export default router;
