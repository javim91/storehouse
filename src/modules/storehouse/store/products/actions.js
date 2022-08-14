// Acciones asincronas o no, que sirven para llamar a una mutacion
import storehouseApi from '@/api/storehouseApi'

export const loadProducts = async ({ commit, dispatch }) => {
    
   const { data } = await storehouseApi.get('/products.json')

   if ( !data ) {
      commit('setProducts', [])
      return 
   }

   const products = []

   dispatch('providers/loadProviders', null, { root: true })

   for( let id of Object.keys(data) ){
      products.push({
         id,
         ...data[id]
      })
   }

   commit('setProducts', products)
}


export const createProduct = async ({ commit }, product ) => {

   const { code, name, providerId } = product
   const dataToSave = { code, name, providerId }

   const { data } = await storehouseApi.post(`products.json`, dataToSave)
   

   dataToSave.id = data.name

   commit('addProduct', dataToSave)

   return data.name

}

export const deleteProduct = async ({ commit }, id ) => {

   await storehouseApi.delete(`/products/${id}.json`)

   commit('removeProduct', id)

   return id
}
