<template>
<div>
    <div class="sub-header">
        <h1>Hi, {{user.firstName}}</h1>
        <button @click="logout">Logout</button>
    </div>

    <h2>My Properties</h2>
    <property-view :properties="properties" />

</div>
</template>

<script>
import axios from 'axios';
import PropertyView from '@/components/PropertyView.vue';
export default {
    name: 'MyAccount',
    components: {
        PropertyView
    },
    data() {
        return {
            properties: [],
            error: '',
        }
    },
    created() {
        this.getProperties();
    },
    computed: {
        user() {
            return this.$root.$data.user;
        }
    },

    methods: {
        async logout() {
            try {
                await axios.delete("/api/users");
                this.$root.$data.user = null;
            } catch (error) {
                this.$root.$data.user = null;
            }
        },
        async getProperties() {
            try {
                this.response = await axios.get("/api/properties");
                this.properties = this.response.data;

            } catch (error) {
                this.error = error.response.data.message;
            }
        },


    }
}
</script>

<style scoped>

.sub-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.sub-header button{
    height: 30px;
    margin: 10px;
}

</style>
