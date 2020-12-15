import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface State {
    searchType: string;
    results: any[];
    resultsCount: number | null;
    resultsType: string;
}

export default new Vuex.Store<State>({
    state: {
        searchType: "users",
        results: [],
        resultsCount: null,
        resultsType: "users",
    },
    mutations: {
        setSearchType(state, payload) {
            state.searchType = payload;
        },

        setResults(state, payload) {
            state.results = payload.items;
            state.resultsCount = payload.totalCount;
            state.resultsType = payload.resultsType;
        },
    },
    actions: {
        setSearchType(context, payload) {
            context.commit("setSearchType", payload);
        },

        async fetchData(context, payload) {
            const searchType = context.state.searchType;

            const baseUrl = `https://api.github.com/search/${searchType}`;

            let query = "";
            const searchTerm = payload.searchTerm;

            if (searchType === "users") {
                query = `?q=${searchTerm}+in:login`;
            } else if (searchType === "repositories") {
                query = `?q=${searchTerm}+in:name`;
            }

            const perPage = payload.perPage;
            const perPageQuery = `&per_page=${perPage}`;

            const page = payload.page;
            const pageQuery = `&page=${page}`;

            const sort = payload.sort;
            const order = payload.order;
            const filters = `&sort=${sort}&order=${order}`;

            const finalUrl =
                baseUrl + query + perPageQuery + pageQuery + filters;

            const response = await fetch(finalUrl);
            const responseData = await response.json();

            context.commit("setResults", {
                items: responseData.items,
                totalCount: responseData.total_count,
                resultsType: searchType,
            });
        },
    },
    getters: {
        getSearchType(state): string {
            return state.searchType;
        },
        getSearchResults(state): any[] {
            return state.results;
        },
        getResultsType(state): string {
            return state.resultsType;
        },
        getResultsCount(state): number | null {
            return state.resultsCount;
        },
    },
});
