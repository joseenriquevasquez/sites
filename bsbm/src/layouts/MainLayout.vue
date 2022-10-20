<template>
  <q-layout view="hhr Lpr lfr">

    <q-header reveal bordered class="bg-primary text-white" height-hint="98">

      <q-toolbar>
         

        <q-toolbar-title>
                      <q-img src="/logo-ayapata.png" style="max-width: 250px;"  ></q-img>
          
        </q-toolbar-title>

         
      </q-toolbar>
    <!--
      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Components" icon="widgets" />
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
      </q-toolbar>
    -->
      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about-us" label="ABOUT US" />
        <q-route-tab to="/testimonials" label="TESTIMONIALS" />
        <q-route-tab to="/gallery" label="Gallery" />
        <q-route-tab to="/pricing" label="Pricing" />
        <q-route-tab to="/audio-visual" label="A/V Rental" />
        <q-route-tab to="/get-in-touch" label="Contact US" />
      </q-tabs>
    
    
    </q-header>

    <!--
      <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered>
      
      <q-img src="/logo-ayapata.png" style="max-width: 150px;"  ></q-img>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" behavior="desktop" bordered>
      
      <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        switch-toggle-side
        expand-separator
        icon="perm_identity"
        label="Account settings"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        switch-toggle-side
        expand-separator
        icon="signal_wifi_off"
        label="Wifi settings"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <q-list bordered class="rounded-borders q-mt-md">
      <q-expansion-item
        dense-toggle
        switch-toggle-side
        expand-separator
        icon="perm_identity"
        label="Account settings"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        dense-toggle
        switch-toggle-side
        expand-separator
        icon="signal_wifi_off"
        label="Wifi settings"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
    </q-drawer>
    -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <!--
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          -->
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>