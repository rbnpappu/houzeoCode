<template>
    <div class="vedioContainer">
        <button class="closeBtn" @click="closeFullvedio">
            <i class="fas fa-close" style="color:#FAFAFC;font-size:93px;"></i></button>

        <iframe width="560" height="315" :src="videoUrl" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0;"></iframe>
    </div>
</template>
<script>
export default {
    props: {
        closeFullvedio: Function
    },

    data() {
        return {
            videoUrl: 'https://www.youtube.com/embed/dh3o2pb8Zys'
        }
    }
}
</script>
<style>
.vedioBox {
    display: flex;
    justify-content: center;
    position: absolute;
    align-items: center;
}

.vedioContainer {
    position: fixed;
    top: 50px;
    left: 371px;
    width: 69%;
    height: 88%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */

}

::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.closeBtn {
    top: 6px;
    position: absolute;
    left: 3px;
    z-index: 1;
    background-color: transparent;
    border: none;
    opacity: 0.5;
}

.videoHouzeo {
    width: 867px;
    height: 331px;
    position: absolute;
}

.vedioContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>