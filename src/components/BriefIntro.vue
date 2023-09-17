<template>
  <div class="flex">
    <h3>{{ briefTitle }}</h3>
    <text rows="5">{{ briefIntroContent }}</text>
  </div>
</template>

<script>
export default {};
</script>

<script setup>
let props = defineProps(["briefTitle", "briefIntroContent"]);
</script>

<style></style>
