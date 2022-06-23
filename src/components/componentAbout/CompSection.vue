<template>
  <div>
      <div class="w-100pr col q-mt-xl">
        <div class="row w-47pr row  justify-center items-center content-center">
            <div class="foto w-90pr q-mt-xl">

              <img src="https://xtrm.foxthemes.me/wp-content/uploads/2019/02/bitmap.png" alt="" class="img w-100pr">

            </div>
        </div>



        <div class="red w-50pr q-ml-lg">
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
              <input type="number" name="" id="" class="input w-60px">
              <button class="btn w-170px fs-15px">ADD TO CART</button>
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

  height: 550px;
  display: flex;
}
.row{

  height: 500px;
  background-color: rgb(245, 242, 242);
}
.red{

  height: 500px;

}
.foto{

  height: 300px;

}
.img{

  height: auto;
  background-position: center;
  background-size: cover;
}
.input{

  height: 51px;
}
.btn{

height: 51px;
border: none;
background-color:  orangered;
color: white;
}
.btn:hover{
  color: white;
  background-color: black;
}

</style>
