const word = "abcdefg";
var arrWord = [];
var arrCouleur = [];

// transforme le mot à trouver en array qui contient 1 lettre par case
function wordToArr(mot){
    
    arrWord =  mot.split();
    return arrWord
}


function compare(){

}

//renvoie une array de couleur après comparaison entre le mot à trouver et le mot proposé
// rouge = lettre bien placée / jaune = lettre présente mais mal placée / gris = lettre pas dans le mot
function couleur(arrToFind, arrProposed){
    var placed = false;
    var present = false;

    for (var index = 0; i<arrToFind; i++){ 
            
        if(arrToFind[i] == arrProposed[i]){
            //arrCouleur.push("orange");
            //break
        } else{
            for(let i=0; i<arrToFind-index; i++){
                if(arrToFind[index] == arrProposed[i]){
                    //arrCouleur.push("jaune");
                    //break
                }else{
                    
                }
            }
        }
        
    }
}