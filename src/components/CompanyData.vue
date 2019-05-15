<template>
  <section>
    <p class="main_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas voluptas qui molestias fuga quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <form action="">
      <label for="Name">COMPANY NAME</label>
      <input type="text" id="Name" name="Name" @input="validateName" v-model="Name" placeholder="e.g. Your Company Name">
      <p class="error" v-show="nameError">Company Name cannot be empty!</p>
      <label for="Spend">COMPANY SPEND</label>
      <input type="text" id="Spend" name="Spend" v-model="Spend" @input="validateSpend" @blur="formatSpend" placeholder="e.g. $150,000">
      <p class="error" v-show="spendError">Spend must be a number!</p>
      <label for="companySpendAbility">COMPANY SPEND ABILITY</label>
      <div class="flex spend_min_max">
        <label for="SpendAbilityMin">MIN</label>
        <input type="text" id="SpendAbilityMin" name="SpendAbilityMin" @input="validateSpendMin" @blur="formatSpendMin" v-model="SpendAbilityMin" placeholder="e.g. $150,000">
        <label for="SpendAbilityMax">MAX</label>
        <input type="text" id="SpendAbilityMax" name="SpendAbilityMax" @input="validateSpendMax" @blur="formatSpendMax" v-model="SpendAbilityMax" placeholder="e.g. $300,000">
      </div>
      <p class="error" v-show="spendMinError">Min must be equal to or less than the max Spend and must be a number</p>
      <p class="error" v-show="spendMaxError">Max number must be equal to or greater than the min Spend and must be a number</p>
      <label for="notes">NOTES</label>
      <textarea type="text" id="notes" name="notes" v-model="notes" placeholder="e.g. Good Tech Company" @click="showModal = true" @focus="showModal = true"></textarea>
    </form>
    <transition name="modal">
      <div class="modal-mask" v-show="showModal" @click="closeModal">
        <div class="modal-container" @click.stop>
          <div class="modal-body">
            <div class="modal-header">
              <label class="form-label" for="additionalNotes">ADDITIONAL NOTES</label>
              <button class="btn-close" @click="closeModal">X</button>
            </div>
            <textarea type="text" rows="5" class="form-control textAreaModal" v-model="notes" id="additionalNotes" name="additionalNotes" placeholder="e.g. Good Tech Company"></textarea>
          </div>
          <div class="modal-footer text-right">
            <button class="modal-button" @click="saveAditionalNotes()">Save</button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
  import { mapFields } from '../helpers.js'

  export default {
    name: 'CompanyData',
    data() {
      return {
        showModal: false,
        nameError: false,
        spendError: false,
        spendMinError: false,
        spendMaxError: false
      }
    },
    computed: {
      ...mapFields({
        fields: ["Name", "Spend", "SpendAbilityMin", "SpendAbilityMax", "notes"],
        base: "company",
        mutation: "UPDATE_COMPANY"
      })
    },
    methods: {
      saveAditionalNotes() {
        // Do something with Notes
        this.closeModal();
      },
      closeModal() {
        this.showModal = false;
      },
      createCompany() {
        this.$store.dispatch("createCompany", this.$store.state.company)
      },
      validateName() {
        if (this.$store.state.company.Name == '')
          this.nameError = true;
        else
          this.nameError = false;
      },
      validateSpend() {
        let value = Number(this.$store.state.company.Spend.replace('$', '').replace(/[^0-9\.-]+/g,""))
        if (isNaN(value)) {
          this.spendError = true;
          return;
        }
        this.spendError = false;
      },
      formatSpend() {
        let value = this.$store.state.company.Spend.replace('$', '').replace(/[^0-9\.-]+/g,"");
        this.$store.dispatch("createCompany", {Spend: this.formatToCurrency(value)});
      },
      validateSpendMin() {
        let valueMax = Number(this.$store.state.company.SpendAbilityMax.replace('$', '').replace(/[^0-9\.-]+/g,""))
        let valueMin = Number(this.$store.state.company.SpendAbilityMin.replace('$', '').replace(/[^0-9\.-]+/g,""))
        if (isNaN(valueMin)) {
          this.spendMinError = true;
          return;
        }
        if (!isNaN(valueMax)) {
          if ( valueMin > valueMax && valueMax > 0) {
            this.spendMinError = true;
            return;
          }
        }
        this.spendMinError = false;
      },
      formatSpendMin() {
        let value = this.$store.state.company.SpendAbilityMin.replace('$', '').replace(/[^0-9\.-]+/g,"");
        this.$store.dispatch("createCompany", {SpendAbilityMin: this.formatToCurrency(value)});
      },
      validateSpendMax() {
        let valueMax = Number(this.$store.state.company.SpendAbilityMax.replace('$', '').replace(/[^0-9\.-]+/g,""))
        let valueMin = Number(this.$store.state.company.SpendAbilityMin.replace('$', '').replace(/[^0-9\.-]+/g,""))

        if (isNaN(valueMax)) {
          this.spendMaxError = true;
          return;
        }
        if (!isNaN(valueMax)) {
          if ( valueMax < valueMin && valueMin > 0) {
            this.spendMaxError = true;
            return;
          }
        }
        this.spendMaxError = false;
      },
      formatSpendMax() {
        let value = this.$store.state.company.SpendAbilityMax.replace('$', '').replace(/[^0-9\.-]+/g,"");
        this.$store.dispatch("createCompany", {SpendAbilityMax: this.formatToCurrency(value)});
      },
      formatToCurrency(value) {
        if (isNaN(Number(value)))
          return;

        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0
        });
        return formatter.format(value);
      }
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 999;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
  }

  .modal-container {
    width: 700px;
    margin: 0 auto;
    padding: 30px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }

  .modal-body {
    margin: 0 0 20px 0;
  }

  .text-right {
    text-align: right;
  }

  .form-label {
    display: block;
    margin-bottom: 1em;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
  }

  .modal-button {
    background-color: #5D699A;
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 90px;
    height: 30px;
  }

  .textAreaModal {
    width: 640px;
    max-width: 640px;
    height: 200px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
  }

  .btn-close {
    border: none;
    background-color: transparent;
    color: #E7E9F0;
    margin-bottom: 10px;
  }

  .btn-close:hover {
    color: #000;
    cursor: pointer;
  }

  .modal-enter, .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  section {
    border: 1px solid #D4D9E3;
    padding: 20px;
    /* margin: 40px 0 0 20px; */
    max-width: 780px;
    border-radius: 4px;
  }

  .main_info {
    line-height: 1.5rem;
  }

  .flex {
    display: flex;
  }

  p {
    margin-bottom: 30px;
  }

  form, label {
    display: block;
  }

  label {
    color: #b1b1b1;
    font-size: .75rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 30px;
    width: 400px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #CED2E0;
    padding-left: 10px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  }

  .spend_min_max input {
    width: 300px;
  }

  .spend_min_max label {
    margin-right: 15px;
    margin-top: 15px;
  }

  .spend_min_max label:nth-child(3) {
    margin-left: auto;
  }

  textarea {
    width: 740px;
    max-width: 740px;
    height: 150px;
    min-height: 40px;
    border-radius: 4px;
    border: 1px solid #CED2E0;
    padding-left: 10px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  }

  input::placeholder,
  textarea::placeholder {
    color: #D4D8E4;
  }

  .error {
    color: red;
    margin: -20px 0 10px 15px;
    font-size: .7rem;
  }

</style>
