<template>
  <span><img v-if="sk" :src="imgSrc" :alt="sk" />{{ lb || sk }}</span>
</template>

<script>
export default {
  props: ['sk', 'lb'],
  computed: {
    imgSrc() {
      return '/skill/' + this.sk + '.svg';
    }
  },
}
</script>

<style lang="scss" scoped>
span {
  @extend %round;
  display: inline-flex;
  vertical-align: top;
  align-items: center;
  margin: 0.3rem;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 1.4rem;
  width: calc(50% - 0.6rem);

  .lt & {
    background-color: white;
    color: $black;
    padding: 0.4rem 1.4rem;
    height: 3rem;
  }

  .dk & {
    background-color: rgba(darken($blue, 20%), .5);
    padding: 0.6rem 1.5rem;
    height: 3.8rem;
  }

  &:hover{
    cursor:default;
  }

  &[vertical] {
    margin-right: 0rem;
  }

  img {
    width: 2.6rem;
    height: 2.6rem;
    .lt & { margin-right: 1rem; }
    .dk & { margin-right: 1.2rem; }
  }

  @media (min-width: $scr-sm) {
    width: auto;
    font-size: 1.3rem;
    margin: 0.3rem 0.6rem 0.3rem 0rem;

    &:first-of-type { margin-left: 0rem; }
    &:last-of-type { margin-right: 0rem; }

    img {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 0.6rem;
    }
  }
}
</style>
