<template>
  <div class="q-pa-md">

    <q-carousel height="600px"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >

      <q-carousel-slide :name="1"
      img-src="https://cdn.quasar.dev/img/mountains.jpg" class="fit column wrap justify-center items-center content-center">
          <div class="text-center" style="width:600px;height:150px" >
            <div class="q-mt-xl text-h6 text-white">
              TESTIMONIALS
            </div>
            <div class="text-h3 text-white">
              Our Riders Said About Us
            </div>
          </div>
          <div class="text-center " style="width:1000px;height:350px">
              <div class="q-mt-xl">
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
              </div>
              <div class="text-h5 q-mt-xl text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur laboriosam aliquid quisquam recusandae, excepturi est! Reiciendis, dicta.
              </div>
              <div class="row justify-center " style="">
                <div >
                  <img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-13.png" alt="" class="q-mt-md" >
                </div>

                <div class="q-mt-lg">
                  <span class="text-h6 text-white">ANDREV GOSHA</span><br>
                  <span class="text-h6 text-white">Pro Rider</span>
                </div>
           </div>
       </div>
          <!-- su justify-around -->

      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" class="fit column wrap justify-center items-center content-center">
       <!-- <div> -->
           <div class="text-center" style="width:600px;height:150px" >
            <div class="q-mt-xl text-h6 text-white">
              TESTIMONIALS
            </div>
            <div class="text-h3 text-white">
              Our Riders Said About Us
            </div>
          </div>
          <div class="text-center " style="width:1000px;height:350px">
              <div class="q-mt-xl">
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
              </div>
              <div class="text-h5 q-mt-xl text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur laboriosam aliquid quisquam recusandae, excepturi est! Reiciendis, dicta.
              </div>
              <div class="row justify-center " style="">
                <div >
                  <img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-13.png" alt="" class="q-mt-md" >
                </div>

                <div class="q-mt-lg">
                  <span class="text-h6 text-white">ANDREV GOSHA</span><br>
                  <span class="text-h6 text-white">Pro Rider</span>
                </div>
           </div>
       </div>
     <!-- </div> -->
     </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" class="fit column wrap justify-center items-center content-center">
        <div class="text-center" style="width:600px;height:150px" >
            <div class="q-mt-xl text-h6 text-white">
              TESTIMONIALS
            </div>
            <div class="text-h3 text-white">
              Our Riders Said About Us
            </div>
          </div>
          <div class="text-center " style="width:1000px;height:350px">
              <div class="q-mt-xl">
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
              </div>
              <div class="text-h5 q-mt-xl text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur laboriosam aliquid quisquam recusandae, excepturi est! Reiciendis, dicta.
              </div>
              <div class="row justify-center " style="">
                <div >
                  <img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-13.png" alt="" class="q-mt-md" >
                </div>

                <div class="q-mt-lg">
                  <span class="text-h6 text-white">ANDREV GOSHA</span><br>
                  <span class="text-h6 text-white">Pro Rider</span>
                </div>
           </div>
       </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" class="fit column wrap justify-center items-center content-center" >
        <div class="text-center" style="width:600px;height:150px" >
            <div class="q-mt-xl text-h6 text-white">
              TESTIMONIALS
            </div>
            <div class="text-h3 text-white">
              Our Riders Said About Us
            </div>
          </div>
          <div class="text-center " style="width:1000px;height:350px">
              <div class="q-mt-xl">
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
                <q-icon size="25px" name="star" color="yellow"></q-icon>
              </div>
              <div class="text-h5 q-mt-xl text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur laboriosam aliquid quisquam recusandae, excepturi est! Reiciendis, dicta.
              </div>
              <div class="row justify-center " style="">
                <div >
                  <img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-13.png" alt="" class="q-mt-md" >
                </div>

                <div class="q-mt-lg">
                  <span class="text-h6 text-white">ANDREV GOSHA</span><br>
                  <span class="text-h6 text-white">Pro Rider</span>
                </div>
           </div>
       </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(false)
    }
  }
}
</script>
<style>


</style>
