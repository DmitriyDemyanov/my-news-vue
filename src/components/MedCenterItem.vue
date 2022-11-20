<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <div class="d-flex justify-content-between">
      <b-form-group  id="input-group-2" label="Фамилия" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastName"

          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Имя" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstName"

          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Отчество" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"

          required
        ></b-form-input>
      </b-form-group>

    </div>

    <div class="mt-3">
    <b-form-group label="Пол: {{}} " v-slot="{ ariaDescribedby }">
      <div class="d-flex">
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Мужской</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Женский</b-form-radio>
      </div>
    </b-form-group>


  </div>


      <b-button class="mt-3" type="submit" variant="primary">Submit</b-button>

    </b-form>


  </div>
</template>

<script>
export default {
  name:'MedCenterItem',
  data() {
      return {
        form: {
          lastName: '',
          firstName: '',
          name: '',
        },
        show: true,
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
     
    }
};

</script>

<style scoped>
</style>