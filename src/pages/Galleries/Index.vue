<template lang="pug">
  section
    LayoutDefault
      h1.heading.mb-30.text-align-center Galeri
      div(v-if='!images.length')
        .thumbnail.shimmer
        .thumbnail.shimmer
        .thumbnail.shimmer
        .thumbnail.shimmer
        .thumbnail.shimmer
        .thumbnail.shimmer
        .thumbnail.shimmer
        .thumbnail.shimmer
        .thumbnail.shimmer
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

.shimmer
  background linear-gradient(90deg, rgba(204,204,204,1) 0%, rgba(238,238,238,1) 50%, rgba(204,204,204,1) 100%)
  animation shimmer 2s infinite linear
  background-size 1000px

@keyframes shimmer
  0%
    background-position -1000px 0
  100%
    background-position 1000px 0
</style>
