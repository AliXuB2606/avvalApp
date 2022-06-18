<template>
  <div>
      <div class="col q-mt-xl">
        <div class="row row  justify-center items-center content-center">
            <div class="foto q-mt-xl">

              <img src="https://xtrm.foxthemes.me/wp-content/uploads/2019/02/bitmap.png" alt="" class="img">

            </div>
        </div>



        <div class="red q-ml-lg">
            <div class="text-h4">
                Cool Pink Glasses
            </div>
            <div class="q-mt-xl text-h4">
              <del class="q-mr-md text-h6 text-grey">£236.00</del>
                  £220.00
            </div>
            <div class="q-mt-xl text-grey">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </div>
            <div class="q-mt-lg">
              <input type="number" name="" id="" class="input">
              <button class="btn">ADD TO CART</button>
            </div>
            <q-separator class="q-mt-lg" inset=""/>
            <div class="text-subtitle2 q-mt-md">
              Share :
            </div>
            <div class="q-mt-md">
                <q-icon  class="q-ml-lg" name="fab fa-google"></q-icon>
                <q-icon  class="q-ml-lg" name="fab fa-twitter"></q-icon>
                <q-icon  class="q-ml-lg" name="fab fa-instagram-square"></q-icon>
                <q-icon  class="q-ml-lg" name="fab fa-facebook"></q-icon>
            </div>
       </div>

      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.col{
  width: 100%;
  height: 550px;
  display: flex;
}
.row{
  width: 47%;
  height: 500px;
  background-color: rgb(245, 242, 242);
}
.red{
  width: 50%;
  height: 500px;

}
.foto{
  width: 90%;
  height: 300px;

}
.img{
  width:100%;
  height: auto;
  background-position: center;
  background-size: cover;
}
.input{
  width: 60px;
  height: 51px;
}
.btn{
width: 170px;
height: 51px;
border: none;
background-color:  orangered;
font-size: 15px;
color: white;
}
.btn:hover{
  color: white;
  background-color: black;
}

</style>
