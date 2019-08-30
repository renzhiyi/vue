import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/first'
import Sort from '@/components/sort'
import Pai from '@/components/pai'
import Shelf from '@/components/shelf'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            component: Home,
            children: [{
                path: '/first',
                component: First
            }, {
                path: '/pai',
                component: Pai
            }, {
                path: '/shelf',
                component: Shelf
            }, {
                path: '/sort',
                component: Sort
            }]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})

// export default new Router({
//     routes: [{
//         path: '/',
//         component: First,
//         children: [{
//             path: 'first',
//             component: First
//         }, {
//             path: 'pai',
//             component: Pai
//         }, {
//             path: 'shelf',
//             component: Shelf
//         }, {
//             path: 'sort',
//             component: Sort
//         }]
//     }, ]
// })