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
  margin: 0.3rem 0.6rem 0.3rem 0rem;
  &:first-of-type { margin-left: 0rem; }
  &:last-of-type { margin-right: 0rem; }
  font-weight: 700;
  text-transform: capitalize;

  .lt & {
    background-color: white;
    color: $black;
    padding: 0.4rem 1rem;
  }

  .dk & {
    background-color: $black;
    padding: 0.6rem 1rem;
  }

  &:hover{
    cursor:default;
  }

  img {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0.6rem;
  }
}
</style>
