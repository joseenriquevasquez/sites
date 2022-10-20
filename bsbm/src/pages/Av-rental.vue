<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-tabs v-model="tab" inline-label class="bg-teal text-white shadow-2">
          <q-tab name="projectors" label="Projectors" />
          <q-tab name="screens" label="Projection Screens" />
          <q-tab name="speakers" label="Powered Speakers" />
          <q-tab name="mics" label="Wireless Mic Systems" />
          <q-tab name="stands" label="HD Display w/Stand" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="projectors">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="screens">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="speakers">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="speakers">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="mics">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="stands">
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
      tab: ref('projectors')
    }
  }
}
</script>
