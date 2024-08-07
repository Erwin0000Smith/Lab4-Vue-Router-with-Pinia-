// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentListView from '@/views/StudentListView.vue'
import DetailView from '@/views/event/DetailView.vue'
import EditView from '@/views/event/EditView.vue'
import RegisterView from '@/views/event/RegisterView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import nProgress from 'nprogress'

export function createAppRouter(pageLimit: (number | null)[]) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'event-list-view',
        component: EventListView,
        props: (route) => ({
          page: parseInt((route.query?.page as string) || '1'),
          pageLimit
        })
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/student',
        name: 'student',
        component: StudentListView
      },
      {
        path: '/event/:id',
        name: 'event-layout-view',
        component: LayoutView,
        props: true,
        children: [
          {
            path: '',
            name: 'event-detail-view',
            component: DetailView,
            props: true
          },
          {
            path: 'edit',
            name: 'event-edit-view',
            props: true,
            component: EditView
          },
          {
            path: 'register',
            name: 'event-register-view',
            props: true,
            component: RegisterView
          }
        ]
      },
      {
        path: '/event/:id/edit',
        name: 'event-edit',
        props: true,
        component: EditView
      },
      {
        path: '/event/:id/register',
        name: 'event-register',
        props: true,
        component: RegisterView
      },
      {
        path: '/404/:resource',
        name: '404-resource',
        component: NotFoundView,
        props: true
      },
      {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView
      },
      {
        path: '/network-error',
        name: 'network-error',
        component: NetworkErrorView
      }
    ]
  })
  router.beforeEach(() => {
    nProgress.start()
  })
  router.afterEach(() => {
    nProgress.done()
  })
  return router
}