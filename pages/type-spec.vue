<template>
  <main>
    <div>
      <hgroup>
        <h1>Page Title</h1>
        <h2>Subtitle</h2>
      </hgroup>
      <hgroup>
        <h3>Section Header</h3>
        <h5>MOBILE UI DESIGN  •  JQUERY  •  PHONEGAP  •  EDUCATION RESEARCH  •  USER TESTING</h5>
      </hgroup>
      <p lg>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
      </p>
      <p lg>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>
      <p>
        <strong>THIS IS A HEADLINE</strong>
      </p>
      <p>
        Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas.
      </p>
      <h3>Skills</h3>
      <section class="lt" style="max-width: 840px; background: rgba(255,255,255,.03); padding: 30px;">
        <hgroup>
          <h5>Technologies</h5>
        </hgroup>

        <SkillTag sk="bootstrap" />
        <SkillTag sk="CSS3" />
        <SkillTag sk="es6" lb="JavaScript ES6" />
        <SkillTag sk="git" />
        <SkillTag sk="gitHub" />
        <SkillTag sk="graphQL" />
        <SkillTag sk="HTML5" />
        <SkillTag sk="jQuery" />
        <SkillTag sk="javaScript" />
        <SkillTag sk="gitHub" />
        <SkillTag sk="SASS" />
        <SkillTag sk="nuxt" />
        <SkillTag sk="vue" />
        <SkillTag sk="react" />
        <SkillTag sk="middleman" />
        <SkillTag sk="python" />
        <SkillTag sk="storybook" />
        <SkillTag sk="netlify" />
        <SkillTag lb="Responsive Design" />
      </section>
      <p>

      </p>

      <h4>Card Headers</h4>
      <h6>Labels</h6>
      <p><strong>Front-End Development Consultant</strong></p>
      <p class="subheadline">Company Name</p>
      <p>Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus.</p>
      <p class="headline">UX Designer</p>
      <p class="subheadline">Company Name // Team</p>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>


      <pre class="language-javascript"><h4>Timer Numbers</h4><code>
      // ------------------------------------- Start &amp; Reset Functions
      function startTimer() {
      	sec = 59;
      	countdown = setInterval(currentTime, 1000);
      	toggle = false;
      	startReset.innerHTML = 'Reset';
      }

      function resetTimer(){
      	clearInterval(countdown);
      	toggle = true;
      	startReset.innerHTML = 'Start';
      	timer.innerHTML = "1:00";
      }</code></pre>

    </div>
  </main>
</template>

<script>
import Prism from 'prismjs'
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import SkillTag from '~/components/SkillTag.vue'


export default {
  components: {
    SkillTag
  }
}

</script>

<style lang="scss">
@import '@/assets/scss/prism.scss';
</style>