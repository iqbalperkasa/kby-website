<template lang="pug">
  section
    LayoutDefault
      h1.heading.mb-30 Galeri
      div(v-for='(post, slug, i) in posts')
        .thumbnail(:style='`background-image: url(${thumbnails[slug]})`')
          .thumbnail-gradient
            router-link(:to='`/galeri/${slug}`')
          .info
            h3.heading.mb-5 {{ post.title }}
            .float-left {{ post.date }}
            .float-left.ml-20 {{ getPhotosCount(slug) }} foto
            .clearfix
</template>

<script>
import LayoutDefault from 'src/layouts/default';
import posts from './posts/*/meta.json';
import photos from './posts/*/photos/*.jpg';
import thumbnails from './posts/*/thumbnail.jpg';

export default {
  name: 'Galleries',
  components: {
    LayoutDefault,
  },
  data() {
    return {
      posts,
      thumbnails,
    };
  },
  methods: {
    getPhotosCount(postId) {
      return Object.keys(photos[postId]).length;
    },
  },
}
</script>

<style lang="stylus" scoped>
.thumbnail
  display block
  height 300px
  border-radius 3px
  margin-bottom 30px
  background-size cover
  background-position center
  position relative

  .thumbnail-gradient
    background linear-gradient(0deg, rgba(45,71,103,1) 0%, rgba(255,255,255,0) 50%)
    border-radius 0 0 3px 3px
    height 100%

  .info
    position absolute
    bottom 10px
    left 20px
    color #f0f0f0

  a
    display block
    height 100%
</style>
