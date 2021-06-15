<template>

    <button @click="logout">Logout</button>
</template>

<script>
import axios from 'axios';
export default {
    name: 'MyAccount',
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
