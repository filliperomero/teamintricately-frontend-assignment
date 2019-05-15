<template>
  <header>
    <nav>
      <div class="left-container">
        <router-link to="/" class="logo">
          <img src="../images/logo.svg" alt="Intricately">
        </router-link>
        <div class="search">
          <input id="magnifying_glass" type="text">
          <input type="text" placeholder="Search Companies">
        </div>
        <span>OR</span>
        <router-link class="btn" to="/">NEW SMARTLIST</router-link>
        <div style="position: relative">
          <button class="dropdown" @click="toggleDropdown">PROSPECT</button>
          <div v-if="showMenu" class="menu">
            <a href="" class="menu_item">Menu 1</a>
            <a href="" class="menu_item">Menu 2</a>
          </div>
        </div>
        <div style="position: relative">
          <button class="dropdown" @click="toggleDropdown2">ALERT</button>
          <div v-if="showMenu2" class="menu">
            <a href="" class="menu_item">Menu 1</a>
            <a href="" class="menu_item">Menu 2</a>
          </div>
        </div>
        <div style="position: relative">
          <button class="dropdown" @click="toggleDropdown3">LEARN</button>
          <div v-if="showMenu3" class="menu">
            <a href="" class="menu_item">Menu 1</a>
            <a href="" class="menu_item">Menu 2</a>
          </div>
        </div>
      </div>

      <div class="flex">
        <img src="../images/chrome_logo.png" alt="Chrome">
        <div style="position: relative">
          <img src="../images/foto.jpg" class="dropdown foto" @click="toggleDropdownProfile">
          <div v-if="showMenuProfile" class="menu">
            <a href="" class="menu_item">Profile</a>
            <a href="" class="menu_item">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        showMenu: false,
        showMenu2: false,
        showMenu3: false,
        showMenuProfile: false
      }
    },
    methods: {
      toggleDropdown() {
        this.showMenu = !this.showMenu;
      },
      toggleDropdown2() {
        this.showMenu2 = !this.showMenu2;
      },
      toggleDropdown3() {
        this.showMenu3 = !this.showMenu3;
      },
      toggleDropdownProfile() {
        this.showMenuProfile = !this.showMenuProfile;
      },
    }
  }
</script>

<style scoped>
  * {
    color:white;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90 , .1);
    background-color: #394783;
    color: white;
  }

  span {
    font-size: .75rem;
  }

  .left-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    background-color: #1F2B5A;
    border: none;
    border-radius: 4px;
    width: 400px;
    height: 40px;
    font-size: 1rem;
    margin: 0 10px;
    padding-left: 35px;
  }

  .logo {
    padding: 10px 0;
  }

  .logo img {
    width: 220px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  .btn {
    display: block;
    padding: 10px 30px;
    margin: 0 10px;
    background: #5D699A;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: .8rem;
    transition: all 0.3s;
    border: none;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    cursor: pointer;
  }

  .search {
    position: relative;
  }

  #magnifying_glass {
    width: 62px;
    height: 62px;
    background: url("../images/search.svg") no-repeat center center;
    text-indent: -150px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: -10px;
    right: 350px;
    box-shadow: none;
  }

  .dropdown {
    margin: 0 15px;
	  display: flex;
		align-items: center;
    border: none;
    font-size: .85rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    background-color: transparent;
    cursor: pointer;
  }

  .dropdown:after {
    margin-left: .5em;
    content: "";
    border-top: .3em solid;
    border-right: .28em solid transparent;
    border-bottom: 0;
    border-left: .28em solid transparent;
  }

  .dropdown:hover {
    color: #BCBACD;
    cursor: pointer;
  }

  .menu {
    display: flex;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    color: #212529;
    cursor: pointer;
    flex-direction: column;
    font-size: .75rem;
    margin: .125rem 0 0;
    padding: .5rem 0;
    position: absolute;
    text-align: left;
    right: 20px;
  }

  .menu_item {
    color: #212529;
    padding: .25rem 1rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .menu_item:hover {
    background-color: #F4F6F6;
    cursor: pointer;
  }

  .foto {
    width: 45px;
    height: 45px;
    border: 2px solid white;
    border-radius: 50px;
  }
</style>
