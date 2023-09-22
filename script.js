console.log("loaded");

let rootElement = document.querySelector("#root");

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data); //itt tudunk a kapott adattal dolgozni
    //a data egy 250 elebol allo array

    for (let index = 0; index < data.length; index++) {
      let countryName = data[index].name.common;
      let countryPop = data[index].population;
      let countryArea = data[index].area;

      rootElement.insertAdjacentHTML(
        "beforeend",
        `
         <div class="country">
            <h2> ${countryName} </h2>
            <p> population: ${countryPop} </p>
            <p> area: ${countryArea} </p>
        </div>
        `
      );
    }
  });
