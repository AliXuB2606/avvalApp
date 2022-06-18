<template>
  <q-page>
    <div>
      <q-img src="https://xtrm.foxthemes.me/wp-content/uploads/2019/02/Group13236-1.jpg" style="width: 100%;height: 500px;">
        <div class="absolute-full text-subtitle2 flex flex-center">
          <span class="text-h2" style="margin-right:500px">
            Meet Our <span class="text-h2 bg-orange-10" >Crew</span>
          </span>
        </div>
      </q-img>
    </div><br><br><br><br>
    <Our/>
    <Qwert/>


    <div style="width: 100%;height: 400px;">
      <div class="column
      ">
        <span>
          <span class="text-h5">
            newslater
          </span>
          <span>
            A well-executed brand strategy affects all aspects of a business and is          connected to consumer needs & emotions.
          </span>

        </span>
      </div>
    </div>
  </q-page>
</template>
<script>
import Our from "src/components/Our";
import Qwert from "../components/Qwert";



export default {
    components: { Our, Qwert }
}
</script>
<style scoped>
  .q-img__content > div{
    background: transparent;
  }
</style>
