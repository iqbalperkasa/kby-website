<template lang="pug">
  section
    LayoutDefault
      h1.heading.mb-30.text-align-center Galeri
      div(v-for='(img, i) in images')
        .thumbnail(
          :style='`background-image: url(${img.src})`'
          @click='galleryIndex = i'
        )
      .clearfix
      Tinybox(
        v-model='galleryIndex'
        :images='images'
        loop
      )
</template>

<script>
import { getPhotos } from 'api';
import LayoutDefault from 'src/layouts/default';
import Tinybox from 'vue-tinybox';

export default {
  name: 'Galleries',
  components: {
    LayoutDefault,
    Tinybox,
  },
  data() {
    return {
      images: [],
      galleryIndex: null,
    };
  },
  mounted() {
    this.getPhotos().then(resp => {
      this.images = resp;
    });
  },
  methods: {
    getPhotosCount(postId) {
      return Object.keys(photos[postId]).length;
    },
    getPhotos() {
      return getPhotos();
    },
  },
}
</script>

<style lang="stylus" scoped>
.thumbnail
  width 33.333333%
  border-radius 6px
  border 3px solid white
  background-position center
  background-size cover
  background-repeat no-repeat
  float left

  &:after
    content ''
    display block
    padding-bottom 100%
</style>
