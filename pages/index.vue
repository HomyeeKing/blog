<template>
  <div >
    <app-search-input />

    <h1 class="ml-5 font-weight-bold">Blog Posts</h1>
   
     <AllBlogShow :articles="articles" />
  
  </div>
</template>


<script>
export default {
  data () {
    return {
      hover:false
    }
  },
 
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  }
};
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
ul>li{
  list-style: none;
}
a,a:hover{
  text-decoration: none;
  color:#000
}

</style>
