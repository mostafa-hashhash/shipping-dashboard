import { shallowMount } from "@vue/test-utils";
import InfoItem from "@/components/InfoItem.vue";

describe("InfoItem.vue", () => {
  it("renders card details when passed", () => {
    const title = "Commodity";
    const value = "Cotton";
    const wrapper = shallowMount(InfoItem, {
      props: { title, value },
    });
    expect(wrapper.text()).toMatch("Commodity Cotton");
  });
});
