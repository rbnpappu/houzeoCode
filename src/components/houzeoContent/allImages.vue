<template>
  <div class="imageContainer">
    <div class="imageHeader">
      <button class="chevron" :onclick='checkValidityForImages'>
        <i class="fas fa-chevron-left white-icon"></i>
      </button>
      <p class="imageContaninerText">{{ this.currentIndex }} of {{ this.images.length }}</p>
      <a href="#" class="imageContaninerText">Make an offer</a>
    </div>

    <div class="image-slider">
      <div class="images-box">
        <button class="chevron" @click="prevImage" v-show="currentIndex > 0"><i
            class="fas fa-chevron-left white-icon"></i></button>
        <div v-for="(images, index) in images" :key="index" v-show="index === currentIndex">
          <img :src="images" alt="Image" class="images" />
        </div>
        <button class="chevron" @click="nextImage" :disabled="disabled"><i
            class="fas fa-chevron-right white-icon"></i></button>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      currentIndex: 0,
      disabled: false,
      images: [
        'https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=1024x1024&w=is&k=20&c=2sl31dh_smuR0CCeCPQAr3it6KFJ0iCTdbggau4-_2k=',
        'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/250659/pexels-photo-250659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1575939/pexels-photo-1575939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/772177/pexels-photo-772177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/286744/pexels-photo-286744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2157401/pexels-photo-2157401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/161768/lafayette-park-washington-dc-c-architecture-161768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/542403/pexels-photo-542403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    }
  },
  computed: {
    currentImage() {
      return this.images[0];
    }

  },
  methods: {
    prevImage() {
      if (this.currentIndex >= 0) {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }
    },
    nextImage() {
      if (this.currentIndex + 1 % this.images.length === 0) {
        this.disabled = true;
      }
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  }
  ,

  props: {
    checkValidityForImages: Function
  }
}
</script>
<style>
.imageContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
}

.imageHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.imageContaninerText {
  color: white;

}

.white-icon {
  color: white;
  background-color: black;
  font-size: 26px;

}

.chevron {
  background-color: transparent;
  border: none;
  color: black;
  padding-left: 30px;
  padding-top: 18px
}

.images {
  width: 660px;
  height: 380px;
  padding: 15px;
  padding-top: 50px;
}

.images-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}</style>