import { createStore } from 'vuex'

import auth from "../modules/auth/store";
import providers from "../modules/storehouse/store/providers";
import products from "../modules/storehouse/store/products";

const store = createStore({
    modules: {
        auth,
        providers,
        products,
    }
})


export default store