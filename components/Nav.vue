<template>
  <nav>
    <nuxt-link to="/">
      <img src="/logo_white.svg" alt="Maria Szubski Digital Logo" title="Maria Szubski Digital, LLC"/>
    </nuxt-link>
    <section>
      <nuxt-link to="/type-spec">About</nuxt-link>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="">Experience</nuxt-link>
      <Btn to="/projects" green>Let's Connect</Btn>
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

  @media (max-width: $scr-sm){
    padding: 1rem 2rem;
    // z-index: 9000;
    // position: fixed;
    // bottom: 0rem;
    // width: 100vw;
    // background: linear-gradient( 150deg, $black 8%, darken($blue, 4%) 100% );
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    // background-size: 100vw 100vh;
    // background-position: bottom center;

    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
}

section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: $scr-sm){
    flex-wrap: wrap;
  }
}

section a {
  font-weight: bold;
  text-transform: uppercase;
  color: $white;
  position: relative;

  &:not(:last-child) {

    padding: 1rem 2rem;

    @media (max-width: $scr-sm){
      padding: 1rem;
    }
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
