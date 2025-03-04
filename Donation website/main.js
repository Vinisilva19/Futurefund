function donate(event) {
    let moneyDonated = document.getElementById("money-donated");
    let amountDonating = event.target.innerText;
    let invalid = /^[A-Za-z]+$/ ;

    alert(`You have clicked to donate ${amountDonating}`);
    let name = prompt("Insert your user name please.");
    if ( !name || !invalid.test(name)) {
       alert("your name should only have letters, try again");
       return;
        
    } 

         alert(` ${name} just confirm your donation.`);
     
     moneyDonated.innerHTML = `${amountDonating} - ${name}`;


      
}



function sendMsg() {
    let publicMsg = document.getElementById("h2-msg");
    let userMsgSent = document.getElementById("p-msg");

    let userMsg = prompt("Your message can be viewed by others, please make it appropriate and usefull!");

    publicMsg.innerHTML = "Thank you for your message.";
    userMsgSent.innerHTML = `"${userMsg}." -You `;


}