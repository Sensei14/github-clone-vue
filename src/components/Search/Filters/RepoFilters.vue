<template>
    <div class="search__filters--repos">
        <div>
            <label>Sort:</label>
            <select @change="sortChange">
                <option value="">Best match</option>
                <option value="stars">Stars</option>
                <option value="forks">Forks</option>
            </select>
        </div>
        <div>
            <label>Order: </label>
            <select @change="orderChange">
                <option value="desc">DESC</option>
                <option value="asc">ASC</option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class RepoFilters extends Vue {
    @Emit()
    sortChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        return target.value;
    }

    @Emit()
    orderChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        return target.value;
    }
}
</script>
