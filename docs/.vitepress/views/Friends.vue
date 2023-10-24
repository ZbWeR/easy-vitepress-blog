<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>🎨 Friends 🙌</template>
      <template #lead>Awesome Friends from Diverse Fields of Expertise</template>
    </VPTeamPageTitle>
    <div class="px-6 md:px-12 lg:px-16">
      <div class="FriendsContent">
        <FriendsCard
          v-for="(item, index) in friendsInfo"
          :key="index"
          v-bind="item"
        ></FriendsCard>
      </div>
    </div>
  </VPTeamPage>
</template>

<script setup>
import { VPTeamPage, VPTeamPageTitle } from "vitepress/theme";
import { friendsInfo } from "../userConfig/friendsInfo";
import FriendsCard from "./FriendsCard.vue";
</script>

<style scoped>
.FriendsContent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
  max-width: 1152px;
  gap: 24px;
  margin: 0 auto;
}
</style>
