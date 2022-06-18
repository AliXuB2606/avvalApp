<template >
  <div>
    <comment-img/>
    <comment-img2/>
    <comment-carusel/>
    <div class="row wrap justify-center items-start">
      <div class="" style="width:92%;height:150px;">
        <div class="text-h3 row q-mt-xl">
            Let’s Go
            <span class="bg-dark text-yellow">Shopping</span>
        </div>
      </div>
    </div>

    <!-- bozor -->

    <div class="row wrap justify-center items-start" style="width:100%;height:1000px">
       <div class="" style="width:92%;height:1000px">  <!--100vhga heightni o'zgartirib qo'y-->
           <comment-s-hoping/>

       </div>
    </div>
 </div>
</template>
<script>
import CommentImg2 from 'src/components/CommentImg2'
import CommentImg from '../components/CommentImg'
import  CommentCarusel from '../components/CommentCarusel'
import CommentSHoping from 'src/components/CommentSHoping.vue'
export default {
  components:{
    CommentImg,
    CommentImg2,
    CommentCarusel,
    CommentSHoping
  },
    data() {
      return {


      }
    },
}
</script>
<style scoped>

</style>
