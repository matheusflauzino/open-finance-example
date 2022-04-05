<template>
  <div>
    <div class="text-center" id="loader" v-if="$wait.any">
      <div class="spinner-border" style role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p class="text-center">Aguarde...</p>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>