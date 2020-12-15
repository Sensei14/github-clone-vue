<template>
    <router-link :to="{ path: `/repo/${owner.login}/${name}` }">
        <li class="repos-list__item">
            <div class="repo-info">
                <div>
                    <img :src="ownerAvatar" alt="" />
                    <span>{{ fullName }}</span>
                </div>
                <p>
                    {{ description }}
                </p>
                <span>Language: {{ language }}</span>
            </div>
        </li>
    </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ReposItem extends Vue {
    @Prop(String) fullName!: string;
    @Prop(String) description!: string;
    @Prop(String) language!: string;
    @Prop() owner!: {};
    @Prop(String) ownerAvatar!: string;
    @Prop(String) name!: string;
}
</script>

<style lang="scss" scoped></style>
