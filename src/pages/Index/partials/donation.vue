<template lang="pug">
  section.donation
    h2.mb-10 Cara Donasi
    p Salurkan donasi terbaik kamu ke:
    .mt-30
      div.icon-text.icon-text-bca
      div #[code.js-ctc.cursor-pointer(data-clipboard-text='0860491257') 0860 49 1257] a.n. Dias Servia Swara
      .caption.js-ctc-notif.mb-5(data-ctc='0860491257') Klik no. rekening untuk copy ke clipboard
      details
        summary QR Code
        img(:src='imgSrc.qrBca')
    .mt-30
      div.icon-text.icon-text-ovo
      div #[code.js-ctc.cursor-pointer(data-clipboard-text='081238553848') 0812 3855 3848] a.n. Dias Servia Swara
      .caption.js-ctc-notif(data-ctc='081238553848') Klik no. rekening untuk copy ke clipboard
    //- a.btn.btn-primary.mt-30.mb-10(href='https://forms.gle/XS1kArogZNZbVpdZA')
    a.btn.btn-primary.mt-30.mb-10(href='https://form.jotform.com/201028295899062')
      | Konfirmasi Transfer Donasi
      .icon-text.icon-text-arrow-up-right
    .caption Sobat berbagi, jangan lupa #[br] untuk konfirmasi jika sudah berbagi ya.
    .mt-30 Sobat berbagi juga bisa berdonasi berupa makanan dan barang-barang seperti masker kain, cairan disinfektan, dan hand sanitizer. #[br] Untuk info lebih lengkapnya silakan hubungi nomor di bawah ini.
</template>

<script>
import qrBca from 'public/qr-bca.jpg';

export default {
  name: 'Donation',
  data() {
    return {
      imgSrc: {
        qrBca,
      },
    };
  },
}
</script>

<style lang="stylus" scoped>
@import 'src/stylesheets/document'

.donation
  @extend .section
  background-color _blue
  color #f2f2f2
  opacity 0.9
  margin -50px -30px
  padding 50px 30px
  text-align center

  h2
    opacity 1

  img
    width 240px

  .caption
    color #f2f2f2
    opacity 0.5
    line-height 20px

.icon-text-arrow-up-right::before
  margin-left 5px
  margin-top -3px
</style>
