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
      <SelectMenu
        title="Commodity"
        :options="commodityOptions"
        @update="
          ($event) => {
            selectedCommodity = $event;
            getShipmentData(selectedCommodity, selectedVehicleType);
          }
        "
        :modelValue="selectedCommodity"
      />
      <SelectMenu
        title="Vehicle Type"
        :options="vehicleTypeOptions"
        @update="
          ($event) => {
            selectedVehicleType = $event;
            getShipmentData(selectedCommodity, selectedVehicleType);
          }
        "
        :modelValue="selectedVehicleType"
      />
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
import SelectMenu from "@/components/SelectMenu";
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
    SelectMenu,
  },

  setup() {
    let selectedVehicleType = ref("");
    let selectedCommodity = ref("");

    const { isFetching, hasError, filteredShipmentList } = getShipmentData(
      selectedCommodity,
      selectedVehicleType
    );

    const commodityOptions = [
      { value: "ورق", title: "Paper" },
      { value: "زجاج", title: "Glass" },
      { value: "رمل", title: "Sand" },
      { value: "سيراميك", title: "Ceremic" },
      { value: "المنسوجات", title: "Textiles" },
      { value: "فلز", title: "Metal" },
    ];

    const vehicleTypeOptions = [
      { value: "سوزوكي", title: "Suzuki" },
      { value: "جامبو مقفول", title: "Closed Jumbo Car" },
      { value: "دبابة", title: "Tank Car" },
      { value: "دبابة مفتوح", title: "Opened Tank Car" },
    ];

    onMounted(() => {
      getShipmentData();
    });

    function filterList(e) {
      console.log(e);
      getShipmentData(selectedCommodity, selectedVehicleType);
    }

    return {
      getShipmentData,
      isFetching,
      hasError,
      filterList,
      filteredShipmentList,
      selectedVehicleType,
      commodityOptions,
      vehicleTypeOptions,
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
