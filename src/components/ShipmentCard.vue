<template>
  <main class="mb-5 border-2 border-black bg-white flex justify-evenly">
    <section
      class="
        grid grid-cols-1
        lg:grid-cols-2
        gap-4
        p-5
        pl-3
        md:pl-6
        lg:pl-10
        w-1/3
      "
    >
      <InfoItem title="Commodity" :value="data.commodity" />
      <InfoItem title="Price" :value="data.price" />
      <InfoItem title="Vehicle Type" :value="data.vehicleType" />
      <InfoItem title="Number of bids" :value="data.numberOfBids" />
    </section>

    <section class="p-5 pl-10 border-l-2 border-black w-3/5 realtive">
      <div
        v-for="address in data.addresses"
        :key="address.key"
        class="Info relative pb-2"
      >
        <h6>{{ address.name }}</h6>
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
  @apply bg-black w-1 h-12 block absolute -left-5 -top-9;
  content: "";
}
</style>
