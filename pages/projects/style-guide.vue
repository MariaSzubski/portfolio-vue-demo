<template>
  <WrapProject v-bind="dataToPass">
    <p lg>
      Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    </p>
    <p lg>
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. <a href="#">This is an inline link</a> Maecenas sed diam eget risus varius blandit sit amet non magna.
    </p>
    <hgroup>
      <h3>Section Header</h3>
    </hgroup>
    <p>
      <strong>THIS IS A HEADLINE</strong>
    </p>
    <p>
      Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. <a href="#">This is an inline link</a>  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas.
    </p>

    <CodeBlock header="Code Snippet">
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

