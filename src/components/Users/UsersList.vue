<template>
    <ul class="users-list">
        <user-item
            v-for="user in users"
            :key="user.id"
            :login="user.login"
            :avatarUrl="user.avatar_url"
        ></user-item>
    </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import UserItem from "./UserItem.vue";

@Component({
    components: { UserItem },
})
export default class UsersList extends Vue {
    @Prop() users!: any[];
}
</script>

<style lang="scss" scoped></style>
