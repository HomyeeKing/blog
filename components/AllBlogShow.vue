<template>
  <div>
      <ul class="d-flex flex-wrap">
      <li v-for="article of articles" :key="article.slug" @mouseover="toogle(article)" @mouseout="toogle(article)" class="card  mx-5 my-3" :class="{shadow:article.active}" style="max-width: 540px;">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="row  h-100 w-100">
          <div class="col-md-4">
          <img :src="article.img" :alt="article.alt" class="card-img h-100"/>

          </div>
         
          <div class="col-md-8">
            <h2 class="card-title text-capitalize">{{ article.title }}</h2>
            <p class="card-text">by {{ article.author.name }}</p>
            <p class="card-text font-weight-bold text-gray">{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        articles:{
            type:Array,
            required:true
        }
    },
 methods: {
    toogle(item){
      if(item.active){
      this.$set(item,'active',false)

      }else{
      this.$set(item,'active',true)

      }
    }
  },
}
</script>

<style>

</style>