<template lang="pug">
  section
    .before-footer
    footer.footer
      div KitaBerbagiYuk
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="stylus" scoped>
@import 'src/stylesheets/document'

.before-footer
  height 60px

footer.footer
  @extend .section
  position absolute
  bottom 0
  margin-bottom 30px
  opacity 0.3
</style>
