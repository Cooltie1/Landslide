<template>
<div>
    <div class="sub-header">
        <h1>Hi, {{user.firstName}}</h1>
        <button @click="logout">Logout</button>
    </div>

    <h2>My Properties</h2>

</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'MyAccount',

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
