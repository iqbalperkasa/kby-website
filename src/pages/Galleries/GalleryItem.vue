<template lang="pug">
  section
    LayoutDefault
      h1.heading.mb-10 {{ post.title }}
      .float-left {{ post.date }}
      .float-left.ml-20 {{ getPhotosCount(id) }} foto
      .clearfix

      p.mb-30.mt-20 {{ post.description }}
      div(v-for='photo in photos')
        .photo-item
          img(:src='`${photo}`')
      .mt-30
      router-link(to='/galeri') Kembali ke galeri
</template>

<script>
import LayoutDefault from 'src/layouts/default';
import posts from './posts/*/meta.json';
import photos from './posts/*/photos/*.jpg';

export default {
  name: 'GalleryItem',
  components: {
    LayoutDefault,
  },
  data() {
    const id = this.$route.params.id;

    return {
      id,
      photos: photos[id],
      post: posts[id],
    };
  },
  mounted() {
    console.log(this.photos);
  },
  methods: {
    getPhotosCount(postId) {
      return Object.keys(photos[postId]).length;
    },
  },
}
</script>

<style lang="stylus" scoped>
.photo-item
  img
    border-radius 3px
</style>
