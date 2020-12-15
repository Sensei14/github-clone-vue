<template>
    <div class="pagination">
        <button
            class="pagination__btn prev-btn"
            :disabled="page - 1 < 1"
            @click="changePage(-1)"
        >
            Prev
        </button>
        <button
            class="pagination__btn next-btn"
            :disabled="(page + 1) * perPage > resultsCount"
            @click="changePage(1)"
        >
            Next
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

@Component
export default class Pagination extends Vue {
    @Prop() page!: number;
    @Prop() perPage!: number;

    get resultsCount() {
        return this.$store.getters.getResultsCount;
    }

    @Emit()
    changePage(n: number) {
        return n;
    }
}
</script>
