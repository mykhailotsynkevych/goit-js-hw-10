const e=document.querySelector("#search-box");document.querySelector(".country-info");e.addEventListener("input",(function(e){e.currentTarget.value})),fetch("https://restcountries.com/v2/name/peru?fields=name.official,capital,population,flags.svg,languages").then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.ffa2d862.js.map
