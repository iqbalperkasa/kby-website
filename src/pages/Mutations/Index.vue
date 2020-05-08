<template lang="pug">
  section
    LayoutDefault
      h1.title Mutasi
      ul(v-for='(report, week, i) in reports')
        li
          span(v-if='i === 2')
            router-link(:to='`/mutasi/${week}`') Mutasi Minggu ke-3 dan Ke-4
          span(v-else)
            router-link(:to='`/mutasi/${week}`') Mutasi Minggu ke-{{ week }}
</template>

<script>
import LayoutDefault from 'src/layouts/default';
import reports from './reports/*/report.pug';

export default {
  name: 'Mutations',
  components: {
    LayoutDefault,
  },
  data() {
    return {
      reports,
    };
  },
}
</script>

<style lang="stylus" scoped>
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
