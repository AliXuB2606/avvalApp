<template >
  <q-page>
      <CompNavbar/>
          <div class="col fit row  justify-center">
              <div class="bg">
                  <CompSection/>
                  <CompAbutCart/>
              </div>
          </div>
  </q-page>
</template>
<script>
import CompNavbar from '../components/componentAbout/CompNavbar'
import CompSection from '../components/componentAbout/CompSection'
import CompAbutCart from '../components/componentAbout/CompAbutCart'

export default {
  components:{
    CompNavbar,
    CompSection,
    CompAbutCart
}
}
</script>
<style>
.col{
  width: 100%;
  height: auto;

}
.bg{
  width: 80%;
  height:auto;
}
</style>

