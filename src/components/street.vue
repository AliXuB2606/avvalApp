<template>
<div>
    <div style="margin-left:400px;">
      <div>
        <span class="column" style="height:300px;width:30%">
          <span class="text-h4">newslatter</span>
          <span style="color:grey;margin-top:20px">A well-executed brand strategy affects all aspects of a business and is connected to consumer needs & emotions.</span>
        </span>
        <div style="margin-right:500px;witdh:100%">
            <q-input color="grey-3" label-color="grey" outlined v-model="text" label="your email">
            <template v-slot:append>
              <q-icon name="event" color="orange" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
</div>
</template>
