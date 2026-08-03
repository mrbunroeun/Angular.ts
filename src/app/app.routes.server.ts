import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'latest-events-detail/:id',
    renderMode: RenderMode.Server, // render per-request instead of prerendering
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];