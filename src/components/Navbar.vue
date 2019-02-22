<template>
  <div class="navcontainer">
    <div class="mobile-nav d-lg-none">
      <div v-if="this.$route.path === '/experience'">
        <router-link to="/" class="btn fixed-top">{{ $t('nav.mobileAboutBtn') }}</router-link>
      </div>
      <div v-else>
        <router-link to="/experience" class="btn fixed-top">{{ $t('nav.mobileExpBtn') }}</router-link>
      </div>
    </div>
    <nav
      class="d-none d-lg-flex navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <div>
        <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
            <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
        </button>
      </div>
      <a class="navbar-brand js-scroll-trigger">
        <span class="d-block d-lg-none">{{ $t('about.name') }}</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="../assets/img/profile.jpg"
            alt="veli dönmez"
          >
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">{{ $t('nav.about') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/experience" class="nav-link">{{ $t('nav.experience') }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      btnName: this.$route.path,
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'tr', language: 'tr', title: 'Türkçe' }
      ]
    }
  },
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mobile-nav .btn{
  background-color: #03396c;
  color: white;
}
#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

#sideNav .navbar-toggler:focus {
  outline-color: #03396c;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}
</style>
