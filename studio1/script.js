(function (){
    'use strict';
    console.log("reading js");

    const form = document.querySelector('#myForm');
    const madLib = document.querySelector('#overlay');
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';
        const time = document.querySelector('#time').value;
        const building = document.querySelector('#building').value;
        const name = document.querySelector('#name').value;
        const adj = document.querySelector('#adj').value;
        const animal = document.querySelector('#animal').value;
        const year = document.querySelector('#year').value;
        const adj2 = document.querySelector('#adj2').value;
        const animal2 = document.querySelector('#animal2').value;
        const scent = document.querySelector('#scent').value;
        const noun = document.querySelector('#noun').value;
        const adverb = document.querySelector('#adverb').value;
        const location = document.querySelector('#restaurant').value;
        const food = document.querySelector('#food').value;
        const utensil = document.querySelector('#utensil').value;
        
        let myText = '';

        if (time == '') {
            myText = "Please provide a time!";
            document.querySelector('#time').focus();
        } else if (building == '') {
            myText = "Please provide a building!";
            document.querySelector('#building').focus();
        } else if (name == '') {
            myText = "Please provide a name!";
            document.querySelector('#name').focus();
        } else if (adj == '') {
            myText = "Please provide an adjective!";
            document.querySelector('#adj').focus();
        } else if (animal == '') {
            myText = "Please provide an animal!";
            document.querySelector('#animal').focus();
        } else if (year == '') {
            myText = "Please provide a year!";
            document.querySelector('#year').focus();
        } else if (adj2 == '') {
            myText = "Please provide another adjective!";
            document.querySelector('#adj2').focus();
        } else if (animal2 == '') {
            myText = "Please provide an animal!";
            document.querySelector('#animal2').focus();
        } else if (scent == '') {
            myText = "Please provide a scent!";
            document.querySelector('#scent').focus();
        } else if (noun == '') {
            myText = "Please provide a noun!";
            document.querySelector('#noun').focus();
        } else if (adverb == '') {
            myText = "Please provide an adverb!";
            document.querySelector('#adverb').focus();
        } else if (location == '') {
            myText = "Please provide a restaurant!";
            document.querySelector('#restaurant').focus();
        } else if (food == '') {
            myText = "Please provide a food!";
            document.querySelector('#food').focus();
        } else if (utensil == '') {
            myText = "Please provide a utensil!";
            document.querySelector('#utensil').focus();
        } else {
            myText = `Breaking news! At ${time} of Halloween, a strange discovery was uncovered behind the closed doors of ${building}. ${name}, the previously deceased ${adj} ${animal} that was known as the campus class pet in ${year}, was found resurrected! However, not without some ${adj2}. It now has the head of a ${animal2}, smells like ${scent}, and sounds like a broken ${noun}. Beware! It has commonly been spotted ${adverb} making its way toward ${restaurant} in search of some ${food}. Remeber to bring a protective ${utensil} withyou for safety as you traverse around campus, or you might find yourself its next meal!`;
            document.querySelector('#time').value = '';
            document.querySelector('#building').value = '';
            document.querySelector('#name').value = '';
            document.querySelector('#adj').value = '';
            document.querySelector('#animal').value = '';
            document.querySelector('#year').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#animal2').value = '';
            document.querySelector('#scent').value = '';
            document.querySelector('#noun').value = '';
            document.querySelector('#adverb').value = '';
            document.querySelector('#restaurant').value = '';
            document.querySelector('#food').value = '';
            document.querySelector('#utensil').value = '';
        }

        madLib.innerHTML = myText;
    })
})();