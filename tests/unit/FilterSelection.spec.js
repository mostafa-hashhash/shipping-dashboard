import { mount } from "@vue/test-utils";
import App from "@/App.vue";

test("Shipment Card Information", async () => {
  const wrapper = mount(App);
  const options = wrapper.find("select").findAll("option");

  await options.at(5).setSelected();

  expect(wrapper.find("option:checked").element.value).toBe("سيراميك");
});
