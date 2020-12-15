<template>
    <router-link :to="{ path: `/user/${login}` }">
        <li class="users-list__user">
            <img :src="avatarUrl" alt="" />
            <span>{{ login }}</span>
        </li>
    </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class UserItem extends Vue {
    @Prop(String) login!: string;
    @Prop(String) avatarUrl!: string;
}
</script>

<style lang="scss" scoped></style>
