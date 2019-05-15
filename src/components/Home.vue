<template>
  <main class="main">
      <div class="main-content">
        <nav class="sidenav">
          <h2>HOME <span>/</span> {{componentName}}</h2>
          <ul>
            <li>
              <router-link :to="{ name: 'CompanyData'}" @click.native="componentName='COMPANY DATA'">COMPANY DATA</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'CompanyTable'}" @click.native="componentName='COMPANY TABLE'">COMPANY TABLE</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'CompanyPage'}" @click.native="componentName='COMPANY PAGE'">COMPANY PAGE</router-link>
            </li>
          </ul>
        </nav>
        <router-view class="side_content"/>
      </div>
    </main>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        componentName: 'COMPANY DATA'
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin: 20px 0;
    font-size: .85rem;
    color: #909090;
    font-weight: inherit;
  }

  .main-content {
    display: flex;
  }

  .side_content {
    margin: 55px 0 40px 40px;;
  }

  ul {
    border: 1px solid #D4D9E3;
    border-radius: 4px;
  }

  ul li {
    background: #344279;
    width: 220px;
  }

  .sidenav a {
    padding: 20px;
    display: block;
    color: #636E9D;
    background: #fff;
    font-weight: bold;
    font-size: .75rem;
  }

  .sidenav a.router-link-exact-active, .sidenav a:hover {
    background: #FAFBFC;
    color: #505050;
    margin-left: 3px;
    padding-left: 15px;
  }

  .sidenav ul li:nth-child(2) {
    border-bottom: 1px solid #D4D9E3;
    border-top: 1px solid #D4D9E3;
  }

  span {
    margin: 0 5px;
  }
</style>
