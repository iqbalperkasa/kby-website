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
export default {
  name: 'Team',
  data() {
    return {
      avatars: {
        agung: 'https://user-images.githubusercontent.com/1132660/80646643-53de6500-8a97-11ea-8a75-06a62866a272.jpg',
        asha: 'https://user-images.githubusercontent.com/1132660/80646656-5771ec00-8a97-11ea-9037-6bba88c9171c.jpg',
        dias: 'https://user-images.githubusercontent.com/1132660/80646659-580a8280-8a97-11ea-849f-467e5e0515f1.jpg',
        gio: 'https://user-images.githubusercontent.com/1132660/80646661-58a31900-8a97-11ea-8066-a597a2900bd7.jpg',
        hasanah: 'https://user-images.githubusercontent.com/1132660/80646663-59d44600-8a97-11ea-8686-ed5aa060e41e.jpg',
        iqbal: 'https://user-images.githubusercontent.com/1132660/80646664-59d44600-8a97-11ea-8315-021d332f8644.jpg',
        lulu: 'https://user-images.githubusercontent.com/1132660/80646666-5a6cdc80-8a97-11ea-9901-ea2641da1095.jpg',
        marcha: 'https://user-images.githubusercontent.com/1132660/80646668-5b057300-8a97-11ea-8644-b19c348371da.jpg',
        rara: 'https://user-images.githubusercontent.com/1132660/80646672-5b9e0980-8a97-11ea-803a-c7cb987284f2.jpg',
      },
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
