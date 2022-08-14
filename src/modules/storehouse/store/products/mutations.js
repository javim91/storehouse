// Modifican el state

export const setProducts = ( state, products ) => {
    //state.products = [...state.products, ...products]
    state.products = products
    state.isLoading = false
}

export const addProduct = (state, product) => {
    state.products = [ product, ...state.products ]
}

export const removeProduct = (state, id) => {
    
    state.product = state.products.filter( product => product.id !== id )

}