<template>
  <div class="theSpan" @click="navbarClick">
    <div class="flex container">
      <div class="lightName">
        {{ navbarLightName }}
      </div>
      <div class="mainName">
        {{ navbarMainName }}
      </div>
    </div>
  </div>
  <div class="bindLine">------------</div>
</template>
<script setup>
import { defineProps } from "vue";
const { navbarLightName, navbarMainName } = defineProps({
  navbarLightName: {
    type: String,
    default: "null",
  },
  navbarMainName: {
    type: String,
    default: "null",
  },
});
let $emit = defineEmits(["updateItem"]);
const navbarClick = () => {
  $emit("updateItem", navbarLightName, navbarMainName);
};
console.log("navbarLightName", navbarLightName);
</script>
<style scoped>
.theSpan {
  background-color: aqua;
  display: inline-block;
}
.container {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem 1rem 1rem;
}
.lightName {
  font-size: 12px;
  color: #4c4c4c;
  font-weight: lighter;
}
.mainName {
  font: bold #333333;
  font-size: 16px;
  font-weight: 900;
}
.bindLine {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
