export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            name: 'login',
            path: '',
            component: () => import(/* webpackChunkName: "Login" */ '@/modules/auth/views/Login.vue'),
        },
        {
             path: '/register',
             name: 'register',
             component: () => import(/* webpackChunkName: "Register" */ '@/modules/auth/views/Register.vue'),
        }
    ]
}