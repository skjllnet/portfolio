const btn_copy = document.getElementById("copy");
const txt_data = document.getElementById("data");

copy.onclick = () => {
  const value = txt_data.value;
  navigator.clipboard.writeText(value);
};
