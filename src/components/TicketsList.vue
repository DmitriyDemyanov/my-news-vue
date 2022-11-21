<template>
  <div>


    <div v-for="(ticket, key) in airTickets" :key="key">

      <TicketListItem :ticket='ticket'/>
    </div>


  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import TicketListItem from '@/components/TicketListItem';

export default {
  name: 'TicketsList',
  computed: {
    ...mapGetters('tickets', ['airTickets'])
  },
  components: {
    TicketListItem,
  },
};
</script>


<style scoped>

</style>