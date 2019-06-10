<template>
  <div app>
    <Nav />
    <main>
      <h1>Style Guide</h1>
      <h2>Documentation Site</h2>
      <div class="dk">
        <SkillTag sk="phoneGap" />
        <SkillTag sk="php" />
      </div>
      <img :src="headerImg" :alt="title"/>
      <div class="content">
        <article>
          <nuxt />
        </article>
        <!-- <aside>
          <div class="lt">
            <SkillTag sk="phoneGap" />
            <SkillTag sk="php" />
            <h5>Links</h5>
            <Btn href="#" green>Demo</Btn>
            <Btn href="#" green>Source Code</Btn>
          </div>
        </aside> -->
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
import SkillTag from '~/components/SkillTag.vue'
import Btn from '~/components/Btn.vue'

export default {
  props: [
    'hero',
    'title',
  ],
  components: {
    Nav,
    Footer,
    SkillTag,
    Btn
  },
  computed: {
    headerImg() {
      return '/hero/style_guide.png';
    }
  }
}
</script>

<style lang="scss" scoped>
div[app] {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  margin: 0 auto;
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    max-width: 100%;
    object-fit: contain;
  }
}

.content {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 96rem;
}

article {
  flex: 4;
  order: 2;
  // margin-left: 6rem;
}

aside {
  flex: 1;
  order: 1;
  width: 52rem;
  > div{
    @extend %bg;
    padding: 2rem;
  }
}
</style>
