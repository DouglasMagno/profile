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
                <h1 class="display-3  text-white">{{ project.title }}
                  <span>{{Object.keys(project.languages).join(', ')}}</span>
                </h1>
                <p class="lead  text-white">{{project.description}}</p>

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
            <h2 class="mb-5"><span>Readme</span></h2>
            <div class="Box-body px-5 pb-5">
              <article v-html="project.readme" class="markdown-body entry-content container-lg" itemprop="text">
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
export default {
  name: "Project",
  data(){
    return {
      project: {
        title: "...",
        description: "...",
        readme: "...",
        defaultBranch: '...',
        languages: {
          "...": 0,
        }
      },
    };
  },
  methods: {
    async loadProject() {
      const repository = 'vuejs-challenge';
      await axios.get(`https://api.github.com/repos/DouglasMagno/${repository}`).then((response) => {
        this.project.title = response.data.name;
        this.project.description = response.data.description;
        this.project.defaultBranch = response.data.default_branch;
      });
      const requestLanguages = axios.get(`https://api.github.com/repos/DouglasMagno/${repository}/languages`);
      const requestReadme = axios.get(`https://raw.githubusercontent.com/DouglasMagno/${repository}/${this.project.defaultBranch}/README.MD`);
      axios.all([requestLanguages, requestReadme]).then(axios.spread((...responses) => {
        const responseLanguages = responses[0];
        const responseReadme = responses[1];
        const md = new MarkdownIt();
        this.project.readme = md.render(responseReadme.data);
        this.project.languages = responseLanguages.data;
      }));
    }
  },
  mounted() {
    this.loadProject();
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
