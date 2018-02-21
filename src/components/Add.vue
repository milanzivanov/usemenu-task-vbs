<template>
    <div class="add-component">
        <!-- v-imodel -->
        <form @submit.prevent="addId">
            <input type="text"
                    placeholder="Enter a currency you want..."
                    v-model="id">
        </form>

        <!-- props in the action -->
        <!-- <p>{{currencies}}</p> -->
        <!-- <ul>
            <li v-for="(data, index) in currencies" :key='index'>
              {{ index + 1 }}. {{data.id}}</li>
        </ul> -->

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
        id: ''
      }
    },

    methods : {
    addId() {
        this.currencies.push({id: this.id});
        this.id = '';
    }
  }

  }
</script>

<style>

</style>


