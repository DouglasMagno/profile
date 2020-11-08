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
                <h1 class="display-3  text-white">Here are all my projects
                  <base-input placeholder="Search"
                              v-model="tags"
                              @keyup.enter="setRoute()"
                              addon-left-icon="ni ni-zoom-split-in">
                  </base-input>
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
            <h2 class="mb-5"><span id="list">List</span></h2>
              <List
                :list="repositories"
              />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import List from "@/views/components/List";
import {repositories} from "@/services/github.service";
export default {
  name: "Project",
  components: {
    List
  },
  data(){
    return {
      repositories: [{
        name: '...',
        description: '...',
        language: '...'
      }],
      tags: '',
    };
  },
  methods: {
    async loadRepositories() {
      repositories(this.$route.query.tags || '').then((response) => {
        if (response.data.items){
          this.$set(this, "repositories", response.data.items);
        }else{
          this.$set(this, "repositories", response.data);
        }
      });
    },
    async setRoute(){
      if (this.$route.query.tags !== this.tags){
        await this.$router.push({path: '/projects', query: {tags: this.tags}});
        await this.loadRepositories();
        this.$el.querySelector('#list').scrollIntoView({behavior: 'smooth'});
      }
    }
  },
  mounted() {
    this.loadRepositories();
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
