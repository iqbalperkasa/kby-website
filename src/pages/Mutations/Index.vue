<template lang="pug">
  section
    LayoutDefault
      h3.heading.mb-30 Donasi Masuk Harian Berupa Uang
      table.table.table-zebra.text-align-center
        tr
          th Tanggal
          th Jumlah
        tr
          td 10/04/2020
          td Rp1.400.883,78
        tr
          td 11/04/2020
          td Rp631.924,00
        tr
          td 12/04/2020
          td Rp350.000,00
        tr
          td 13/04/2020
          td Rp500.000,00
        tr
          td 14/04/2020
          td Rp1.200.001,00
        tr
          td 15/04/2020
          td Rp450.000,00
        tr
          td 16/04/2020
          td Rp150.000,00
        tr
          td 17/04/2020
          td Rp100.000,00
        tr
          td 18/04/2020
          td Rp100.000,00
        tr
          td 19/04/2020
          td Rp60.000,00
        tr.font-weight-bold
          td Total
          td Rp4.942.808,78

      h3.heading.mb-30 Donasi Masuk Berupa Barang
      table.table.table-zebra.text-align-center
        tr
          th Tanggal
          th Barang
          th Jumlah
        tr
          td 11/04/2020
          td Masker Kain
          td 4 Lusin
        tr
          td 16/04/2020
          td Masker Kain
          td 1 Lusin
        tr
          td 16/04/2020
          td Masker Kain
          td 1 Lusin

      h3.heading.mb-30 Belanja
      .table-wrapper.mb-30
        table.table.table-zebra.mb-0(style='width: 180%')
          tr
            th Minggu
            th Item/Paket
            th Harga
            th Jumlah
            th Total
            th Catatan
          tr
            td(rowspan='3').text-align-center 1
            td Sembako
            td.text-align-center Rp47.500,00
            td.text-align-center 75
            td.text-align-center Rp3.562.500,00
            td 2 Kg Beras; 1L Minyak; 4 Pcs Mie
          tr
            td Kornet
            td.text-align-center Rp14.670,00
            td.text-align-center 75
            td.text-align-center Rp1.100.250,00
          tr.font-weight-bold
            td.text-align-center(colspan='3') Total
            td.text-align-center Rp4.662.750,00
            td
</template>

<script>
import LayoutDefault from 'src/layouts/default';

export default {
  name: 'Mutations',
  components: {
    LayoutDefault,
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
