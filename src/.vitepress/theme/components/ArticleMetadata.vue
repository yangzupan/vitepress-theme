<script setup lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import { useData } from "vitepress";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
import { goToLink } from "../utils.ts";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

// 定义文章属性
const props = defineProps({
  article: Object,
  showCategory: {
    type: Boolean,
    default: true,
  },
});

// 初始化文章元数据信息
const { theme, page } = useData();
const data = reactive({
  isEnable: theme.value.articleMetadataConfig.isEnable ?? true,
  isOriginal: props.article?.isOriginal ?? true,
  author: props.article?.author ?? theme.value.articleMetadataConfig.author,
  authorLink:
    props.article?.authorLink ?? theme.value.articleMetadataConfig.authorLink,
  date: new Date(props.article.date),
});
const { isEnable, isOriginal, author, authorLink, date } = toRefs(data);
</script>

<template>
  <div v-if="isEnable" class="article-meta">
    <div class="badge-container">
      <span v-if="isOriginal" class="badge original">原创</span>
      <span v-else class="badge reship">转载</span>
    </div>
    <div class="author">
      <svg
        class="w-4 h-4 md:w-5 md:h-5"
        role="img"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>原创作者</title>
        <path
          d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
        ></path>
      </svg>
      <a class="text" v-if="isOriginal" :href="authorLink" title="关于作者">{{
        author
      }}</a>
      <a
        class="text"
        v-else
        :href="authorLink"
        target="_blank"
        title="原创作者"
        >{{ author }}</a
      >
    </div>
    <div class="date">
      <svg
        class="w-4 h-4 md:w-5 md:h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <time
        class="text"
        :datetime="date.toISOString()"
        :title="dayjs().to(dayjs(date))"
        >{{
          date.toLocaleString("zh", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        }}</time
      >
    </div>
  </div>
</template>
<style scoped>
.article-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  padding-top: 0;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom-width: 2px;
  border-bottom: solid 1px var(--vp-c-divider);
}
.article-meta a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.badge-container {
  display: flex;
  gap: 0.25rem;
}
.article-meta .badge {
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  font-weight: 500;
  padding-left: 0.625rem /* 10px */;
  padding-right: 0.625rem /* 10px */;
  padding-top: 0.125rem /* 2px */;
  padding-bottom: 0.125rem /* 2px */;
  border-radius: 0.25rem /* 4px */;
}
.article-meta .original {
  background-color: var(--vp-c-tip-soft);
  color: var(--vp-c-tip-1);
}
.article-meta .reship {
  background-color: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
}
.article-meta .author,
.article-meta .date {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
}
.article-meta .author svg,
.article-meta .date svg {
  width: 1rem;
  height: 1rem;
}
@media (min-width: 768px) {
  .article-meta {
    gap: 0.5rem;
    padding-bottom: 0.75rem;
  }
  .badge-container {
    gap: 0.5rem;
  }
  .article-meta .badge {
    font-size: 0.875rem ;
    line-height: 1.25rem ;
  }
  .article-meta .author,
  .article-meta .date {
    font-size: 0.875rem;
  }
}
@media (min-width: 960px) {
  .article-meta {
    gap: 0.75rem ;
    padding-bottom: 0.875rem;
  }
  .badge-container {
    gap: 0.75rem;
  }
  .article-meta .author,
  .article-meta .date {
    font-size: 1rem;
  }
}
</style>
