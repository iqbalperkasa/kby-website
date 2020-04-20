<template lang="pug">
  section.quote
    .icon.icon-quote
    .text-quote Those who are happiest are those #[br] who do the most for others.
    .caption &mdash; Booker T. Washington
</template>

<script>
export default {
  name: 'Quote',
}
</script>

<style lang="stylus" scoped>
@import 'src/stylesheets/document'

.quote
  @extend .section
  text-align center
  margin-bottom 200px

  .icon
    margin 0 auto 10px

  .text-quote
    font-size 20px
    line-height 30px
</style>