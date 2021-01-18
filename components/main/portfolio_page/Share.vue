<template>
  <div class="share-container">
    <ShareNetwork
        network="viber"
        :url="url"
        :title="title"
        :description="description"
      >
      <svg-icon name="viber-share" />
    </ShareNetwork>
    <ShareNetwork
        network="facebook"
        :url="url"
        :title="title"
        :description="description"
      >
      <svg-icon name="facebook-share" />
    </ShareNetwork>
    <ShareNetwork
        network="skype"
        :url="url"
        :title="title"
        :description="description"
      >
      <svg-icon name="skype-share" />
    </ShareNetwork>
    <ShareNetwork
        network="telegram"
        :url="url"
        :title="title"
        :description="description"
      >
      <svg-icon name="telegram-share" />
    </ShareNetwork>
    <ShareNetwork
        network="twitter"
        :url="url"
        :title="title"
        :description="description"
      >
      <svg-icon name="twitter-share" />
    </ShareNetwork>
    <ShareNetwork
        network="vk"
        :url="url"
        :title="title"
        :description="description"
      >
      <svg-icon name="vk-share" />
    </ShareNetwork>
    <ShareNetwork
        network="whatsapp"
        :url="url"
        :title="title"
        :description="description"
      >
      <svg-icon name="whatsapp-share" />
    </ShareNetwork>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: process.env.BASE_URL || 'http://localhost:3000/' + this.$route.fullPath,
      title: "Say hi to Vite! A brand new, extremely fast development setup for Vue.",
      description: "This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    }
  },
}
</script>
<style lang="scss">
.share-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: auto;

  & a {
    display: block;
    padding: 1px;
    margin-right: 5px;
    transition: .5s;

    svg {
      width: 50px;
      height: 50px;
    }

    &:hover,
    &:active,
    &:focus {
      opacity: .5;
    }
  }
}

</style>
