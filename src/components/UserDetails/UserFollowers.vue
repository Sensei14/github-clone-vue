<template>
    <div class="user__followers">
        <h2>Followers:</h2>

        <ul v-if="followers.length > 0" class="followers-list">
            <li
                v-for="user in followers"
                :key="user.id"
                class="followers-list__user"
            >
                <img :src="user.avatar_url" alt="" />
                <span>{{ user.login }}</span>
            </li>
        </ul>
        <p v-else>
            Nobody is following this user.
        </p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class UserFollowers extends Vue {
    @Prop(String) followersUrl!: string;

    followers: any[] = [];

    created() {
        const fetchFollowers = async () => {
            const response = await fetch(`${this.followersUrl}?per_page=5`);
            const responseData = await response.json();
            this.followers = responseData;
        };

        fetchFollowers();
    }
}
</script>
