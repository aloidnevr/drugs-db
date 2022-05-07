<template>
  <div class="flex justify-center">
      <div class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-5">
        <div class="bg-gray-100 flex justify-between items-center px-6 pt-4">
          <div class="font-bold text-lg">{{data.name}}</div>
          <div class="text-sm">{{toHumanDate(data.released)}}</div>
        </div>
        <div class="bg-gray-100 flex flex-wrap px-5 pb-5">
          <div class="bg-sky-700 text-xs px-2 py-1 rounded-full border border-gray-200 text-white" v-for="disease in data.diseases" v-bind:key="disease">{{disease}}</div>

        </div>

        <div class="px-6 py-4 border-t border-gray-200">
          <div class="p-4 text-left">
            {{data.description}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'DrugCard',
  props: {
    data: Object
  },
  methods: {
    toHumanDate: (dateString) => {
      return moment(dateString).format('MMM DD, YYYY')
    }
  }
}
</script>

<style scoped>

</style>
