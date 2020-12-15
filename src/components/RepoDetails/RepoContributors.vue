<template>
    <div class="controbutors">
        <h2>Contributors:</h2>
        <ul class="contributors__list">
            <li
                v-for="item in contributors"
                :key="item.id"
                class="contributors__list-item"
            >
                <img :src="item.avatar_url" alt="" />
                <span>{{ item.login }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class RepoContributors extends Vue {
    @Prop(String) contributorsUrl!: string;

    contributors: any[] = [];

    created() {
        const fetchContributors = async () => {
            const response = await fetch(`${this.contributorsUrl}?per_page=5`);
            const responseData = await response.json();
            this.contributors = responseData;
        };

        fetchContributors();
    }
}
</script>
