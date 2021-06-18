<template>
<div class="page-container">
    <img :src="this.property.path">
    <div class="title-info">
        <div class="left-container">
            <h1>{{this.property.title}}</h1>
            <h2 class="color1">{{this.property.price}}</h2>
            <p>{{this.property.size}}</p>
        </div>
        <div class="right-container">
            <p>{{formatDate(this.property.created)}}</p>
            <h3>{{this.property.user.firstName}} {{this.property.user.lastName}}</h3>
            <h4>{{this.property.contact}}</h4>
        </div>
    </div>
    <div class="description">
        <p>{{this.property.description}}</p>
        <router-link to="/account" v-if="owner" class=""><button @click="deleteProperty" class="pure-button pure-button-primary btn-delete">Delete</button></router-link>
        <router-link :to="{name: 'edit', params: {id: this.property._id}}" v-if="owner" class=""><button class="pure-button pure-button-primary btn-edit">Edit</button></router-link>

    </div>

</div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: 'property',
  data() {
  return {
      property: String,
      error: '',
  }
},
async created() {



    try {
        await this.getProperty();
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }

},
computed: {
    owner() {
        if (this.property.user._id === this.$root.$data.user._id) {
            return true;

        } else {
            return false;
        }
    }
},
methods: {
  async getProperty() {
    try {
      let response = await axios.get("/api/properties/" + this.$route.params.id);
      this.property = response.data;

    } catch (error) {
      this.error = error.response.data.message;
    }
  },
  formatDate(date) {
    if (moment(date).diff(Date.now(), 'days') < 15)
      return moment(date).fromNow();
    else
      return moment(date).format('d MMMM YYYY');
  },
  async deleteProperty() {
      try {
          await axios.delete('/api/properties/' + this.property._id);

      } catch(error) {
          console.log(error);
      }
  },

}


}
</script>

<style scoped>
.page-container {
    display:flex;
    flex-direction: column;
    align-items: center;
}
.page-container img {
    max-width: 800px;
}

.title-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;

}
.description {
    border-top: 2px solid #2f5d62;
    width: 65%;
}
.btn-delete {
    margin: 5px;
    width: 80px;
    background: ;
    font-size: 1.2em;
    background: #f75959
}

.btn-edit {
    margin: 5px;
    width: 80px;
    font-size: 1.2em;
    background: #595cf7;
}


</style>
