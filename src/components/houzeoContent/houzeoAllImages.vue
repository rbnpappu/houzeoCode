<template>
    <div class="parent">
        <div class="container">
            <div class="image-Contanier">
                <img src="https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=1024x1024&w=is&k=20&c=2sl31dh_smuR0CCeCPQAr3it6KFJ0iCTdbggau4-_2k="
                    class="image-1" />
            </div>
            <div class="homeInteri2">
                <img src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600"
                    class="image-2" />
                <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    class="image-3" />
            </div>
        </div>
        <div class="houzeoExlusive">
            <img :src="$t('starIcon')" class="starIcon" />
            <hr>
            <p class="label-text">Houzeo Exclusive</p>

        </div>

        <div class="street-view">
            <img :src="$t('manstand')" class="manstand" />
            <p class="contentText">Street View</p>
        </div>
        <div class="eyebox">
            <i class="fa fa-eye  :style={'font-size':'24px'}"></i>
            <p class="eyelabel">{{ $t('eyelabel') }}</p>

        </div>
        <div class="heartbox">
            <i class="fas fa-heart :style={'font-size':'24px'}"></i>
            <p class="eyelabel">{{ $t('eyelabel') }}</p>
        </div>
        <div class="green-box">
            <img :src="$t('greenIcon')" class="greenIcon" />
            <p class="eyelabel">{{ $t('forSale') }}</p>
        </div>

        <div class="allPhotos" :onclick='checkValidityForImages'>
            <img :src="$t('ninedots')" class="manstand" />
            <p class="contentText">All photos(30)</p>
        </div>
        <div class="scheduling">
            <schedulingBox />
        </div>
    </div>
</template>

<script>
import schedulingBox from './schedulingBox.vue';
export default {
    components: {
        schedulingBox
    },
    props: {
        checkValidityForImages: Function
    }
}
</script>
<style>
.container {
    display: flex;
}

.parent {
    display: flex;
    position: relative;
}

.image-Contanier {
    width: 500px;
    height: 310px;
    border-radius: 10px;
    padding: auto;
    margin-left: 236px;
    display: flex;
}

.greenIcon {
    width: 13px;
    height: 15px;
}

.eyelabel {
    padding-left: 5px;
}

.eyebox {
    position: absolute;
    left: 242px;
    width: 63px;
    height: 28px;
    background-color: #00000026;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3px;
    border-radius: 7px;
    top: 316px;
    border: 1px transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.heartbox {
    position: absolute;
    left: 315px;
    width: 63px;
    height: 28px;
    background-color: #00000026;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3px;
    border-radius: 7px;
    top: 316px;
    border: 1px transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.green-box {
    position: absolute;
    left: 817px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 299px;
}

.houzeoExlusive {
    position: absolute;
    top: 17px;
    left: 234px;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.street-view {
    position: absolute;
    left: 242px;
    width: 140px;
    height: 15px;
    background-color: #FAFAFC;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3px;
    border: 1px solid black;
    border-radius: 5px;
    top: 275px;
}

.allPhotos {
    position: absolute;
    left: 640px;
    width: 85px;
    height: 15px;
    background-color: #FAFAFC;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 3px;
    border: 1px solid black;
    border-radius: 5px;
    top: 275px;
    cursor: default;
}

.allPhotos-text {
    color: black;
}

.starIcon {
    width: 15px;
    height: 15px;
}

.label-text {
    font-size: 10px;
    color: white;
    padding: 1px;
}

hr {
    height: 15px;
    padding: 0px;
    margin: 0px;
}

.image-2 {
    width: 150px;
    height: 150px;
    padding-left: 10px;
}

.image-3 {
    width: 150px;
    height: 150px;
    padding-left: 10px;
    padding-top: 5px;
}

.manstand {
    width: 15px;
    height: 15px;
}

.contentText {
    font-size: 10px;
}

.image-1 {
    width: 600px;
    height: 308px;
    border-radius: 5px;
}

.columnofimages {
    display: flex;
}

.homeinteri {
    display: flex;
}

.image1 {
    top: 50px;
    padding: 0px;
}

.homeInteri2 {
    display: flex;
    flex-direction: column;

}</style>