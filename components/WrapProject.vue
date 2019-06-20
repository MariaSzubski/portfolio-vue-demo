<template>
  <div project>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <img :src="headerImg" :alt="title">
    <div class="content">
      <article>
        <slot />
      </article>
      <aside>
        <div>
          <Btn v-for="l, idx in links"
               :key="idx"
               :href="l.href"
               target="_blank"
               green
               vertical >
            <img v-if="l.github" src="/skill/github_dk.svg" alt="GitHub Repo">
            {{ l.label }}
          </Btn>
        </div>
        <div class="dk">
          <h5 pad>
            Technology &amp; Skills
          </h5>
          <div class="tag-group">
            <SkillTag v-for="s, idx in skills"
                      :key="idx"
                      :sk="s.sk"
                      :lb="s.lb ? s.lb : '' "
                      vertical />
          </div>
        </div>
      </aside>
    </div>
  </div>
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

div[project] {
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
  max-width: 102.4rem;
  @media (max-width: $scr-sm){
    flex-direction: column;
    align-items: center;
  }
}

article {
  flex: 3;
  margin-right: 3vw;
  @media (max-width: $scr-sm){
    margin-right: 0vw;
    order: 2;
  }
}

aside {
  flex: 1;
  @media (max-width: $scr-sm){
    width: 100%;
    > div:first-of-type a {
      display: inline-flex;
      width: calc(50% - 0.6rem);
      margin: 0.3rem;
    }
  }

  > div {
    @extend %bg;
    padding: 2rem;
    margin-bottom: 2rem;
  }
}

.tag-group span{
  width: 100%;
}
</style>
