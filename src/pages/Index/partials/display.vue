<template lang="pug">
  section.display
    h1.title #[span #]KitaBerbagiYuk
    .description Berbagi untuk sahabat Kota Bandung.
    .fund
      div Rp32,095,952
      .line
      .caption Total Donasi Terkumpul
    //- .mt-20
    //- .fund.fund-smaller
    //-   div Rp32,029,545
    //-   .line
    //-   .caption Total Donasi Tersalur
    .illust(:style='`background-image: url(${imgSrc.illustDisplay})`')
</template>

<script>
import illustDisplay from 'public/illustrations/illust-display.png';

export default {
  name: 'Display',
  data() {
    return {
      imgSrc: {
        illustDisplay,
      },
    };
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
