<template lang="pug">
  section.display
    h1.title #[span #]KitaBerbagiYuk
    .description Berbagi untuk sahabat Kota Bandung.
    .collected
      .js-collected {{ collected ? collected : 'Rp...' }}
      .line
      .caption Total Donasi Terkumpul
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
    this.initWriteCollected();
    this.fetchCollected();
  },
  methods: {
    initWriteCollected() {
      this.collected = window.localStorage.getItem('last_collected');
    },
    fetchCollected() {
      return fetch(`${this.apiUrl}/collected`)
        .then(resp => resp.json())
        .then(collected => {
          this.collected = collected;
          window.localStorage.setItem('last_collected', collected);
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

  .collected
    font-size 40px
    font-weight: 700
    display inline-block

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
