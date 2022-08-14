// Traen información del state y procesarla

// export const myGetter = ( state ) => {
// return state
// }

export const getProviders = ( state ) => {
    return state.providers
}

export const getProviderById = ( state ) => ( id = '' ) => {
    const provider = state.providers.find( provider => provider.id == id )

    if( !provider ) return 

    return { ...provider }
}



