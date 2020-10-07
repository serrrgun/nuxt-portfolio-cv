<template>
  <div class="portfolio-item" @click="openProject">
    <img :src="project.prevImage[0]" :alt="project.title">
    <div class="portfolio-item__desc">
      <h4 class="portfolio-item__title">{{ project.title }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

  methods: {
    openProject() {
      const id = this.project._id
      this.$router.push(`/project/${id}`)
    }
  }
}
</script>
<style lang="scss">
.portfolio-item {
  position: relative;
  display: block;
  width: 49%;
  height: 250px;
  border-radius: 6px;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus {
    .portfolio-item__desc {
      transform: translateY(0%);
    }

    img {
      transform: scale(1.4);
    }
  }

  img {
    transition: .5s ease-in;
  }

  @media screen and (max-width: 640px) {
    width: 100%;;
  }

  &__desc {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(80,80,245, 0.5);
    transform: translateY(-100%);
    transition: .5s ease;
  }

  &__title {
    font-size: 16px;
    color: #eee;
  }
}

</style>
