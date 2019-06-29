<template>
  <section element>
    <h3 pad>Skills</h3>
    <div>
      <section v-for="(group, idx) in skills" :key="'skill-grp-' + idx">
        <h5 pad>{{ group.title }}</h5>
        <div class="tagGroup">
          <SkillTag v-for="s, idx in group.skills"
                    :key="'skill-' + idx"
                    :sk="s.sk"
                    :lb="s.lb"
                    :fm="s.fm"
                    :vertical="group.vertical" />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import SkillTag from '~/components/SkillTag.vue'
import skills from '~/data/all-skills.yml'

export default {
  components: {
    SkillTag
  },
  data(){
    return { skills: skills }
  }
}
</script>

<style lang="scss" scoped>

[element] > div {
  > section:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  @extend %bg;
  padding: 4rem 1rem;
  margin: 0rem -2rem;

  @media (min-width: $scr-sm) {
    padding: 4rem 3rem;
    margin: 0rem;
  }
}

.tagGroup{
  display: flex;
  flex-wrap: wrap;
}
</style>
