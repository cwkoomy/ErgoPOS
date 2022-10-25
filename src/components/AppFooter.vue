<template>
  <CFooter>
    <div>
      <a href="https://ergopos.io" target="_blank">EPOS</a>
      <span class="ms-1">&copy; {{ new Date().getFullYear() }} ErgoPOS.</span>
    </div>
    <div class="ms-auto">
      <span class="me-1" target="_blank">Powered by</span>
      <a href="https://ergopos.io">ergopos.io</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
