// C'est pour recup les informations tout en bas de la page
  document.getElementById('nom').addEventListener('input', nom);
  document.getElementById('tel').addEventListener('input', tel);
  document.getElementById('email').addEventListener('input', email);



// Debut pour recup les informations tout en bas de la page
function nom() {
    var nom = document.getElementById("nom").value;
    document.getElementById("output").innerHTML =  nom;
}

function tel() {
    var tel = document.getElementById("tel").value;
    document.getElementById("put").innerHTML =  tel;
}

function email() {
    var email = document.getElementById("email").value;
    document.getElementById("mail").innerHTML =  email;
}

// Fin pour recup les informations tout en bas de la page

/** Date */
const date = document.getElementById('date');
const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
let prefixDay = currentDay < 10 ? '0' + currentDay : currentDay;
let prefixMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
const currentDate = `${currentYear}-${prefixMonth}-${prefixDay}`;
date.value = currentDate;
// date.max = currentDate;
// date.min = currentDate;


function imprimer_page(){
    window.print();
}

var mySociety = [           // Tableau des différentes sociétés
    'Netscape 2.0', 'Netscape AOL', '19 avenue de choisy', '75013, Paris','01 45 86 70 58',
    'You and I production', 'Dupont','6 rue Gassendi', '75014, Paris', '01 45 90 52 41',
    'Starcraft Unity', 'Artosis', '151 rue de Grenelle', '75007, Paris', '01 45 85 21 60',
    'Godus', 'Moulineau', '13 quai Voltaire', '75007, Paris', '01 45 20 47 90',
];

var nouveau1 = message.options[0];
nouveau1.text = "Nouveau client"
var nouveau3 = message.options[1];
nouveau3.text = "Netscape 2.0"
var nouveau4 = message.options[2];
nouveau4.text = "You and I production"
var nouveau5 = message.options[3];
nouveau5.text = "Starcraft Unity"
var nouveau6 = message.options[4];
nouveau6.text = "Godus"

document.getElementById("message").addEventListener("change", contact1)
function contact1(value){
    value = this.value
    if(value === '2'){
    document.getElementById("societe").innerHTML = mySociety[0];
        
    document.getElementById("nom1").innerHTML = mySociety[1];
    document.getElementById("rue").innerHTML = mySociety[2];
    document.getElementById("code").innerHTML = mySociety[3];
    document.getElementById("telephone").innerHTML = mySociety[4];
       
    } else if(value === '3'){
        document.getElementById("societe").innerHTML = mySociety[5];
        
    document.getElementById("nom1").innerHTML = mySociety[6];
    document.getElementById("rue").innerHTML = mySociety[7];
    document.getElementById("code").innerHTML = mySociety[8];
    document.getElementById("telephone").innerHTML = mySociety[9];
    
    }
    else if(value === '4'){
        document.getElementById("societe").innerHTML = mySociety[10];
        
    document.getElementById("nom1").innerHTML = mySociety[11];
    document.getElementById("rue").innerHTML = mySociety[12];
    document.getElementById("code").innerHTML = mySociety[13];
    document.getElementById("telephone").innerHTML = mySociety[14];
    
   }else if(value === '5'){
    document.getElementById("societe").innerHTML = mySociety[15];
    
document.getElementById("nom1").innerHTML = mySociety[16];
document.getElementById("rue").innerHTML = mySociety[17];
document.getElementById("code").innerHTML = mySociety[18];
document.getElementById("telephone").innerHTML = mySociety[19];

}else if(value === '1'){
    document.getElementById("societe").innerHTML = '<input type="text" placeholder="Nom de la société"  style="width: 100%;">';
    document.getElementById("nom1").innerHTML = '<input type="text" placeholder="Nom"  style="width: 100%;">';
    document.getElementById("rue").innerHTML = '<input type="text" placeholder="Rue"  style="width: 100%;">';
    document.getElementById("code").innerHTML = '<input type="text"   placeholder="Code Postal/Ville"  style="width: 100%;">';
    document.getElementById("telephone").innerHTML = '<input type="text"   placeholder="Numéros de téléphone"  style="width: 100%;">';

}
}

var nouveau12 = message2.options[0];
nouveau12.text = "Nouveau client"
var nouveau32 = message2.options[1];
nouveau32.text = "Netscape 2.0"
var nouveau42 = message2.options[2];
nouveau42.text = "You and I production"
var nouveau52 = message2.options[3];
nouveau52.text = "Starcraft Unity"
var nouveau62 = message2.options[4];
nouveau62.text = "Godus"

document.getElementById("message2").addEventListener("change", contact2)
function contact2(value){
    value = this.value
    if(value === '7'){
    document.getElementById("societe2").innerHTML = mySociety[0];
        
    document.getElementById("nom2").innerHTML = mySociety[1];
    document.getElementById("rue2").innerHTML = mySociety[2];
    document.getElementById("code2").innerHTML = mySociety[3];
    document.getElementById("telephone2").innerHTML = mySociety[4];
       
    } else if(value === '8'){
        document.getElementById("societe2").innerHTML = mySociety[5];
        
    document.getElementById("nom2").innerHTML = mySociety[6];
    document.getElementById("rue2").innerHTML = mySociety[7];
    document.getElementById("code2").innerHTML = mySociety[8];
    document.getElementById("telephone2").innerHTML = mySociety[9];
    
    }
    else if(value === '9'){
        document.getElementById("societe2").innerHTML = mySociety[10];
        
    document.getElementById("nom2").innerHTML = mySociety[11];
    document.getElementById("rue2").innerHTML = mySociety[12];
    document.getElementById("code2").innerHTML = mySociety[13];
    document.getElementById("telephone2").innerHTML = mySociety[14];
    
   }else if(value === '10'){
    document.getElementById("societe2").innerHTML = mySociety[15];
    
document.getElementById("nom2").innerHTML = mySociety[16];
document.getElementById("rue2").innerHTML = mySociety[17];
document.getElementById("code2").innerHTML = mySociety[18];
document.getElementById("telephone2").innerHTML = mySociety[19];

}else if(value === '6'){
    document.getElementById("societe2").innerHTML = '<input type="text" placeholder="Nom de la société"  style="width: 100%;">';
    document.getElementById("nom2").innerHTML = '<input type="text" placeholder="Nom"  style="width: 100%;">';
    document.getElementById("rue2").innerHTML = '<input type="text" placeholder="Rue"  style="width: 100%;">';
    document.getElementById("code2").innerHTML = '<input type="text"   placeholder="Code Postal/Ville"  style="width: 100%;">';
    document.getElementById("telephone2").innerHTML = '<input type="text"   placeholder="Numéros de téléphone"  style="width: 100%;">';
    
}
}

//Tableau des différents produits
var myArray=[
    "MY HERO ONE'S JUSTICE 2 Jeu PS4", 'My Hero Academia', '54',
    "One Punch Man Jeu PS4", "One Punch Man", "55",
    'Jump Force Jeu PS4', 'Jump Force', '26',
    'One Piece : Pirate Warriors 4 sur PS4', 'One Piece', '60'
]

var myCustomer = [          // Tableau des différents clients
    'Cabinet Gerard', 'Gerard', '16 avenue Eugène Thomas', '94270, Le Kremlin-bicêtre', '01 45 70 50 40',
    'Putrovski corporation', 'Vladimir', '82 rue de Charenton', '75012, Paris', '01 45 80 70 70',
    'Chinchan family', 'Chinchan', '39 rue Petit', '75019, Paris', '01 45 03 03 04',
    'La main invisible', 'Smith', '106 rue Nollet', '75017, Paris', '01 45 66 04 02',
];

// Pour faire la calcul de prix + quantite
function up(){

       
    var prix = document.getElementById("allproduits").value;
    
    var quantite = document.getElementById("quantite").value;
    var total = prix * quantite;
    document.getElementById("montant").innerHTML = total;
    
   
}

// Premier ranger
var justice = allproduits.options[1];
justice.text = "MY HERO ONE'S JUSTICE 2 Jeu PS4"

var jump = allproduits.options[3];
jump.text ="Jump Force Jeu PS4"

var onePunch = allproduits.options[2];
onePunch.text ="One Punch Man Jeu PS4"

var onePiece = allproduits.options[4];
onePiece.text ="One Piece : Pirate Warriors 4 sur PS4"



document.getElementById("allproduits").addEventListener("change", produits)
function produits(value){
    value = this.value
    if(value === '54'){
         document.getElementById("prix").innerHTML = myArray[2];
        document.getElementById("quantite").value = 0;
        document.getElementById("nomProduit").innerHTML = myArray[1];
        
        
    } else if(value === '26'){
        document.getElementById("prix").innerHTML = myArray[8];
        document.getElementById("nomProduit").innerHTML = myArray[7];
        document.getElementById("quantite").value = 0;
    }else if(value === '55'){
        document.getElementById("prix").innerHTML = myArray[5];
        document.getElementById("nomProduit").innerHTML = myArray[4];
        document.getElementById("quantite").value = 0;
    }else if(value === '60'){
        document.getElementById('prix').innerHTML = myArray[11]
        document.getElementById("nomProduit").innerHTML = myArray[10];
        document.getElementById("quantite").value = 0;
    }
}

// Deuxieme ranger
function up2(){

       
    var prix2 = document.getElementById("allproduits2").value;
    
    var quantite2 = document.getElementById("quantite2").value;
    
    
    
    var total2 = prix2 * quantite2;
    
    document.getElementById("montant2").innerHTML = total2;
    
   
}



var justice2 = allproduits2.options[1];
justice2.text = "MY HERO ONE'S JUSTICE 2 Jeu PS4"

var jump2 = allproduits2.options[3];
jump2.text ="Jump Force Jeu PS4"

var onePunch2 = allproduits2.options[2];
onePunch2.text ="One Punch Man Jeu PS4"

var onePiece2 = allproduits2.options[4];
onePiece2.text ="One Piece : Pirate Warriors 4 sur PS4"



document.getElementById("allproduits2").addEventListener("change", produits2)
function produits2(value){
    value = this.value
    if(value === '54'){
        document.getElementById("prix2").innerHTML = myArray[2];
        document.getElementById("nomProduit2").innerHTML = myArray[1];
        document.getElementById("quantite2").value = 0;
        
    } else if(value === '26'){
        document.getElementById("prix2").innerHTML = myArray[8];
        document.getElementById("nomProduit2").innerHTML = myArray[7];
        document.getElementById("quantite2").value = 0;
    }else if(value === '55'){
        document.getElementById("prix2").innerHTML = myArray[5];
        document.getElementById("nomProduit2").innerHTML = myArray[4];
        document.getElementById("quantite2").value = 0;
    }else if(value === '60'){
        document.getElementById('prix2').innerHTML = myArray[11]
        document.getElementById("nomProduit2").innerHTML = myArray[10];
        document.getElementById("quantite2").value = 0;
    }
}





// Troisieme ranger
function up3(){

       
    var prix = document.getElementById("allproduits3").value;
    
    var quantite = document.getElementById("quantite3").value;
    var total3 = prix * quantite;
    document.getElementById("montant3").innerHTML = total3;
    
   
}



var justice3 = allproduits3.options[1];
justice3.text = "MY HERO ONE'S JUSTICE 2 Jeu PS4"

var jump3 = allproduits3.options[3];
jump3.text ="Jump Force Jeu PS4"

var onePunch3 = allproduits3.options[2];
onePunch3.text ="One Punch Man Jeu PS4"

var onePiece3 = allproduits3.options[4];
onePiece3.text ="One Piece : Pirate Warriors 4 sur PS4"



document.getElementById("allproduits3").addEventListener("change", produits3)
function produits3(value){
    value = this.value
    if(value === '54'){
        document.getElementById("prix3").innerHTML = myArray[2];
        document.getElementById("nomProduit3").innerHTML = myArray[1];
        document.getElementById("quantite3").value = 0;
        
    } else if(value === '26'){
        document.getElementById("prix3").innerHTML = myArray[8];
        document.getElementById("nomProduit3").innerHTML = myArray[7];
        document.getElementById("quantite3").value = 0;
    }else if(value === '55'){
        document.getElementById("prix3").innerHTML = myArray[5];
        document.getElementById("nomProduit3").innerHTML = myArray[4];
        document.getElementById("quantite3").value = 0;
    }else if(value === '60'){
        document.getElementById('prix3').innerHTML = myArray[11]
        document.getElementById("nomProduit3").innerHTML = myArray[10];
        document.getElementById("quantite3").value = 0;
    }
}

// Quatrieme ranger
function up4(){

       
    var prix4 = document.getElementById("allproduits4").value;
    
    
    var quantite4 = document.getElementById("quantite4").value;
    var total4 = prix4 * quantite4;
    
    document.getElementById("montant4").innerHTML = total4;
    
    




    
   
}





var justice4 = allproduits4.options[1];
justice4.text = "MY HERO ONE'S JUSTICE 2 Jeu PS4"

var jump4 = allproduits4.options[3];
jump4.text ="Jump Force Jeu PS4"

var onePunch4 = allproduits4.options[2];
onePunch4.text ="One Punch Man Jeu PS4"

var onePiece4 = allproduits4.options[4];
onePiece4.text ="One Piece : Pirate Warriors 4 sur PS4"



document.getElementById("allproduits4").addEventListener("change", produits4)
function produits4(value){
    value = this.value
    if(value === '54'){
        document.getElementById("prix4").innerHTML = myArray[2];
        document.getElementById("nomProduit4").innerHTML = myArray[1];
        document.getElementById("quantite4").value = 0;
        
    } else if(value === '26'){
        document.getElementById("prix4").innerHTML = myArray[8];
        document.getElementById("nomProduit4").innerHTML = myArray[7];
        document.getElementById("quantite4").value = 0;
    }else if(value === '55'){
        document.getElementById("prix4").innerHTML = myArray[5];
        document.getElementById("nomProduit4").innerHTML = myArray[4];
        document.getElementById("quantite4").value = 0;
    }else if(value === '60'){
        document.getElementById('prix4').innerHTML = myArray[11]
        document.getElementById("nomProduit4").innerHTML = myArray[10];
        document.getElementById("quantite4").value = 0;
    }
}





function calcul(){
    first = document.getElementById('allproduits2').value
    seconde = document.getElementById('quantite2').value
    var prixCalcul = first * seconde
    

    third = document.getElementById('allproduits').value
    fourth = document.getElementById('quantite').value
    var prixCalcul2 = third * fourth

    five = document.getElementById('allproduits3').value
    six = document.getElementById('quantite3').value
    var prixCalcul3 = five * six

    seven = document.getElementById('allproduits4').value
    eight = document.getElementById('quantite4').value
    var prixCalcul4 = seven * eight

    var calculTotal = prixCalcul + prixCalcul2 + prixCalcul3 + prixCalcul4
  var ht = document.getElementById('total').innerHTML = calculTotal
   var tva = document.getElementById('tva').innerHTML = Math.round(calculTotal / 100 * 20)
   var port = document.getElementById('port').innerHTML = 5
    var ttc = document.getElementById('ttc').innerHTML = calculTotal + tva + port
    

    if(ttc >= 500){
        var port = document.getElementById('port').innerHTML = 'Offert'
        document.getElementById('ttc').innerHTML = calculTotal + tva
    }
    
    if(ttc >= 1000){
        document.getElementById('remise').innerHTML = "<h5 style='background: #4FF991 ';'width:100%';><em>Vous avez reçu un Bon d'achat de 200€</em></h5>"
        
        
    } 
    
    if(ttc < 1000){
        document.getElementById('remise').innerHTML = "<h5 style='background: #4FF991 ';'width:100%'; 'display: none';></h5>"
    }

    if(ht == 0){
        var port = document.getElementById('port').innerHTML = 0
        document.getElementById('ttc').innerHTML = calculTotal 

    }

    
}



















    

