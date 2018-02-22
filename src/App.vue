<template>
  <div id="app">
      <div class="header
                  mt-2">
        <div class="container-fluid">
            <div class="row
                        align-items-center">
                <div class="col-md-3
                            p-2">
                    <router-link to="/">
                        <a href="#" class="navbar-brand">
                          <img src="./assets/usemenu.png" alt="" width="40px" height="40px">
                        </a>
                    </router-link>
                </div>
                <div class="col-md-9
                            p-2">
                    <i class="fa fa-dollar-sign"></i>
                    <i class="fa fa-camera-retro"></i>
                    <h5 class="d-inline
                              p-2
                              text-white">
                        Currency
                    </h5>
                </div>
            </div>
        </div>
      </div>

      <div class="main-content">
          <div class="container-fluid
                      h-100">
              <div class="row
                          h-100">
                  <div class="col-md-3
                              pr-4
                              bg-custom
                              h-100">
                      <ul class="list-group
                                list-group-flush
                                list-group-bg">
                        <li class="list-group-item
                                  border-bottom-bg
                                  px-0">
                            Currency List
                        </li>
                        <li class="list-group-item
                                  d-flex
                                  justify-content-between align-items-center
                                  px-0"
                            v-for="(data, index) in currencies" :key='index'> {{data.id}}
                            <i v-on:click="remove(index)" class="delite-currency">
                              delite
                            </i>
                        </li>
                        <li class="list-group-item
                                  px-0
                                  border-bottom-bg">
                            <router-link to="/add">
                                <i class="fa fa-plus-circle"></i>
                                Add currency
                            </router-link>
                        </li>
                      </ul>
                  </div>
                  <div class="col-md-9
                              bg-primary-custum">
                      <router-view v-bind:currencies="currencies"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import  Add from './components/Add.vue';
    import Edit from './components/Edit.vue';

export default {
    name: 'app',
    components: {
      'app-add': Add,
      'app-edit': Edit
    },
    data () {
        return {
        // v-imodel
        id: '',
        symbol: '',

        currencies: [
            { id: "CHF",
              iso: "chf",
              symbol: "franka"
            },
            { id: "EUR",
              iso: "eur",
              symbol: "euro"
            },
            { id: "GBP",
              iso: "gbp",
              symbol: "funta"
            },
            { id: "USD",
              iso: "usd",
              symbol: "dolar"
            }
        ]
    }
  },
  methods: {
    remove(index) {
        this.currencies.splice(index, 1);
    }
  }
}
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

body, html {
	font-family: 'Open Sans', sans-serif;
    height: 100%;
    background-color: #eee;
}

*, *:before, *:after {
  box-sizing: border-box;
}

.header {
    background-color: #ff6500;
}

.main-content {
    height: calc(100vh - 72px);
}

.bg-custom {
    background-color: #eee;
}

.border-bottom-bg {
    border-bottom: 1px solid #ff6500 !important;
    color: #ff6500 !important;
}

.list-group-bg {
    background-color: #eee;
}

.bg-primary-custum {
    background-color: #fff;
}

.router-link-exact-active.router-link-active {
    color: #ff6500 !important;
}

.fa.fa-camera-retro {
    color: #fff;
}

.list-group-item {
    background-color: transparent;
}

.list-group-item:hover i.delite-currency {
    display: inline-block;
    color: indianred;
}

.delite-currency {
    cursor: pointer;
    display: none;
    &:hover {
        transition: 0.5s ease-in-out;
        color: indianred;
    }
}

</style>
