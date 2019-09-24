<template>
  <article>
    <h2>Style Guide</h2>
    <h5>Subtitle</h5>
    <div>
    <div class="block">
      <div class="img">
        <img src="/hero/style_guide.png" />
      </div>
      <!-- <p>
        The Style Guide is a template for project documentation. It displays font styles, color palettes, web components, and design patterns. It's built to be responsive across all device sizes with AJAX and PHP, with fallbacks for users who have JavaScript disabled.
      </p> -->
    </div>
      <aside class="links">

        <div class="dk">
          <div class="tag-group">
            <SkillTag v-for="s, idx in skills"
                      :key="idx"
                      :sk="s.sk"
                      :lb="s.lb"
                      :fm="s.fm"
                      vertical />
          </div>
        </div>
          <div class="icons">
            <img src="/favicon/favicon-32x32.png" />
            <img src="/favicon/favicon-32x32.png" />
          </div>
      </aside>
    </div>
  </article>
</template>

<script>
import SkillTag from '~/components/SkillTag.vue'
import Btn from '~/components/Btn.vue'

export default {
  components: {
    SkillTag,
    Btn
  },
  props: {
    title: { type: String },
    subtitle:{ type: String },
    links: { type: Array },
    skills: { type: Array },
    hero: { type: String },
  },
  computed: {
    headerImg() {
      return '/hero/' + this.hero + '.png'
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  display: inline-block;
  margin: 2rem 1rem;
  @extend %bg;
  width: 19vw;
  padding: 2rem;
  border: 1px solid rgba($black,.5);
  .block {
    font-size: 1.5rem;
  }
  img{
    width: 100%;
    padding: 1rem 0rem;
  }
  a {
    width: 45% !important;
  }
  .icons img{
    width: 24px;
    display: inline-block;
    margin-left: auto;
    margin-right: 0px;
  }
}
</style>