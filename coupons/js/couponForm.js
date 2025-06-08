const fixedRadio = document.querySelector("#expire_fixed");
const relativeRadio = document.querySelector("#expire_relative");
const fixedSection = document.querySelector("#fixed_section");
const relativeSection = document.querySelector("#relative_section");

const inputDate = document.querySelectorAll(".input-date");
const validDays = document.querySelector('input[name="valid-days"]');

const dollor = document.querySelector(".dollor");
const discountType = document.querySelector("#discount_type");


document.addEventListener("DOMContentLoaded", () => {
    updateSections();
    fixedRadio.addEventListener("change", updateSections);
    relativeRadio.addEventListener("change", updateSections);
});

// 選擇折扣時 元要不要顯示
discountType.addEventListener("change", () => {
    if (discountType.value == 2) {
        dollor.classList.add("d-none");
    } else {
        dollor.classList.remove("d-none");
    }
});




// 點月曆文字 也會跑出月曆來
inputDate.forEach(input => {
    input.addEventListener("click", (e) => {
        e.target.showPicker?.();
    });
});

function updateSections() {
    if (fixedRadio.checked) {
        fixedSection.classList.remove("d-none");
        relativeSection.classList.add("d-none");

        // 日期 required  設 true
        inputDate.forEach(input => input.required = true);
        validDays.required = false;
    } else if (relativeRadio.checked) {
        relativeSection.classList.remove("d-none");
        fixedSection.classList.add("d-none");

        // 天數 required  設 true
        validDays.required = true;
        inputDate.forEach(input => input.required = false);
    }
}
