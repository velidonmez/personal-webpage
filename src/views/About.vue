<template>
  <div class="about">
    <Navbar></Navbar>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100">
        <h2 class="name">
          Veli Dönmez
        </h2>
        <div class="subheading">
          Istanbul ·
          <a href="mailto:velidonmez@mail.com" title="mail to veli dönmez">velidonmez@mail.com</a>
        </div>
        <p class="lead mb-5">Studying computer engineering at Uskudar University, Istanbul.</p>
        <div class="social-icons">
          <a title="linkedin of veli dönmez" href="https://www.linkedin.com/in/veli-d%C3%B6nmez-77811b136/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a title="github of veli dönmez" href="https://github.com/velidonmez" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a title="twitter of veli dönmez" href="https://twitter.com/atarsavar" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a title="facebook of veli dönmez" href="https://www.facebook.com/velidonmez0" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
        <hr class="m-5">
        <div class="subheading mb-3">Interested in &amp; Trying to master</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="fab fa-html5" title="html5"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-css3-alt" title="css3"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-js-square" title="javascript"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-vuejs" title="vuejs"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-node-js" title="node.js"></i>
          </li>
          <li class="list-inline-item">
            <i class="fab fa-npm" title="npm"></i>
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
