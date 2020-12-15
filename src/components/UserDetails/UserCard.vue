<template>
    <div class="user__info">
        <div class="user__info--personal">
            <img :src="avatarUrl" alt="" />
            <div>
                <span class="name">{{ name }}</span>
                <span class="login">{{ login }}</span>
                <p>{{ bio }}</p>
            </div>
        </div>

        <div class="user__info--nonpersonal">
            <span v-if="company">
                <font-awesome-icon
                    icon="building"
                    size="lg"
                    class="icon"
                    color="#05668d"
                />
                {{ company }}
            </span>
            <span v-if="location">
                <font-awesome-icon
                    icon="map-marker-alt"
                    size="lg"
                    class="icon"
                    color="#05668d"
                />

                {{ location }}
            </span>
            <span v-if="blog">
                <font-awesome-icon
                    icon="link"
                    size="lg"
                    class="icon"
                    color="#05668d"
                />
                {{ blog }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class UserCard extends Vue {
    @Prop(String) name!: string;
    @Prop(String) avatarUrl!: string;
    @Prop(String) login!: string;
    @Prop(String) bio!: string;
    @Prop(String) company!: string;
    @Prop(String) location!: string;
    @Prop(String) blog!: string;
}
</script>
