// Modifican el state

export const setProviders = ( state, providers ) => {
    //state.providers = [...state.providers, ...providers]
    state.providers = providers
    state.isLoading = false
}

export const addProvider = (state, provider) => {
    state.providers = [ provider, ...state.providers ]
}

export const updateProvider = (state, provider) => {

    const idx = state.providers.map( p => p.id ).indexOf( provider.id )
    state.providers[idx] = provider
}

export const removeProvider = (state, id) => {
    
    state.provider = state.providers.filter( provider => provider.id !== id )

}