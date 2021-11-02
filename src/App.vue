<template>
  <main class="flex flex-col lg:flex-row justify-evenly p-10">
    <section
      class="
        w-full
        lg:w-1/4
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
        name=""
        id=""
        class="border-2 border-black bg-white p-2 my-2 w-full rounded-lg"
      >
        <option value="" selected disabled hidden>Commodity</option>
        <option value="">ورق</option>
        <option value="">زجاج</option>
        <option value="">رمل</option>
        <option value="">سيراميك</option>
        <option value="">المنسوجات</option>
        <option value="">فلز</option>
      </select>
      <select
        name=""
        id=""
        class="border-2 border-black bg-white p-2 my-2 w-full rounded-lg"
      >
        <option value="" selected disabled hidden>Vehicle Type</option>
        <option value="">سوزوكي</option>
        <option value="">جامبو مقفول</option>
        <option value="">دبابة</option>
        <option value="">دبابة مفتوح</option>
      </select>
    </section>
    <section class="w-full lg:w-3/4">
      <ShipmentCard v-for="item in shipmentList" :key="item.key" :data="item" />
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
    };
  },

  mounted: function () {
    this.isFetching = true;
    console.log(process.env.VUE_APP_API_Data_URL);

    fetch(`${process.env.VUE_APP_API_Data_URL}`)
      .then((response) => response.json())
      .then((response) => {
        this.shipmentList = response;
        this.isFetching = false;
      })
      .catch(() => {
        this.isFetching = false;
      });
  },
};
</script>

<style>
#app {
  background: #f7f6f6;
}
</style>
