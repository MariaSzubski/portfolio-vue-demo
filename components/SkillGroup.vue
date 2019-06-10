<template>
  <section element>
    <h3 pad>Skills</h3>
    <div>
      <section>
        <h5 pad>Technologies</h5>
        <div class="tagGroup">
          <SkillTag sk="javascript" lb="JavaScript / ES6+" />
          <SkillTag sk="react" />
          <SkillTag sk="vue" />
          <SkillTag sk="gatsby" />
          <SkillTag sk="graphQL" />
          <SkillTag sk="git" />
          <SkillTag sk="webpack" />
          <SkillTag sk="netlify" />
          <SkillTag sk="storybookJS" />
          <SkillTag sk="nuxt" />
          <SkillTag sk="middleman" />
          <SkillTag sk="HTML5" />
          <SkillTag sk="CSS3" />
          <SkillTag sk="SCSS" />
          <SkillTag sk="bootstrap" />
          <SkillTag sk="jquery" lb="jQuery" />
          <SkillTag sk="LESS" />
          <SkillTag sk="python" />
          <SkillTag sk="ruby" />
        </div>
      </section>

      <section>
        <h5 pad>Tools &amp; Concepts</h5>
        <div class="tagGroup">
        <SkillTag sk="gitHub" />
        <SkillTag sk="w3c" lb="Accessibility" />
          <SkillTag sk="node" />
          <SkillTag sk="NPM" />
          <SkillTag sk="yarn" />
          <SkillTag sk="grunt" />
          <SkillTag sk="gulp" />
          <SkillTag sk="inVision" />
          <SkillTag sk="illustrator" lb="Adobe Illustrator" />
          <SkillTag sk="photoshop" lb="Adobe Photoshop" />
          <SkillTag lb="Responsive Design" />
          <SkillTag lb="Usability" />
          <SkillTag lb="UX Testing" />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import SkillTag from '~/components/SkillTag.vue'

export default {
  components: {
    SkillTag
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
