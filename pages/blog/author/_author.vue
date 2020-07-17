<template>
  <div>
    <main class="row vh-100">
      <div class="col-md-12 col-lg-5 position-relative h-100">
        <img :src="articles[0].author.image" :alt="articles[0].author.alt" class="position-absolute w-100 h-100" />

        <aside class="position-absolute text-white ml-5 mt-5">
          <h1>Author: {{ articles[0].author.name }}</h1>
          <p>Bio: {{ articles[0].author.bio }}</p>
        </aside>
      </div>

      <article class="col-lg-7 col-md-12 position-relative p-5 vh-100 right">
       <h3>Here are a list of articles by {{ articles[0].author.name }}:</h3>
        
        <AuthorShow :articles="articles" />
      </article>
    </main>

   
  </div>
</template>

<script>
export default {
  
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .where({
        "author.name": {
          $regex: [params.author, "i"]
        }
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  }
};
</script>

<style>
</style>