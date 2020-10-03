<template>
  <ul class="block-info">
    <li class="block-info__item block-info__item--pin">
      <h4 class="block-info__title">Novopolotsk</h4>
    </li>
    <li class="block-info__item block-info__item--phone">
      <h4 class="block-info__title">44-539-78-68</h4>
    </li>
    <li class="block-info__item block-info__item--mail">
      <h4 class="block-info__title">serrrgun@mail.ru</h4>
    </li>
    <li class="block-info__item block-info__item--status">
      <h4 class="block-info__title">Freelance Available</h4>
    </li>
  </ul>
</template>
<script>
</script>
<style lang="scss">
.block-info {
  list-style: none;
  padding: 0;
  margin: 0;

  &__item {
    text-align: center;
    width: 100%;
    margin-bottom: 15px;
    padding: 70px 20px 20px;
    border: 1px solid #444;
    background-color: #333;
    background-position: center 15px;
    background-repeat: no-repeat;
    background-size: 40px;

    &--pin {
      background-image: url('~@/assets/img/pin.png');
    }

    &--phone {
      background-image: url('~@/assets/img/telephone.png');
    }

    &--mail {
      background-image: url('~@/assets/img/email.png');
    }

    &--status {
      background-image: url('~@/assets/img/checked.png');
    }
  }

  &__title {
    font-size: 15px;
    margin: 0;
  }
}


</style>
