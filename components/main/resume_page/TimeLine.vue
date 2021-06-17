<template>
  <div class="timeline">
    <h3 class="title title--block">{{ title }}</h3>
    <ul class="timeline__list">
      <li class="timeline__item" v-for="item in data" :key="item.id">
        <div class="timeline__item-left">
          <span>{{ item.year }}</span>
          <span>{{ item.name }}</span>
        </div>
        <div class="timeline__item-right">
          <a :href="item.link" target="_blank">{{ item.name }}</a>
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['title', 'data']
}
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
      padding-top: 0;
      padding-bottom: 50px;

      span:nth-child(1) {
        color:#fff;
        margin: 3px 0;
        font-size: 11px;
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
        right: -3.5px;
        margin-top: 2px;
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
      padding-top: 0;
      padding-bottom: 30px;
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

      a {
        display: inline-block;
        margin-bottom: 20px;
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        transition: color .3s;

        &:hover {
          color: #5050f5;
        }
      }
    }
  }
}
</style>
