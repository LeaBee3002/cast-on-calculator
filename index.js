function getValue(event) {
  event.preventDefault();
  let gauge = parseFloat(document.querySelector("#gauge").value);
  let width = parseFloat(document.querySelector("#width").value);

  if (gauge > 0 && width > 0) {
    let stitches = Math.round(gauge * width);
    document.querySelector(
      "#result"
    ).innerHTML = `You need to cast on approximately ${stitches} stitches.`;
  } else {
    document.querySelector("#result").innerHTML = `Please enter valid numbers.`;
  }
}

let castOnForm = document.querySelector("#search-input-form");
castOnForm.addEventListener("submit", getValue);
