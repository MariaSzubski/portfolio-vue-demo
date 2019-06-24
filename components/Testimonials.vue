<template>
  <section>
    <h3 pad>Endorsements</h3>
    <!-- <Testimonials /> -->
    <div class="wrapper">
      <no-ssr>
        <carousel
          :per-page="1"
          :autoplay="true"
          :autoplay-timeout="5000"
          :loop="true"
          navigation-enabled="true"
          pagination-size="8"
          navigation-next-label=">"
          navigation-prev-label="<"
        >
          <slide v-for="i in dataToPass" key="slide-{i}">
            <div class="rec">
              <h4>{{ i.from }}</h4>
              <h6>{{ i.sub }}</h6>
              <p v-html="i.quote"></p>
            </div>
          </slide>
        </carousel>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import database from '~/data/testimonials.yml'
export default {
data() {
  return { dataToPass: database }
}}
</script>

<style lang="scss" scoped>
section {
  width: calc(100vw - 100px);
  max-width: 60rem;
  margin: auto;
}
.wrapper {
  // @extend %bg;
  // background-color: white;
  @extend %round;
  padding: 2rem 0rem;
}
.rec {
  text-align: center;
  h4, h6 { color: $blue-lt; }
  p {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 0rem !important;
    margin-top: 1.6rem;
  }

}
</style>

<style lang="scss">
.VueCarousel{
  width: calc(100% - 100px) !important;
  margin: auto !important;
}
// .VueCarousel-inner {
//   opacity: 1 !important;
//   transition: transform 0ms ease 0ms !important;
// }
//
// .VueCarousel-slide {
//   opacity: 0 !important;
//   transition: opacity .6s ease-in !important;
// }
//
// .VueCarousel-slide-active {
//   opacity: 1 !important;
//   transition: opacity .6s ease-in !important;
// }

.VueCarousel-navigation-button {
  width: 5rem  !important;
  font-size: 4rem;
  font-family: Milkshake, 'Courier' !important;
  color: transparent !important;
  transition: color $fade-x;
  &:hover{ color: $blue-lt !important; }
  &:focus{ outline: none !important }
}

.VueCarousel-dot{
  background-color: $white !important;
  transition: background-color $fade-x;
  margin-top: 1rem !important;
  &:hover{ background-color: $green-lt !important; }
  &--active{ background-color: $yellow !important; }
  &:focus{ outline: none !important }
  &-container { margin-top: 1rem !important; }
}
</style>
