<template >
  <div>
  <q-img :ratio="10/7" class="img row justify-end" style="width:100%; height:100vh" src="http://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-26.png?id=3390">
  <div class="row justify-end items-center" style="width:100%; height:100vh">
    <div style="width:485px; height:355px;" class="q-mr-xl"> <!-- katta div uchun -->
      <div class="text-h4  " > <!--kichkina text uchun-->
        The Legendary Tyler Durden’s
        <span class="bg-dark text-warning">Workshop</span>
      </div>
      <div class="q-mt-xl"> <!--ko'p text uchun-->
          It doesn’t matter if you are a stay at home mom, or a corporate professional. You need to keep your appearance at it’s best all the time, and that can be a hard job. But what if you don’t always have the time to go to a Snowboard for a professional facial? I’ve got just the solution for you.
      </div>
        <div class="q-mt-xl"> <!--button ucun-->
          <q-btn size="15px" class="bg-dark">BUY NOW</q-btn>
          <q-btn outline class="q-ml-md">LEAR MORE</q-btn>
        </div>
    </div>
  </div>
</q-img>
  <div style="width:100%;height:600px" class=" row wrap justify-evenly items-center content-center">
      <div v-for="component in commponents" :key="component" class=" text-center" style="width:300px;height:400px" >
          <div >
           <img :src="component.img" alt="">
          </div>
          <div class="text-h5 q-mt-md">
              {{component.text}}
          </div>
          <div class="q-mt-md">
              {{component.lorem}}
          </div>
      </div>
 </div>
  </div>
</template>
<script>
export default {
      data() {
        return {
          commponents:[
          {img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/if-009-snowboard-2860878-1.png',text:' Professional Equipment',
          lorem:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nisi laudantium ipsa doloribus aut numquam accusamus dolorum totam temporibus, ex esse impedit harum quae eveniet. Facere, blanditiis rem? Aspernatur laborum similique incidunt iure dolore ea asperiores, adipisci perferendis aliquam, illo tempora, velit amet eius porro minus ipsum culpa ad! Minima doloremque iure dicta error veniam amet reprehenderit officia libero'
          },
          {img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/if-002-motocross-mask-2860885-1.png',text:'High Quality Accessories',
          lorem:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nisi laudantium ipsa doloribus aut numquam accusamus dolorum totam temporibus, ex esse impedit harum quae eveniet. Facere, blanditiis rem? Aspernatur laborum similique incidunt iure dolore ea asperiores, adipisci perferendis aliquam, illo tempora, velit amet eius porro minus ipsum culpa ad! Minima doloremque iure dicta error veniam amet reprehenderit officia libero'
          },
          {img:'https://xtrm.foxthemes.me/wp-content/uploads/2018/09/if-028-ski-jacket-2860859-1.png',text:'Comfortable Clothes',
          lorem:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nisi laudantium ipsa doloribus aut numquam accusamus dolorum totam temporibus, ex esse impedit harum quae eveniet. Facere, blanditiis rem? Aspernatur laborum similique incidunt iure dolore ea asperiores, adipisci perferendis aliquam, illo tempora, velit amet eius porro minus ipsum culpa ad! Minima doloremque iure dicta error veniam amet reprehenderit officia libero'
          }
        ]
        }
      },
}
</script>
<style scoped>
div{
  background: none;
}
</style>
