<template>
  <div id="app">
    <div id="menu">
      <div id="side">
        <router-link to="/">
          <div class="menu-item home">
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/characters">
          <div class="menu-item characters">
            <p>Characters</p>
          </div>
        </router-link>
        <router-link to="/download">
          <div class="menu-item download">
            <p>Download</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

/* #menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
} */

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
}

#menu a {
  color: #B84901;
}

/* #brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
} */

#brand {
  grid-area: brand;
  display: flex;
}

#brand img {
  height: 200px;
}

/* #side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
} */

#side {
  grid-area: side;
  display: flex;
  justify-content: space-around;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>