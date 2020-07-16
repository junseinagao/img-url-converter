const INPUT_URL = document.getElementById("input-url");
const BUTTON_CONVERT = document.getElementById("button-convert");
const CONVERTED_URL = document.getElementById("converted-url");
const BUTTON_COPY = document.getElementById("button-copy");

const convert_url = function (url) {
  const postfix = "/view?usp=sharing";
  const prefix = "https://drive.google.com/file/d/";
  let fileId = url.slice(0,-postfix.length);
  fileId = fileId.slice(prefix.length);
  const newUrl = "http://drive.google.com/uc?export=view&id=" + fileId
  return newUrl;
}

BUTTON_CONVERT.onclick = function () {
  if (INPUT_URL.value != "") {
    const url = convert_url(INPUT_URL.value);
    CONVERTED_URL.value = url;
    console.log(url);
  }
}

BUTTON_COPY.onclick = function () {
    if (CONVERTED_URL.value != "") {
      CONVERTED_URL.focus();
      CONVERTED_URL.select();
      document.execCommand("copy");
      alert("リンクをコピーしました!\nLink Copied!");
    }
}