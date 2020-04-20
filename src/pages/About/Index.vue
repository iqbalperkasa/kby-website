<template lang="pug">
  section
    LayoutDefault
      h1.title.text-align-center Tentang
      p Di tengah pandemi COVID-19 ini, banyak masyarakat Kota Bandung yang terkena dampak dari segi ekonomi dan mereka sangat membutuhkan bantuan kamu. Bergerak dari rasa simpati dan empati, #kitaberbagiyuk ingin mengajak kamu orang baik, untuk mengumpulkan dana bantuan yang akan didistribusikan kepada mereka yang terdampak pandemi ini. Bantuan sekecil apapun yang kalian berikan akan sangat berarti untuk mereka yang membutuhkan.
      h2.heading.text-align-center Tim Kami
      Team
</template>

<script>
import LayoutDefault from 'src/layouts/default';
import Team from './partials/team';

export default {
  name: 'About',
  components: {
    LayoutDefault,
    Team,
  },
}
</script>
