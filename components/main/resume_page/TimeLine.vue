<template>
  <div class="timeline">
    <h3 class="title title--block">Education</h3>
    <ul class="timeline__list">
      <li class="timeline__item">
        <div class="timeline__item-left">
          <span>2008</span>
          <span>University of Studies</span>
        </div>
        <div class="timeline__item-right">
          <p>University of Studies</p>
          <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
        </div>
      </li>
      <li class="timeline__item">
        <div class="timeline__item-left">
          <span>2008</span>
          <span>University of Studies</span>
        </div>
        <div class="timeline__item-right">
          <p>University of Studies</p>
          <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
        </div>
      </li>
      <li class="timeline__item">
        <div class="timeline__item-left">
          <span>2008</span>
          <span>University of Studies</span>
        </div>
        <div class="timeline__item-right">
          <p>University of Studies</p>
          <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style lang="scss">
.timeline {
  margin-bottom: 30px;
  color: #eee;

  &__list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__item {

    display: flex;

    &-left {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 30%;
      padding-right: 30px;
      padding-top: 8px;

      span:nth-child(1) {
        color: #aaa;
        margin: 3px 0;
        font-size: 14px;
        line-height: 1.4em;
        font-weight: 600;
      }

      span:nth-child(2) {
        margin: 0 0 4px;
        font-size: 13px;
        font-weight: 300;
        line-height: 1.45em;
        color: #a5a6a7;
        text-align: right;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 1px;
        height: 100%;
        background-color: #444;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: -4.5px;
        margin-top: 10px;
        width: 9px;
        height: 9px;
        margin-left: -4px;
        background-color: #222;
        border-radius: 5px;
        border: 2px solid #5050f5;
        box-shadow: 1px 0px 15px 3px rgba(0,0,80,1);
        z-index: 1;
      }
    }

    &-right {
      padding-left: 25px;
      padding-top: 8px;
      width: 70%;

      p {
        margin: 0;
      }

      p:nth-child(1) {
        font-size: 16px;
        margin-bottom: 3px;
        color: #eee;
        font-weight: 600;
      }

      p:nth-child(2) {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 10px;
        color: #d5d5d5;
      }


    }
  }
}
</style>
