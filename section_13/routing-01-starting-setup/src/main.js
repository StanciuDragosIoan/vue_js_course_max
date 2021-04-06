import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    console.log('needs auth');
    next();
  }

  console.log('Global beforeEach');
  console.log(to, from);
  next();
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
});

//runs after navigation was confirmed
router.afterEach((to, from) => {
  //send analytics data to server
  //not used to control what user sees
  console.log(to, from);
  console.log('Global afterEach');
});

//runs before user goes to another page

const app = createApp(App);
app.use(router);

app.mount('#app');
