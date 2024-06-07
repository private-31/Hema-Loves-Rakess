const container = document.querySelector(".container");

document.querySelector(".yes-btn").addEventListener("click", () => {
    container.innerHTML = `
                    <i class="fa-solid fa-heart"></i>
                    <h2 class="msg">You love Rakesss?</h2>
                    <div class="button-box">
                        <button class="yes-btn" onclick = "HemaSaidYes()">Yes</button>
                        <button class="no-btn" id="this-button" onmouseover = "relocate()" onclick = "relocate()">No</button>
                    </div>
                `;
});

document.querySelector(".no-btn").addEventListener("click", () => {
    container.innerHTML = `<i class="fa-solid fa-question"></i>
                            <h2 class="msg">juss press yessss 😑</h2>
                            <div class="button-box">
                                <button class="yes-btn" onclick = "HemaSaidYesNow()">Yes</button>
                                <button class="no-btn" onclick = "HemaSaidYesNow()">Yes</button>
                            </div>
                        `;
});

let HemaSaidYes = () => {
    container.innerHTML = `<h2 class="msg">I knew it 🌚</h2>`;
};

let HemaSaidYesNow = () => {
    container.innerHTML = `<i class="fa-solid fa-heart"></i>
                            <h2 class="msg">You love Rakesss?</h2>
                            <div class="button-box">
                                <button class="yes-btn" onclick = "HemaSaidYes()">Yes</button>
                                <button class="no-btn" id="this-button" onmouseover = "relocate()" onclick = "relocate()">No</button>
                            </div>`;
};

let relocate = () => {
    let nobtn = document.querySelector("#this-button");
    const containerRect = container.getBoundingClientRect();
    const btnRect = nobtn.getBoundingClientRect();

    let newLeft, newTop;

    do {
      newLeft = Math.random() * (containerRect.width - btnRect.width);
      newTop = Math.random() * (containerRect.height - btnRect.height);
    } while (
      Math.abs(newLeft - btnRect.left) < 50 &&
      Math.abs(newTop - btnRect.top) < 50
    );

    nobtn.style.left = `${newLeft}px`;
    nobtn.style.top = `${newTop}px`;
};