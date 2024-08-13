<script setup lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import { useData } from "vitepress";

const props = defineProps<{
  date?: string;
  title?: string;
}>();

const { theme } = useData();

const data = reactive({
  isEnable: theme.value.cardContainerConfig.isEnable ?? true,
  title: props.title ?? "",
  date: props.date ?? "",
});

const { isEnable, title, date } = toRefs(data);
</script>

<template>
  <div class="timeline-dot">
    <slot name="header">
      <div class="timeline-dot-header">
        <div v-if="date" class="timeline-dot-date" v-html="date" />
        <div v-if="title" class="timeline-dot-title" v-html="title" />
      </div>
    </slot>
    <div class="timeline-dot-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.timeline-dot {
  position: relative;
  padding: 0 0 18px 24px;
  color: var(--vp-c-text-1);
  box-sizing: border-box;
}
.timeline-dot::before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: solid 2px var(--vp-c-brand);
  transform: translate(0, 18%);
}
.timeline-dot::after {
  position: absolute;
  left: 7px;
  top: 19px;
  content: "";
  width: 2px;
  height: calc(100% - 18px);
  background-color: var(--vp-c-divider)
}

.timeline-dot-title {
  color: var(--vp-c-text-2);
  font-size: 1rem;
  font-weight: bold;
  /* padding-top: 0; */
  padding-top: 0.75rem;

}
.timeline-dot-date{
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
.timeline-dot-body {
  color: var(--vp-c-text-2);
}
</style>
