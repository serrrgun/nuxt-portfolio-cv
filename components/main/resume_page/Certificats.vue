<template>
  <div class="certificat">
    <h3 class="title title--block">Certificates</h3>
    <ul class="certificat__list">
      <li class="certificat__item">
        <div class="certificat__item-img">
          <img src="@/assets/img/sertificate-1.jpg" alt="certificat-1">
        </div>
        <div class="certificat__item-desc">
          <p class="certificat__item-title">Psyhology of Intertnation Design</p>
          <p class="certificat__item-id">Membership ID: XXXX</p>
          <span>9 April 2018</span>
        </div>
      </li>
      <li class="certificat__item">
        <div class="certificat__item-img">
          <img src="@/assets/img/sertificate-2.jpg" alt="certificat-2">
        </div>
        <div class="certificat__item-desc">
          <p class="certificat__item-title">Psyhology of Intertnation Design</p>
          <p class="certificat__item-id">Membership ID: XXXX</p>
          <span>9 April 2018</span>
        </div>
      </li>
      <li class="certificat__item">
        <div class="certificat__item-img">
          <img src="@/assets/img/sertificate-3.jpg" alt="certificat-3">
        </div>
        <div class="certificat__item-desc">
          <p class="certificat__item-title">Psyhology of Intertnation Design</p>
          <p class="certificat__item-id">Membership ID: XXXX</p>
          <span>9 April 2018</span>
        </div>
      </li>
      <li class="certificat__item">
        <div class="certificat__item-img">
          <img src="@/assets/img/sertificate-4.jpg" alt="certificat-4">
        </div>
        <div class="certificat__item-desc">
          <p class="certificat__item-title">Psyhology of Intertnation Design</p>
          <p class="certificat__item-id">Membership ID: XXXX</p>
          <span>9 April 2018</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style lang="scss">
.certificat {
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    width: 48%;
    border: 2px solid #444;
    border-radius: 8px;
    margin-bottom: 20px;

    @media screen and (max-width: 980px) {
      width: 100%;
    }

    &-img {
      width: 40%;
      background-color: #444;
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
      overflow: hidden;

      @media screen and (max-width: 980px) {
        width: 28%;
      }
    }

    &-desc {
      padding: 20px 25px;
    }

    &-title {
      font-size: 16px;
      margin: 0 0 5px;
      font-weight: 600
    }

    &-id {
      margin: 0;
      font-size: .9em;
      color: #777;
    }

    span {
      font-size: .7em;
      color: #777;
      opacity: .7;
    }
  }
}

</style>
