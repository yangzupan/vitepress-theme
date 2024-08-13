<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import { useData } from "vitepress";
const nowYears = new Date().getFullYear();
const { theme } = useData();
const data = reactive({
  author:
    theme.value.footerConfig.author ?? theme.value.articleMetadataConfig.author,
  authorLink:
    theme.value.footerConfig.authorLink ?? decodeURI(window.location.href),
  showCopyright: theme.value.footerConfig.showCopyright ?? true,
  showRecord: theme.value.footerConfig.showRecord ?? true,
});
const { author, authorLink, showCopyright, showRecord } = toRefs(data);
</script>
<template>
  <footer class="footer flex-none">
    <div class="footer-container">
      <div class="content">
        <div v-if="showCopyright" class="copyright">
          Copyright ©
          <span v-if="theme.footerConfig.StartYears < nowYears"
            >{{ theme.footerConfig.StartYears }} - </span
          >{{ nowYears }}
          <a :href="authorLink" class="font-semibold">{{ author }} </a>
          All Rights Reserved.
        </div>
        <div
          v-if="showRecord"
          class="record "
        >
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            ><img
              src="https://cdn.yangzupan.com/images/public/icp.svg"
              alt="ICP备案"
            />{{ theme.footerConfig.icpRecordCode }} </a
          ><a
            :href="
              'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' +
              theme.footerConfig.publicSecurityRecordCode
                .replace('号', '')
                .substring(
                  theme.footerConfig.publicSecurityRecordCode.indexOf('备') + 1
                )
            "
            target="_blank"
            ><img
              src="https://cdn.yangzupan.com/images/public/police.svg"
              alt="公安备案"
            />{{ theme.footerConfig.publicSecurityRecordCode }}</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--vp-c-gutter);
  background-color: var(--vp-c-bg);
  transition: background-color 0.5s;
}
.footer a:hover {
  color: var(--vp-c-brand-1);
  text-decoration: solid 1px;
}
.footer-container {
  max-width: 1280px;
  min-height: 5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}
.footer-container .content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
}
.footer-container .content .copyright {
  text-align: center;
}
.footer-container .content .record {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem
}
.footer-container .content .record a{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem
}
.footer-container .content .record a img{
  width: 1rem;
  height: 1rem
}

@media (min-width: 768px) {
  .footer-container .content {
    flex-direction: column;
  }
  .footer-container .content .record {
    flex-direction: row;
  }
}
@media (min-width: 1280px) {
  .footer-container .content {
    flex-direction: row;
    font-size: 1rem /* 16px */;
    line-height: 1.5rem /* 24px */;
  }

}
</style>
