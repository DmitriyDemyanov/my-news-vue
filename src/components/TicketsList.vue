<template>
  <div>


    <div v-for="(ticket, key) in airTickets" :key="key">
      
      <TicketListItem :ticket='ticket'/>
    </div>


  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import TicketListItem from '@/components/TicketListItem';

export default {
  name: 'TicketsList',
  computed: {
    ...mapGetters('tickets', ['airTickets'])
  },
  components: {
    TicketListItem,
  },
  methods: {
    ...mapActions('tickets', ['fetchTickets'])
  },
  mounted() {
    this.fetchTickets();
  }
};
</script>


<style scoped>

</style>