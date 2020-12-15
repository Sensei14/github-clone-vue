<template>
    <main>
        <search-bar></search-bar>
        <results></results>
    </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import SearchBar from "../components/Search/SearchBar.vue";
import Results from "../components/Search/Results.vue";

@Component({
    components: { SearchBar, Results },
})
export default class MainPage extends Vue {}
</script>
