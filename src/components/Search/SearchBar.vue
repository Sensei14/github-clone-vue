<template>
    <main class="search">
        <div class="search-options">
            <span>Search for: </span>
            <div class="search-options__types">
                <button
                    @click="setSearchType('users')"
                    :class="{ active: searchType === 'users' }"
                >
                    Users
                </button>
                <button
                    @click="setSearchType('repositories')"
                    :class="{ active: searchType === 'repositories' }"
                >
                    Repositories
                </button>
            </div>
        </div>
        <div class="search__search-container">
            <form @submit.prevent="submitSearch">
                <div class="search-bar">
                    <input type="text" v-model="searchTerm" />
                    <button class="search-bar__btn">
                        Search
                    </button>
                </div>
            </form>
        </div>
        <div class="search__filters">
            <user-filters
                v-if="searchType === 'users'"
                @sort-change="setSort"
                @order-change="setOrder"
            ></user-filters>

            <repo-filters
                v-if="searchType === 'repositories'"
                @sort-change="setSort"
                @order-change="setOrder"
            ></repo-filters>

            <page-filters @per-page-change="setPerPage"></page-filters>
        </div>

        <pagination
            :page="page"
            :per-page="perPage"
            @change-page="setPage"
        ></pagination>

        <loading-spinner v-if="isLoading"></loading-spinner>
    </main>
</template>

<script lang="ts">
import { Vue, Component, Model } from "vue-property-decorator";

import UserFilters from "./Filters/UserFilters.vue";
import RepoFilters from "./Filters/RepoFilters.vue";
import PageFilters from "./Filters/PageFilters.vue";
import Pagination from "./Pagination.vue";
import LoadingSpinner from "../Base/LoadingSpinner.vue";

@Component({
    components: {
        Pagination,
        LoadingSpinner,
        RepoFilters,
        UserFilters,
        PageFilters,
    },
})
export default class SearchBar extends Vue {
    searchTerm = "";
    isLoading = false;
    sort = "";
    order = "desc";
    perPage = 12;
    page = 1;

    setSort(value: string) {
        this.sort = value;
    }

    setOrder(value: string) {
        this.order = value;
    }

    setPerPage(value: number) {
        this.perPage = value;
    }

    async setPage(value: number) {
        this.page += value;
        this.isLoading = true;
        await this.$store.dispatch("fetchData", {
            searchTerm: this.searchTerm,
            sort: this.sort,
            order: this.order,
            perPage: this.perPage,
            page: this.page,
        });
        this.isLoading = false;
    }

    get searchType() {
        return this.$store.getters.getSearchType;
    }

    setSearchType(type: string) {
        this.$store.dispatch("setSearchType", type);
    }

    async submitSearch() {
        if (this.searchTerm.length < 1) return;
        this.isLoading = true;
        await this.$store.dispatch("fetchData", {
            searchTerm: this.searchTerm,
            sort: this.sort,
            order: this.order,
            perPage: this.perPage,
            page: this.page,
        });
        this.isLoading = false;
        this.sort = "";
        this.order = "desc";
    }
}
</script>
