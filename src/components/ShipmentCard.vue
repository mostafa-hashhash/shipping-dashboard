<template>
  <main class="border-2 border-black bg-white flex">
    <section
      class="
        grid grid-cols-1
        md:grid-cols-2
        gap-4
        p-5
        pl-3
        md:pl-6
        lg:pl-10
        w-2/5
        lg:w-1/3
      "
    >
      <InfoItem title="Commodity" :value="data.commodity" />
      <InfoItem title="Price" :value="data.price" />
      <InfoItem title="Vehicle Type" :value="data.vehicleType" />
      <InfoItem title="Number of bids" :value="data.numberOfBids" />
    </section>

    <section class="p-5 pl-10 border-l-2 border-black w-3/5 lg:w-2/3 realtive">
      <div
        v-for="address in data.addresses"
        :key="address.key"
        class="Info relative pb-2"
      >
        <h6 class="text-sm sm:text-normal">{{ address.name }}</h6>
        {{ address.latitude.toFixed(4) }}, {{ address.longitude.toFixed(4) }}
      </div>
    </section>
  </main>
</template>

<script>
import InfoItem from "@/components/InfoItem";
export default {
  name: "ShipmentCard",
  props: ["data"],
  components: {
    InfoItem,
  },
};
</script>

<style lang="postcss" scoped>
.Info::before {
  @apply bg-black w-3 h-3 block absolute -left-6 top-2 rounded-full;
  content: "";
}

.Info:not(:first-of-type)::after {
  @apply bg-black w-1 block absolute -left-5;
  height: 100%;
  top: -80%;
  content: "";
  @screen lg {
    @apply h-12;
  }
}
</style>
