<template>
  <div id="app">
    <div class="header p-3 mt-2">
      <div class="container-fluid">
          <div class="row align-items-center">
              <div class="col-md-4">
                  <a class="navbar-brand" href="#">Logo menu</a>
              </div>
              <div class="col-md-8">
                  Currency
              </div>
          </div>
          <!-- <h1>{{msg}}</h1>
          <div class="d-flex p-2">I'm a flexbox container!</div> -->
      </div>
    </div>

	<div class="main-content">
      <div class="container-fluid h-100">
          <div class="row h-100">
              <div class="col-md-4 h-100">
                  <p>something</p>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio1</li>
                      <li class="list-group-item">Cras justo odio2</li>
                      <li class="list-group-item">Cras justo odio3</li>
                  </ul>
              </div>
              <div class="col-md-8 bg-primary">
                  magic
              </div>
          </div>
      </div>
	</div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

body, html {
	font-family: 'Open Sans', sans-serif;
    height: 100%;
    background-color: #eee;
}

.header {
    background-color: orangered;
}

.main-content {
    height: calc(100vh - 72px);
}

</style>
