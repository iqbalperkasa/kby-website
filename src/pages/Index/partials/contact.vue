<template lang="pug">
section.contact
  h2.mb-20 Kontak Kami
  .illust(:style='`background-image: url(${imgSrc.illustContact})`')
  .contact-item
    .contact-item-name Azaria
    .contact-item-phone 0811 222 8077
    .clearfix
  .contact-item
    .contact-item-name Marcha
    .contact-item-phone 0812 9759 8765
    .clearfix
  .contact-item
    .contact-item-name Email
    .contact-item-phone donasi@kitaberbagiyuk.com
    .clearfix
</template>

<script>
import illustContact from 'public/illustrations/illust-contact.png';

export default {
  name: 'Contact',
  data() {
    return {
      imgSrc: {
        illustContact,
      },
    };
  },
}
</script>

<style lang="stylus" scoped>
@import 'src/stylesheets/document'

.contact
  @extend .section
  margin-top 180px

  .contact-item
    margin 10px 0

    .contact-item-name
      font-weight bold
      float left

    .contact-item-phone
      float left
      margin-left 10px

  .illust
    position absolute
    right -80px
    margin-top -60px
</style>
