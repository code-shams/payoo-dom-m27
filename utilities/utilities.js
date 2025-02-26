// Takes two parameters.
// First parameter is the id of the card thats going to clicked and where the even listener is going to be applied to.
// Second parameter is the id of the section that's going to be visible while all the other sections remain hidden.
function handleToggle (cardId, toggleSection){
    document.getElementById(cardId).
    addEventListener("click", function(){
        const hiddenSections = (document.getElementsByClassName("toggle-section"));
        for (const section of hiddenSections) {
            section.style.display = "none";
        }
        document.getElementById(toggleSection).style.display = "block";
    })
}

function updateTransaction (transactionType, amount, account){
    const latestTransactions = document.getElementById("latest-transactions");
    const transaction = document.createElement('div');
    transaction.innerHTML = `
    <div
        class="bg-gray-100 p-2 rounded-sm flex justify-between items-center"
    >
        <div class="flex gap-2 items-center">
            <div>
                <img
                    class="p-2 bg-slate-200 rounded-full"
                    src="./assets/wallet.png"
                    alt=""
                />
            </div>
            <div>
                <h1 class="font-bold text-xs">
                ${transactionType} ${amount} from ${account}
                </h1>
                <p class="font-light text-xs">Today 01:44 AM</p>
            </div>
        </div>
        <div>
            <button>
                <img src="/payoo-dom-m27/assets/threedot.png" alt="" />
            </button>
        </div>
    </div>
    `
    latestTransactions.appendChild(transaction);
}