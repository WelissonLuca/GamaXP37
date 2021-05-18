/** Imports * */
import Utils from './service/Utils';

/** Pages * */
import { error404, home, jedi } from './views/pages/index';

/** Routes * */
const routes = {
  '/': home,
  '/jedi': jedi,
};

const router = async () => {
  const root = document.getElementById('root');

  const request = Utils.parseRequestURL();

  const parseURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? `/:id${request.id}` : '') + (request.verb ? `/${request.verb}` : '');
  const page = routes[parseURL] ? routes[parseURL] : error404;

  root.innerHTML = await page.render();
  await page.after_render();
};

/** observa mudanças na hash */
window.addEventListener('hashchange', router);

/** oberva carregamento da pagina */
window.addEventListener('load', router);
