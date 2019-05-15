<template>
  <section>
    <div class="search">
      <input id="magnifying_glass" type="text">
      <input type="text" placeholder="Search Companies" v-model="filterKey">
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }" :key="key">
            {{ key }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in filteredData" :key="index">
          <td v-for="(key, index2) in columns" :key="index2">
            <span v-if="key=='Spend'" class="circle" :class="{'not_used': entry[key] < 1 }"></span>
            <span v-if="key=='Spend'" class="circle" :class="{'not_used': entry[key] < 2 }"></span>
            <span v-if="key=='Spend'" class="circle" :class="{'not_used': entry[key] < 3 }"></span>
            <span v-if="key=='Spend'" class="circle" :class="{'not_used': entry[key] < 4 }"></span>
            <span v-if="key=='Spend'" class="circle" :class="{'not_used': entry[key] < 5 }"></span>
            <span v-if="key=='Spend'" class="circle" :class="{'not_used': entry[key] < 6 }"></span>
            <span v-else>{{ entry[key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    Company: 'CompanyTable',
    data() {
      var sortOrders = {}
      var columns = ['Company', 'Location', 'Category', 'Spend'];
      columns.forEach(function (key) {
        sortOrders[key] = 1
      });
      return {
        sortKey: '',
        sortOrders: sortOrders,
        columns: columns,
        filterKey: '',
        tableData: [
          {
            Company: "Facebook",
            Location: "info@facebook.com",
            Category: "DNS",
            Spend: 3
          },
          {
            Company: "General Motors",
            Location: "jsmith@gm.com",
            Category: "Content Delivery",
            Spend: 5
          },
          {
            Company: "Walmart",
            Location: "hi@wallmart.com",
            Category: "SaaS",
            Spend: 2
          },
          {
            Company: "Exxon Mobil",
            Location: "mail@exxonmobil.com",
            Category: "Video Platform",
            Spend: 6
          },
          {
            Company: "Apple",
            Location: "Welcome@apple.com",
            Category: "Cloud Hosting",
            Spend: 4
          },
          {
            Company: "Markel Corporation",
            Location: "john@markelcorp.com",
            Category: "Hosting",
            Spend: 5
          }
          ,
          {
            Company: "Humana",
            Location: "hey@humana.com",
            Category: "Content Delivery",
            Spend: 2
          }
        ]
      }
    },
    computed: {
      filteredData() {
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var tableData = this.tableData
        if (filterKey) {
          tableData = tableData.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          tableData = tableData.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return tableData
      }
    },
    methods: {
      sortBy(key) {
        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1;
      }
    }
  }
</script>

<style scoped>
  section {
    max-width: 780px;
  }

  input {
    border: 1px solid #D0D4E1;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    margin: 0 0 20px 0;
    padding-left: 35px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  }

  table {
    width: 780px;
    border-spacing: 0;
  }

  table thead {
    text-align: left;
    background-color: #F1F2F6;
  }

  th {
    cursor: pointer;
  }

  th, td {
    padding: 20px 15px;
    font-size: .8rem;
    border: 1px solid #CED2E0;
  }

  th.active {
    color: rgba(0, 0, 0, 0.4);
  }

  tr:nth-child(even) {
    background-color: #F6F7F9;
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
    right: 730px;
    box-shadow: none;
  }

  span.circle {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: #20C795;
    animation: dots .6s cubic-bezier(.6, .1, 1, .4) infinite alternate;
  }

  span.circle.not_used {
    background-color: #e2e4ed;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #000;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
  }

</style>
