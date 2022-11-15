<template>
  <div>


    <BContainer>


      <div>
        <div>
          <h2>Tickets</h2>

        </div>
      </div>

    </BContainer>
    <BRow class="align-items-start">
      <TicketsList class="col-md-9" />
      <div class="col-md-3 d-flex flex-column">
        <b-form-select class="ticket-select" v-model="selected" :options="options"></b-form-select>
        <b-button variant="outline-primary">Select</b-button>
      </div>

    </BRow>

  </div>
</template>


<script>
import TicketsList from '@/components/TicketsList'
export default {
  name: 'TicketsPage',
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: '-=Choose city=-' },
        { value: 'ROM', text: 'ROME' },
        { value: 'LON', text: 'LONDON' },
      ]
    }
  },
  components: {
    TicketsList,
  },

}
</script>










<style scoped>
.nav-title {
  margin-left: 30px;
  font-size: 30px;
}

.ticket-select {
  height: 50px;
  margin-bottom: 25px;
}
</style>