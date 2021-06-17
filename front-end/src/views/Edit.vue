<template>
<div class="">

    <div>
        <h1>Edit Property Information</h1>
        <form class="pure-form" @submit.prevent="upload">
            <fieldset>
                <input v-model="title" placeholder="Title">
            </fieldset>
            <fieldset>
                <input v-model="address" placeholder="Address">
            </fieldset>
            <fieldset>
                <input v-model="price" placeholder="Price">
            </fieldset>
            <fieldset>
                <input v-model="size" placeholder="Lot Size">
            </fieldset>
            <fieldset>
                <input v-model="contact" placeholder="Contact Information">
            </fieldset>
            <fieldset>
                <textarea v-model="description" placeholder="Description"></textarea>
            </fieldset>
            <legend>Upload a new Picture</legend>
            <fieldset>
                 <div class="imageInput" @click="chooseImage">
                   <img v-if="url" :src="url" />
                   <div v-if="!url" class="placeholder">
                     Choose an Image
                   </div>
                   <input class="fileInput" ref="fileInput" type="file" @input="fileChanged">
                 </div>
                 <p v-if="error" class="error">{{error}}</p>
               </fieldset>
               <fieldset class="buttons">
                   <button type="submit" class="pure-button pure-button-primary right">Submit</button>
               </fieldset>
           </form>
    </div>
</div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'edit',
  data() {
  return {
      property: String,
      error: '',
      title: '',
      description: '',
      url: '',
      file: null,
      price: '',
      address: '',
      contact: '',
      size: ''

  }
},

async created() {
    try{
        await this.getProperty();
        this.title = this.property.title;
        this.description = this.property.description;
        
        this.address = this.property.address;
        this.size = this.property.size;
        this.contact = this.property.contact;

        this.price = this.property.price;
        this.fileChanged();

    } catch(error) {
        console.log(error);
    }



},
computed: {
  user() {
    return this.$root.$data.user;
  }
},
methods: {
    async getProperty() {
      try {
        let response = await axios.get("/api/properties/" + this.$route.params.id);
        console.log("hello");
        this.property = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    fileChanged(event) {
      this.file = event.target.files[0];
      this.url = URL.createObjectURL(this.file);
    },
    close() {
      this.$emit('close');
    },
    chooseImage() {
        this.$refs.fileInput.click()
      },
      async upload() {
    try {
      const formData = new FormData();
      formData.append('photo', this.file, this.file.name);
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('price', this.price);
      formData.append('address', this.address);
      formData.append('contact', this.contact);
      formData.append('size', this.size);
      await axios.put("/api/properties/" + this.$route.params.id, formData);
      this.$router.push('/property/' + this.property._id);
      this.$emit('uploadFinished');
    } catch (error) {
      this.error = "Error: " + error.response.data.message;
    }
    }

}
}



</script>

<style scoped>
form {
  font-size: 11pt;
}

input {
  width: 100%;
}

textarea {
  width: 100%;
  height: 100px;
}

.placeholder {
  background: #F0F0F0;
  width: 200px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.placeholder:hover {
  background: #E0E0E0;
}

.fileInput {
  display: none;
}

img {
  width: 200px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
