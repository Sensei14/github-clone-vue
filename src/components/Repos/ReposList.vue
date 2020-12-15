<template>
    <ul class="repos-list">
        <repos-item
            v-for="repo in repos"
            :key="repo.id"
            :fullName="repo.full_name"
            :description="repo.description"
            :language="repo.language"
            :owner="repo.owner"
            :ownerAvatar="repo.owner.avatar_url"
            :name="repo.name"
        ></repos-item>
    </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import ReposItem from "./ReposItem.vue";

@Component({
    components: { ReposItem },
})
export default class ReposList extends Vue {
    @Prop() repos!: any[];
}
</script>

<style lang="scss" scoped></style>
