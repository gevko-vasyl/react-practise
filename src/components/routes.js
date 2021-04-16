import Products from '../pages/Products';
import Counters from '../pages/Counters';
import LifeCycleTest from '../pages/LifeCycleTest';

export const routes = [
  {
    link: '/products',
    label: 'Products',
    component: Products,
  },
  {
    link: '/counters',
    label: 'Counters',
    component: Counters,
  },
  {
    link: '/life-cycle-test',
    label: 'LifeCycleTest',
    component: LifeCycleTest,
  },
];
