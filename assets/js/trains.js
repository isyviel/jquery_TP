/**
 * @name app.js
 * @author me
 * @version 1.0.0
 */

//TodayDate = jour mois number année

//afficher le contenu de mon console log dans mon nav
// Date.toLocaleDateString();

//US 1 défilement et navigation de la date
let date = new Date();
let day = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'short', day:'numeric'};
let todayDate ="Navette du "+ date.toLocaleDateString('fr-FR', options);

$('#today-date').html(todayDate);


$('#button-previous').on(
    'click',
    

    function(){
    date.setDate(date.getDate()-1);
    //je désactive previous      
  if (date.getDate() == day.getDate())
        {//je désactive previous
            $('#button-previous').prop("disabled", true);
        }       
    todayDate ="Navette du "+ date.toLocaleDateString('fr-FR', options);
    $('#today-date').html(todayDate);
    
    //si la date que je récupère est egale a celle affichée
    //jinitialise la date de mon objet date et le récupère en lui appliquand le +1 -1
    //je rappelle ma var todayDate et la relie dans le html 
    }
);

//passer au mois suivant en cliquant sur button-next
$('#button-next').on(
    'click',// quand je clique le jour prends + 1
    function(){
        date.setDate(date.getDate()+1);
        if (day.getDate() < date.getDate())
        {
            //je réactive mon bouton
            $('#button-previous').prop('disabled', false);
        }
        todayDate ="Navette du "+ date.toLocaleDateString('fr-FR', options);
        $('#today-date').html(todayDate);
    }
);
// fin US1

//US2

//créer une variable qui stocke mon nombre de places libres et l'afficher
let freeSit = 7;
$('#free-sit').html(freeSit);
//button réserver : soustrait le nombre de place sélectionnées au nombre de place libre
//id submit-sit
//dans le select afficher tous les chiffres de 0 à freesit*
//boucle qui compte jusqu'à max = freesit
//rajouter des actions à chaque itération de la boucle => utiliser append pas html
for (let i=1;i<=freeSit;i++){
    $('#select-sit').append('<option value="' + i +'">'+i + '</option>');//  object to insert at the end of each element in the set of matched elements. 
    // let select_sit = $('#selected-sit').val();
    // console.log(select_sit);
}

$('#submit-sit').on(
        'click',
        function(){


            console.log("wawa : "+$('#select-sit').val());

            //quand j'ai cliqué sur la selection qui m'intéresse et que je click sur réservé ca prend la valeur de #selected-sit et ca la soustrait à places libres
            // $('#select-sit').html('<option id="selected-sit">' + i + '</option>');
            // for (let i=1;i<=freeSit;i++){
                freeSit -= $('#select-sit').val();//me ressors ma valeur de i de la boucle au dessus
                // console.log($('#selected-sit').val());
                $('#free-sit').html(freeSit);
                // console.log(select_sit);
            // }
        }
    );










