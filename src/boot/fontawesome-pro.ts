import { boot } from 'quasar/wrappers';
import '@fortawesome/fontawesome-pro/css/fontawesome.css';
import '@fortawesome/fontawesome-pro/css/light.css';
import '@fortawesome/fontawesome-pro/css/duotone.css';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.config.globalProperties.$q.iconSet.chip.remove =
    'fa-duotone fa-circle-xmark';
  app.config.globalProperties.$q.iconSet.chip.selected =
    'fa-duotone fa-circle-check';
  app.config.globalProperties.$q.dark.set(true);
});
