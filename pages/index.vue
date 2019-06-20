<template>
  <main>
    <div>
      <logo />
      <h1 class="title">
        {{ message }}
      </h1>
      <h2 class="subtitle">
        Portfolio for Maria Szubski Digital, LLC
      </h2>
      <div class="links">
        <Btn href="https://github.com/nuxt/nuxt.js" green>
          Documentation
        </Btn>
        <Btn href="https://github.com/nuxt/nuxt.js">
          GitHub
        </Btn>
      </div>
      <div class="projects" element>
        <h5 pad>Projects</h5>
        <p lg>
          <nuxt-link to="/projects/style-guide">Style Guide</nuxt-link>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Btn from '~/components/Btn.vue'

export default {
  components: {
    Logo,
    Btn
  },
  data() {
    return {
      message: 'Headline'
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  text-align: center;
}
</style>
