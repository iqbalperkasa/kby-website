<template lang="pug">
  section
    LayoutDefault.text-align-center
      img.mb-50.illust-success(:src='illustSuccess')
      h2.mb-20.heading Terima Kasih
      p.mb-10 Konfirmasi donasi telah kami terima dan akan kami proses.
</template>

<script>
import LayoutDefault from 'src/layouts/default';
import illustSuccess from 'public/illustrations/illust-success.png';

export default {
  name: 'ConfirmationSuccess',
  components: {
    LayoutDefault,
  },
  data() {
    return {
      illustSuccess,
    };
  },
}
</script>

<style lang="stylus" scoped>
.illust-success
  height 200px
  margin 0 auto 60px
  display block
</style>
