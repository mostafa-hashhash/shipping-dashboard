<template>
  <main class="flex flex-col lg:flex-row justify-evenly p-10">
    <section
      class="
        w-full
        lg:w-1/4
        h-min
        lg:h-screen
        border-2
        bg-white
        mr-10
        text-center
        p-5
        border-black
        mb-10
        lg:mb-0
      "
    >
      <select
        name="commodity"
        v-model="selectedCommodity"
        @change="filterShipmentList"
        class="border-2 border-black bg-white p-2 my-2 w-full rounded-lg"
      >
        <option value="" selected disabled hidden>Commodity</option>
        <option value="">All</option>
        <option value="ورق">Paper</option>
        <option value="زجاج">Glass</option>
        <option value="رمل">Sand</option>
        <option value="سيراميك">Ceremic</option>
        <option value="المنسوجات">crafts</option>
        <option value="فلز">fliz</option>
      </select>
      <select
        name="vehicle-type"
        v-model="selectedVehicleType"
        @change="filterShipmentList"
        class="border-2 border-black bg-white p-2 my-2 w-full rounded-lg"
      >
        <option value="" selected disabled hidden>Vehicle Type</option>
        <option value="">All</option>
        <option value="سوزوكي">Suzuki</option>
        <option value="جامبو مقفول">Jumpo closed</option>
        <option value="دبابة">dababa</option>
        <option value="دبابة مفتوح">dababa opened</option>
      </select>
    </section>
    <section class="w-full lg:w-3/4">
      <div
        class="flex items-center justify-center py-16"
        v-show="!filteredShipmentList.length"
      >
        <p class="text-red-600 text-xl">
          No Results are Matching The Filters Criteria
        </p>
      </div>
      <ShipmentCard
        v-for="(item, index) in filteredShipmentList"
        :key="item.key"
        :data="item"
        :class="[index ? 'mt-5' : '']"
      />
    </section>
  </main>
</template>

<script>
import ShipmentCard from "@/components/ShipmentCard";
export default {
  name: "App",

  components: {
    ShipmentCard,
  },

  data() {
    return {
      shipmentList: [],
      isFetching: false,
      selectedVehicleType: "",
      selectedCommodity: "",
      filteredShipmentList: [],
    };
  },

  mounted: function () {
    this.isFetching = true;

    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        process.env.VUE_APP_API_Data_URL
      )}`
    )
      .then((response) => response.json())
      .then((response) => {
        this.shipmentList = response;
        this.filteredShipmentList = this.shipmentList;
        this.isFetching = false;
      })
      .catch(() => {
        this.isFetching = false;
      });
  },

  methods: {
    filterShipmentList() {
      this.filteredShipmentList = this.shipmentList.filter((item) => {
        return (
          (this.selectedCommodity
            ? item.commodity == this.selectedCommodity
            : true) &&
          (this.selectedVehicleType
            ? item.vehicleType == this.selectedVehicleType
            : true)
        );
      });
    },
  },
};
</script>

<style>
#app {
  background: #f7f6f6;
  min-height: 100vh;
}
</style>
