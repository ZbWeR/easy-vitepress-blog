import DefaultTheme from "vitepress/theme";
import { Theme, useRoute } from "vitepress";
import "./tailwind.css";
import "./var.css";
import "./article.css";
import "./print.css";

import LinkCard from "../components/LinkCard.vue";
import HText from "../components/HText.vue";
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("LinkCard", LinkCard);
    ctx.app.component("HText", HText);
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)", margin: 24 });
    };
    onMounted(() => initZoom());
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
} satisfies Theme;