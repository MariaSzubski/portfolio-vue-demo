<template>
<pre :class="classLang" >
  <h5 pad>{{ header }}</h5>
  <code><slot /></code>
</pre>
</template>

<script>
import Prism from 'prismjs'
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

export default {
  props: {
    header: {},
    lang: {
      default: 'javascript'
    }
  },
  computed: {
    classLang() {
      return 'language-' + this.lang;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/prism.scss';
</style>