<template>
    <div class="user__repos">
        <h2>Repositories:</h2>

        <ul v-if="repos.length > 0" class="repos-list">
            <li v-for="repo in repos" :key="repo.id" class="repos-list__item">
                <div class="repo-info">
                    <div>
                        <img :src="repo.owner.avatar_url" alt="" />
                        <span>{{ repo.full_name }}</span>
                    </div>
                    <p>
                        {{ repo.description }}
                    </p>
                    <span>Language: {{ repo.language }}</span>
                </div>
            </li>
        </ul>
        <p v-else>
            Not found any repository for this user.
        </p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class UserRepos extends Vue {
    @Prop(String) reposUrl!: string;

    repos: any[] = [];

    created() {
        const fetchFollowers = async () => {
            const response = await fetch(`${this.reposUrl}?per_page=5`);
            const responseData = await response.json();
            this.repos = responseData;
        };

        fetchFollowers();
    }
}
</script>
