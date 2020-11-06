<template>
  <div class="page">
    <div>
      <h1>Downloads</h1>
      <hr />
      <p class="body">
        To download and play the game just click the link, unzip the file, and
        double click the file called "Game.exe".
      </p>

      <div class="windows">
        <button
          onclick="location.href = 'https://drive.google.com/file/d/1bnN5YIX9iJvocS1FvIEm5cRKd7JE--Qh/view?usp=sharing'"
          id="windows"
          class="download"
        >
          Windows Download
        </button>
      </div>

      <br />

      <div class="mac">
        <button
          onclick="location.href = 'https://drive.google.com/file/d/11B1uXxH_kWk5pEirF21YQZYM_wo7WCyx/view?usp=sharing'"
          id="mac"
          class="download"
        >
          Mac Download
        </button>
      </div>

      <br />

      <div class="linux">
        <button
          onclick="location.href = 'https://drive.google.com/file/d/1bTqJKQRzI94EGS-p03lmQ2pBNIcRMOe1/view?usp=sharing'"
          id="linux"
          class="download"
        >
          Linux Download
        </button>
      </div>
    </div>

    <div class="footer">
      <p>Created by: Zack Meyer</p>
      <p>
        GitHub Link:
        <a href="https://github.com/TheZealotAlmighty/260Creative3">
          https://github.com/TheZealotAlmighty/260Creative3</a
        >.
      </p>
    </div>
  </div>
</template>

<style scoped>
.page {
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

.download {
  text-align: center;
  padding: 15px 32px;
  color: white;
  background-color: darkblue;
}

.windows {
  text-align: center;
  padding-left: 15px;
}

.mac {
  text-align: center;
  padding-left: 15px;
}

.linux {
  text-align: center;
  padding-left: 15px;
}
</style>