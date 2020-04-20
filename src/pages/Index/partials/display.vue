<template lang="pug">
  section.display
    h1.title #[span #]KitaBerbagiYuk
    .description Berbagi untuk sahabat Kota Bandung.
    .fund
      .js-collected {{ collected ? collected : 'Rp...' }}
      .line
      .caption Total Donasi Terkumpul
    .mt-20
    .fund.fund-smaller
      .js-given {{ given ? given : 'Rp...' }}
      .line
      .caption Total Donasi Tersalur
    .illust(:style='`background-image: url(${imgSrc.illustDisplay})`')
</template>

<script>
const BASE_URL = 'https://kitaberbagiyuk.now.sh';
const BASE_URL_DEV = 'http://localhost:3000';

import illustDisplay from 'public/illustrations/illust-display.png';

export default {
  name: 'Display',
  data() {
    return {
      collected: null,
      given: null,
      imgSrc: {
        illustDisplay,
      },
    };
  },
  computed: {
    apiUrl() {
      switch (process.env.NODE_ENV) {
        case 'development':
          return `${BASE_URL_DEV}/api`;
        default:
          return `${BASE_URL}/api`;
      }
    },
  },
  mounted() {
    this.initWriteFund();
    this.fetchCollected();
  },
  methods: {
    initWriteFund() {
      this.collected = window.localStorage.getItem('last_collected');
      this.given = window.localStorage.getItem('last_given');
    },
    fetchCollected() {
      return fetch(`${this.apiUrl}/collected`)
        .then(resp => resp.json())
        .then(collected => {
          this.collected = collected;
          window.localStorage.setItem('last_collected', collected);
        });
    },
    fetchGiven() {
      return fetch(`${this.apiUrl}/given`)
        .then(resp => resp.json())
        .then(given => {
          this.given = given;
          window.localStorage.setItem('last_given', given);
        });
    },
  },
}
</script>

<style lang="stylus" scoped>
@import 'src/stylesheets/document'
@import 'src/stylesheets/typography'

.display
  @extend .section
  margin-top 0

  .title

    span
      color _yellow

  .description
    max-width 180px
    margin-bottom 30px

  .fund
    font-size 40px
    font-weight: 700
    display inline-block

    &.fund-smaller
      font-size 30px

      .line
        height 3px
        margin-top 0

    .line
      width 100%
      height 5px
      margin-top 3px
      margin-bottom 5px
      background-color _yellow

  .illust
    position absolute
    right -80px
    margin-top -80px
</style>
