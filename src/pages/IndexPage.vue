<template>
  <q-page class="flex justify-between no-wrap page">
    <!-- 左侧图片 -->
    <img alt="index cover" src="../assets/coverLeft2.png" class="coverImg" />
    <div class="container">
      <!-- <div class="flex container justify-between no-wrap"> -->
      <div class="flex navBar justify-between">
        <NavbarItem
          v-for="navbarItem in navbarItemList"
          :key="navbarItem"
          :navbarLightName="navbarItem.lightName"
          :navbarMainName="navbarItem.mainName"
          @updateItem="update"
        ></NavbarItem>
        <div class="whiteContent"></div>
      </div>
      <div>
        <h2 class="title">{{ title }}</h2>
        <BriefIntro
          :briefTitle="briefTitle"
          :briefIntroContent="briefIntroContent"
        />
      </div>
    </div>
    <div class="rightNarrow shadow-up-7" @click="arrowForward">
      <q-icon size="xl" name="arrow_forward_ios" />
    </div>
    <!-- </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import NavbarItem from "src/components/NavbarItem.vue";
import BriefIntro from "src/components/BriefIntro.vue";
export default defineComponent({
  name: "IndexPage",
  components: { NavbarItem, BriefIntro },
});
</script>
<script setup>
const router = useRouter();
const navbarItemList = [
  { lightName: "About", mainName: "ABOUT" },
  { lightName: "Project", mainName: "PROJECT" },
  { lightName: "Shark & Shake", mainName: "SHARK&SHAKE" },
  { lightName: "Other", mainName: "OTHER" },
];
let title = ref("About");
let briefTitle = ref("BBBBbriefTitle");
let briefIntroContent = ref("BBBBBbriefIntroContent");
const update = (param1, param2) => {
  console.log(param1, param2);
  title.value = param1;
};
function arrowForward() {
  if (title.value == "About") {
    router.push({ path: "/about" });
  } else if (title.value == "Shark & Shake") {
    router.push({ path: "/xsIsland" });
  }
  console.log("成功发送跳转请求！");
}
</script>
<style scoped>
.coverImg {
  /* 页面可视高度减去toolbar的高度 */
  height: calc(100vh - 50px);
  min-height: 500px;
  min-height: 400px;
}
.rightNarrow {
  width: 3rem;
  min-width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navBar {
  flex-direction: row;
  /* background: red; */
}
.container {
  width: calc(100vw - 100vh * (348.78 / 519.33) - 1rem);
  min-width: 550px;
  background: yellow;
}
.whiteContent {
  width: 15px;
  background: white;
}
.title {
  text-align: center;
}
</style>
