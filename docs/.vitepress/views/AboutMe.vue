<template>
  <div class="px-6 pb-24 mt-2 md:pb-32 md:px-12 lg:px-16">
    <div class="flex flex-col items-center justify-center max-w-6xl mx-auto">
      <!-- 头像与徽章 -->
      <div class="relative w-full mx-auto">
        <!-- 头像 -->
        <div class="relative py-2 h-52">
          <div
            class="absolute w-48 h-48 mx-auto rounded-full shadow-[0px_0px_3px#147eae] dark:shadow-[0px_0px_3px#9ba0a9] top-1/2 avatar-ping left-1/2"
          ></div>
          <img
            class="block w-48 h-48 mx-auto rounded-full"
            src="./img/avatar.jpg"
            alt="avatar"
          />
        </div>
        <!-- Right-tags -->
        <p
          style="top: 32%"
          class="tag-bounce hidden sm:block sm:left-[69%] md:left-[66%] lg:left-[63%] xl:left-[60%] absolute px-3 py-0.5 text-sm font-bold rounded-full shadow-[0px_0px_1px_1px#eee]"
        >
          🎵 二进制吟游诗人
        </p>
        <p
          style="top: 50%"
          class="tag-bounce hidden sm:block sm:left-[69%] md:left-[66%] lg:left-[63%] xl:left-[60%] absolute px-3 py-0.5 text-sm font-bold rounded-full shadow-[0px_0px_1px_1px#eee]"
        >
          绿茵场最佳气氛组⚽
        </p>
        <!-- Left-tags -->
        <p
          style="top: 32%"
          class="tag-bounce hidden sm:block sm:left-[8%] md:left-[13%] lg:left-[21%] xl:left-[27%] absolute px-3 py-0.5 text-sm font-bold rounded-full shadow-[0px_0px_1px_1px#eee]"
        >
          🌙 倒头就睡懒羊羊
        </p>
        <p
          style="top: 50%"
          class="tag-bounce hidden sm:block sm:left-[8%] md:left-[13%] lg:left-[21%] xl:left-[27%] absolute px-3 py-0.5 text-sm font-bold rounded-full shadow-[0px_0px_1px_1px#eee]"
        >
          宇宙无敌暴龙战士🚀
        </p>
      </div>
      <!-- 概述与箴言 -->
      <div class="flex flex-col w-full mt-4">
        <div class="flex flex-col justify-between gap-5 md:gap-0 md:flex-row">
          <!-- 概述 -->
          <div
            class="dark:from-sky-700 dark:to-teal-600 dark:border-slate-900 w-full flex flex-col justify-center rounded-xl border py-4 px-8 text-white md:w-[59%] bg-gradient-to-r from-sky-400 to-teal-400"
          >
            <p class="text-lg text-slate-50">你好，很高兴认识你 👋</p>
            <h1 class="text-2xl font-bold xl:text-3xl lg:break-normal lg:break-words">
              A Chinese undergraduate From UESTC
            </h1>
            <p class="text-slate-100">前端开发 / 产品设计 / 足球 🔥</p>
          </div>
          <!-- 箴言 -->
          <div
            class="bg-stripe dark:border-slate-900 dark:bg-slate-800 md:w-[39%] w-full rounded-xl border p-4 bg-slate-50"
          >
            <p class="text-[12px]">箴言</p>
            <div>
              <h1 class="text-3xl leading-9">
                <span class="hidden font-bold text-teal-400 md:inline-block"
                  >Miracle&nbsp;
                </span>
                <span class="hidden lg:inline-block"> Is Everywhere</span>
              </h1>
              <h1 class="font-serif text-3xl tracking-widest md:text-2xl lg:text-3xl">
                纵有<span class="font-bold text-sky-500">狂风</span>拔地起
              </h1>
              <h1 class="text-2xl leading-9 md:text-3xl">
                <span class="inline-block font-bold text-teal-400 md:hidden"
                  >Miracle&nbsp;
                </span>
                <span class="inline-block lg:hidden">Is Everywhere</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <!-- 简介与技术栈 -->
      <div class="flex flex-col justify-between w-full gap-5 mt-4 md:gap-0 md:flex-row">
        <!-- 简介 -->
        <div
          class="bg-stripe w-full md:w-[35%] bg-slate-50 border dark:bg-slate-800 dark:border-slate-900 p-4 rounded-xl"
        >
          <p class="text-[12px]">简介</p>
          <div class="mt-2">
            <h1 class="text-xl">主修计算机科学与技术</h1>
            <h1 class="text-xl">辅修<span class="text-pink-500">猫娘行为学</span></h1>
            <h1 class="text-xl lg:text-xl md:text-base">梦想是做程序员烧烤领袖</h1>
            <p></p>
          </div>
        </div>
        <!-- 技术栈 -->
        <div
          class="w-full md:w-[62%] dark:border-slate-900 border dark:bg-slate-800 bg-slate-50 p-4 rounded-xl"
        >
          <p class="text-[12px]">技术栈</p>
          <div class="mt-2 overflow-hidden">
            <!-- TODO:封装ICON组件,抽离背景颜色与svg地址 -->
            <div class="flex gap-4 w-fit icon-scroll">
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-emerald-200"
              >
                <img src="./img/vue.svg" alt="vue.js" />
              </div>
              <div class="flex-shrink-0 w-20 h-20 p-4 bg-red-200 rounded-lg">
                <img src="./img/html.svg" alt="" />
              </div>
              <div class="flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-sky-200">
                <img src="./img/css.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-slate-200"
              >
                <img src="./img/tailwind.svg" alt="" />
              </div>
              <div
                class="flex justify-center w-20 h-20 p-4 flex-shrink-0 rounded-lg bg-[#f7cb4f]"
              >
                <img class="rounded-lg" src="./img/js.webp" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-red-400 rounded-lg"
              >
                <img class="rounded-lg" src="./img/git.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-slate-200"
              >
                <img class="rounded-lg" src="./img/python.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-rose-200"
              >
                <img class="rounded-lg" src="./img/npm.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-indigo-200 rounded-lg"
              >
                <img class="rounded-lg" src="./img/eslint.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-emerald-200"
              >
                <img src="./img/vue.svg" alt="vue.js" />
              </div>
              <div class="flex-shrink-0 w-20 h-20 p-4 bg-red-200 rounded-lg">
                <img src="./img/html.svg" alt="" />
              </div>
              <div class="flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-sky-200">
                <img src="./img/css.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-slate-200"
              >
                <img src="./img/tailwind.svg" alt="" />
              </div>
              <div
                class="flex justify-center w-20 h-20 p-4 flex-shrink-0 rounded-lg bg-[#f7cb4f]"
              >
                <img class="rounded-lg" src="./img/js.webp" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-red-400 rounded-lg"
              >
                <img class="rounded-lg" src="./img/git.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-slate-200"
              >
                <img class="rounded-lg" src="./img/python.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 rounded-lg bg-rose-200"
              >
                <img class="rounded-lg" src="./img/npm.svg" alt="" />
              </div>
              <div
                class="flex justify-center flex-shrink-0 w-20 h-20 p-4 bg-indigo-200 rounded-lg"
              >
                <img class="rounded-lg" src="./img/eslint.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 图片与荣誉 -->
      <div class="flex flex-col justify-between w-full gap-5 mt-4 md:gap-0 md:flex-row">
        <!-- 图片 -->
        <div
          class="w-full md:w-[45%] honer-bg bg-center bg-no-repeat bg-cover rounded-xl h-52 sm:h-auto"
        ></div>
        <!-- 荣誉 -->
        <div
          class="bg-stripe w-full md:w-[50%] bg-slate-50 border dark:bg-slate-800 dark:border-slate-900 p-4 rounded-xl"
        >
          <p class="text-[12px]">荣誉墙</p>
          <h1 class="mt-2 text-4xl font-bold">追风赶月</h1>
          <div class="mt-4 md:text-base lg:text-xl">
            <p class="py-1">🏅 "创新创意创业"挑战赛省一等奖</p>
            <p class="py-1">🥉 蓝桥杯 Web 开发组国家三等奖</p>
            <p class="py-1">🥉 字节跳动前端青训大项目三等奖</p>
          </div>
        </div>
      </div>
      <!-- 音乐/游戏 -->
      <div class="flex flex-col justify-between w-full gap-5 mt-4 md:gap-0 md:flex-row">
        <!-- 音乐 -->
        <div
          class="w-full md:w-[39%] rounded-xl min-h-[13rem] h-52 md:h-auto relative overflow-hidden sm:h-auto"
        >
          <div
            class="absolute w-full h-full bg-center bg-no-repeat bg-cover music-bg"
          ></div>
          <div class="relative z-10 p-4">
            <p class="text-[12px] text-slate-200">音乐喜好</p>
            <h1 class="mt-1.5 text-4xl font-bold text-white">古典、</h1>
            <h1 class="mt-1.5 text-4xl font-bold text-white">欧美流行、</h1>
            <h1 class="mt-1.5 text-4xl font-bold text-white">轻音乐</h1>
            <p class="text-sm text-right text-slate-100">《Love Stroy》</p>
          </div>
        </div>
        <!-- 游戏 -->
        <div
          class="relative w-full md:min-h-[13rem] h-52 md:h-auto md:w-[59%] overflow-hidden rounded-xl"
        >
          <div
            class="absolute w-full h-full bg-center bg-no-repeat bg-cover game-bg"
          ></div>
          <div class="relative z-10 flex flex-col justify-between h-full p-4">
            <p class="text-[12px] text-slate-50">电子竞技</p>
            <h1 class="flex-1 mt-2 text-4xl font-bold text-white">赛博种田 / FPS</h1>
            <p class="self-end mt-2 text-sm text-right text-slate-100">
              守望先锋 / FarmTogether
            </p>
          </div>
        </div>
      </div>

      <!-- 运动/电影 -->
      <div class="flex flex-col justify-between w-full gap-5 mt-4 md:gap-0 md:flex-row">
        <!-- 电影 -->
        <div
          class="relative w-full md:min-h-[18rem] h-72 overflow-hidden md:w-[58%] rounded-xl"
        >
          <div
            class="absolute w-full bg-center bg-no-repeat bg-cover h-72 movie-bg"
          ></div>
          <div class="relative z-10 flex flex-col justify-between h-full p-4">
            <p class="text-[12px] text-slate-50">兴趣爱好</p>
            <h1 class="flex-1 mt-2 text-4xl font-bold text-white">
              科幻 / <br />动漫影视剧
            </h1>
            <p class="self-end mt-2 text-sm text-right text-slate-100">
              “不作恶,不快活！” ——《坏蛋联盟》
            </p>
          </div>
        </div>
        <!-- 运动 -->
        <div
          class="relative w-full md:min-h-[18rem] h-72 overflow-hidden md:w-[40%] rounded-xl"
        >
          <div
            class="absolute w-full bg-center bg-no-repeat bg-cover h-72 sport-bg"
          ></div>
          <div class="relative flex flex-col justify-between h-full p-4">
            <p class="text-[12px] text-slate-50">体育运动</p>
            <h1 class="flex-1 mt-2 text-4xl font-bold text-white">足球</h1>
            <p class="self-end mt-2 text-sm text-right text-slate-100">
              欢迎来到梅西走廊！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.honer-bg {
  background-image: url("./img/honer.jpg");
}
.music-bg {
  background-image: url("./img/music.jpg");
  filter: brightness(0.6);
}
.game-bg {
  background-image: url("./img/game.png");
  filter: brightness(0.8);
}
.sport-bg {
  background-image: url("./img/sport.jpg");
  filter: brightness(0.6);
}
.movie-bg {
  background-image: url("./img/movie.jpg");
  filter: brightness(0.6);
}
.avatar-ping {
  animation: avatarPing 2s ease-in infinite;
}
@keyframes avatarPing {
  0%,
  100% {
    transform: translateX(-50%) translateY(-50%) scale(1.05);
  }
  50% {
    transform: translateX(-50%) translateY(-50%) scale(1.1);
  }
}
.tag-bounce {
  animation: tagBounce 1.5s ease-in infinite;
}
@keyframes tagBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
}

.icon-scroll {
  animation: iconScroll 20s linear infinite;
}
@keyframes iconScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
