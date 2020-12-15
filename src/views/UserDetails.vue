<template>
    <main v-if="user" class="user">
        <return-button></return-button>

        <user-numbers
            :public-repos="user.public_repos"
            :followers="user.followers"
            :following="user.following"
        ></user-numbers>

        <div class="user__row">
            <user-card
                :name="user.name"
                :avatar-url="user.avatar_url"
                :login="user.login"
                :bio="user.bio"
                :company="user.company"
                :location="user.location"
                :blog="user.blog"
            ></user-card>

            <user-followers
                :followers-url="user.followers_url"
            ></user-followers>
        </div>

        <user-repos :repos-url="user.repos_url"></user-repos>
    </main>
    <main v-else-if="isLoading">
        <loading-spinner></loading-spinner>
    </main>
    <main v-else>
        User of that name does not exist.
        <return-button></return-button>
    </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import UserNumbers from "../components/UserDetails/UserNumbers.vue";
import UserCard from "../components/UserDetails/UserCard.vue";
import UserFollowers from "../components/UserDetails/UserFollowers.vue";
import UserRepos from "../components/UserDetails/UserRepos.vue";

@Component({
    components: { UserNumbers, UserCard, UserFollowers, UserRepos },
})
export default class UserDetails extends Vue {
    @Prop(String) login!: string;

    isLoading = false;
    user: {} | null = null;

    get userData() {
        return this.user;
    }

    created() {
        const fetchUser = async () => {
            this.isLoading = true;
            const response = await fetch(
                `https://api.github.com/users/${this.login}`
            );
            const responseData = await response.json();
            this.user = responseData;
            this.isLoading = false;
        };

        fetchUser();
    }
}
</script>
