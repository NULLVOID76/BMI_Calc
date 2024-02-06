const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const height = document.querySelector("#Height").value;
  const weight = document.querySelector("#Weight").value;

  let res = (weight / ((height * height) / 10000)).toFixed(2);
  console.log(res);
  result.innerHTML=`<h2>Your BMI is ${res} </h2>`;
});
const result=document.querySelector("#result");
