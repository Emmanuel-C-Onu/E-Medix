let closeNewsLetterAds = document.querySelector(".close-news-letter-ads");
let newsLetterForm = document.getElementById("news-letter-form");
let success = document.getElementById("success");
let newsLetterAds = document.querySelector(".news-letter-ads");

let menu = document.querySelector(".menu");
let nav2 = document.querySelector(".nav2");
let menuButton = document.querySelector(".menu-button");
let bottomNav = document.querySelector(".move-to-botton");
let back2Top = document.querySelector(".back-to-top");

let header = document.querySelector("header");
let removeMobileMenu = () => menu.classList.remove("max-h-[250px]");

setTimeout(() => {
  newsLetterAds.classList.toggle("-translate-y-[2000px]");
}, 20000);

newsLetterForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let subscribeInput = document.getElementById("subscribe-input");
  let emailErr = document.querySelector(".emailErr");
  let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  let isValid = true;
  emailErr.textContent = "";

  if (subscribeInput.value === "") {
    emailErr.textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(subscribeInput.value)) {
    emailErr.textContent = "Invalid Email";
    isValid = false;
  } else {
    isValid = true;
    closeSubModal();
    setTimeout(() => {
      success.classList.remove("h-0");
    }, 1000);
    setTimeout(() => {
      success.classList.add("h-0");
    }, 6000);
  }
});

header.onmouseleave = removeMobileMenu;
window.addEventListener("scroll", () => {
  scrollY > 30
    ? (back2Top.classList.remove("h-0"),
      nav2.classList.add("fixed"),
      nav2.classList.add("bg-blue-50"))
    : (back2Top.classList.add("h-0"),
      nav2.classList.remove("fixed"),
      nav2.classList.remove("bg-blue-50"));
});
back2Top.addEventListener("click", b2t);

function b2t() {
  scrollTo({ top: 0, behavior: "smooth" });
  
}

closeNewsLetterAds.addEventListener("click", closeSubModal);

function closeSubModal() {
  newsLetterAds.classList.toggle("-translate-y-[2000px]");
  b2t();
}
menuButton.addEventListener("click", () =>{
  menu.classList.toggle("max-h-[250px]"),
b2t()
});

let getStarted1 = document.getElementById("getStarted1");
let getStarted2 = document.getElementById("getStarted2");
let getStartedBTN = document.getElementById("getStartedBTN");
let closeGetStartedBTN = document.querySelector(".closeGetStartedBTN");
let continueGetStartedBTN = document.querySelector(".continueGetStartedBTN");
let privacyProtection = document.querySelector(".data-protection-page");

getStartedBTN.addEventListener("click", getStarted);
closeGetStartedBTN.addEventListener("click", closeGetStarted);
continueGetStartedBTN.addEventListener("click", continueGetStarted);

function getStarted() {
  getStarted1.classList.toggle("hidden");
  privacyProtection.classList.toggle("hidden");
}
function closeGetStarted() {
  getStarted1.classList.toggle("hidden");
  privacyProtection.classList.toggle("hidden");
}
function continueGetStarted() {
  privacyProtection.classList.toggle("hidden");
  getStarted2.classList.toggle("hidden");
}

const AntiBoil = [
  "Lincomycin 500mg",
  "RYCIN-500",
  "Ampiclox 500mg",
  "Ampicillin 500mg",
  "Ampicap-500",
  "Cloxacap-500",
];
const wormTab = ["Ketrax (Leavamisole)", "Zolat-200", "Mebendazole-500", "Albendazole-200"];

const AntiTyphoid = [
  "Cyplox 500mg",
  "Fleming 625mg",
  "CiproTab 500mg",
  "Zepro 500mg",
  "Augmentin 625mg",
  "Cenox Cyprofloxacine 500mg",
];

const AntiScabis = [
  "Erythromycin 500mg",
  "Azithromycin 500mg",
  "Cmaxid-500",
  "Celexin-500",
];
const AntiSTD = [
  "Cyprofloxacin-TN",
  "CiproTab-TN",
  "Cephalexin-500",
  "Ofloxacin-500",
  "Flovid-200",
  "Lefovid-500",
  "Levofloxacin-500",
];
const AntiCough = [
  "Emtrim 960mg",
  "Cotrimoxazole 960mg",
  "RYCIN 500mg",
  "Amoxicap 500mg",
  "Primpex 960mg",
  "Erythromycin 500mg",
  "Azimax 500mg",
  "Azithromycin 500mg",
];
const AntiDiarriah1 = [
  "Tetracycline 500mg",
  "doxycycline 100mg",
  "DoxyCap 100mg",
];
const AntiDiarriah2 = [
  "Emgyl 400mg",
  "Loxagyl 400mg",
  "metronidazole 400mg",
  "Nizole 400mg",
];
// const StomachAche = ["Emgyl-400", "Buscopan-10", "metronidazole", "Nizole-200"];
const Antihistamine = [
  "Sivo-Loratadin 10mg",
  "Loratadin-10mg",
  "Contact 4mg",
  "Actifed 4mg",
  "Sinufed 4mg"
];
const mildAnagelsic = [
  "Paracetamol 500mg (Emzor)",
  "Paracetamol 500mg",
  "Panadol 500mg",
  "Emcap 500mg",
  "Paracetamol 500mg (M&B)",
];
const ExtraAnagelsic = ["Boska", "Sudrex", "Panadol-Extra", "Emcap Extra"];
const strongAnagelsic = [
  "Brustan-N",
  "Cataflam 100mg",
  "Clofenac 100mg",
  "Felvin 20mg",
  "Flotac 75mg",
  "Dolo-Meta-B",
  "Ibex",
  "Ibucap Fort",
  "Emprofen-400",
  "Piroxicam 20mg",
];
const AntiMal = [
  "LUTER-80/480",
  "Amatem-Soft-Gel 80/480",
  "Amatem-Fort 80/480",
  "Gevither-plus 80/480",
  "Lokmal-QS 80/480",
  "IBUMATEM 80/480",
  "Lonart-DS 80/480",
  "Coatel-Fort 80/480",
  "Coartem 80/480",
];
const fungai = ["Ketovid-200", "Griseofulvin-500", "Fungral-200"];

const Ulcer = [
  "Omeprazole-20",
  "ULSAKIT",
  "pantoprazole",
  "Cemetedin-400",
  "OMEFAST PLUS",
  "OMESHAL PLUS KIT",
  "ESOFAG-KIT",
  "ULCERDREX",
  "PYLOKIT",
  "ACIKIT",
];

document.addEventListener("DOMContentLoaded", () => {
  // const patientName = document.getElementById("name");
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, idx) => {
      step.classList.toggle("hidden", idx !== index);
    });
  }

  function validateStep() {
    let isValid = true;
    if (currentStep === 0) {
      const name1 = document.getElementById("What-brings-you-here");
      const name2 = document.getElementById("When-did-it-start");
      const name3 = document.getElementById("first-time");
      document.getElementById("why-here1").classList.add("hidden");
      document.getElementById("why-here2").classList.add("hidden");
      document.getElementById("why-here3").classList.add("hidden");

      if (name1.value === "") {
        document.getElementById("why-here1").classList.remove("hidden");
        isValid = false;
      }

      if (name2.value === "") {
        document.getElementById("why-here2").classList.remove("hidden");
        isValid = false;
      }

      if (name3.value === "") {
        document.getElementById("why-here3").classList.remove("hidden");
        isValid = false;
      }
    }

    if (currentStep === 1) {
      const patientName = document.getElementById("name").value;
      const gender = document.getElementById("gender").value;
      const age = document.getElementById("age").value;
      document.getElementById("nameErr").classList.add("hidden");
      document.getElementById("genderErr").classList.add("hidden");
      document.getElementById("ageErr").classList.add("hidden");

      if (patientName === "") {
        document.getElementById("nameErr").classList.remove("hidden");
        isValid = false;
      } else {
        localStorage.setItem("nameOfpatient", patientName);
      }
      if (gender === "") {
        document.getElementById("genderErr").classList.remove("hidden");
        isValid = false;
      } else {
        localStorage.setItem("genderOfpatient", gender);
      }

      if (age === "") {
        document.getElementById("ageErr").classList.remove("hidden");
        isValid = false;
      } else {
        localStorage.setItem("ageOfpatient", age);
      }
    }

    if (currentStep === 2) {
      const bloodGroup = document.getElementById("blood-group").value;
      const onDrug = document.getElementById("on-drug");
      const drugAllergies = document.getElementById("drug-allergy");
      document.getElementById("blood-group-Err").classList.add("hidden");
      document.getElementById("on-drug-Err").classList.add("hidden");
      document.getElementById("drug-allergy-Err").classList.add("hidden");

      if (bloodGroup === "") {
        document.getElementById("blood-group-Err").classList.remove("hidden");
        isValid = false;
      } else {
        localStorage.setItem("genotypeOfpatient", bloodGroup);
      }
      if (onDrug.value === "") {
        document.getElementById("on-drug-Err").classList.remove("hidden");
        isValid = false;
      }
      if (drugAllergies.value === "") {
        document.getElementById("drug-allergy-Err").classList.remove("hidden");
        isValid = false;
      }
    }

    if (currentStep === 3) {
      const married = document.getElementById("married");
      const iHaveKids = document.getElementById("i-have-kids");
      const Pregnant = document.getElementById("Pregnant");
      document.getElementById("marriedErr").classList.add("hidden");
      document.getElementById("iHaveKidsErr").classList.add("hidden");
      document.getElementById("PregnantErr").classList.add("hidden");

      if (married.value === "") {
        document.getElementById("marriedErr").classList.remove("hidden");
        isValid = false;
      }
      if (iHaveKids.value === "") {
        document.getElementById("iHaveKidsErr").classList.remove("hidden");
        isValid = false;
      }
      if (Pregnant.value === "") {
        document.getElementById("PregnantErr").classList.remove("hidden");
        isValid = false;
      }
    }
    return isValid;
  }

  document.querySelectorAll(".next").forEach((button) => {
    button.addEventListener("click", () => {
      if (validateStep()) {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      }
    });
  });

  //without Validation
  //  document.querySelectorAll(".next").forEach((button) => {
  //    button.addEventListener("click", () => {
  //      if (currentStep < steps.length - 1) {
  //        currentStep++;
  //        showStep(currentStep);
  //      }
  //    });
  //  });

  document.querySelectorAll(".prev").forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  document.getElementById("multistepForm").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("hideTwo").classList.add("hidden");
    document.getElementById("hide3").classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("hide3").classList.add("hidden");
      document.getElementById("hide3b").classList.remove("hidden");
    }, 6000);
    setTimeout(() => {
      document.getElementById("hide3b").classList.add("hidden");
      document.getElementById("hide4").classList.remove("hidden");
    }, 11000);

    setTimeout(() => {
      diagnosis();
    }, 15000);
  });

  showStep(currentStep);
});

const diagnosis = () => {
  
  const Name = localStorage.getItem("nameOfpatient");
  const Age = localStorage.getItem("ageOfpatient");
  const Gender = localStorage.getItem("genderOfpatient");
  const Genotype = localStorage.getItem("genotypeOfpatient");
/*
 
  
  
  
  const DiarriahDrug1 = AntiDiarriah1[Math.floor(Math.random() * AntiDiarriah1.length)];
  const DiarriahDrug2 = AntiDiarriah2[Math.floor(Math.random() * AntiDiarriah2.length)];
  const UlcerDrug = Ulcer[Math.floor(Math.random() * Ulcer.length)];
*/
  document.getElementById("hide4").classList.add("hidden");
  document.getElementById("hideOne").classList.remove("lg:block");
  document.getElementById("hide3").classList.add("hidden");
  document.getElementById("getStarted").classList.add("hidden");
  

 document.getElementById("showResult").innerHTML += `
       <article class="w-[100%] m-auto">
        <div class="bg-blue-950 text-white h-14 grid place-items-center font-bold rounded-t-lg">
          PATIENT INFORMATION
        </div>
    
        <div>
          <div class=" overflow-x-auto shadow-md">
            <table class="w-full text-sm text-left rtl:text-right text-white">
              <thead class="text-xs text-white uppercase bg-[#305A89]">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Patient Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                  Patient Age range
                  </th>
                  <th scope="col" class="px-6 py-3">
                   Gender
                  </th>
                  <th scope="col" class="px-6 py-3">
                    blood group
                  </th>
                </tr>
              </thead>
              <tbody>
    
                <tr class="bg-blue-200 text-black">
                  <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                   ${Name}
                  </th>
                  <td class="px-6 py-4">
                   ${Age}
                  </td>
                  <td class="px-6 py-4">
                    ${Gender}
                  </td>
                  <td class="px-6 py-4">
                    ${Genotype}
                  </td>
    
                </tr>
    
              </tbody>
    
            </table>
          </div>
    
        </div>
      </article>
       <div class="bg-blue-950 text-white h-14 grid place-items-center font-bold">
        E-MEDIX PRESCRIPTION
      </div>
      <div>
        <div class="overflow-x-auto shadow-md">
          <table class="w-full text-sm text-left rtl:text-right text-white">
            <thead class="text-xs text-white uppercase bg-[#305A89]">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Medication
                </th>
                <th scope="col" class="px-6 py-3">
                  Dosage
                </th>
                <th scope="col" class="px-6 py-3">
                  Frequency
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody id="medBody"></tbody>
            
      `;

  showDrugs();
/*

document.getElementById("showResult").innerHTML += `
  <div id="container" class="container w-full py-3 flex justify-between items-center">
    <span></span>
    <div class="*:px-3 *:border *:border-gray-400 rounded text-black">
      <button onclick="window.print()">Print</button>
      <button>Cancel</button>
      <button onclick="window.save()">Save</button>
    </div>
  </div>
  `;
  */
};

function showDrugs() {
  const malaria = document.getElementById("malaria").checked;
  const cough = document.getElementById("cough").checked;
  const runnyNose = document.getElementById("runny-nose").checked;
  const vomiting = document.getElementById("vomiting").checked;
  const headache = document.getElementById("hache").checked;
  const soreThroat = document.getElementById("sore-throat").checked;
  const wateryStool = document.getElementById("watery-stool").checked;
  const diarrhea = document.getElementById("diarrhea").checked;
  const wateryEye = document.getElementById("watery-eye").checked;
  const irritatingEye = document.getElementById("irritating-eye").checked;
  const itchyNose = document.getElementById("itchy-nose").checked;
  const hives = document.getElementById("hives").checked;
  const chills = document.getElementById("chills").checked;
  const worm = document.getElementById("worm").checked;
  const weakness = document.getElementById("weakness").checked;
  const menstralPain = document.getElementById("menstral-pain").checked;
  const conjunctivitis = document.getElementById("conjunctivitis").checked;
  const otitisMedia = document.getElementById("otitis-media").checked;
  const chestPain = document.getElementById("chest-pain").checked;
  const toothache = document.getElementById("toothache").checked;
  const stomachPain = document.getElementById("stomach-pain").checked;
  const ringworm = document.getElementById("ringworm").checked;
  const breathingShortage = document.getElementById("breathing-shortage").checked;
  const fever = document.getElementById("fever").checked;
  const bowelMovement = document.getElementById("bowel-movement").checked;
  const cold = document.getElementById("cold").checked;
  const wheezing = document.getElementById("wheezing").checked;
  const typhoid = document.getElementById("typhoid").checked;
  const bloatedStomach = document.getElementById("bloated-stomach").checked;
  const bloodyStool = document.getElementById("bloody-stool").checked;
  const irregularSleep = document.getElementById("irregular-sleep").checked;
  const nausea = document.getElementById("nausea").checked;
  const motionSickness = document.getElementById("motion-sickness").checked;
  const sneezing = document.getElementById("sneezing").checked;
  const highBodyTemp = document.getElementById("highBodyTemp").checked;
  const lightweight = document.getElementById("lightweight").checked;
  const backpain = document.getElementById("backpain").checked;
  const waistpain = document.getElementById("waistpain").checked;
  const eardischarge = document.getElementById("eardischarge").checked;
  const dizzyness = document.getElementById("dizzyness").checked;
  const thrush = document.getElementById("thrush").checked;
  const oversleep = document.getElementById("oversleep").checked;

  if (
   malaria ||
   cough ||
   runnyNose ||
   vomiting ||
   headache ||
   soreThroat ||
   wateryStool ||
   diarrhea ||
   wateryEye ||
   irritatingEye ||
   itchyNose ||
   hives ||
   chills ||
   worm ||
   weakness ||
   menstralPain ||
   conjunctivitis ||
   otitisMedia ||
   chestPain ||
   toothache ||
   stomachPain ||
   ringworm ||
   breathingShortage ||
   fever ||
   bowelMovement ||
   cold ||
   wheezing ||
   typhoid ||
   bloatedStomach ||
   bloodyStool ||
   irregularSleep ||
   nausea ||
   motionSickness ||
   sneezing ||
   highBodyTemp ||
   lightweight ||
   backpain ||
   waistpain ||
   eardischarge ||
   dizzyness ||
   thrush ||
   oversleep
 ) {

  if (document.getElementById("container").classList.contains("hidden")) {
     document.getElementById("container").classList.remove("hidden");
  }

   if (
     malaria ||
     fever ||
     chills ||
     oversleep ||
     highBodyTemp ||
     irregularSleep ||
     lightweight ||
     motionSickness ||
     breathingShortage
   ) {
     const malariaDrug = AntiMal[Math.floor(Math.random() * AntiMal.length)];
     document.getElementById("medBody").innerHTML += `
     <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${malariaDrug}
                </th>
                <td class="px-6 py-4">
                  1
                </td>
                <td class="px-6 py-4">
                  2 times
                </td>
                <td class="px-6 py-4">
                  3 days
                </td>
     
     `;
   }
   if (
     runnyNose ||
     irritatingEye ||
     itchyNose ||
     wateryEye ||
     otitisMedia ||
     cold ||
     wheezing ||
     sneezing ||
     hives
   ) {
     const catarrhDrug =
       Antihistamine[Math.floor(Math.random() * Antihistamine.length)];
     document.getElementById("medBody").innerHTML += `
   <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${catarrhDrug}
                </th>
                <td class="px-6 py-4">
                 1
                </td>
                <td class="px-6 py-4">
                 2 times
                </td>
                <td class="px-6 py-4">
                  5 - 7 days
                </td>   
              </tr>
   
   `;
   }
   if (cough || eardischarge) {
     const coughDrug = AntiCough[Math.floor(Math.random() * AntiCough.length)];
     document.getElementById("medBody").innerHTML += `
   <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${coughDrug}
                </th>
                <td class="px-6 py-4">
                 1
                </td>
                <td class="px-6 py-4">
                 2 times
                </td>
                <td class="px-6 py-4">
                  5 - 7 days
                </td>   
              </tr>
   
   `;
   }
   if (
     vomiting ||
     wateryStool ||
     diarrhea ||
     bowelMovement ||
     bloatedStomach ||
     nausea
   ) {
     const diarriahDrug =
       AntiDiarriah2[Math.floor(Math.random() * AntiDiarriah2.length)];
     document.getElementById("medBody").innerHTML += `
   <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${diarriahDrug}
                </th>
                <td class="px-6 py-4">
                 1
                </td>
                <td class="px-6 py-4">
                 2 times
                </td>
                <td class="px-6 py-4">
                  5 - 7 days
                </td>   
              </tr>
   
   `;
   }
   if (
     headache ||
     malaria ||
     fever ||
     chills ||
     oversleep ||
     highBodyTemp ||
     irregularSleep ||
     lightweight ||
     motionSickness ||
     breathingShortage
   ) {
     const painKiller =
       mildAnagelsic[Math.floor(Math.random() * mildAnagelsic.length)];
     document.getElementById("medBody").innerHTML += ` 
                <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${painKiller}
                </th>
                <td class="px-6 py-4">
                 2
                </td>
                <td class="px-6 py-4">
                  Every 4-5 hours
                </td>
                <td class="px-6 py-4">
                  3-7 days
                </td>    
              </tr>
      `;
   }

   if (soreThroat || conjunctivitis || thrush) {
     const boilDrugs = AntiBoil[Math.floor(Math.random() * AntiBoil.length)];
     document.getElementById("medBody").innerHTML += ` 
                <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${boilDrugs}
                </th>
                <td class="px-6 py-4">
                 2
                </td>
                <td class="px-6 py-4">
                  Every 4-5 hours
                </td>
                <td class="px-6 py-4">
                  3-7 days
                </td>    
              </tr>
      `;
   }

   if (menstralPain || toothache || stomachPain || backpain || waistpain) {
     const strongPainRelif =
       strongAnagelsic[Math.floor(Math.random() * strongAnagelsic.length)];

     document.getElementById("medBody").innerHTML += ` 
                <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${strongPainRelif}
                </th>
                <td class="px-6 py-4">
                 1
                </td>
                <td class="px-6 py-4">
                  2 times
                </td>
                <td class="px-6 py-4">
                  3-7 days
                </td>    
              </tr>
      `;
   }

   if (bloodyStool || chestPain) {
     const ulcerDrugs = Ulcer[Math.floor(Math.random() * Ulcer.length)];

     document.getElementById("medBody").innerHTML += ` 
                <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${ulcerDrugs}
                </th>
                <td class="px-6 py-4">
                 Ask Pharmacist
                </td>
                <td class="px-6 py-4">
                  Ask Pharmacist
                </td>
                <td class="px-6 py-4">
                 Ask Pharmacist
                </td>    
              </tr>
      `;
   }

   if (ringworm) {
     const ringwormDrug = fungai[Math.floor(Math.random() * fungai.length)];

     document.getElementById("medBody").innerHTML += ` 
                <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${ringwormDrug}
                </th>
                <td class="px-6 py-4">
                 1
                </td>
                <td class="px-6 py-4">
                 once a day
                </td>
                <td class="px-6 py-4">
                 14 -21 days
                </td>    
              </tr>
      `;
   }

   if (worm || dizzyness || weakness) {
     const wormRelif = wormTab[Math.floor(Math.random() * wormTab.length)];

     document.getElementById("medBody").innerHTML += ` 
                <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${wormRelif}
                </th>
                <td class="px-6 py-4">
                 Ask Pharmacist
                </td>
                <td class="px-6 py-4">
                  Ask Pharmacist
                </td>
                <td class="px-6 py-4">
                  Ask Pharmacist
                </td>    
              </tr>
      `;
   }

   if (typhoid) {
     const AntiTyphoidDrug =
       AntiTyphoid[Math.floor(Math.random() * AntiTyphoid.length)];

     document.getElementById("medBody").innerHTML += ` 
                <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                  ${AntiTyphoidDrug}
                </th>
                <td class="px-6 py-4">
                 1
                </td>
                <td class="px-6 py-4">
                  2 times
                </td>
                <td class="px-6 py-4">
                  7-14 days
                </td>    
              </tr>
      `;
   }
 } else{
  if (!document.getElementById("container").classList.contains("hidden")) {
    document.getElementById("container").classList.add("hidden");
  }

 

  document.getElementById("medBody").innerHTML += ` 
                <tr class="border-b-2 border-[blue] text-black">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                 No Symptom Selected
                </th>
                <td class="px-6 py-4">
                 No Symptom Selected
                </td>
                <td class="px-6 py-4">
                 No Symptom Selected
                </td>
                <td class="px-6 py-4">
                  No Symptom Selected
                </td>    
              </tr>
      `;

} 
}
