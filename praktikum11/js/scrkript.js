document.querySelectorAll("a").forEach((a)=>{
    //jika di klik akan menjalankan fungsi computerChoise()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    //pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan kompuet
    let pilihanKomputer = document.querySelector("#result")

    // membuat pilihan kompuer dengan array
    let choices = ["Rock", "Paper", "Scissors"];

    //pilihan rendom untuk koputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan koputer (Draw)
    if(pilihanUser == pilihanKomputer ){
        setTimeout(()=>alert("DRAW"), 3);
    }

    //jika pihan user yang menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WIN");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WIN")
    }
    
    //jika pilihan user yang kalah
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER loss");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER loss");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER loss")
    }
}