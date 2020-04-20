<template lang="pug">
  header.header
    .container
      .logo(:style='`background-image: url(${imgSrc.logo})`')
        router-link(to='/')
      .navigation
        router-link.navigation-item(to='/mutasi') Mutasi
        router-link.navigation-item(to='/galeri') Galeri
        router-link.navigation-item(to='/tentang') Tim
</template>

<script>
import logo from 'public/logo.png';

export default {
  name: 'Header',
  data() {
    return {
      imgSrc: {
        logo,
    },
    };
  },
}
</script>

<style lang="stylus" scoped>
@import 'src/stylesheets/document'

header.header
  @extend .section
  margin-top 0

  .container
    display flex
    align-items center
    justify-content space-between
    margin-bottom 60px

    .logo
      width 80px
      height 80px
      background-size contain
      background-repeat no-repeat

      a
        display block
        padding-bottom 100%

    .navigation
      display flex

      .navigation-item
        margin-left 20px
</style>
