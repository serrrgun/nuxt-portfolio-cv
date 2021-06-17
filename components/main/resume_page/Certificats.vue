<template>
  <div class="certificat">
    <h3 class="title title--block">Certificates</h3>
    <ul class="certificat__list">
      <li class="certificat__item">
        <div class="certificat__item-img">
          <img src="@/assets/img/sertificate-1.jpg" alt="certificat-1">
        </div>
        <div class="certificat__item-desc">
          <a href="https://htmlacademy.ru/intensive/htmlcss" class="certificat__item-title">HTML и CSS, level 1</a>
          <span>13 september 2017</span>
        </div>
      </li>
      <li class="certificat__item">
        <div class="certificat__item-img">
          <img src="@/assets/img/sertificate-2.jpg" alt="certificat-2">
        </div>
        <div class="certificat__item-desc">
          <a href="https://htmlacademy.ru/intensive/adaptive" class="certificat__item-title">HTML и CSS, level 2 </a>
          <span>25 october 2017</span>
        </div>
      </li>
      <li class="certificat__item">
        <div class="certificat__item-img">
          <img src="@/assets/img/sertificate-3.jpg" alt="certificat-3">
        </div>
        <div class="certificat__item-desc">
          <a href="https://htmlacademy.ru/intensive/javascript" class="certificat__item-title">JavaScript, level 1</a>
          <span>7 march 2017</span>
        </div>
      </li>
      <li class="certificat__item">
        <div class="certificat__item-img">
          <img src="@/assets/img/sertificate-4.jpg" alt="certificat-4">
        </div>
        <div class="certificat__item-desc">
          <a href="https://htmlacademy.ru/intensive/ecmascript" class="certificat__item-title">JavaScript, level 2</a>
          <span>19 september 2017</span>
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
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      margin: 0 0 5px;
      font-weight: 600;
      transition: color .3s;

      &:hover {
        color: #5050f5;
      }
    }

    &-id {
      margin: 0;
      font-size: .9em;
      color: #777;
    }

    span {
      font-size: 1em;
      color: #777;
      opacity: .7;
    }
  }
}

</style>
