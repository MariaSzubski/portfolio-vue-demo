<template>
  <main>
    <div>
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

import Prism from 'prismjs';
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';

export default {}

</script>
