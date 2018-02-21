<template>
  <div id="app">
    <div class="header p-3 mt-2">
      <div class="container-fluid">
          <div class="row align-items-center">
              <div class="col-md-4">
                  <a class="navbar-brand" href="#">M</a>
              </div>
              <div class="col-md-8">
                  Currency
              </div>
          </div>
      </div>
    </div>

	<div class="main-content">
      <div class="container-fluid h-100">
          <div class="row h-100">
              <div class="col-md-4 bg-info h-100">
                  <h5 class="">Currency List</h5>
                  <ul class="list-group list-group-flush list-group-bg">
                    <li class="list-group-item
                               d-flex
                               justify-content-between align-items-center"
                        v-for="(data, index) in currencies" :key='index'>{{ index + 1 }}. {{data.id}}
                        <i class="fa fa-minus-circle"    v-on:click="remove(index)">
                        </i>
                    </li>
                  </ul>
                  <a href="#" class="badge badge-primary">Add Currencies</a>
              </div>
              <div class="col-md-8 bg-primary">
                  <!-- new component -->
                  <app-add v-bind:currencies="currencies"></app-add>
              </div>

          </div>
      </div>
	</div>
  </div>
</template>

<script>
    import  Add from './components/Add.vue';

export default {

    name: 'app',
    components: {
      'app-add': Add
    },

    data () {
        return {
        // v-imodel
        id: '',
        currencies: [
            { id: "euro",
              iso: "eur",
              simbol: "☼"
            },
            { id: "srpski dinar",
              iso: "rsd",
              simbol: "☼"
            },
            { id: "kuna",
              iso: "rhk",
              simbol: "☼"
            }
        ]
    }
  },
  methods: {
    //     addId() {
    //         this.currencies.push({id: this.id});
    //         this.id = '';
    //     }

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
    background-color: orangered;
}

.main-content {
    height: calc(100vh - 72px);
}

.list-group-bg {
    background-color: peru;
}

.list-group-item {
    background-color: transparent;
}

 input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

</style>
