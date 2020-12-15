import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ReturnButton from "./components/Base/ReturnButton.vue";
import LoadingSpinner from "./components/Base/LoadingSpinner.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faBuilding,
    faLink,
    faMapMarkerAlt,
    faUserPlus,
    faUsers,
    faBook,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBuilding, faLink, faMapMarkerAlt, faUserPlus, faUsers, faBook);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.component("return-button", ReturnButton);
Vue.component("loading-spinner", LoadingSpinner);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
