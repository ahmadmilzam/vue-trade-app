<template>
  <div id="app-container">
    <navbar :funds="funds"></navbar>
    <div class="o-wrapper u-padding-top u-padding-bottom">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style src="./scss/main.scss" lang="scss"></style>

<script>
  import { mapGetters } from 'vuex';
  import Navbar from './components/layouts/Navbar';

  export default {
    components: {
      Navbar,
    },
    computed: {
      ...mapGetters('portfolio', [
        'funds',
      ]),
    },
  };
</script>
