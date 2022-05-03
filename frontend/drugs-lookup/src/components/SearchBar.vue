<template>
  <div class="">
    <input type="text"
      class="mt-1 px-3 py-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-800 w-full rounded-lg sm:text-sm"
      placeholder="You can search by drug name or by desease"
      v-model="searchTerm"
      v-on:keyup.enter="$emit('start-search', searchTerm)">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: () => {
    return {
      searchTerm: ''
    }
  },
  props: {
    msg: String
  }
}
</script>