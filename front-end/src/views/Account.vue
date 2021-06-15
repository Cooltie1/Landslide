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
.space-above {
    margin-top: 50px;
}

h1 {
    font-size: 28px;
    font-variant: capitalize;
}

.hero {
    padding: 120px;
    display: flex;
    justify-content: center;
}

.heroBox {
    text-align: center;
}

.hero form {
    font-size: 14px;
}

.hero form legend {
    font-size: 20px;
}

input {
    margin-right: 10px;
}

.error {
    margin-top: 10px;
    display: inline;
    padding: 5px 20px;
    border-radius: 30px;
    font-size: 10px;
    background-color: #d9534f;
    color: #fff;
}
</style>
