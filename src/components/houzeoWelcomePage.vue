<template>
  <div>
    <headerHouzeo />
    <houzeoAllImages :checkValidityForImages="checkValidityForImages" />
  </div>
  <allImages v-if="checkValidity" :checkValidityForImages="checkValidityForImages" />
  <descriptionDetails/>
  <PropertyDetails />
</template>
<script>

import headerHouzeo from './header/headerHouzeo.vue';
import houzeoAllImages from './houzeoContent/houzeoAllImages.vue';
import allImages from './houzeoContent/allImages.vue';
import descriptionDetails from './houzeoContent/descriptionDetails.vue';
import PropertyDetails from './houzeoContent/propertyOfDetails.vue';

export default {
  name: "houzeoWelcomePage",
  components: { headerHouzeo, houzeoAllImages, allImages, descriptionDetails,PropertyDetails },
  data() {
    return {
      checkValidity: false,
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    checkValidityForImages() {
      this.checkValidity = !this.checkValidity;
    }

  },
}
</script>
<style scss>
#houseZeo {
  width: 9.688rem;
  height: 2.813rem;
}
</style>