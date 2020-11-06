<template>
<div class='body'>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Party')" href="#" class="pure-menu-link">Party</a></li>
      <li class="pure-menu-item"><a @click="select('Inquisition')" href="#" class="pure-menu-link">Inquisition</a></li>
      <li class="pure-menu-item"><a @click="select('Demon Cult')" href="#" class="pure-menu-link">Demon Cult</a></li>
      <li class="pure-menu-item"><a @click="select('Demons')" href="#" class="pure-menu-link">Demons</a></li>
      <li class="pure-menu-item"><a @click="select('Angels')" href="#" class="pure-menu-link">Angels</a></li>
      <li class="pure-menu-item"><a @click="select('Other')" href="#" class="pure-menu-link">Other</a></li>
    </ul>
  </div>
  <CharacterList :characters="characters" />

    <div class="footer">
        <p>Created by: Zack Meyer</p>
        <p>GitHub Link: <a href="https://github.com/TheZealotAlmighty/260Creative3">
        https://github.com/TheZealotAlmighty/260Creative3</a>.</p>
    </div>  
</div>
</template>

<script>
import CharacterList from "../components/CharacterList.vue"
export default {
  name: 'Characters',
  components: {
    CharacterList
  },
  data() {
    return {
      affiliation: '',
    }
  },
  computed: {
    characters() {
      return this.$root.$data.characters.filter(character => character.affiliation === this.affiliation);
    }
  },
  methods: {
    select(affiliation) {
      this.affiliation = affiliation;
    }
  }
}
</script>

<style scoped>
.body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer {
    position: static;
    bottom: 0;
    width: 100%;
    background-color: green;
    color: turquoise;
    text-align: center;
}
</style>