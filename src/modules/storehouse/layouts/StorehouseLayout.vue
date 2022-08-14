<template>
    <Navbar />

    <Sidebar />

    <router-view />

</template>

<script>
import Navbar from '@/modules/storehouse/components/Navbar'
import Sidebar from '@/modules/storehouse/components/Sidebar'

export default {
    components: {
        Navbar,
        Sidebar
    }
}
</script>

<style>

</style>