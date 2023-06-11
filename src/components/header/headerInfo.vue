<template>
    <div class="header-info">
        <div class="meadow">
            <span><b>2856 Meadow Park Ave,</b><p>Henderson,NV 89502</p></span>
        </div>
        <ul>
            <li><b>$500,000</b><div class="preAppove"><p id="est-text">Est,$4,284/mo</p><img  :src="$t('dollarIcon') " class="dollarIcon"/><p id="getPreApprove">Get Pre-Approved</p></div></li>
            <li><p>4</p><p>Beds</p></li>
            <li><p>3</p><p>Bath</p></li>
            <li><p>998</p><p>sqft</p></li>
            <li><button class="makanOfferbtn" @click="openMakeanForm">Make an Offer <div class="ribbon"><span>new</span></div></button></li>
        </ul>
       
    </div>
    
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default{
    name: "headerInfo",

    data(){
        return{
            openForm: false,
            data:{}
        }
    },
    methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    methods:{
        sendeData(data){
            this.data= data;
            this.openForm =!this.openForm;
        },
        openMakeanForm(){
            this.data = true;
            console.log(this.data)
        }

    }
   
  },
}
</script>

<style>
.header-info{
    display: flex;
    justify-content: space-between;
}
.header-info ul{
    list-style: none;
    display: flex;
    padding-right: 10px;
}
.header-info ul li{
    padding: 15px 5px;
    padding-left: 39px;
}
.header-info p{
    display: flex;
    padding: 0%;
    margin: 0px;
}
.dollarIcon{
    width: 12px;
    height: 12px;
    padding-bottom: 5px;
}
.preAppove{
    display: flex;
    flex-direction: row;
}
#getPreApprove{
color: #038BCA;
font-size: 9px;
padding: 2px;
}
#preAppove p{
    font-size: 15px;
}
#est-text{
    font-size: 9px;
    padding: 2px;
}
.makanOfferbtn{
    width:210px;
    height: 40px;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    background-color: #F05D29;
    border: 2px transparent;

}
.makanOfferbtn span{
    position: absolute;
    background-color: #038BCA;
    width: 39.5px;
    display: flex;
    justify-content: center;
    right: 19px;
    transform: rotate(43deg);
    top: 126px;
    position: absolute;
    height: 15px;
    overflow: hidden;
    border-radius: 8px;
    color: #FFFFFF;
    
}
.meadow{
    padding-top: 21px;
}

</style>