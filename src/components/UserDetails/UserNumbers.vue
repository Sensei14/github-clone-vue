<template>
    <div class="user__numbers">
        <div class="user__numbers--card">
            <font-awesome-icon
                icon="book"
                size="3x"
                class="icon"
                color="#05668d"
            />
            <div>
                <span>{{ publicRepos }}</span>
                <span>Repos</span>
            </div>
        </div>
        <div class="user__numbers--card">
            <font-awesome-icon
                icon="users"
                size="3x"
                class="icon"
                color="#05668d"
            />
            <div>
                <span>{{ followers }}</span>
                <span>Followers</span>
            </div>
        </div>
        <div class="user__numbers--card">
            <font-awesome-icon
                icon="user-plus"
                size="3x"
                class="icon"
                color="#05668d"
            />
            <div>
                <span>{{ following }}</span>
                <span>Following</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class UserNumbers extends Vue {
    @Prop(Number) publicRepos!: number;
    @Prop(Number) followers!: number;
    @Prop(Number) following!: number;
}
</script>
