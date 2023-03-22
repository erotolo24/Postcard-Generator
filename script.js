let states = document.getElementById('states');
states.onchange = function(){
    //selects index # of state
    console.log('states index:' + states.selectedIndex);
    //finds the index and shows state's option
    console.log('states index:' + states.options[states.selectedIndex].text);
    //matches the state with its image
    console.log('img/' + states.value + '@2x.jpg');
    //selects background image from drop-down menu
    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';
    //selects HTML element with ID of 'state-heading' and assigns it the value of the state from the drop-down menu
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
    //prints the greetings header without the state
    document.getElementById('greeting').innerHTML = 'Greetings from: '
}