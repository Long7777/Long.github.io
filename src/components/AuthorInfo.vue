<template>
  <div>
    <h3>Author Intro</h3>
    <div class="intro">
      <q-img class="author_pic" :src="author_pic" lazy />
      <div class="intro_text">
        <h2 class="intro_title">简 介</h2>
        <el-icon><InfoFilled /></el-icon
        >一个普通的烟酒生，白天研究生，晚上研究死
      </div>
    </div>
  </div>
</template>

<script>
import author_pic from "../assets/img/author_pic.jpg";
export default {
  name: "AuthorInfo",
  setup() {
    return {
      author_pic,
    };
  },
};
</script>

<style>
.intro {
  display: flex;
  width: 100%;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
.author_pic {
  width: 10%;
}
</style>
