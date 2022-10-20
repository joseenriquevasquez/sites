<template>
  <q-page padding>
    <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      
        <q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Servicio #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
<q-card class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Servicio #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>