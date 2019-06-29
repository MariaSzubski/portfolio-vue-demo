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
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. <a href="#">This is an inline link</a> Maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>
      <p>
        <strong>THIS IS A HEADLINE</strong>
      </p>
      <p>
        Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. <a href="#">This is an inline link</a>  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas.
      </p>
      <section element>
        <SkillGroup class="lt" />
      </section>

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


      <h4>Card Headers</h4>
      <h6>Labels</h6>
      <p><strong>Front-End Development Consultant</strong></p>
      <p class="subheadline">Company Name</p>
      <p>Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus.</p>
      <p class="headline">UX Designer</p>
      <p class="subheadline">Company Name // Team</p>
      <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

    </div>
  </main>
</template>

<script>
import SkillGroup from '~/components/SkillGroup.vue'
import CodeBlock from '~/components/CodeBlock.vue'

export default {
  components: {
    SkillGroup,
    CodeBlock
  }
}
</script>

