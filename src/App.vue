<template>
  <div id="app">
    <InvoiceManager />
  </div>
</template>

<script>
import InvoiceManager from './components/InvoiceManager.vue';

export default {
  name: 'App',
  components: {
    InvoiceManager,
  },
};
</script>

<style>
/* You can add any global styles here */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}
</style>
