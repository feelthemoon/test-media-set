<template>
  <main class="main" ontouchstart>
    <router-view />
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Ubuntu, sans-serif;
}
html {
  background-color: #e5e5e5;
}
.main {
  margin: 50px 30px;
  display: flex;
  justify-content: center;
}
</style>
