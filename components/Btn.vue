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
  display: inline-block;
  border-radius: 0.4rem;
  border: 1px solid $gray-md;
  text-decoration: none;
  padding: 1rem 3rem;
  transition:
    background-color $fade,
    color $fade;

  &:after{ background: none; }
  &:hover{
    color: $white;
    background-color: $gray-dk;
  }

  &[green]{
    border-color: $green;
    &:after{
      background: linear-gradient(
        90deg, $green 0%, $blue 50%, $green 100% );
    }
    &:hover{
      color: $white;
      background: linear-gradient(
        25deg, $green 0%, $green-lt 100% );
    }
  }

  &[plum]{
    color: $white;
    border-color: $plum;
    &:hover{
      background-color: $plum;
    }
  }
}
</style>
