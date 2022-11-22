<template>
  <div>
    <b-form @submit="onSubmit">

      <BRow>
        <div class="offset-1 col-4">
          <b-form-group label="Фамилия" label-for="input-1">
            <b-form-input id="input-1" v-model="form.lastName" required></b-form-input>
          </b-form-group>

          <b-form-group label="Имя" label-for="input-2">
            <b-form-input id="input-2" v-model="form.firstName" required></b-form-input>
          </b-form-group>

          <b-form-group label="Отчество" label-for="input-3">
            <b-form-input id="input-3" v-model="form.name" required></b-form-input>
          </b-form-group>

          <div class="mt-3">
            <span>Пол: {{ sexText }}</span>
            <b-form-radio-group id="radio-group-sex" v-model="sex" name="radio-sex">
              <div class="d-flex">
                <b-form-radio value="man">Мужской</b-form-radio>
                <b-form-radio value="woman" class="ml-3">Женский</b-form-radio>
              </div>
            </b-form-radio-group>
          </div>

          <div>
            <b-form-select v-model="year" :options="years" size="sm" class="mt-3"></b-form-select>
            <div class="mt-3">год рождения: <strong>{{ year }}</strong></div>
          </div>

        </div>
        <div class="offset-1 col-4">
          <b-form-group label="Email" label-for="input-4">
            <b-form-input id="input-4" type="email" v-model="form.email" required></b-form-input>
          </b-form-group>
          <b-form-group label="Tel" label-for="input-5">
            <b-form-input id="input-5" type="number" v-model="form.tel" required></b-form-input>
          </b-form-group>

          <div class="mt-3">
            <span>Беременность: {{ pregnancyText }}</span>
            <b-form-radio-group :disabled="isMan" id="radio-group-pregnancy" v-model="pregnancy" name="radio-pregnancy">
              <div class="d-flex">
                <b-form-radio value="yes">Да</b-form-radio>
                <b-form-radio value="no" class="ml-3">Нет</b-form-radio>
              </div>
            </b-form-radio-group>
          </div>


          <BRow class="mt-3 ">
            <b-form-group class="col-6" label="ДЦ" label-for="input-6">
              <b-form-input :disabled="isMan || isPregnancy" id="input-6" type="number" v-model="form.dayCycle"
                required></b-form-input>
            </b-form-group>
            <b-form-group class="col-6" label="НБ" label-for="input-7">
              <b-form-input :disabled="isMan || !isPregnancy" id="input-7" type="number" v-model="form.weekPregnancy"
                required></b-form-input>
            </b-form-group>
            <b-form-group label="Фамилия врача" label-for="input-8">
            <b-form-input id="input-8" placeholder="Демьянова М.В" v-model="form.doctorName" required></b-form-input>
          </b-form-group>
          <span>Date: {{ dateNow }}</span>
          </BRow>
        </div>



      </BRow>

      <div class="wrap-doctor"></div>


      <b-button class="mt-3" type="submit" variant="primary">Submit</b-button>

    </b-form>


  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'MedCenterItem',
  data() {
    return {
      form: {
        lastName: '',
        firstName: '',
        name: '',
        tel: '',
        email: '',
        dayCycle: '',
        weekPregnancy: '',
        doctorName: 'Демьянова М.В',
      },
      sex: '',
      pregnancy: '',
      year: null,
      years: [
        { value: null, text: 'Выберите год рождения' },
      ]
    }
  },
  computed: {
    isMan() {

      return this.sex !== 'woman';
    },
    isPregnancy() {
      return this.pregnancy === 'yes';
    },
    sexText() {
      if (this.sex === 'man') {
        return 'Мужской';
      }
      if (this.sex === 'woman') {
        return 'Женский';
      }
      return 'выберите пол';
    },
    pregnancyText() {
      console.log(this.weekPregnancy)
      return this.weekPregnancy;
    },
    dateNow() {
      const date = new Date();
      const dateNow = date.getDate().toString();
      const monthNow = date.getMonth().toString();
      const yearNow = date.getFullYear().toString();
      const fullDate = `${dateNow}. ${monthNow}. ${yearNow}`;
      console.log(fullDate);
      return fullDate;
    }
  },
  methods: {
    ...mapActions('laboratory',['addUser']),
    onSubmit(event) {
      event.preventDefault();

      const user = {
        lastName: this.form.lastName,
        firstName: this.form.firstName,
        name: this.form.name,
        tel: this.form.tel,
        email:this.form.email,
        dayCycle: this.form.dayCycle,
        weekPregnancy: this.form.weekPregnancy,
        doctorName: this.form.doctorName,
        sex: this.sex,
        pregnancy: this.pregnancy,
        year: this.year,
      };
      console.log(user);
      this.addUser();
    },

  },
  created() {
    const date = new Date();
    const year = date.getFullYear();
    for (let i = 0; i < 100; i++) {

      this.years.push({ value: year - i, text: year - i });
    }
  },
};

</script>

<style scoped>
.ml-3 {
  margin-left: 20px;
}
</style>

<!-- 259  244 === 15  cold water-->