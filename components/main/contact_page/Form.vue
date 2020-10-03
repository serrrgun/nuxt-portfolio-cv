<template>
  <form action="#" class="form">
    <h3 class="title title--block">How Can I <span>Help You?</span></h3>
    <div class="form__inputs">
      <div class="form__input-box">
        <input type="text" name="name" autocomplete="off" required>
        <span>Full Name</span>
      </div>
      <div class="form__input-box">
        <input type="text" name="mail" autocomplete="off" required>
        <span>Email Addres</span>
      </div>
      <div class="form__input-box">
        <input type="text" name="subject" autocomplete="off" required>
        <span>Subject</span>
      </div>
    </div>
    <div class="form__textarea">
      <textarea name="message" rows="8" autocomplete="off" required></textarea>
      <span>Message</span>
    </div>
    <button class="form__btn">Send message</button>
  </form>
</template>
<script>
</script>
<style lang="scss">
.form {

  &__inputs {
    width: 100%;
  }

  &__input-box {
    position: relative;
    margin-bottom: 23.5px;

    input {
      border: 2px solid #999;
      border-radius: 5px;
      display: block;
      font-size: 1em;
      line-height: 1.4;
      margin: 0;
      padding: 10px 25px 10px 12px;
      width: 100%;
      background: 0 0;
      background-color: transparent;
      text-align: left;
      color: inherit;
      outline: none;

      &:focus,
      &:valid {
        ~ span  {
          color: #5050f5;
          top: -32px;
          font-size: 13px;
          padding-left: 0;
        }
      }

      &:valid {
        border-color: #5050f5;
      }
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      padding: 12px 25px 10px 12px;
      font-size: 1em;
      line-height: 1.4;
      pointer-events: none;
      transition: .3s;
    }
  }

  &__textarea {
    position: relative;
    width: 100%;
    margin-bottom: 25px;

    textarea {
      resize: none;
      border: 2px solid #999;
      border-radius: 5px;
      font-size: 1em;
      line-height: 1.4;
      margin: 0;
      padding: 10px 25px 10px 12px;
      width: 100%;
      background: 0 0;
      background-color: transparent;
      text-align: left;
      color: inherit;
      outline: none;

      &:focus,
      &:valid {
        ~ span  {
          color: #5050f5;
          top: -32px;
          font-size: 13px;
          padding-left: 0;
        }
      }

      &:valid {
        border-color: #5050f5;
      }
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      padding: 12px 25px 10px 12px;
      font-size: 1em;
      line-height: 1.4;
      pointer-events: none;
      transition: .3s;
    }
  }

  &__btn {
    padding: .8em 2.1em;
    background-color: transparent;
    color: #fff;
    border: 2px solid #5050f5;
    font-size: 1em;
    line-height: 1.2;
    border-radius: 30px;
    cursor: pointer;
    transition: .3s;

    &:hover,
    &:active,
    &:focus {
      background-color: #5050f5;
    }
  }
}

</style>
