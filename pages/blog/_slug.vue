<template>
  <div>
    <main class="row vh-100">
      <div class="col-md-12 col-lg-5 position-relative h-100">
        <img :src="article.img" :alt="article.alt" class="position-absolute w-100 h-100" />

        <aside class="position-absolute text-white ml-5 mt-5">
          <h1>{{article.title}}</h1>
          <blockquote class="text-right">
            <cite title="Source Title">--{{formatDate(article.createdAt)}}</cite>
          </blockquote>

          <!-- <ul>
            <li v-for="link of article.toc" :key="link.id">
              <nuxt-link
                :to="`#${link.id}`"
                :class="{'py--2':link.depth===2,'ml-2 pb-2':link.depth===3}"
              >{{ link.text }}</nuxt-link>
            </li>
          </ul>-->
        </aside>
      </div>

      <article class="col-lg-7 col-md-12 position-relative p-5 vh-100 right">
        <nuxt-content :document="article"></nuxt-content>
        <author :author="article.author" />
        
        <PrevNext :prev="prev" :next="next" />
      </article>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    formatDate() {
      return function(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("zh", options);
      };
    }
  },

  async asyncData({ $content, params }) {
    let article = await $content("articles", params.slug).fetch();
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    console.log(next);
    return {
      article,
      prev,
      next
    };
  }
};
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.icon.icon-link {
  background-image: url("~assets/svg/icon-hashtag.svg");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.right {
  overflow-y: scroll;
}
</style>