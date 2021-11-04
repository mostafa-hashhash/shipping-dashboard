import axios from "axios";
import { ref, computed } from "@vue/runtime-core";

const shipmentList = ref([]);
const isFetching = ref(false);
const hasError = ref(false);

export function getShipmentData(commodity = "", vehicleType = "") {
  isFetching.value = true;
  hasError.value = false;

  const filteredShipmentList = computed(() => {
    return shipmentList.value.filter((item) =>
      isMatching(item, commodity, vehicleType)
    );
  });

  setTimeout(() => {
    axios
      .get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          process.env.VUE_APP_API_Data_URL
        )}`
      )
      .then((response) => {
        shipmentList.value = JSON.parse(response.data.contents);
        hasError.value = false;
        isFetching.value = false;
      })
      .catch(() => {
        hasError.value = true;
        isFetching.value = false;
      });
  }, 1000);

  return {
    shipmentList,
    filteredShipmentList,
    isFetching,
    hasError,
  };
}

function isMatching(item, commodity, type) {
  return (
    (commodity.value ? item.commodity == commodity.value : true) &&
    (type.value ? item.vehicleType == type.value : true)
  );
}
