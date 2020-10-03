<template>
  <div class="skills">
    <h3 class="title title--block">Coding <span>Skills</span></h3>
    <ul class="skills__list">
      <li class="skills__item">
        <div class="skills__item-title">
          <span>HTML</span>
          <span>90%</span>
        </div>
        <div class="skills__item-progressive" data-skill="html"></div>
      </li>
      <li class="skills__item">
        <div class="skills__item-title">
          <span>CSS</span>
          <span>85%</span>
        </div>
        <div class="skills__item-progressive" data-skill="css"></div>
      </li>
      <li class="skills__item">
        <div class="skills__item-title">
          <span>JavaScript</span>
          <span>60%</span>
        </div>
        <div class="skills__item-progressive" data-skill="js"></div>
      </li>
      <li class="skills__item">
        <div class="skills__item-title">
          <span>Photoshop/Figma/Zeplin</span>
          <span>70%</span>
        </div>
        <div class="skills__item-progressive" data-skill="grafic"></div>
      </li>
      <li class="skills__item">
        <div class="skills__item-title">
          <span>English</span>
          <span>30%</span>
        </div>
        <div class="skills__item-progressive" data-skill="eng"></div>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style lang="scss">
.skills {
  color: #eee;
  font-weight: 600;

  &__list {
    padding: 0;
    padding-top: 8px;
    margin: 0;
    list-style: none;
  }

  &__item {
    margin-bottom: 15px;
  }

  &__item-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;

    span:nth-child(2) {
      font-size: 11px;
      line-height: 1.7;
      color: #aaa;
    }
  }

  &__item-progressive {
    position: relative;
    width: 100%;
    height: 10px;
    background-color: #222;
    border: 1px solid #5050f5;
    border-radius: 8px;

    &::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 60%;
      height: 4px;
      background-color: #5050f5;
      border-radius: 8px;
    }

    &[data-skill=html] {
      &::before {
        width: 90%;
      }
    }

    &[data-skill=css] {
      &::before {
        width: 85%;
      }
    }

    &[data-skill=js] {
      &::before {
        width: 60%;
      }
    }

    &[data-skill=grafic] {
      &::before {
        width: 70%;
      }
    }

    &[data-skill=eng] {
      &::before {
        width: 30%;
      }
    }

  }
}

</style>
