<template>
  <nav>
    <section>
      <a href="/">About</a>
      <a href="/type-spec">Projects</a>
      <a href="">Experience</a>
      <Btn href="" green>Let's Connect</Btn>
    </section>
  </nav>
</template>

<script>
import Btn from '~/components/Btn.vue'

export default {
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>

nav {
  display: flex;
  justify-content: flex-end;
  padding: 2rem 4rem;
}

a {
  font-weight: bold;
  &:not(:last-child){ padding: 1rem 2rem; }
  text-transform: uppercase;
  transition:
    background-color $fade,
    color $fade;
}

</style>
