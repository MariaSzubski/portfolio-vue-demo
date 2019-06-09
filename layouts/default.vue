<template>
  <div app>
    <Nav />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss" scoped>
div[app] {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  margin: 0 auto;
  padding: 0rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
