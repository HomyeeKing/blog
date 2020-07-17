<template>
  <div>
      <div id="searchBox" class="ml-5 my-5  col-2">
        <div class="input-group input-group-lg">
      <input type="search" class="w-100 form-control" v-model="searchQuery" autocomplete="off" placeholder="Search Articles" />   

        </div>
    <ul v-if="articles.length" class="border border-dark">
      <li  class="p-3" v-for="article in articles" :key="article.slug">
        <nuxt-link class="text-decoration-none text-success" :to="{name:'blog-slug',params:{slug:article.slug}}">{{article.title}}</nuxt-link>
      </li>
    </ul>
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: []
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        .limit(6)
        .search(searchQuery)
        .fetch();

        console.log(this.articles);
    }
  }
};
</script>

<style>
</style>