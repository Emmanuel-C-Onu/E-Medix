let closeNewsLetterAds = document.querySelector(".close-news-letter-ads");
let newsLetterForm = document.getElementById("news-letter-form");
let newsLetterAds = document.querySelector(".news-letter-ads");
//let subscribeInput = document.getElementById("subscribe-input");

let menu = document.querySelector(".menu");
let nav2 = document.querySelector(".nav2");
let menuButton = document.querySelector(".menu-button");
let bottomNav = document.querySelector(".move-to-botton");
let back2Top = document.querySelector(".back-to-top");

let emailError = document.querySelector(".emailErr");
let header = document.querySelector('header')
let removeMobileMenu = () => menu.classList.remove("max-h-[250px]");


setTimeout(() => {
    newsLetterAds.classList.toggle("-translate-y-[1000px]")
  }, 20000);


header.onmouseleave = removeMobileMenu;
window.addEventListener("scroll", () => {
    scrollY > 300
      ? (back2Top.classList.remove("h-0"),
        nav2.classList.add("fixed"),
        nav2.classList.add("bg-blue-50"))
      : (back2Top.classList.add("h-0"),
        nav2.classList.remove("fixed"),
        nav2.classList.remove("bg-blue-50"));
    
});
back2Top.addEventListener("click", () => {scrollTo({ top: 0, behavior: "smooth" })});

closeNewsLetterAds.addEventListener("click", () => newsLetterAds.classList.toggle("-translate-y-[1000px]"));
menuButton.addEventListener("click", () => menu.classList.toggle("max-h-[250px]"));

let getStarted1 = document.getElementById("getStarted1")
let getStarted2 = document.getElementById("getStarted2")
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


const Boil = [
  "Lincomycins",
  "RYCIN-500",
  "Ampiclox",
  "Ampicillin",
  "Ampicap-500",
  "Cloxacap-500",
];

const Typhoid = [
  "Cyplox-500",
  "Fleming-1000",
  "CiproTab",
  "Zepro-500",
  'Augmentin-625',
  'Cenox Cyprofloxacine'
];

const Scabis = [
  "Erythromycin",
  "Azithromycin",
  "Cmaxid-500",
  "Celexin-500",
];
const STD = [
  "Cyprofloxacin-TN",
  "CiproTab-TN",
  "Cephalexin-500",
  "Ofloxacin-500",
  "Flovid-200",
  "Lefovid-500",
  "Levofloxacin-500",
];
const Cough = [
  "Emtrim-960",
  "Cotrimoxazole",
  "RYCIN-500",
  "Amoxicap-500",
  "Primpex-960",
  "Erythromycin",
  "Azimax-250",
  "Azithromycin",
];
const Diarriah1 = [
  "Tetracycline",
  "doxycycline",
  "DoxyCap",
];
const Diarriah2 = [
  "Emgyl-400",
  "Loxagyl-400",
  "metronidazole",
  "Nizole-200",
];
const StomachAche = [
  "Emgyl-400",
  "Buscopan-10",
  "metronidazole",
  "Nizole-200",
];
const Cattarh = [
  'Sivo-Loratadin',
  'Loratadin-10',
  "Contact",
  "Flu-j",
  "Actifed",
  "Sinufed",
  "Procold",
];
const mildAnagelsic = [
  "Emzor-Paracetamol-500",
  "Panadol",
  "Emzor Para1000",
  "Emcap",
  "Boska",
  "Sudrex",
  "Paracetamol-M&B",
];
const strongAnagelsic = [
  "Brustan-N",
  "Cataflam-50",
  "Panadol-Extra",
  "Clofenac-50",
  "Felvin-20",
  "Flotac-75",
  "Dolo-Meta-B",
  "Ibex",
  "Ibucap Fort",
  "Emprofen-400",
];
const AntiMal = [
  'LUTER-80/480', 
  'Amatem-Soft-Gel 80/480', 
  'Amatem-Fort 80/480', 
  'Gevither-plus 80/480', 
  'Lokmal-QS 80/480', 
  'IBUMATEM 80/480', 
  'P-Alaxin', 
  'P-Alaxin TS', 
  'Lonart-DS 80/480', 
  'Coatel-Fort',
  'Coartem 80/480' 
]
const fungai = [
  "Ketovid-200",
  "Griseofulvin-500",
  "Fungral-200",
];

// let fun1 = () => console.log(Math.floor(Math.random() * 10));
// fun1();

const Ulcer = ["Omeprazole-20", 'pantoprazole', "Cemetedin-400", "Misoprostol"];


 document.addEventListener("DOMContentLoaded", () => {
   const steps = document.querySelectorAll(".step");
   let currentStep = 0;

   function showStep(index) {
     steps.forEach((step, idx) => {
       step.classList.toggle("hidden", idx !== index);
     });
   }

   document.querySelectorAll(".next").forEach((button) => {
     button.addEventListener("click", () => {
       if (currentStep < steps.length - 1) {
         currentStep++;
         showStep(currentStep);
       }
     });
   });

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
     alert("Form submitted!");
   });

   showStep(currentStep);
 });
 