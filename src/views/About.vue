<template>
  <div class="about">
    <Navbar></Navbar>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100">
        <h2 class="name">
          {{ $t('about.name') }}
        </h2>
        <div class="subheading">
<!--          {{ $t('about.city') }} ·-->
          <a :href="'mailto:'+$t('about.mail')" title="mail to veli dönmez">{{ $t('about.mail') }}</a>
        </div>
        <p class="lead mb-5">{{ $t('about.aboutMe') }}</p>
        <div class="social-icons">
          <a title="linkedin of veli dönmez" :href="$t('about.linkedin')" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a title="github of veli dönmez" :href="$t('about.github')" target="_blank">
            <i class="fab fa-github"></i>
          </a>
<!--          <a title="twitter of veli dönmez" :href="$t('about.twitter')" target="_blank">-->
<!--            <i class="fab fa-twitter"></i>-->
<!--          </a>-->
<!--          <a title="facebook of veli dönmez" :href="$t('about.facebook')" target="_blank">-->
<!--            <i class="fab fa-facebook-f"></i>-->
<!--          </a>-->
        </div>
        <hr class="m-5">
        <div class="subheading mb-3">{{ $t('about.interested') }}</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-vuejs" title="vuejs"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node-js" title="node.js"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-html5" title="html5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt" title="css3"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square" title="javascript"></i>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'about',
  components: {
    Navbar
  }
}
</script>
<style scoped>
#about .name{
  text-transform: none!important
}
</style>
