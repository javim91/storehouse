export default {    
    name: "storehouse",
    component: () => import(/* webpackChunkName: "Storehouse Layout" */ '@/modules/storehouse/layouts/StorehouseLayout.vue'),
    children: [
        {
            name: "home",
            path: '/',
            component: () => import(/* webpackChunkName: "Home" */ '@/modules/storehouse/views/Home.vue'),
        },
        {
            name: "orders",
            path: '/orders',
            component: () => import(/* webpackChunkName: "Orders" */ '@/modules/storehouse/views/Orders.vue'),
        },
        {
            name: "products",
            path: '/products',
            component: () => import(/* webpackChunkName: "Products" */ '@/modules/storehouse/views/products/Products.vue'),
        },
        {
            name: "add-product",
            path: '/add-product',
            component: () => import(/* webpackChunkName: "Add Product" */ '@/modules/storehouse/views/products/AddProduct.vue'),
        },
        {
            name: "providers",
            path: '/providers',
            component: () => import(/* webpackChunkName: "Providers" */ '@/modules/storehouse/views/providers/Providers.vue'),
        },
        {
            name: "edit-provider",
            path: 'provider/:id',
            component: () => import(/* webpackChunkName: "Edit Provider" */ '@/modules/storehouse/views/providers/ProviderView.vue'),
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        },
        {
            name: "add-provider",
            path: '/add-provider',
            component: () => import(/* webpackChunkName: "Add Provider" */ '@/modules/storehouse/views/providers/ProviderView.vue'),
        },
        {
            name: "join-codes",
            path: '/join-codes',
            component: () => import(/* webpackChunkName: "Join Codes" */ '@/modules/storehouse/views/JoinCodes.vue'),
        },
    ],
}