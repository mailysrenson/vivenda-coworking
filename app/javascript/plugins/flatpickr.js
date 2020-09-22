import flatpickr from "flatpickr";

const initFlatPicker = () => {
  flatpickr(".datepicker", {
    altInput: true,
    altFormat: "d-m-Y",
    dateFormat: "Y-m-d",
  });
};

export {initFlatPicker};