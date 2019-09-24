<template>
  <main>
    <div>
      <h3 pad>Work Samples</h3>
      <div>
        <ProjectCard
          v-for="(p, idx) in projects"
          :key="'proj-' + idx"
          :title="p.title"
          :subtitle="p.subtitle"
          :desc="p.desc"
          :links="p.links"
          :skills="p.skills"
          :hero="p.hero"
        />
        <div class="madeWith">
          <h2>{{ madeWith.title }}</h2>
          <div class="dk">
            <SkillTag v-for="(v, idx) in madeWith.skills"
                      :key="'made-' + idx"
                      :sk="v.sk"
                      :lb="v.lb"
                      :fm="v.fm" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'
import projList from '~/data/all-projects.yml'
import SkillTag from '~/components/SkillTag.vue'

export default {
  components: {
    ProjectCard,
    SkillTag
  },
  data(){
    return {
      projects: projList.slice(0, projList.length - 1),
      madeWith: projList.pop()
    }
  }
}
</script>

<style lang="scss" scoped>
.madeWith {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem auto;
  padding: 1rem;
  width: 400px;
  background-color: rgba(darken($blue, 10%), .9);
  h2 {
    margin: 1rem auto;
  }
}
</style>