const indexDB = window.indexedDB || window.mozIndexDB || window.webkitIndexDB || window.msIndexDB || window.shimIndexDB;

function initializeDatabase() {
  const indexDB = window.indexedDB || window.mozIndexDB || window.webkitIndexDB || window.msIndexDB || window.shimIndexDB;
  const request = indexDB.open("AntibiotikDB", 1);

  request.onerror = function (event) {
    console.error("An error has occurred with IndexedDB");
    console.error(event);
  };

  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    const store = db.createObjectStore("antibiotici", { keyPath: "id" });
    store.createIndex("ime_bakterije_index", "ime_bakterije", { unique: true });
  };

  request.onsuccess = function () {
    populateSelectOptions(request);
     addEmptyOption();
  };
}

function addEmptyOption() {
  const bakterijaSelects = document.querySelectorAll(".bakterijaSelect");
  bakterijaSelects.forEach(select => {
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.text = "Izaberite opciju";
    select.insertBefore(emptyOption, select.firstChild);
  });
}

initializeDatabase();

function populateSelectOptions(request) {
  const db = request.result;
  const transaction = db.transaction("antibiotici", "readwrite");
  const store = transaction.objectStore("antibiotici");

  const data = [
    { id: 1, ime_bakterije: "KPC", antibiotici: "Ceftazidim-avibaktam, Imipenem sa cilastatinom - relebaktam, Meropenem-vaborbaktam, Cefiderokol" },
    { id: 2, ime_bakterije: "GES", antibiotici: "Amoksicilin-klavulanat, Ampicilin-sulbaktam, Piperacilin-tazobaktam, Ceftolozan-tazobaktam, Ceftazidim-avibaktam, Imipenem sa cilastatinom - relebaktam, Meropenem-vaborbaktam, Cefiderokol" },
    { id: 3, ime_bakterije: "CTX-M", antibiotici: "Amoksicilin-klavulanat, Ampicilin-sulbaktam, Piperacilin-tazobaktam, Ceftolozan-tazobaktam, Ceftazidim-avibaktam, Imipenem sa cilastatinom - relebaktam, Meropenem-vaborbaktam, Cefiderokol" },
    { id: 4, ime_bakterije: "SHV", antibiotici: "Amoksicilin-klavulanat, Ampicilin-sulbaktam, Piperacilin-tazobaktam, Ceftolozan-tazobaktam, Ceftazidim-avibaktam, Imipenem sa cilastatinom - relebaktam, Meropenem-vaborbaktam, Cefiderokol" },
    { id: 5, ime_bakterije: "TEM", antibiotici: "Amoksicilin-klavulanat, Ampicilin-sulbaktam, Piperacilin-tazobaktam, Ceftolozan-tazobaktam, Ceftazidim-avibaktam, Imipenem sa cilastatinom - relebaktam, Meropenem-vaborbaktam, Cefiderokol" },
    { id: 6, ime_bakterije: "IMP", antibiotici: "Cefiderokol" },
    { id: 7, ime_bakterije: "VIM", antibiotici: "Cefiderokol" },
    { id: 8, ime_bakterije: "GIM", antibiotici: "Ne postoji antibiotik" },
    { id: 9, ime_bakterije: "SIM", antibiotici: "Ne postoji antibiotik" },
    { id: 10, ime_bakterije: "SPM", antibiotici: "Ne postoji antibiotik" },
    { id: 11, ime_bakterije: "NDM", antibiotici: "Ne postoji antibiotik" },
    { id: 12, ime_bakterije: "BcLL", antibiotici: "Ne postoji antibiotik" },
    { id: 13, ime_bakterije: "CcrA", antibiotici: "Ne postoji antibiotik" },
    { id: 14, ime_bakterije: "BlaB", antibiotici: "Ne postoji antibiotik" },
    { id: 15, ime_bakterije: "Bla2", antibiotici: "Ne postoji antibiotik" },
    { id: 16, ime_bakterije: "DIM", antibiotici: "Ne postoji antibiotik" },
    { id: 17, ime_bakterije: "TMB", antibiotici: "Ne postoji antibiotik" },
    { id: 18, ime_bakterije: "KHM", antibiotici: "Ne postoji antibiotik" },
    { id: 19, ime_bakterije: "CpHA", antibiotici: "Ne postoji antibiotik" },
    { id: 20, ime_bakterije: "Shf", antibiotici: "Ne postoji antibiotik" },
    { id: 21, ime_bakterije: "lmiS", antibiotici: "Ne postoji antibiotik" },
    { id: 22, ime_bakterije: "L-1", antibiotici: "Ne postoji antibiotik" },
    { id: 23, ime_bakterije: "FEZ", antibiotici: "Ne postoji antibiotik" },
    { id: 24, ime_bakterije: "BJP", antibiotici: "Ne postoji antibiotik" },
    { id: 25, ime_bakterije: "AIM", antibiotici: "Ne postoji antibiotik" },
    { id: 26, ime_bakterije: "THIN", antibiotici: "Ne postoji antibiotik" },
    { id: 27, ime_bakterije: "GOB", antibiotici: "Ne postoji antibiotik" },
    { id: 28, ime_bakterije: "CAU", antibiotici: "Ne postoji antibiotik" },
    { id: 29, ime_bakterije: "CAR", antibiotici: "Ne postoji antibiotik" },
    { id: 30, ime_bakterije: "SMB", antibiotici: "Ne postoji antibiotik" },
    { id: 31, ime_bakterije: "POM", antibiotici: "Ne postoji antibiotik" },
    { id: 32, ime_bakterije: "CRB", antibiotici: "Ne postoji antibiotik" },
    { id: 33, ime_bakterije: "SBL", antibiotici: "Ne postoji antibiotik" },
    { id: 34, ime_bakterije: "AmpC", antibiotici: "Ampicilin-sulbaktam, Ceftolozan-tazobakta, Ceftazidim-avibaktam, Imipenem sa cilastatinom - relebaktam, Meropenem-vaborbaktam, Cefiderokol" },
    { id: 35, ime_bakterije: "ACT", antibiotici: "Ne postoji antibiotik" },
    { id: 36, ime_bakterije: "DHA", antibiotici: "Ne postoji antibiotik" },
    { id: 37, ime_bakterije: "CMY", antibiotici: "Imipenem sa cilastatinom - relebaktam" },
    { id: 38, ime_bakterije: "ADC", antibiotici: "Ne postoji antibiotik" },
    { id: 39, ime_bakterije: "FOX", antibiotici: "Ceftazidim-avibaktam" },
    { id: 40, ime_bakterije: "AAC", antibiotici: "Ceftazidim-avibaktam" },
    { id: 41, ime_bakterije: "OXA-48", antibiotici: "Ceftazidim-avibaktam, Cefiderokol" },
    { id: 42, ime_bakterije: "OXA-23", antibiotici: "Cefiderokol" },
    { id: 43, ime_bakterije: "OXA-24/40", antibiotici: "Cefiderokol" },
    { id: 44, ime_bakterije: "OXA-17", antibiotici: "Ne postoji antibiotik" },
    { id: 45, ime_bakterije: "OXA-51", antibiotici: "Ne postoji antibiotik" },
    { id: 46, ime_bakterije: "OXA-58", antibiotici: "Ne postoji antibiotik" },
    { id: 47, ime_bakterije: "OXA-143", antibiotici: "Ne postoji antibiotik" },
    { id: 48, ime_bakterije: "OXA-235", antibiotici: "Ne postoji antibiotik" },
  ];

  data.forEach(item => {
    store.put(item);
  });

  const bakterijaSelects = document.querySelectorAll(".bakterijaSelect");
  const imenaBakterija = [];
  const imenaBakterijaIndex = store.index("ime_bakterije_index");
  const getImenaBakterijaRequest = imenaBakterijaIndex.openKeyCursor();

  getImenaBakterijaRequest.onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
      imenaBakterija.push(cursor.key);
      cursor.continue();
    } else {
      bakterijaSelects.forEach(select => {
        imenaBakterija.forEach(imeBakterije => {
          const option = document.createElement("option");
          option.value = imeBakterije;
          option.text = imeBakterije;
          select.appendChild(option);
        });
      });

      setupSelectChangeListeners(request);
    }
  };

  getImenaBakterijaRequest.onerror = function () {
    const error = getImenaBakterijaRequest.error;
    console.log("Greška pri dobijanju imena bakterija:", error);
  };
}


function setupSelectChangeListeners(request) {
  const bakterijaSelects = document.querySelectorAll(".bakterijaSelect");
  bakterijaSelects.forEach(select => {
    select.addEventListener("change", function () {
      performQuery(this.value, request, select);
    });
  });
}

function performQuery(selectedOption, request, select) {

  if (selectedOption === "") {
    const resultsParagraph = document.getElementById(select.dataset.resultParagraph);
    resultsParagraph.textContent = "Ne postoji antibiotik.";
    return;
  }

  const db = request.result;
  const transaction = db.transaction("antibiotici", "readonly");
  const store = transaction.objectStore("antibiotici");
  const index = store.index("ime_bakterije_index");
  const getRequest = index.getAll(selectedOption);

  getRequest.onsuccess = function () {
    const antibiotici = getRequest.result;
    const imenaAntibiotika = antibiotici[0].antibiotici;

    if (imenaAntibiotika.includes(',')) {
      const antibioticiNiz = imenaAntibiotika.split(', ');
      const resultsParagraph = document.getElementById(select.dataset.resultParagraph);

      resultsParagraph.innerHTML = "";

      antibioticiNiz.forEach(antibiotik => {
        const antibiotikParagraph = document.createElement("p");
        antibiotikParagraph.textContent = antibiotik;
        resultsParagraph.appendChild(antibiotikParagraph);
      });
    } else {
      const resultsParagraph = document.getElementById(select.dataset.resultParagraph);
      resultsParagraph.textContent = imenaAntibiotika;
    }
  };

  getRequest.onerror = function () {
    const error = getRequest.result;
    console.log(`Greška:` + error);
  };
}