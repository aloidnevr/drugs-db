<template>
  <div id="app">
    <section class="max-w-screen-sm mx-auto flex flex-col ">
      <div class="bg-cyan-900 flex flex-row justify-center space-between py-5 rounded-lg">
        <img width="80" src="./assets/logo.png" class="pr-6">
        <a href="https://temedica.com/" target="_blank">
        <img width="220" src="https://temedica.com/build/assets/logo.9b7629c1.svg"></a>
      </div>
      <div>
        <SearchBar class="mx-auto" v-on:start-search='startSearch'/>
        <div v-if="showResults">
          <div v-if="matchedResults.length > 0 ">
            <div class="text-sm text-slate-500 p-2">Showing {{matchedResults.length}} results</div>
            <div 
              v-for="result in matchedResults" :key="result.id">
              <DrugCard v-bind:data="result"/>
            </div>
          </div>
          <div v-else class="text-sm text-slate-500 p-2">
            No results found
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import DrugCard from './components/DrugCard.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    DrugCard
  },
  data: () => {
    return {
      showResults: false,
      matchedResults: []
    }
  },
  methods: {
    startSearch: async function(searchTerm) {
      this.showResults = true;
      const response = await this.$http.get(`http://localhost:8080/search/drugs?q=${searchTerm}`);
      this.matchedResults = response.data
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
