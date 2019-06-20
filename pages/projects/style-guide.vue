<template>
  <WrapProject v-bind="dataToPass">
    <p lg>
      The Style Guide is a template for project documentation. It displays font styles, color palettes, web components, and design patterns. It's built to be responsive across all device sizes with AJAX and PHP, with fallbacks for users who have JavaScript disabled.
    </p>
    <hgroup>
      <h3>PIXEL/REM UNIT CONVERSION</h3>
    </hgroup>
    <p>
      Users can choose between pixels or rem units. This selection is site-wide and is saved to the browser's local storage. The values are calculated on the fly with JavaScript.
    </p>
    <!-- <CodeBlock class="markup" header="HTML Snippet">
      <div class="btn-group" role="group">
        <span>Units:</span>
        <button type="button" id="size-px">px</button>
        <button type="button" id="size-rem">rem</button>
      </div>
    </CodeBlock> -->
    <CodeBlock header="JavaScript Snippet">
      if (Modernizr.localstorage) {

      // ON INITIAL LOAD: Check local storage and convert units to saved preference
      toggle_pxrem();

      // ON BUTTON PRESS: Change button state, update localStorage, and convert units
      (function pxrem(){
        $('button').click(function(e){
          $('button').toggleClass('btn-selected');
          $('#size-px').hasClass('btn-selected') ?
          localStorage.setItem('pxrem', 'px') : localStorage.setItem('pxrem', 'rem');
          convert();
        });
      })();

      // Check localStorage and convert units
      function toggle_pxrem(){
        (localStorage.pxrem == undefined) ? localStorage.setItem('pxrem', 'px') : null;

        (localStorage.pxrem == 'rem') ?
        ($('#size-px').removeClass('btn-selected'),
        $('#size-rem').addClass('btn-selected'))
        : null;

        (localStorage.pxrem == 'px') ?
        ($('#size-rem').removeClass('btn-selected'),
        $('#size-px').addClass('btn-selected'))
        : null;

        convert();
      }

      // Convert units
      function convert(){

        /* rem -> px */
        if (localStorage.pxrem == 'px'){
          $('.pxrem').each(function(){
            let px = $(this).html();
            if (px.includes('rem')) {
              let px_arr = px.match(/[^rem]+|rem/g);
              px_arr[0] = px_arr[0] * 16;
              px_arr[1] = 'px';
              $(this).html(px_arr.join(''));
            };
          });
        }

        /* px -> rem */
        else if (localStorage.pxrem == 'rem'){
          $('.pxrem').each(function(){
            let rem = $(this).html();
            let rem_arr = rem.match(/[^px]+|px/g);
            rem_arr[0] = rem_arr[0] / 16;
            rem_arr[1] = 'rem';
            $(this).html(rem_arr.join(''));
          });
        };

      };
    };
    </CodeBlock>
  </WrapProject>
</template>

<script>
import WrapProject from '~/components/WrapProject.vue'
import CodeBlock from   '~/components/CodeBlock.vue'
import database from    '~/data/style-guide.yml'

export default {
  components: {
    WrapProject,
    CodeBlock
  },
  data() {
    return { dataToPass: database }
  }
}
</script>

