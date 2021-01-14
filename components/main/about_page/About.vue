<template>
  <section class="about">
    <h2 class="about__title title title--page">About <span>Me</span></h2>
    <div class="about__wrapper">
      <div class="about__text">
        <p class="about__ph">Passionate about technology and design from an early age, I've built websites, applications and digital experiences using front end tools in areas including music, automotive and fashion and art. I'm fascinated by emergent technologies and methodologies, such as responsive design, preprocessors, CSS3 animations and in-browser design. I'm familiar with a range of Content Management Systems, image editing software, as well as Digital Audio Workstations from my days as a recording engineer. In my time away from the computer I enjoy quoting films, playing with any musical gadget I can get my hands on and keeping my two cats off my keyboar</p>
        <p class="about__ph">Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.</p>
      </div>
      <div class="about__info">
        <p class="about__info-text"><span>Age</span>32</p>
        <p class="about__info-text"><span>Residence</span>Belarus</p>
        <p class="about__info-text"><span>Address</span>135a Molodejnaya Street, Novopolotsk Town</p>
        <p class="about__info-text"><span>e-mail</span>serrrgun@mail.ru</p>
        <p class="about__info-text"><span>Phone</span>+375 44 539 78 68</p>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style lang="scss">
.about {
  color: #eeeeee;
  font-size: 16px;
  line-height: 1.65em;

  &__wrapper {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 640px) {
      flex-direction: column;
    }
  }

  &__ph {
    text-align: justify;
  }

  &__text {
    width: 57%;
    padding: 0 1%;
    color: #d5d5d5;

    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }

  &__info {
    width: 37%;

    @media screen and (max-width: 640px) {
      width: 100%;
    }

    &-text span {
      color: #5050f5;
      margin-right: 5px;
      font-weight: 600;
    }
  }
}
</style>
