const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const tabs = document.querySelectorAll('.tab');
const steps = document.querySelectorAll('.step');
const st0 = document.querySelectorAll('.st0');

let counter = 0;
showTab(counter);

nextBtn.addEventListener('click', () => {
    counter += 1;
    showTab(counter);
});

prevBtn.addEventListener('click', () => {
    counter -= 1;
    showTab(counter);
});

function showTab(counter) {
    tabs.forEach((tab) => {
        tab.className = "tab";
    });
    tabs[counter].className = "current__tab";

    stepCounter(counter);

    if (counter == 0) {
        prevBtn.style.display = "none"
        nextBtn.style.display = "inline-block"
    } else if (counter == 3) {
        nextBtn.style.display = "none"
        prevBtn.style.display = "inline-block"
    } else {
        prevBtn.style.display = "inline-block"
        nextBtn.style.display = "inline-block"
    }
}


function stepCounter(counter) {
    steps.forEach((step) => {
        step.className.replace(" active", "");;
    });

    steps[counter].className += " active";
}

steps.forEach((step) => {
    step.addEventListener('click', () => {
        let step_index = Array.prototype.indexOf.call(steps, step);
        showTab(step_index);
    });
});

st0.forEach((st) => {
    st.addEventListener('click', () => {
        let st0_index = Array.prototype.indexOf.call(st0, st);
        console.log(st0_index)
    });
});