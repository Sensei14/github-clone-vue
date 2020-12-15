<template>
    <div>
        <label>Results per page:</label>
        <select @change="perPageChange">
            <option value="12">12</option>
            <option value="24">24</option>
        </select>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class UserFilters extends Vue {
    @Emit()
    perPageChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        return +target.value;
    }
}
</script>
