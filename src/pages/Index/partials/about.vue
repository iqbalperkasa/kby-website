<template lang="pug">
  section.mission
    .content
      h2.heading Tentang Kami
      p.mb-0 Di tengah pandemi COVID-19 ini, banyak masyarakat Kota Bandung yang terkena dampak dari segi ekonomi dan mereka sangat membutuhkan bantuan kamu. Bergerak dari rasa simpati dan empati, #kitaberbagiyuk ingin mengajak kamu orang baik, untuk mengumpulkan dana bantuan yang akan didistribusikan kepada mereka yang terdampak pandemi ini. Bantuan sekecil apapun yang kalian berikan akan sangat berarti untuk mereka yang membutuhkan.
    .clearfix
    .illust(:style='`background-image: url(${imgSrc.illustMission})`')
</template>

<script>
import illustMission from 'public/illustrations/illust-mission.png';

export default {
  name: 'About',
  data() {
    return {
      imgSrc: {
        illustMission,
      },
    };
  },
}
</script>

<style lang="stylus" scoped>
@import 'src/stylesheets/document'

.mission
  @extend .section
  margin-bottom 360px

  .content
    width 80%
    float right

  .illust
    position absolute
    left -80px
</style>
