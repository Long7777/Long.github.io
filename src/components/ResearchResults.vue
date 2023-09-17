<template>
  <div>
    <h3 class="cm_title" style="">Research Results</h3>
    <br />
    <div class="res_result">
      <q-img class="pic" :src="pic_url" lazy></q-img>
      <div>
        <text class="res_title">{{ title }}</text>
        <br />
        <text class="res_intro">{{ intro }}</text>
        <br />
        <a :href="url">Link Here</a>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps(["pic_url", "title", "intro", "url"]);
</script>

<script>
export default {
  mounted() {
    console.log("RR已经挂载");
  },
  setup() {
    return { props };
  },
};
</script>

<style>
.pic {
  width: 20%;
}
.res_result {
  display: flex;
  margin-left: 10%;
}
.res_title {
  font-size: x-large;
  font-weight: 700;
}
.res_intro {
  font-size: large;
}
</style>
