<template>
<div class="experience">
    <Navbar></Navbar>
    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div class="w-100">
        <h2 class="mb-5">{{ $t('experience.title') }}</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Junior Web Developer(Part-Time)</h3>
            <div class="subheading mb-3">Uskudar University, ISTANBUL</div>
            <p>Website Control – Content Adding</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">Oct 2018 - Present</span>
          </div>
        </div>
        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Onboarding Developer(Part-Time)</h3>
            <div class="subheading mb-3">Segmentify, ISTANBUL</div>
            <p>Website integrations for new customers.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">Oct 2017 – Feb 2018</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Summer Intern</h3>
            <div class="subheading mb-3">Segmentify, ISTANBUL</div>
            <p>Website integrations for new customers using Javascript, Jquery, CSS/HTML.</p>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">Jul 2017 – Sep 2017</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'experience',
  components: {
    Navbar
  }
}
</script>
