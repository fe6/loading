// 组件
import WLoading from './CLoading';
import WLoadingWap from './CLoadingWap';

const waterCpt = {
  WLoading,
  WLoadingWap,
};

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(waterCpt).forEach((key) => {
    Vue.component(key, waterCpt[key]);
  });
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
};
