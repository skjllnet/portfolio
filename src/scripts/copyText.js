// function copyText() {
//   let text = document.getElementById("myEmail");

//   text.select();
//   text.setSelectionRange(0, 99999);

//   navigator.clipboard.writeText(text.value);
// }

const btn_copy = document.getElementById("copy");
const txt_data = document.getElementById("data");
copy.onclick = () => {
  const value = txt_data.value;
  navigator.clipboard.writeText(value);
};
