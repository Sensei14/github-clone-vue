<template>
    <main v-if="repo" class="repo">
        <return-button></return-button>

        <div class="repo__row">
            <repo-basic-info
                :avatar-url="repo.owner.avatar_url"
                :full-name="repo.full_name"
                :description="repo.description"
                :language="repo.language"
            ></repo-basic-info>

            <repo-contributors
                :contributors-url="repo.contributors_url"
            ></repo-contributors>
        </div>

        <div class="repo__row">
            <repo-commits :commits-url="repo.commits_url"></repo-commits>
        </div>
    </main>
    <main v-else-if="isLoading">
        <loading-spinner></loading-spinner>
    </main>
    <main v-else>
        Repository of that name does not exist.
        <return-button></return-button>
    </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import RepoBasicInfo from "../components/RepoDetails/RepoBasicInfo.vue";
import RepoContributors from "../components/RepoDetails/RepoContributors.vue";
import RepoCommits from "../components/RepoDetails/RepoCommits.vue";

@Component({
    components: { RepoBasicInfo, RepoContributors, RepoCommits },
})
export default class UserDetails extends Vue {
    @Prop(String) name!: string;
    @Prop(String) owner!: string;

    isLoading = false;

    repo: {} | null = null;

    get userData() {
        return this.repo;
    }

    created() {
        const fetchRepo = async () => {
            this.isLoading = true;
            const response = await fetch(
                `https://api.github.com/repos/${this.owner}/${this.name}`
            );
            const responseData = await response.json();
            this.repo = responseData;
            this.isLoading = true;
        };

        fetchRepo();
    }
}
</script>
