<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>


            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">{{ translator('portfolio') }}</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Landing</router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/projects" class="dropdown-item">Projects</router-link>
                    <router-link to="/blog" class="dropdown-item">Blog</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.linkedin.com/in/dougmagno/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow me on Linkedin">
                        <i class="fa fa-linkedin-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Linkedin</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/dougmagno/"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow me on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/douggmagno" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow me on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/DouglasMagno"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star me on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-icon" href="https://medium.com/@dougmagno" target="_blank" rel="noopener"
                     data-toggle="tooltip" title="Follow me on Medium">
                    <i class="fa fa-medium"></i>
                    <span class="nav-link-inner--text d-lg-none">Medium</span>
                  </a>
                </li>
<!--                <li class="nav-item d-none d-lg-block ml-lg-4">-->
<!--                    <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank" rel="noopener"-->
<!--                       class="btn btn-neutral btn-icon">-->
<!--                <span class="btn-inner&#45;&#45;icon">-->
<!--                  <i class="fa fa-cloud-download mr-2"></i>-->
<!--                </span>-->
<!--                        <span class="nav-link-inner&#45;&#45;text">Download</span>-->
<!--                    </a>-->
<!--                </li>-->
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import translate from "@/lang/Translations";
export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  methods: {
    translator(key) {
      return translate ? translate(key) : key;
    }
  },
};
</script>
<style>
</style>
