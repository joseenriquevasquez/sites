<template>
  <q-page padding>
      <div class="q-pa-md">
    <div class="q-gutter-y-md"  >
      <q-tabs
        v-model="tab"
        inline-label
        class="bg-teal text-white shadow-2"
      >
        <q-tab name="directorio" label="Directorio" />
        <q-route-tab
    icon="mail"
    to="/municipio/directorio"
    exact
  />
        <q-tab name="concejo" label="Concejo Municipal" />
        <q-tab name="organigrama" label="Organigrama" />
        <q-tab name="normas" label="Normas Municipales" />
        <q-tab name="licencias" label="Licencias" />
        <q-tab name="presupuesto" label="Presupuesto" />
        <q-tab name="infracciones" label="Infracciones" />
        
         

         
      </q-tabs>
    <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="directorio">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="concejo">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="organigrama">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="normas">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="licencias">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="presupuesto">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="infracciones">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
       

       

       
    </div>
  </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('directorio')
    }
  }
}
</script>
