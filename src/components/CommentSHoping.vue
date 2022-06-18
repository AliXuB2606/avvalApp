<template>
  <div class="q-pa-md">
    <q-carousel style="height:900px"
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="shoping.name" class="column no-wrap" style=""
       v-for="shoping in shopings" :key="shoping">
       <div  style="width:100%;height:900px" class="fit row wrap justify-between items-start content-start"> <!--flex box ishlatilsin-->
          <div v-for="card in cards" :key="card" style="width:300px;height:400px" class="container">  <!--cart divi-->
              <div class=" row  justify-between items-center content-center" style="width:100%;height:60px">  <!--flex box ishlatilsin-->
                  <div class="bg-yellow text-dark text-h6 ">
                      {{shoping.boots}}
                  </div>
                  <div class="bg-dark text-white text-subtitle2 text-center " style="width:60px;height:30px">
                      {{shoping.sale}}
                  </div>
              </div>
              <div class="  q-mt-md" style="width:100%;height:250px">
                <img :src="shoping.img" alt="" class="q-ml-md"
                style="height:100%;width:95%">
              </div>
              <div class="q-mt-md" style="width:100%;height:57px">
                  <div class="text-h6">
                      {{shoping.snowboart}}
                  </div>
                  <div>
                    {{shoping.sena}}
                  </div>
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
      slide: ref(1)
    }
  },
  data() {
    return {
      shopings:[
        {name: 1,boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-30-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
        {name: 2 ,boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-30-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
      ],
      cards:[
        {boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-34-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
        {boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-34-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
        {boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-30-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
        {boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-30-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
        {boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-30-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
        {boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-30-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
        {boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-30-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'},
        {boots:'SN BOOTS',sale:'SALE',img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/group-30-1.png',snowboart:'SNOWBOART BOOTS',sena:'$233.00'}
      ]
    }
  },
}
</script>
<style scoped>
.container{
  border: 2px solid  rgb(218, 212, 212)}

</style>
