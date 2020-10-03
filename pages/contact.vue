<template>
  <section class="contact">
    <h2 class="title title--page">Contact</h2>
    <div class="contact__wrapper">
      <div class="contact__inner">
        <app-blockInfo/>
      </div>
      <div class="contact__inner">
        <app-form/>
      </div>
    </div>
  </section>
</template>
<script>
import AppBlockInfo from '@/components/main/contact_page/BlockInfo'
import AppForm from '@/components/main/contact_page/Form'

export default {
  components: {
    AppBlockInfo,
    AppForm
  }
}
</script>
<style lang="scss">
.contact {

  &__wrapper {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 640px) {
      flex-direction: column;
    }
  }

  &__inner:nth-child(1) {
    width: 33%;
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }

  &__inner:nth-child(2) {
    width: 63%;
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
}

</style>
