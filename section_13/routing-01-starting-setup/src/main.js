import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/',
      redirect: 'teams'
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
      components: { default: UsersList, footer: UsersFooter } //our-domain.com/teams =>
    },

    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});
const app = createApp(App);
app.use(router);

app.mount('#app');
