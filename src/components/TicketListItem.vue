<template>
  <div>

    <h2>HELLO</h2>
    {{ticket}}
    <h3>Price : {{ticket.price}}$</h3>
    <p>Time departure :{{ createDate }}</p>
    <p> {{ticket.currency}}</p>
    <p>Time departure :{{ createDateReturn }}</p>


  </div>
</template>



<script>


export default {
  name: 'TicketListItem',
  props: {
    ticket: {
      type: Object,
      required: true,
    }
  },
  computed: {
    createDate() {
      const date = new Date(this.ticket.departure_at);

      return date.toUTCString();
    },
    createDateReturn() {
      const date = new Date(this.ticket.return_at);

      return date.toUTCString();
    },
    currency() {
      return this.ticket.currency || '$';
    }
  },
};
</script>


<style scoped>

</style>