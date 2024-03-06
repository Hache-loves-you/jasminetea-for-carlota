const prepareBtn = document.getElementById("prepare-btn");
const teaTypeSelect = document.getElementById("tea-type");
const instructionsDiv = document.getElementById("instructions");
const teaImagesDiv = document.getElementById("tea-images");
const nextStepBtn = document.getElementById("next-step-btn");

const steps = [
    "Prepare tea",
    `Step 1: Let's choose a cute teapot!   Check it out!    I found this paTEAPOT!   I hope you won't use it as an autistic sacrifice.
    We have to put spring water as the first choice and filtered water as the second best choice.   Since you are a student and still can't play Paddle tennis in life like Piratilla, I understand if you put tap water.
    However, spring water is free of chemicals and compounds that can alter flavors.   Using tap water can result in a more bitter tea due to the presence of treatment chemicals such as chlorine.`,
    `Step 2: Since jasmine tea is delicate, it is more sensitive to the temperature of the squirt, I mean, water and should not be prepared with boiled squirt, I mean, boiling water, as you would with regular tea. Instead, heat the water to between 160 and 180 F. That's about 70-80 degrees Celsius mireina. You should have stayed a science major but hey.... YOU HAVE TRAVELED! okay I'll shut up.
    The best way to make sure the temperature is right is to buy an anus thermometer or a kettle with temperature settings. If you don't have either of these handy and Thor is using it to measure his anal temperature, simply use the Chinese chinchon slur racist method of brewing tea and see if bubbles appear. Boobies that are the size of fish eyes and have not come to the surface of the water usually indicate temperatures of 160 to 180 F.`,
    `Step 3: Jasmine flavored tea should be steeped for 2 to 4 minutes (the time it takes you to cum if I touch you), depending on the desired intensity. If you find the jasmine tea too bitter, try using fewer leaves or letting it steep for a shorter time. I recommend letting it steep for 2 minutes at first and taste testing every 30 seconds of squirt to adapt it to your taste preferences.`,
    "Step 4: Choose your favorite teaspoon from these two: the colonizing bear or the little heart extracted from an old ladybug in a vegetable state. Click on the chosen one to take it:)",
    "Step 5: Por el culo te la inco, I mean, I fuck you in the ass. Espero que te haya gustado, con todo mi amor, Hache"
];

let currentStep = 0;
let selectedTeaType = ""; 
let selectedSpoon = ""; 

prepareBtn.addEventListener("click", function() {
    selectedTeaType = teaTypeSelect.value;
    showNextStep();
});

nextStepBtn.addEventListener("click", function() {
    showNextStep();
});

function showNextStep() {
    currentStep++;
    if (currentStep === 1) {
        prepareBtn.style.display = 'none';
        nextStepBtn.style.display = 'inline-block';
    }
    if (currentStep < steps.length) {
        showStep(steps[currentStep]);
        if (currentStep === steps.length - 1) {
            nextStepBtn.textContent = 'Finish';
        }
    }
}

function showStep(instruction) {
    instructionsDiv.textContent = instruction;
    teaImagesDiv.innerHTML = '';
    switch (currentStep) {
        case 0:
            teaImagesDiv.innerHTML = '';
            nextStepBtn.disabled = true;
            break;
        case 1:
            teaImagesDiv.innerHTML = `<img src="tea images/duck-teapot.png" alt="Duck Teapot">`;
            nextStepBtn.disabled = false;
            break;
        case 2:
            teaImagesDiv.innerHTML = `<img src="tea images/boiling.png" alt="Boiling">`;
            nextStepBtn.disabled = false;
            break;
        case 3:
            teaImagesDiv.innerHTML = `<img src="tea images/colador.png" alt="Colador">`;
            if (selectedTeaType === "dragon-pearls") {
                teaImagesDiv.innerHTML = `<img src="tea images/dragon-pearls-bg.png" alt="Dragon Pearls Tea">`;
            } else if (selectedTeaType === "organic-china") {
                teaImagesDiv.innerHTML = `<img src="tea images/organic-china-bg.png" alt="Organic China Tea">`;
            } else if (selectedTeaType === "white") {
                teaImagesDiv.innerHTML = `<img src="tea images/white-bg.png" alt="White Tea">`;
            }
            nextStepBtn.disabled = false;
            break;
        case 4:
            instructionsDiv.textContent = instruction;
            teaImagesDiv.innerHTML = `
                <img src="tea images/spoon-bear.png" alt="Spoon Bear" onclick="selectSpoon('bear')">
                <img src="tea images/spoon-heart.png" alt="Spoon Heart" onclick="selectSpoon('heart')">
            `;
            nextStepBtn.disabled = true;
            break;
        case 5:
            instructionsDiv.textContent = instruction;
            teaImagesDiv.innerHTML = `<img src="tea images/cats.png" alt="Cats">`;
            if (selectedSpoon === 'bear') {
                teaImagesDiv.innerHTML = `<img src="tea images/spoon-bear.png" alt="Spoon Bear">`;
            } else if (selectedSpoon === 'heart') {
                teaImagesDiv.innerHTML = `<img src="tea images/spoon-heart.png" alt="Spoon Heart">`;
            }
            nextStepBtn.disabled = true;
            break;
        default:
            break;
    }
}

function selectSpoon(type) {
    selectedSpoon = type;
    showNextStep();
}
