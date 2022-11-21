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

        <h6>Currency</h6>
        <b-form-select class="ticket-select" v-model="currency" :options="price"></b-form-select>
        <h6>Origin City</h6>
        <b-form-select class="ticket-select" v-model="originCity" :options="options"></b-form-select>
        <h6>Departure City</h6>
        <b-form-select class="ticket-select" v-model="departureCity" :options="options"></b-form-select>
        <b-button variant="outline-primary" @click='showTicket' >Select</b-button>
      </div>

    </BRow>

  </div>
</template>


<script>
import { mapActions } from 'vuex';
import TicketsList from '@/components/TicketsList'
export default {
  name: 'TicketsPage',
  data() {
    return {
      originCity: null,
      departureCity: null,
      currency: 'USD',
      price: [

        {value: 'USD', text: 'Dollar'},
        {value: 'EUR', text: 'Euro'},
      ]

    }
  },
  methods: {
    ...mapActions('tickets', ['fetchTickets']),
    showTicket() {
      console.log('++++++',this.originCity)
      if(this.originCity && this.departureCity) {
        const payload = {
          origin: this.originCity,
          destination: this.departureCity,
          currency: this.currency,
        };
        this.fetchTickets(payload);
      }

    },
  },
  components: {
    TicketsList,
  },
  computed: {
    options() {
      return [
        { value: null, text: '-=Choose city=-' },
        { value: 'ROM', text: 'ROME', disabled: this.originCity === 'ROM' || this.departureCity === 'ROM' },
        { value: 'LON', text: 'LONDON', disabled: this.originCity === 'LON' || this.departureCity === 'LON' },
        { value: 'NYC', text: 'New York', disabled: this.originCity === 'NYC' || this.departureCity === 'NYC' },
      ];
    }
  }

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