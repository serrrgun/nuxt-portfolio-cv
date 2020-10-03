<template>
  <div class="social">
    <ul class="social__list">
      <li class="social__item">
        <a href="#" class="social__link">
          <svg-icon name="linkedin" />
        </a>
      </li>
      <li class="social__item">
        <a href="#" class="social__link">
          <svg-icon name="telegram" />
        </a>
      </li>
      <li class="social__item">
        <a href="#" class="social__link">
          <svg-icon name="skype" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style lang="scss">
.social {
  margin-bottom: 40px;

  &__list {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-right: 10px;
  }

  &__link {
    display: inline-block;
    padding: 10px;
    border-radius: 50%;
    transition: .5s ease;
    outline: none;

    @media screen and (max-width: 640px) {
      padding: 5px;
    }

    & svg {
      width: 30px;
      height: 30px;
      fill: #f5f5f5;

      @media screen and (max-width: 640px) {
        width: 20px;
        height: 20px;
      }
    }

    &:hover,
    &:active,
    &:focus {
      background-color: rgba(255,255,255,.2);

    }
  }
}
</style>
