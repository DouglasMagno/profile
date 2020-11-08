<template>
  <div>
    <div class="row row-grid">
<!--        <div class="col-sm-3">-->
<!--          <small class="text-uppercase text-muted font-weight-bold">{{ item.name }}</small>-->
<!--        </div>-->
<!--        <div class="col-sm-9">-->
<!--          <p>{{item.description}}</p>-->
<!--        </div>-->
        <div class="col-lg-4 list-card" v-for="(item, key) in list" :key="key">
          <card class="border-0" hover shadow body-classes="py-5">
            <icon :name="iconCard(item)" :type="colorCard(item)" rounded class="mb-4">
            </icon>
            <h6 :class="`text-${colorCard(item)} text-uppercase`">{{ item.name }}</h6>
            <p class="description mt-3">{{item.description}}</p>
            <div>
              <badge :type="colorCard(item)" rounded>{{ item.language }}</badge>
            </div>
            <base-button tag="a" :href="`#/project/${item.name}`" :type="colorCard(item)" class="mt-4">
              Learn more
            </base-button>
          </card>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["list"],
  methods: {
    iconCard(item){
      const langs = {
        php: "ni ni-app",
        javascript: "ni ni-tv-2",
        ruby: "ni ni-tv-2",
        vue: "ni ni-tv-2",
        python: "ni ni-bulb-61",
        jupyter: "ni ni-bulb-61"
      }
      for (let field in langs){
        if (item.language.toLowerCase().includes(field)){
          return langs[field];
        }
      }
      return "ni ni-app";
    },
    colorCard(item){
      const langs = {
        php: "success",
        javascript: "primary",
        ruby: "primary",
        vue: "primary",
        python: "warning",
        jupyter: "warning"
      }
      for (let field in langs){
        if (item.language.toLowerCase().includes(field)){
          return langs[field];
        }
      }
      return "sucess";
    },
  }
}
</script>

<style scoped>
  .list-card {
    padding-bottom: 2rem;
  }
</style>
