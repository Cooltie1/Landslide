<template>
    <div>
        <Login v-if='!user'/>
        <div v-else>
            
        </div>
</div>


</template>


<script>
import axios from 'axios';
import Login from '@/components/Login.vue';
export default {
    name: 'sell',
    components: {
        Login
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
}


</script>



<style scoped>


</style>
