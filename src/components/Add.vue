<template>
    <div class="add-component">
        <!-- v-imodel -->
        <!-- <form @submit.prevent="addId">
            <input type="text"
                   placeholder="Enter a currency you want..."
                   v-model="id">
        </form> -->

        <!-- props in the action -->
        <!-- <p>{{currencies}}</p> -->
        <!-- <ul>
            <li v-for="(data, index) in currencies" :key='index'>
              {{ index + 1 }}. {{data.id}}</li>
        </ul> -->


        <form @submit.prevent="addId">
            <div class="container-fluid px-0">
                <div class="row">
                    <div class="col-md-8 px-0">
                        <ul class="list-group
                                  list-group-flush mx-4">
                            <li class="list-group-item
                                       m-0
                                       px-0">
                                Add Currency
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-group
                            row
                            py-3
                            m-0">
                    <div class="col-md-8 d-flex px-0 border-input-bottom">
                        <label for="inputCurrency"
                              class="col-md-4
                                      col-form-label">
                            Currency Code
                        </label>
                        <div class="col-md-8">
                            <input type="text"
                                   class="form-control"
                                   id="inputCurrency"
                                   placeholder="Currency code"
                                   v-model="id">
                        </div>
                    </div>
                </div>
                <div class="form-group
                            row
                            py-3
                            m-0">
                    <div class="col-md-8 d-flex px-0      border-input-bottom">
                        <label for="inpuSymbol"
                              class="col-md-4
                                      col-form-label">
                            Currency Symbol
                        </label>
                        <div class="col-md-8">
                            <input type="text"
                                  class="form-control"
                                  id="inpuSymbol"
                                  placeholder="Currency symbol"
                                  v-model="symbol">
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-8 py-2">
                        <button type="submit"
                                class="btn
                                      btn-custum-bg
                                      pull-right">
                            SUBMIT
                        </button>
                    </div>
                </div>

            </div>
        </form>
    </div>
</template>

<script>

  import App from './Add.vue';

  export default {

    // props in the action
    // props: ['currencies'],
    props: {
      currencies: {
        type: Array,
        required: true
      }
    },

    name: 'Add',

    data () {
      return {
        id: '',
        symbol: ''
      }
    },

    methods : {
    addId() {
        this.currencies.push({id: this.id});
        this.id = '';
        this.symbol = '';
    }
  }

  }
</script>

<style>

.list-group-item:last-child {
    border-bottom: 1px solid #ff6500 !important;
}

.border-input-bottom {
    border-bottom: 1px solid #ff6500;
    padding-bottom: 10px;
}

.btn-custum-bg {
    background-color: #ff6500;
    color: #fff;
}

</style>


