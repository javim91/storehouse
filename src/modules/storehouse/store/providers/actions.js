// Acciones asincronas o no, que sirven para llamar a una mutacion
import storehouseApi from '@/api/storehouseApi'

export const loadProviders = async ({ commit }) => {
    
   const { data } = await storehouseApi.get('/providers.json')

   if ( !data ) {
      commit('setProviders', [])
      return 
   }

   const providers = []

   for( let id of Object.keys(data) ){
      providers.push({
         id,
         ...data[id]
      })
   }

   commit('setProviders', providers)
}


export const createProvider = async ({ commit }, provider ) => {

   const { cif, name } = provider
   const dataToSave = { cif, name }

   const { data } = await storehouseApi.post(`providers.json`, dataToSave)
   

   dataToSave.id = data.name

   commit('addProvider', dataToSave)

   return data.name

}

export const updateProvider = async ({ commit }, provider ) => {

   const { cif, name } = provider
   const dataToSave = { cif, name }

   const { data } = await storehouseApi.put(`providers/${provider.id}.json`, dataToSave)
   
   commit('updateProvider', { ...provider })

}

export const deleteProvider = async ({ commit }, id ) => {

   await storehouseApi.delete(`/providers/${id}.json`)

   commit('removeProvider', id)

   return id
}
