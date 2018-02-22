<template>
    <div class="add-component">
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
                                   v-model="id"
                                   v-validate="'min:2'"
                                   name="id">
                            <p class="alert
                                      alert-danger"
                                      role="alert"
                               v-if="errors.has('id')">{{ errors.first('id')}}
                            </p>
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
                                   v-model="symbol"
                                   v-validate="'required'"
                                   name="symbol">

                            <p class="alert
                                      alert-danger"
                                      role="alert"
                                      v-show="errors.has('symbol')">
                               {{ errors.first('symbol') }}
                            </p>
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

// proveriti!!!
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
    // addId() {
    //     this.currencies.push({id: this.id});
    //     this.id = '';
    //     this.symbol = '';
    // }
    addId() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.currencies.push({id: this.id});
          this.id = '';
          this.symbol = '';
        } else {
          console.log('Not valid');
        }
      })
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


