<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 这里放侧边栏 -->
        <app-slider></app-slider>
        <!-- 这里放列表栏 -->
        <transition name="slide">
          <router-view class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./app-header";
import appSlider from "./app-slider";
export default {
  components: {
    "app-header": appHeader,
    "app-slider": appSlider
  }
};
</script>

<style>
.slide-enter {
  opacity: 0;
}
.slide-enter-to {
  opacity: 1;
}
.slide-enter-active {
  transition: all 1s;
}
</style>
