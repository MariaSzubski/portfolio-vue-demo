<template>
  <nav>
    <nuxt-link to="/">
      <img src="logo_white.svg" alt="Maria Szubski Digital Logo" title="Maria Szubski Digital, LLC"/>
    </nuxt-link>
    <section>
      <nuxt-link to="/type-spec">About</nuxt-link>
      <nuxt-link to="/project">Projects</nuxt-link>
      <nuxt-link to="">Experience</nuxt-link>
      <Btn to="/project" green>Let's Connect</Btn>
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
  justify-content: space-between;
  padding: 2rem 4rem;
}

section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

section a {
  font-weight: bold;
  text-transform: uppercase;
  color: $white;
  position: relative;

  &:not(:last-child) {
    padding: 1rem 2rem;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.2rem;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg, $plum 0%, $plum-lt 50%, $plum 100% );
    transform: scaleX(0);
    transform-origin: bottom center;
    transition: transform $fade;
  }

  &:hover:after {
    transform: scaleX(1);
  }
}

</style>
