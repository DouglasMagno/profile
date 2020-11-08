<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew blue">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">Blog
                  <span>Follow me in my medium blog to great stories!</span>
                </h1>

              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section id="section-components" class="section section-components pb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <h2 class="mb-5"><span id="list">Stories</span></h2>
            <div v-if="!!stories.length" class="row row-grid" v-for="(story, key) in stories" :key="key">
                <div class="col-sm-3">
                  <small class="text-uppercase text-muted font-weight-bold"><a :href="story.link" target="_blank">{{ story.title }}</a></small>
                </div>
                <div class="col-sm-9">
                  <p v-html="story.description"></p>
                </div>
            </div>
            <div v-if="!!!stories.length">
              Coming soon!
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {feed} from "@/services/medium.service";
export default {
  name: "Stories",
  components: {
  },
  data(){
    return {
      stories: [],
      tags: '',
    };
  },
  methods: {
    async loadStories() {
      feed().then((response) => {
        this.$set(this, "stories", response.data.items);
      });
    }
  },
  mounted() {
    this.loadStories();
  }
}
</script>

<style scoped>
.section-shaped .shape {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 80%;
}

.Box-body:last-of-type {
  margin-bottom: -1px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.px-5 {
  padding-right: 32px!important;
}
.pl-5, .px-5 {
  padding-left: 32px!important;
}
.pb-5 {
  padding-bottom: 32px!important;
}
.Box-body {
  padding: 16px;
  border: 1px solid #e1e4e8;
  margin-bottom: 1px !important;
}
</style>
