<script setup lang="ts">
import { reactive, toRefs, onMounted, ref, computed } from "vue";
import { useData } from "vitepress";
import axios from "axios";
import cheerio from "cheerio";
// 定义 LinkInfo 类型
interface LinkInfo {
  title: string;
  description: string;
  icon?: string;
}
const props = defineProps<{
  url: string;
  title?: string;
  icon?: string | { svg: string };
  desc?: string;
  type?: string;
}>();
const { theme } = useData();


// 获取远程url的图标标题和描述
async function fetchLinkInfo(url) {
  // 验证 URL 是否有效
  if (url.startsWith("/")) {
    console.error("本地:", url);
  } else if (!url || !url.startsWith("http") || !url.startsWith("https")) {
    console.error("无效链接:", url);
    return null;
  }

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // 获取页面标题
    const title = $("title").text().trim();

    // 获取 meta 标签中的描述
    const description = $('meta[name="description"]').attr("content") || "";

    // 获取 favicon 图标
    let icon = $('link[rel="icon"], link[rel="shortcut icon"]').attr("href");
    if (!icon) {
      icon = $('link[rel^="icon"]').attr("href"); // 尝试其他 rel 属性
    }
    if (icon && !icon.startsWith("http")) {
      // 如果图标路径不是绝对路径，则将其转换为绝对路径
      const parsedUrl = new URL(url);
      icon = new URL(icon, parsedUrl).href;
    }

    return { title, description, icon };
  } catch (error) {
    console.error(`Error fetching page info for ${url}:`, error.message);
    throw error;
  }
}

const linkData = ref<LinkInfo | null>(null);

onMounted(async () => {
  if (props.url) {
    try {
      const data = await fetchLinkInfo(props.url);
      linkData.value = data;
    } catch (error) {
      console.error("获取链接信息失败:", error);
    }
  } else {
    console.warn("URL没有定义。");

  }
});


const title = computed(() => props.title || (linkData.value?.title  ?? ""));
const description = computed(
  () => props.desc || (linkData.value?.description ||( props.url ?? ""))
);
const icon = computed(() => props.icon || (linkData.value?.icon ?? ""));

const data = reactive({
  isEnable: theme.value.linkCardContainerConfig.isEnable ?? true,
  title: props.title ?? theme.value.linkCardContainerConfig.defaultTitle ?? "",
  icon: props.icon ?? theme.value.linkCardContainerConfig.defaultIcon ?? "",
  description: props.desc ?? props.url ?? "",
});

const { isEnable, } = toRefs(data);
</script>

<template>
  <a :href="url" v-if="isEnable" class="vp-link-card" :class="props.type">
    <div class="card-body">
      <div class="card-content">
        <div v-if="icon" class="icon">
          <img :src="icon" alt="" srcset="" />
        </div>
        <div class="content">
          <slot name="title">
            <span v-if="title" v-html="title" class="title" />
            <p v-if="description" v-html="description" class="description" />
          </slot>
        </div>
      <span v-if="url" class="vpi-arrow-right" />
      </div>
    </div>
    <!-- <div class="card-footer">
      <span class="tip">引用站外地址，请注意甄别链接安全性</span>
    </div> -->
  </a>
</template>

<style scoped>
.vp-link-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 1rem;
  margin: 16px 0;
  background-color: transparent;
  border: solid 1px var(--vp-c-divider);
  border-radius: 8px;
  transition: border-color var(--t-color), box-shadow var(--t-color),
    background-color var(--t-color);
}
.vp-link-card.tip {
  background-color: var(--vp-c-tip-soft);
}
.vp-link-card.info {
  background-color: var(--vp-c-default-soft);
}
.vp-link-card.note {
  background-color: var(--vp-c-default-soft);
}
.vp-link-card.important {
  background-color: var(--vp-c-important-soft);
}
.vp-link-card.warning {
  background-color: var(--vp-c-warning-soft);
}
.vp-link-card.danger {
  background-color: var(--vp-c-danger-soft);
}
.vp-link-card.caution {
  background-color: var(--vp-c-danger-soft);
}

.vp-card-grid .vp-link-card{
  margin: 0;
}
.vp-link-card:hover {
  text-decoration: none;
  background-color: var(--vp-c-default-soft);
  border-color: var(--vp-c-default-1);
}

.card-body {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--vp-c-text-1);
  margin: 6px 0;
}
.card-body .card-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.card-body .card-content .icon {
  flex: none;
  width: 3rem;
}
.card-body .card-content .content {
  flex: auto;
  overflow: hidden;
/* width: calc(100% - 4rem); */
}
.card-body.card-content .content .title {
  font-size: 1rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-body .card-content .content .description {
  font-size: 0.875rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.card-body .card-content  .vpi-arrow-right{
  flex: none;

}

.card-footer {
  padding-top: 0.5rem;
  border-top: 2px dashed var(--vp-c-divider);
}
.card-footer .tip {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
}

.vpi-arrow-right {
  margin-top: 2px;
  font-size: 20px;
}
</style>
