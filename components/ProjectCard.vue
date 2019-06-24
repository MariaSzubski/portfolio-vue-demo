<template>
  <article project element>

    <div class="content">
      <h1>{{ title }}</h1>
      <h2 pad>{{ subtitle }}</h2>
      <img :src="headerImg" :alt="title">
      <div><p v-html="desc"></p></div>
    </div>

    <aside>
      <div v-if="links" class="links">
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
          Skills
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
    subtitle: { type: String },
    desc: { type: String },
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

article[project]{
  display: flex;
  max-width: 96rem;
  background-color: rgba(darken($blue, 10%), .8);

  @media (max-width: $scr-sm){
    flex-direction: column;
    align-items: center;
  }
}

.content {
  flex: 7;
  padding: 2rem 4rem 4rem;
  background-color: rgba(darken($blue, 1%), .2);
  img {
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 3rem;
  }
  h1 {
    font-size: 4.8rem;
  }
}

aside {
  flex: 2;
  padding: 3rem;

  @media (max-width: $scr-sm){
    > div:first-of-type a {
      display: inline-flex;
      width: calc(50% - 0.6rem);
      margin: 0.3rem;
    }
  }
  @media (max-width: $scr-xs){
    > div:first-of-type a {
      width: 100%;
    }
  }
}

.links {
  margin-bottom: 4rem;
}

.tag-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: $scr-sm){
    flex-direction: row;
    span { flex: 1; min-width: 48%; }
  }
  @media (max-width: $scr-xs){
    span { min-width: 100%; }
  }
}


</style>