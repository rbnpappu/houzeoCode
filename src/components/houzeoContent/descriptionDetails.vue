<template>
    <div class="descriptionContainer">
    <div class="description">
        <b class="descriptionLabel">{{$t('descripition')}}</b>

        <div class="descriptionParagraphContainer">
            <p>{{ $t('descriptonHalf')}}...<a href="#">{{ $t('continueRead') }}</a></p>
        </div>
    </div>
</div>


</template>

<script>

</script>

<style>
.description {
    width: 665px;
    height: 122px;
    margin-top: 71px;
    margin-right: 214px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
.descriptionParagraphContainer .p .a{
    font-size: 16px;
    color: black;
}
.descriptionContainer{
    display: flex;
    justify-content: center;
}
.verticale-line{
    border: none;
    border-left: 1px solid black;
    height: 100px    
    }

.descriptionParagraphContainer{
    width: 641px;
    height: 50px;
    padding-left: 17px;
}
.descriptionLabel{
    display: flex;
    margin-top: 7px;
    padding-left: 17px;
}
</style>