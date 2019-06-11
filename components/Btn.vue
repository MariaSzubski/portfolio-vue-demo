<template>
  <nuxt-link v-if="to" :to="to"><slot /></nuxt-link>
  <a v-else><slot /></a>
</template>

<script>
export default {
  props: {
    to: {},
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  position: relative;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;

  @extend %round;
  border: 1px solid $gray-md;
  padding: 1rem 3rem;
  &:not(:last-of-type) { margin-right: 1rem; }
  transition: color $fade-x;

  color: $white;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 0rem 0.1rem 0.1rem rgba($black, .75);

  img{
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
    margin-left: -0.5rem;
  }

  &:before{ // Background
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity $fade;
  }

  &:after{ // Underline
    background: none;
  }

  &:hover{
    color: $white;
    background: $gray-dk;
    &:before{ opacity: 1; }
  }

  &[vertical]{
    &:not(:last-of-type){ margin-bottom: 0.5rem; }
    width: 100%;
    padding: 1rem;
    align-items: flex-start;
  }

  &[green]{
    border-color: $green;
    &:before{ // Background
      background: linear-gradient( 30deg, $green 20%, $green-lt 100% );
    }
    &:after{ // Underline
      background: linear-gradient( 90deg, $green 0%, $blue 50%, $green 100% );
    }
    &:hover{
      color: $white;
      background: none;
    }
  }

  &[plum]{
    color: $white;
    border-color: $plum;
    &:before{ // Background
      background: $plum;
    }
  }
}
</style>
