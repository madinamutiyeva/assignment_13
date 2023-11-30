// app.js
Vue.component('timeline-component', {
    props: ['events'],
    data() {
      return {
        sortedEvents: this.sortEventsByDate(),
        sortOrder: 'asc',
      };
    },
    methods: {
      sortEventsByDate() {
        return this.events.slice().sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
      },
      toggleSortOrder() {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        this.sortedEvents = this.sortEventsByDate();
      },
    },
    template: `
      <div class="timeline">
        <div class="timeline-event" v-for="event in sortedEvents" :key="event.title">
          <div class="event-info">
            <h3>{{ event.title }}</h3>
            <p class="event-date">{{ event.date }}</p>
            <p>{{ event.description }}</p>
          </div>
        </div>
        <button class = "sort-button" @click="toggleSortOrder">change sort order</button>
      </div>
    `,
  });
  
  new Vue({
    el: '#app',
    data: {
      eventsData: [
        { title: 'final exam', date: '2023-12-23', description: 'final mat 254' },
        { title: 'final exam', date: '2023-12-27', description: 'final css 215' },
        { title: 'final exam', date: '2023-12-29', description: 'final mde 133' },

      ],
    },
  });
  