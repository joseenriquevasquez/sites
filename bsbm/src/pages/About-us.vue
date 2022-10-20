<template>

  <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 790px"
      
      
    >
      
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="mails" icon="" label="Big Screen Big Movies" />
          <q-tab name="alarms" icon="" label="Our mission" />
          <q-tab name="movies" icon="" label="Movie Night Packages" />
        </q-tabs>
      </template>
          
      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          central
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="mails">
            <!---foto insertada  historia de l33-a l46 foto-->
            <center>
              <div class="q-pa-md" >
                <q-img

                  src="/fotos/ayapatadanza.jpeg"
                  
                  spinner-color="white"
                  style="height: 350px; max-width: 700px"
                  :fit="scale-down"
                  img-class="my-custom-image"
                  class="rounded-borders"
                    >                 
               </q-img>
             </div>
           </center>


                       
            <p class="text-justify">...provides Movie Night Experiences to private and corporate customers. We have decades of experience providing rental A/V equipment to a broad range of clients. Working from our offices in Carowinds, Charlotte NC we can deliver and setup to clients in a 50 mile radius, or you can collect your rental equipment from us with extra days added to rental at no extra cost for collection and another for return.

</p>
          </q-tab-panel>
          <!---  seccion turismo -->
          <q-tab-panel name="alarms">
            
            <p>...is to provide our customers with excellent service. To establish a good relationship that will last for years to come. To stay on top of the changes with the products we rent, so we can provide our customers with quality, delivery and service at all times.

 

Nevertheless, our company maintains an competitive package rental for all screens and projectors</p>
              
            
            
          </q-tab-panel>
          <!--- seccion ubicacion geografica -->
          <q-tab-panel name="movies">            
              
            

            <p> We have priced the projection systems in packages to suit a broad range of occasions  including:

• Birthday parties

• Backyard barbeques

• Shopping center events

• Community pool events

• Community group and Corporate events

</p>
            </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script >
  import { ref } from 'vue'
  export default {
    setup () {
      return {
        tab: ref('mails'),
        splitterModel: ref(20),
      
        slide: ref(1)     //scrit de carrusel
         
     }
   }
 }
</script>

