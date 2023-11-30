<template>
    <div class="carousel">
      <div class="carousel-container">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel-item"
          :class="{ active: index === currentIndex }"
        >
          <img :src="item.src" :alt="item.alt" class="carousel-image" />
          <div class="carousel-caption" v-if="item.caption">{{ item.caption }}</div>
        </div>
      </div>
      <button @click="prev" class="carousel-control">Previous</button>
      <button @click="next" class="carousel-control">Next</button>
      <div class="carousel-indicators">
        <span
          v-for="(item, index) in items"
          :key="index"
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="goTo(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: Array,
    },
    data() {
      return {
        currentIndex: 0,
        intervalId: null,
        autoplay: true,
        intervalDuration: 5000, 
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
      goTo(index) {
        this.currentIndex = index;
      },
      startAutoplay() {
        this.intervalId = setInterval(() => {
          this.next();
        }, this.intervalDuration);
      },
      stopAutoplay() {
        clearInterval(this.intervalId);
      },
    },
    mounted() {
  if (this.autoplay) {
    this.startAutoplay();
  }
}
,
    beforeDestroy() {
      this.stopAutoplay();
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
  }
  
  .carousel-container {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  
  .carousel-item {
    width: 100%;
    flex: 0 0 auto;
    position: relative;
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
  }
  
  .carousel-caption {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 10px;
  }
  
  .carousel-control:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  
  .carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
  }
  
  .indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  
  .indicator.active {
    background-color: #ccc;
  }
  </style>
  