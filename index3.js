const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n) => {
  let text = "";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < n; ++i) {
    const random = (Math.random() * 25).toFixed(0);
    text += letters[random];
  }

  return text;
};

const generatePara = () => {
  let no = Number(input.value);
  const para = document.createElement("p");
  let data = "";

  for (let i = 0; i < no; ++i) {
    const rand = (Math.random() * 15).toFixed(0);

    data += generateWord(rand);
    data += " ";
  }

  para.innerText = data;
  para.setAttribute("class", "paras");
  container.append(para);
};
