<template>
  <div>
    <ProjectCard
      v-for="(p, idx) in passProjects"
      :key="idx"
      :title="p.title"
      :subtitle="p.subtitle"
      :desc="p.desc"
      :links="p.links"
      :skills="p.skills"
      :hero="p.hero"
    />
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'
import projects from '~/data/all-projects.yml'

export default {
  components: {
    ProjectCard
  },
  data(){
    return { passProjects: projects }
  }
}
</script>
