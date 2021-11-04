import { mount } from "@vue/test-utils";
import ShipmentCard from "@/components/ShipmentCard";

test("Shipment Card Information", async () => {
  const cardInfo = {
    key: "cf9259fb-6220-4ccf-96e4-1d2f6aaae0ba",
    numberOfBids: 9,
    commodity: "ورق",
    vehicleType: "دبابة مفتوح",
    price: 4337,
    addresses: [
      {
        order: 1,
        key: "9473a1e4-54b9-4edf-b9b5-52646118df42",
        latitude: 29.8058694,
        longitude: 32.08891870000002,
        name: "العاشر من رمضان",
      },
      {
        order: 2,
        key: "3276768e-eee2-4a6c-bc1f-4ae9db0455ed",
        latitude: 29.8058694,
        longitude: 32.08891870000002,
        name: "البحيرة",
      },
    ],
  };
  const cardWrapper = mount(ShipmentCard, {
    props: { data: cardInfo },
  });
  expect(cardWrapper.text()).toMatch(
    "Commodity ورقPrice 4337Vehicle Type دبابة مفتوحNumber of bids 9العاشر من رمضان 29.8059, 32.0889البحيرة 29.8059, 32.0889"
  );
});
