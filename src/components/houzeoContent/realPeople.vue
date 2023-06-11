<template>
    <div class="realPeople">
        <div class="realLifetext">
            <b class="title">{{ $t('realPeople') }}</b>
            <p class="paragraph">{{ $t('realPeoplePar') }}</p>
        </div>

        <div class="thumnailbox">
            <div class="thumnailBoxForVedios">
                <div class="realStorySection" @click="OpenFullVedio" v-for="items in vedioAddress" :key="items">
                    <img :src="$t('houzeoVedio')" class="thumnailImage" />
                    <div class="playBtn">
                        <i class="fas fa-play-circle white"></i>
                    </div>
                </div>
                <allStrories v-if="showVedio" :closeFullvedio='OpenFullVedio' />
            </div>
        </div>

        <div class="viewAllStories">
            <a href="#" :style="{'font-size':'14px','color':'black'}">{{ $t('viewAllStory') }}</a>
            <i
          class="fas fa-chevron-right black-icon 1g" :style="{ 'font-size': '9px','padding-left':'5px','padding-right':'5px' }"></i>

        </div>


    </div>
</template>

<script>

import allStrories from './allStrories.vue';
export default {
    components: {
        allStrories
    },
    data() {
        return {
            vedioSource: 'src\\assets\\vedio\\houzeo.mp4',
            showVedio: false,
            vedioAddress: ['https://www.youtube.com/embed/dh3o2pb8Zys',
                'https://www.youtube.com/embed/TvzCH1F9ul8',
                'https://www.youtube.com/embed/YCr9MauHmeE',
                'https://www.youtube.com/embed/ToGGkpaPmJc',
                'https://www.youtube.com/embed/N-zyfsKqUYs',
                'https://www.youtube.com/embed/r9tcb3X73rA'
            ]
        }
    },
    methods: {
        OpenFullVedio() {
            this.showVedio = !this.showVedio;
        },
    }
}
</script>

<style>
.viewAllStories{
    width: auto;
    margin-right: 10px;
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    margin-top: 35px;
}
.custom-class {
    margin-top: 15px;
    margin-right: 15px;
}

.vedio {
    width: 50px;
    height: 50px;
}

.thumnailbox{
    width: 80px;
    height: 80px;

}
.white {
    color: white;
}

.playBtn {
    position: absolute;
    margin: auto;
    padding: 0px;
}

.realLifetext {
    padding-top: 10px;
}

.title {
    font-size: 15px;
    margin-left: 15px;
}

.realPeople {
    width: 306px;
    height: 244px;
    border: 1px black;
    margin-left: 6px;
    margin-top: 39px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.paragraph {
    margin-left: 15px;
    font-size: 12px;
    color: #AFAFAF;
}

.realStorySection {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99px;
    height: 66px;
    border-radius: 8px;
}
.thumnailImage {
    width: 80px;
    height: 60px;
    border-radius: 11px;
    display: flex;
    flex-direction: row;

}
.thumnailBoxForVedios{
    display: flex;
    width: 306px;
    height: 100px;
    flex-wrap: wrap;
    align-content: center;
    margin-top: 27px;
}
</style>