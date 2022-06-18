<template>
  <div>
      <div class="bg-dark">
  <div class="q-pa-md">
    <q-btn-dropdown unelevated color="transparent" label="Dropdown Button">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
      </div>
  </div>
</template>
<script>
export default {
  setup () {
    return {
      onItemClick () {
        // console.log('Clicked on an Item')
      }
    }
  }
}
</script>
<style scoped>
.bg-dark{
  width: 100%;
  height: 85px;
}
</style>
