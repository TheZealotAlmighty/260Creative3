<template>
  <div class="home">
    <div>
      <h1>Overview</h1>
      <hr />

      <div class="body">
        <p>
          "How did I get into this? All I wanted was to get some milk! I'm not
          old enough to go fight demons!""
        </p>
        <p>
          After unintentionally uncovering a conspiracy in his new village, a
          young man finds himself accidentally joining the Inquisition, a group
          of demon hunters determined to wipe out a group of cultists who
          worship and summon demons into the world. Unfortunately for him, the
          leader of the Inquisition doesn't seem to care if he and his friends
          are qualified or not. He doesn't even seem to care if they live or
          die.
        </p>
      </div>
      <h1>About the Creator</h1>
      <hr />

      <div class="body">
        <p>
          The creator of this game, Zack Meyer, originally came up with the idea
          of the titular character while joking around with some of his college
          roommates, who once called him "Zack the Zealot" after he had jokingly
          suggested some rather extreme actions be taken against people he
          didn't agree with. From there he and his roommates came up with a
          bunch of lore around this "Zack the Zealot," much of which made it
          into this game. Zack Meyer later took some of the lore and characters
          he and his roommates had come up with and created this game.
        </p>
        <p>
          Zack Meyer, unfortunately, isn't an artist or a musician. He had to
          rely almost exclusively on default music and art, with some help from
          a few individuals for one or two things. Much of the appeal of this
          game comes from the dry, sarcastic humor used frequently in the game.
        </p>
        <p>
          If you're interested in supporting Zack, consider joining his Patreon.
          The current goal is to earn enough money to publish the game (free to
          play) on Steam.
        </p>
        <a href="https://www.patreon.com/zealousgaming">Patreon Link</a>
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

<script>
</script>

<style scoped>
.body {
    min-height: 100%;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.home {
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
