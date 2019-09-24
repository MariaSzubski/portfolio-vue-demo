<template>
<pre :class="classLang" >
  <h5 pad>{{ header }}</h5>
  <code :class="classLang" ><slot /></code>
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
  },
  head () {
    return {
      link: [
        { // Prism Preload
          rel: 'preload',
          href: '/prism.css',
          as: 'style',
        },
        { // Prism Styles
          rel: 'stylesheet',
          href: '/prism.css'
        },
      ],
    }
  }
}
</script>
