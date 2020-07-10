<template>
<div>
    <Header/>
    <slot></slot>
    <Footer/>
</div>
</template>

<script>
export default {
    name: 'Loyaut',
    components: {
        Header: ()=> import('./loyaut/Header'),
        Footer: ()=> import('./loyaut/Footer')
    }
}
</script>

<style scoped>
</style>