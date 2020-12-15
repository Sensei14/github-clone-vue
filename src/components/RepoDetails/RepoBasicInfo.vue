<template>
    <div class="repo__info">
        <div>
            <img :src="avatarUrl" alt="" />
            <span>{{ fullName }}</span>
        </div>
        <p class="repo-desc">{{ description }}</p>
        <span>Language: {{ language }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class RepoBasicInfo extends Vue {
    @Prop(String) avatarUrl!: string;
    @Prop(String) fullName!: string;
    @Prop(String) description!: string;
    @Prop(String) language!: string;
}
</script>
