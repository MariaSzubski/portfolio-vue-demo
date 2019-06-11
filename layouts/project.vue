<template>
  <div app>
    <Nav />
    <main>
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <img :src="headerImg" :alt="title" />
      <div class="content">
        <article>
          <nuxt />
        </article>
        <aside>
          <div>
            <Btn v-for="l, idx in links"
                 :href="l.href"
                 :key="idx"
                 target="_blank"
                 green
                 vertical >
              <img v-if="l.github" src="/skill/github_dk.svg" alt="GitHub Repo" />
              {{ l.label }}
            </Btn>
          </div>
          <div class="lt">
            <h5 pad>Skills</h5>
            <SkillTag v-for="s, idx in skills"
                      :sk="s"
                      :key="idx"
                      vertical />
          </div>
        </aside>
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
  data() {
    return {
      title: 'Style Guide',
      subtitle: 'Documentation Site Template',
      hero: 'style_guide',
      skills: [
        'phoneGap',
        'PHP'
      ],
      links: [
        {
          href: 'netlify.com',
          label: 'Demo'
        },
        {
          href: 'github.com',
          label: 'Source Code',
          github: true,
        }
      ],
    }
  },
  components: {
    Nav,
    Footer,
    SkillTag,
    Btn
  },
  computed: {
    headerImg() {
      return '/hero/' + this.hero + '.png';
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
  align-items: flex-start;
  max-width: 96rem;
}

article {
  flex: 3;
  margin-right: 3vw;
}

aside {
  flex: 1;
  > div {
    @extend %bg;
    // display: flex;
    // flex-direction: column;
    padding: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
