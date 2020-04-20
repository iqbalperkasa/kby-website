<template lang="pug">
  section.team
    .team-wrapper
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.marcha})`')
        div Marcha Nabila
        .caption
          a(href='https://www.instagram.com/mrchnabila') @mrchnabila
        .opacity-70 Humas
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.asha})`')
        div Azaria Bella
        .caption
          a(href='https://www.instagram.com/azariabella') @azariabella
        .opacity-70 Humas
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.dias})`')
        div Dias S. Swara
        .caption
          a(href='https://www.instagram.com/diasserviaswara') @diasserviaswara
        .opacity-70 Operasional
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.hasanah})`')
        div Hasanah Arifah
        .caption
          a(href='https://www.instagram.com/hasanaharifahh') @hasanaharifahh
        .opacity-70 Operasional
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.agung})`')
        div Santri Agung
        .caption
          a(href='https://www.instagram.com/djaaali') @djaaali
        .opacity-70 Operasional
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.lulu})`')
        div Lulu Syadza S.
        .caption
          a(href='https://www.instagram.com/lulusyadza') @lulusyadza
        .opacity-70 Operasional
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.gio})`')
        div Giovanni Victor
        .caption
          a(href='https://www.instagram.com/_gv.d') @_gv.d
        .opacity-70 Media Sosial
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.rara})`')
        div Tisara Kaulika
        .caption
          a(href='https://www.instagram.com/tisarakaulika') @tisarakaulika
        .opacity-70 Media Sosial
      .team-item
        .team-item-avatar(:style='`background-image: url(${avatars.iqbal})`')
        div Iqbal Perkasa
        .caption
          a(href='https://www.instagram.com/iqbalperkasa') @iqbalperkasa
        .opacity-70 IT
</template>

<script>
import avatars from '../../../../public/avatar/*.jpg';

export default {
  name: 'Team',
  data() {
    return {
      avatars,
    };
  },
}
</script>

<style lang="stylus" scoped>
@import 'src/stylesheets/document'

.team
  margin-top 40px
  text-align center

  .team-wrapper
    display flex
    flex-flow row wrap

    .team-item
      width 33%
      padding 20px

      @media (max-width: 500px)
        width 50%

      @media (max-width: 340px)
        width 100%

      &-avatar
        width 100%
        margin-bottom 10px
        border-radius 999px
        background-size cover
        background-repeat no-repeat
        background-position center

        &:after
          content ''
          display block
          padding-bottom 100%

</style>
