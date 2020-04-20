<template lang="pug">
  section
    LayoutDefault
      Display
      About
      Quote
      Donation
      Contact
</template>

<script>
import LayoutDefault from 'src/layouts/default';
import Display from './partials/display';
import About from './partials/about';
import Quote from './partials/quote';
import Donation from './partials/donation';
import Contact from './partials/contact';

export default {
  name: 'Index',
  components: {
    LayoutDefault,
    Display,
    About,
    Quote,
    Donation,
    Contact,
  },
}
</script>
