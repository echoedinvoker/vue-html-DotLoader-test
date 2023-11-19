<template>
  <div class="v-dot1" style="height: 60px; width: 60px; position: relative;">
    <div class="v-dot2" style="height: 30px; width: 30px; background-color: #5dc596; border-radius: 100%;"></div>
    <div class="v-dot3" style="height: 30px; width: 30px; background-color: #5dc596; border-radius: 100%;"></div>
  </div>
</template>

<style>
.v-dot1 {
  -webkit-animation: v-dotRotate 2s 0s infinite linear;
  animation: v-dotRotate 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.v-dot2 {
  -webkit-animation: v-dotBounce 2s 0s infinite linear;
  animation: v-dotBounce 2s 0s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: absolute;
  top: 0;
  bottom: auto;
}

.v-dot3 {
  -webkit-animation: v-dotBounce 2s -1s infinite linear;
  animation: v-dotBounce 2s -1s infinite linear;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  position: absolute;
  top: auto;
  bottom: 0;
}

@-webkit-keyframes v-dotRotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes v-dotRotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes v-dotBounce {

  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes v-dotBounce {

  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
