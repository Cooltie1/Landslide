<template>
<div>
    <property-view :properties="properties" />

</div>


</template>


<script>
import axios from 'axios';
import PropertyView from '@/components/PropertyView.vue';
export default {
    name: 'buy',
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
    methods: {
        async getProperties() {
            try {
                let response = await axios.get("/api/properties/all");
                this.properties = response.data;
            } catch (error) {
                this.error = error.response.data.message;
            }
        }
    }
}


</script>



<style scoped>


</style>
