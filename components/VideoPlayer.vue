<template>
  <div :class="classes">
    <iframe
      width="640"
      :height="sq ? 360 : 480"
      :src="src"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {
  props: ['embedId', 'w', 'h', 'sq'],
  computed: {
    classes() {
      return 'video' + ( this.sq ? ' sq' : '');
    },
    src(){
      return `https://www.youtube-nocookie.com/embed/${this.embedId}?rel=0&amp;showinfo=0`
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  padding-top: 25px;
  height: 0;
  overflow: hidden;
  width: 100%;
  max-width: 100%;

	padding-bottom: 37.5%;
	margin-bottom: 24px;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  &.sq {
  	padding-bottom: 71.5%;
  }

  iframe {
    width: 100%;
    height: 100%;
    frameborder: 0;
  }
}
</style>