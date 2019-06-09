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
  padding: 0rem 1rem;
  margin: 0.4rem 0.2rem;
  height: 2.8rem;
  &:first-of-type { margin-left: 0rem; }
  &:last-of-type { margin-right: 0rem; }
  font-weight: 600;
  text-transform: capitalize;

  .lt & {
    background-color: $white;
    color: $black;
  }

  .dk & {
    background-color: $black;
  }

  &:hover{
    cursor:default;
  }
  
  img {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.8rem;
  }
}
</style>
