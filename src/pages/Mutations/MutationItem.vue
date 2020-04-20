<template lang="pug">
  section
    LayoutDefault
      router-link(to='/mutasi') Kembali ke list mutasi
      .mb-30
      div(v-html='report')
      .mt-30
      router-link(to='/mutasi') Kembali ke list mutasi
</template>

<script>
import LayoutDefault from 'src/layouts/default';
import reports from './reports/*/report.pug';

export default {
  name: 'MutationItem',
  components: {
    LayoutDefault,
  },
  data() {
    const id = this.$route.params.id;

    return {
      id,
      report: reports[id],
    };
  },
  mounted() {
    console.log(this.report);
  },
}
</script>

<style lang="stylus">
.table-wrapper
  overflow-x auto
.table
  min-width 100%
  border-collapse collapse

  tr
    th,
    td
      padding 7px

  &.table-zebra
    tr:nth-child(even)
      th,
      td
        background-color #f0f0f0

</style>
