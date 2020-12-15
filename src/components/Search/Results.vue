<template>
    <main>
        <h3 v-if="resultsCount">Found {{ resultsCount }} {{ resultsType }}</h3>

        <users-list
            v-if="resultsType === 'users'"
            :users="searchResults"
        ></users-list>
        <repos-list
            v-else-if="resultsType === 'repositories'"
            :repos="searchResults"
        ></repos-list>
    </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import UsersList from "../Users/UsersList.vue";
import ReposList from "../Repos/ReposList.vue";

@Component({
    components: { UsersList, ReposList },
})
export default class Results extends Vue {
    get searchResults() {
        return this.$store.getters.getSearchResults;
    }

    get resultsType() {
        return this.$store.getters.getResultsType;
    }

    get resultsCount() {
        return this.$store.getters.getResultsCount;
    }
}
</script>

<style lang="scss" scoped>
h3 {
    text-align: center;
    width: 100%;
    margin: 2rem 0;
}
</style>
