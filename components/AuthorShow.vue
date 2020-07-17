<template>
   <ul>
      <li v-for="article in articles" :key="article.slug" class="card my-5">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="row text-decoration-none h-100">
            <img :src="article.img" :alt="article.alt" class="card-img col-md-4" />
          <div class="col-md-8">
            <h2 class="card-title text-capitalize"> {{ article.title }} </h2>
            <p class="card-text"> {{ article.description }} </p>
            <p class="card-text text-gray font-weight-bold"> {{ formatDate(article.updatedAt) }} </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
</template>

<script>
export default {
    props: {
        articles:{
            type:Array,
            required:true
        }
    },
computed: {
    formatDate() {
      return function(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("en", options);
      };
    }
  },
}
</script>

<style>
.card{
    height:13rem;
}
.card-img{
    object-fit: cover;
}
</style>