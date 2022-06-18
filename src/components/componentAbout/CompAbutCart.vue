<template >
  <div>
   <div class="col bg-white text-h6 row justify-center content-center">
        <div>
            Related Products
        </div>
   </div>

   <div class="bg">
     <!-- birinchi cart boshlanishi -->
     <div class="content">
        <div class="cart row justify-center content-center">
        <div class="img ">
            <q-img src="https://xtrm.foxthemes.me/wp-content/uploads/2019/02/bitmapd.png"/>
        </div>
      </div>
      <div class="text q-mt-md">
        <div class="row justify-between">
          <div class="text-h6">
              BLUE ARGYLE CAP
          </div>
          <div class="text-h6">
            <del class="text-grey text-subtitle2">£322.00</del>
              £307.00
          </div>
        </div>
        <div class="text-red q-mt-md">
          New Arrivalse
        </div>
     </div>
   </div>
      <!-- birinchi cart boshlanishi tugashi -->

      <!-- keyingi cart -->
      <div class="content">
        <div class="cart row justify-center content-center">
        <div class="img ">
            <q-img src="https://xtrm.foxthemes.me/wp-content/uploads/2019/02/bitmapd.png"/>
        </div>
      </div>
      <div class="text q-mt-md">
        <div class="row justify-between">
          <div class="text-h6">
              BLUE ARGYLE CAP
          </div>
          <div class="text-h6">
            <del class="text-grey text-subtitle2">£322.00</del>
              £307.00
          </div>
        </div>
        <div class="text-red q-mt-md">
          New Arrivalse
        </div>
     </div>
   </div>
       <!-- keyingi cart tugashi -->
  </div>
   <div class="foter row justify-center">
      <div class="q-mt-md">
          <q-icon  class="q-ml-lg" name="fab fa-google"></q-icon>
          <q-icon  class="q-ml-lg" name="fab fa-twitter"></q-icon>
          <q-icon  class="q-ml-lg" name="fab fa-instagram-square"></q-icon>
          <q-icon  class="q-ml-lg" name="fab fa-facebook"></q-icon>
      </div>
  </div>
 </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.foter{
  width: 100%;
  height: 70px;
}
.content{
  width: 390px;
  height: 95%;
}
.text{
  width: 370px;
  height: 100px;

}
.img{
  width: 90%;
  height: 200px;
}
.cart{
  width: 370px;
  height: 450px;
  background-color: rgb(245, 242, 242);
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.0), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.col{
  width: 100%;
  height: 80px;
}
.bg{
  width: 100%;
  height: 550px;
  display: flex;
}
</style>
