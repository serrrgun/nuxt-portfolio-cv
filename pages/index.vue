<template>
  <section class="home">
    <div class="home__titles">
      <h1 class="home__title">Sergey Turishchev</h1>
      <h2 class="home__subtitle">Frontend Developer</h2>
    </div>
  </section>
</template>
<script>
export default {}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__title {
    color: #f5f5f5;
    font-size: 60px;
    line-height: 74px;
    margin: 0;
    text-align: center;

    @media screen and (max-width: 640px) {
      font-size: 50px;
      line-height: 60px;
    }
  }

  &__subtitle {
    color: #aaa;
    font-size: 21px;
    font-weight: 300;
    margin: 5px 0;
    text-align: center;
  }
}

</style>
