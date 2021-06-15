<template>
    <div>
        <Login v-if="!user" />
        <MyAccount v-else />
    </div>



</template>


<script>
import axios from 'axios';
import Login from '@/components/Login.vue';
import MyAccount from '@/components/MyAccount.vue';
export default {
    name: 'account',
    components: {
        Login,
        MyAccount
    },
    async created() {
        try {
            let response = await axios.get('/api/users');
            this.$root.$data.user = response.data.user;
        } catch (error) {
            this.$root.$data.user = null;
        }
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


    }

}
</script>

<style scoped>

</style>
