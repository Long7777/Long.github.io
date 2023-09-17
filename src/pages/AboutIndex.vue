<template>
  <div>
    <div>
      <h1>Welcome to my page</h1>
    </div>
    <div class="interest-pic">
      <q-img id="vmi" :src="vmi" lazy></q-img>
    </div>
    <div>
      <ResearchResultsVue
        :title="title"
        :pic_url="pic_url"
        :intro="intro"
        :url="url"
      />
    </div>
    <div>
      <h3 class="cm_title">Recent Reading</h3>
    </div>
    <AuthorInfo />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import vmi from "../assets/img/vis_of_my_interests.png";
import AuthorInfo from "../components/AuthorInfo.vue";
import ResearchResultsVue from "../components/ResearchResults.vue";

let title = ref(
  "Deep latent representation enhancement method for social recommendation"
);

let pic_url = ref("https://godoorsun.org/assets/homepage_images/muse.jpg");

let intro = ref(
  "Social recommendation can efectively improve recommendation performance by leveraging social relationships to alleviate the sparsity of user-item interaction data. Because these connections in social recommendation can be easily represented as graph-structured data, social recommendation based on graph neural networks has received signifcant attention."
);

let url = ref("https://link.springer.com/article/10.1007/s10844-023-00802-3");

export default {
  name: "AboutIndex",
  components: {
    AuthorInfo,
    ResearchResultsVue,
  },
  mounted() {
    console.log("Index已经被挂载");
  },
  setup() {
    const router = useRouter();
    function goTest() {
      router.push({ path: "/test" });
    }
    return {
      goTest,
      vmi,
      title,
      pic_url,
      intro,
      url,
    };
  },
};
</script>

<style>
.interest-pic {
  display: flex;
}
#vmi {
  width: 60%;
  margin: 0 auto;
}
.cm_title {
  text-align: left;
}
</style>
