<template>
  <div class="card my-5">
    <NuxtLink :to="`/blog/author/${author.name}`" class="row text-decoration-none h-100">
      <img :src="author.image" class="col-md-6 card-img h-100" />
      <div class="col-md-6 ">
        <h4 class="card-title ">Author</h4>
        <p class="card-text">{{ author.name }}</p>
        <p class="card-text">{{ author.bio }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
.card{
  height: 12rem;
  color: #000;
}
.card-img{
  object-fit: cover;
}
</style>