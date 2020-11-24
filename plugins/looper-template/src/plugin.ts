import { createPlugin, createRouteRef } from '@backstage/core';
import ExampleComponent from './components/ExampleComponent';

export const rootRouteRef = createRouteRef({
  path: '/looper-template',
  title: 'looper-template',
});

export const plugin = createPlugin({
  id: 'looper-template',
  register({ router }) {
    router.addRoute(rootRouteRef, ExampleComponent);
  },
});
