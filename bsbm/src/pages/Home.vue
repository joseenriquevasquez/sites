<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
       
      <div class="col-xs-12 col-sm-6 col-md-9">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            img-src="banner1.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
          
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <q-card class="my-card" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Overline</div>
              <div class="text-h5 q-mt-sm q-mb-xs">Big Screen Big Movies</div>
              <div class="text-caption text-grey">
                ...provides Movie Night Experiences to private and corporate customers. We have decades of experience providing rental A/V equipment to a broad range of clients. Working from our offices in Carowinds, Charlotte NC we can deliver and setup to clients in a 50 mile radius, or you can collect your rental equipment from us with extra days added to rental at no extra cost for collection and another for return.

.
              </div>
            </q-card-section>

             
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat> 7:30PM </q-btn>
            <q-btn flat color="primary"> Reserve </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="row justify-around"  >
      <div class="col-6 col-md-4">
        <div class="q-pa-md">
          <q-card class="my-card">
             

            <q-card-section>
               <q-video :ratio="16/9" src="https://www.youtube.com/embed/BLGbytMpwvI?rel=0" />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-6 col-md-4"  >
        <div class="q-pa-md">
          <q-card class="my-card">
            

            <q-card-section>
              <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>

            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-6 col-md-4">
        <div class="q-pa-md">
          <q-card class="my-card">
            <q-card-section>
              <iframe width="320" height="440" src="http://instagram.com/p/qbq6fIJMVZ/embed" frameborder="0"></iframe>

            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
