<template>
    <div>
        <section>
            <div class="property" v-for="property in properties" v-bind:key="property._id">
                <router-link class="route-link " :to="{name: 'property', params: {id: property._id}}">
                    <div class="property-container-left">
                        <img :src="property.path" />
                        <div class="property-info">
                            <h2>{{property.price}}</h2>
                            <h3>{{property.size}}</h3>
                            <p>{{property.address}}</p>
                        </div>
                    </div>
                    <div class="property-container-right">
                        <h3>{{formatDate(property.created)}}</h3>
                    </div>
                </router-link>
            </div>


        </section>


    </div>
</template>


<script>
import moment from 'moment';
// import axios from 'axios';
export default {
  name: 'PropertyView',
  props: {
    properties: Array
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    },
  }
}
</script>


<style scoped>

.property {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
}
.property img {
    height: 150px;
}
.property-container-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 5px;
}

.property-info {
    padding-left: 15px;
}
.route-link:hover, .route-link:active, .route-link:visited, .route-link {
    text-decoration: none;
}
.route-link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    border-left: 3px solid white;
}
.route-link:hover {
    border-left: 3px solid #2f5d62;
}

</style>
