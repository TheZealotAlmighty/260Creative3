<template>
<div class="wrapper">
  <div class="characters">
    <div class="character" v-for="character in characters" :key="character.id">
      <div class="info">
        <h1>{{character.name}}</h1>
        <p>Age: {{character.age}}</p>
      </div>
      <div class="image">
        <img :src="'Characters/'+character.image">
      </div>
      <div class="about">
        <p>Affiliation: {{character.affiliation}}
        <p>{{character.description}}</p>
        
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CharacterList',
  props: {
    characters: Array
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>