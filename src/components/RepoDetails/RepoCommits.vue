<template>
    <div class="repo__commits">
        <h2>Commits:</h2>

        <ul class="commits-list">
            <li class="commit" v-for="commit in commits" :key="commit.url">
                <div>
                    <div>
                        <span class="commit__author">Author:</span>
                        <span>{{ commit.commit.author.name }}</span>
                    </div>
                    <p>
                        <label class="commit__message">
                            Commit message:
                        </label>
                        {{ commit.commit.message }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class RepoCommits extends Vue {
    @Prop(String) commitsUrl!: string;

    commits: any[] = [];

    created() {
        const fetchCommits = async () => {
            const url = this.commitsUrl?.substring(
                0,
                this.commitsUrl.length - 6
            );
            const response = await fetch(`${url}?per_page=5`);
            const responseData = await response.json();
            this.commits = responseData;
        };

        fetchCommits();
    }
}
</script>
