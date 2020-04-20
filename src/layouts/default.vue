<template lang="pug">
  section
    Header
    slot
    Footer
</template>

<script>
import Header from './partials/header';
import Footer from './partials/footer';

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Footer,
  },
}
</script>
