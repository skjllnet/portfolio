export default function copyText() {
  let text = document.getElementById("myEmail");

  text.select();
  text.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(text.value);
}