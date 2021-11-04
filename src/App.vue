<template>
  <main class="flex flex-col lg:flex-row justify-evenly p-5 md:p-10">
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
        @change="getShipmentData(selectedCommodity, selectedVehicleType)"
        class="border-2 border-black bg-white p-2 my-2 w-full rounded-lg"
      >
        <option value="" selected disabled hidden>Commodity</option>
        <option value="">All</option>
        <option value="ورق">Paper</option>
        <option value="زجاج">Glass</option>
        <option value="رمل">Sand</option>
        <option value="سيراميك">Ceremic</option>
        <option value="المنسوجات">Textiles</option>
        <option value="فلز">Metal</option>
      </select>
      <select
        name="vehicle-type"
        v-model="selectedVehicleType"
        @change="getShipmentData(selectedCommodity, selectedVehicleType)"
        class="border-2 border-black bg-white p-2 my-2 w-full rounded-lg"
      >
        <option value="" selected disabled hidden>Vehicle Type</option>
        <option value="">All</option>
        <option value="سوزوكي">Suzuki</option>
        <option value="جامبو مقفول">Closed Jumbo Car</option>
        <option value="دبابة">Tank Car</option>
        <option value="دبابة مفتوح">Opened Tank Car</option>
      </select>
    </section>

    <div class="w-full lg:w-3/4">
      <section v-if="!isFetching && !hasError && filteredShipmentList.length">
        <ShipmentCard
          v-for="(item, index) in filteredShipmentList"
          :key="item.key"
          :data="item"
          :class="[index ? 'mt-5' : '']"
        />
      </section>
      <section v-else>
        <Message v-if="isFetching">
          <Spinner class="w-8 h-8 mr-10" />
          Loading Shipment Details ...
        </Message>
        <Message
          v-else-if="hasError"
          :isError="true"
          message="Error in fetching the shipment data"
        />
        <Message
          v-else
          :isError="true"
          message="No Results are Matching The Filters Criteria"
        />
      </section>
    </div>
  </main>
</template>

<script>
import ShipmentCard from "@/components/ShipmentCard";
import Message from "@/components/Message";
import Spinner from "@/components/Spinner";
import { defineComponent, ref, onMounted } from "@vue/runtime-core";
import { getShipmentData } from "@/features/shipment";

export default defineComponent({
  name: "App",

  components: {
    ShipmentCard,
    Message,
    Spinner,
  },

  setup() {
    let selectedVehicleType = ref("");
    let selectedCommodity = ref("");

    const { isFetching, hasError, filteredShipmentList } = getShipmentData(
      selectedCommodity,
      selectedVehicleType
    );

    onMounted(() => {
      getShipmentData();
    });

    return {
      getShipmentData,
      isFetching,
      hasError,
      filteredShipmentList,
      selectedVehicleType,
      selectedCommodity,
    };
  },
});
</script>

<style>
#app {
  background: #f7f6f6;
  min-height: 100vh;
}
</style>
