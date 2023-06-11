<!-- Navbar.vue -->
<template>
<div class="navbar-menu" :class="{ 'is-active': showMenu }">
        <div class="navbar">
          <div >
          <img :src="$t('houseZeoIcon')" alt="Logo" id="houseZeo"/>

          </div>
            <ul><li class="text-content"><a href="#" class="dropdown-trigger"><span>{{ $t('products') }} </span><span class="caret"></span></a>
            </li>
              <li class="text-content"><a href="#" class="dropdown-trigger">{{ $t('howhouZeoWorks') }}</a></li>
              <li class="text-content"><a href="#" class="dropdown-trigger">{{ $t('reviews') }}</a></li>
              <li class="text-content"><a href="#" class="dropdown-trigger">{{ $t('buy') }} <span class="caret"></span> </a></li>
              <li class="text-content"><a href="#" class="dropdown-trigger">{{ $t('sell') }} <span class="caret"></span></a></li>
              <li class="text-content"><a href="#" class="dropdown-trigger">{{ $t('pricing') }}</a></li>
              <li class="text-content"><a href="#" class="dropdown-trigger">{{ $t('resources') }} <span class="caret"></span></a></li>
              <li class="text-content"><a href="#" class="dropdown-trigger">{{ $t('signIn') }}</a></li>
              <li><p>(844) 448-0110</p><p class="margin-rt-5px timings">9pm to 6pm CST, Mon-Sat</p></li>
              <li><button class="startFree">Start Free Lisiting <strong>Now</strong></button></li>
              </ul>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    name:"headerNavbar",
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      changeLocale(locale) {
      this.$i18n.locale = locale;
    }
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  @import '~@fortawesome/fontawesome-free/css/all.css';
 
  .navbar{
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar ul{
    list-style: none;
    display: flex;
    padding-right: 10px;
    padding-top:63px
  }
  .navbar li{
    padding-right: 5px;
    padding-left: 5px;
    text-align: -webkit-match-parent;
  }
  .navbar ul li a{
    color: var(--color--black);
    text-decoration: none;
    font-size: 16px;
    padding-top: 50px;

  }
  .navbar ul li a:hover {
    text-decoration: underline;
  }
.caret{
  border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px dashed;
    display: inline-block;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    width: 0;
}
.dropdown-trigger{
  padding-top:50px;
}
.text-content{
  padding-top: 30px;
}
.startFree{
  width: 200px;
  height: 40px;
  margin-top:20px;
  background-color: #0c5aa5;
  box-shadow: 0 5px 20px -10px #0c5aa5;
  border-radius: 10px;
  color: aliceblue;
  text-transform: uppercase;
  transition: all .5s;

}

#houseZeo{
    width: 9.688rem;
    height: 2.813rem;
    padding-top: 58px;
}

  </style>
  