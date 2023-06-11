
import App from './App.vue'
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import messages from './locales/locales';

const i18n = createI18n({
  locale: 'en', // set the default locale
  messages, // import your localization messages from a separate file
});

const app = createApp(App);
app.use(i18n); // use the i18n plugin
app.mount('#app');



