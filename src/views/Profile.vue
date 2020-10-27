<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4 blue">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img :src="user.avatar_url" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button style="color: transparent; background-color: transparent; border: none; box-shadow: none" type="info" size="sm" class="mr-4">Connect</base-button>
                                    <base-button style="color: transparent; background-color: transparent; border: none; box-shadow: none" type="default" size="sm" class="float-right">Message</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading"></span>
                                        <span class="description"></span>
                                    </div>
                                    <div>
                                        <span class="heading"></span>
                                        <span class="description"></span>
                                    </div>
                                    <div>
                                        <span class="heading"></span>
                                        <span class="description"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>{{ user.name }}</h3>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{translator('profession')}}</div>
                            <div><i class="ni education_hat mr-2"></i>{{translator('university')}}</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>{{user.bio}}</p>
                                    <a href="https://www.linkedin.com/in/dougmagno/">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import translate from "@/lang/Translations";
export default {
  data(){
    return {
      user: {
        name: 'Douglas Magno',
        avatar_url: 'https://avatars0.githubusercontent.com/u/12971230?v=4',
        bio: '...',
      }
    }
  },
  methods: {
    translator(key) {
      return translate ? translate(key) : key;
    }
  },
  mounted() {
    window.axios.get('https://api.github.com/users/DouglasMagno').then((response) => {
      this.user.name = response.data.name;
      this.user.avatar_url = response.data.avatar_url;
      this.user.bio = response.data.bio;
    });
  }
};
</script>
<style lang="scss">
  .blue {
    background: linear-gradient(150deg, #034aba 15%, #9c80d4 70%, #02f5fe 94%) !important;
  }
</style>
