<template>
    <footer class="footer has-cards">
      <div class="container container-lg">
        <div class="row">
          <div class="col-md-4 mb-5 mb-md-0">
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/landing" title="FrontEnd">
                <img v-lazy="'img/theme/frontend.jpg'" class="card-img">
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-5 mb-lg-0">
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/profile" title="BackEnd">
                <img v-lazy="'img/theme/backend.jpg'" class="card-img">
              </router-link>
            </div>
          </div>
          <div class="col-md-4 mb-5 mb-lg-0">
            <div class="card card-lift--hover shadow border-0">
              <router-link to="/profile" title="Artificial intelligence">
                <img v-lazy="'img/theme/ai.jpg'" class="card-img">
              </router-link>
            </div>
          </div>
        </div>
      </div>
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Thanks for viewing my portfolio!</h3>
                    <h4 class="mb-0 font-weight-light">Follow me on these platforms.</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://twitter.com/douggmagno"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow me">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/dougmagno/"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="See more about me">
                        <i class="fa fa-linkedin -square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/dougmagno/"
                       class="btn btn-neutral btn-icon-only btn-instagram btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow me">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/DouglasMagno"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Se my projects">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Creative Tim</a> & <a href="https://www.binarcode.com" target="_blank" rel="noopener">Binar Code</a> & adapted by Douglas Magno
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
