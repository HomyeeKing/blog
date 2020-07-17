
<template>
  <div class="d-flex justify-content-between">
    <nuxt-link
      v-if="prev"
      :to="{name:'blog-slug',params:{slug:prev.slug}}"
      class="text-primary font-weight-bold "
    >👈{{prev.title}}</nuxt-link>

    <span v-else>&nbsp;</span>
    <nuxt-link
      v-if="next"
      :to="{name:'blog-slug',params:{slug:next.slug}}"
      class="font-weight-bold text-primary"
    >{{next.title}}👉</nuxt-link>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: "PreNext",
  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  }
};
</script>