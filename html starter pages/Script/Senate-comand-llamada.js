var membros
var pagina = window.location.pathname
console.log(pagina)



if(pagina == '/senate-datacopia.html'){
     console.log('senate') 
    fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
    method: "GET",
    headers: {
        'X-API-Key': 'kTMHMGpGpOiq5LsQGKWpAWH2UQqoM8UWAbvm9ZRO'
    }
}).then(function (response) {
    if (response.ok) {
        return response.json();
    }

}).then(function (json) {
    data = json;
    var data
    membros = data.results[0].members
    //    console.log(membros)

    var tabela = document.getElementById('senate-data')

    var estados = []
    for (var k = 0; k < membros.length - 1; k++) {
        estados.push(membros[k].state);
        //        console.log(estados[k])
    }



    //----ESTRUTURA DO SELECT ------------    
    var est1 = []

    for (let i = 0; i < estados.length; i++) {
        if (est1.indexOf(estados[i]) == -1) {
            est1.push(estados[i]);
            //        console.log(est1[i])
        }
    }

    var seletor = document.getElementById('seletor')
    for (let s = 0; s < est1.length; s++) {
        var option = document.createElement("option");
        option.value = est1[s];
        option.text = est1[s];
//        seletor.appendChild(option);

        var valor = document.createAttribute('value');
        valor.value = est1[s]
    }
    //----------FIM SELECT------------------

    creat(membros);





    var btn1 = document.getElementsByName('party')









    //Aqui tenho uma funcao abarca varias funcoes em uma chamada









    //------Aqui termina a chamada .THEN JASON -----------
}).catch(function (error) {
    console.log("Request failed:" + error.message);
});

    
}  else if(pagina == '/house-data.html'){
    
    console.log('hou');  fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
    method: "GET",
    headers: {
        'X-API-Key': 'kTMHMGpGpOiq5LsQGKWpAWH2UQqoM8UWAbvm9ZRO'
    }
}).then(function (response) {
    if (response.ok) {
        return response.json();
    }

}).then(function (json) {
    data = json;
    var data
    membros = data.results[0].members
    //    console.log(membros)

    var tabela = document.getElementById('house-data')

    var estados = []
    for (var k = 0; k < membros.length - 1; k++) {
        estados.push(membros[k].state);
        //        console.log(estados[k])
    }



    //----ESTRUTURA DO SELECT ------------    
    var est1 = []

    for (let i = 0; i < estados.length; i++) {
        if (est1.indexOf(estados[i]) == -1) {
            est1.push(estados[i]);
            //        console.log(est1[i])
        }
    }

    var seletor = document.getElementById('seletor')
    for (let s = 0; s < est1.length; s++) {
        var option = document.createElement("option");
        option.value = est1[s];
        option.text = est1[s];
        seletor.appendChild(option);

        var valor = document.createAttribute('value');
        valor.value = est1[s]
    }
    //----------FIM SELECT------------------

    creat(membros);





    var btn1 = document.getElementsByName('party')









    //Aqui tenho uma funcao abarca varias funcoes em uma chamada









    //------Aqui termina a chamada .THEN JASON -----------
}).catch(function (error) {
    console.log("Request failed:" + error.message);
});
    
    
}


//---------Aqui termina o FETCH ---------------



//---------Aqui termina o FETCH ---------------





function creat(membros) {
    var tabela = document.getElementById('senate-data');
    tabela.style.height = '100%';
    tabela.style.borderCollapse = "collapse";


    var tbdy = document.createElement('tbody');

    for (i = 0; i < membros.length; i++) {
        var tr = document.createElement('tr');
        tbdy.appendChild(tr);

        function meio(t) {
            if (t.middle_name === null) {
                return '   ';
            }
            return t.middle_name;
        }


        var td = document.createElement('td');
        var link = document.createElement('a');
        var linka = document.createAttribute('href');
        var target = document.createAttribute('target');
        linka.value = membros[i].url
        link.setAttributeNode(linka)
        link.setAttributeNode(target);
        target.value = '_blank'





        tr.appendChild(td);
        td.appendChild(link);
        link.innerHTML = membros[i].first_name + ' ' + meio(membros[i]) + ' ' + membros[i].last_name;

        var tdparty = document.createElement('td');
        tr.appendChild(tdparty);
        tdparty.innerHTML = membros[i].party;

        var tdstate = document.createElement('td');
        tr.appendChild(tdstate);
        tdstate.innerHTML = membros[i].state;

        var tdyears = document.createElement('td');
        tr.appendChild(tdyears);
        tdyears.innerHTML = membros[i].seniority;
        var tdvotes = document.createElement('td');
        tr.appendChild(tdvotes);
        tdvotes.innerHTML = membros[i].votes_with_party_pct;




    }
    tabela.appendChild(tbdy);
}









function calls() {
    removetable();
    multiselector(membros);
    creat(multiselect);


}

//-------multSelector-------------
var multiselect = []

function multiselector(membros) {
    console.log("ei")
    multiselect = []
    var valorselect = document.getElementById('seletor').value;
    var checkedBoxes = document.querySelectorAll('input[name=partido]:checked');

    for (let g = 0; g < membros.length; g++) {

        if (checkedBoxes.length === 0) {
            console.log('0')
            if (valorselect == 'All') {
                console.log('0 and all')
                multiselect.push(membros[g])


            } else if (membros[g].state == valorselect) {
                console.log('0 and state')

                multiselect.push(membros[g])
            }
        }
    }


    for (let j = 0; j < checkedBoxes.length; j++) {
        for (let g = 0; g < membros.length; g++) {

            if (valorselect == 'All' && (checkedBoxes[j].value == membros[g].party)) {
                multiselect.push(membros[g])
                //                console.log('hola hola')
            } else if ((membros[g].state == valorselect) && (checkedBoxes[j].value == membros[g].party)) {
                console.log('hola hola')
                multiselect.push(membros[g]);


            } else if ((checkedBoxes.length === 0) && (valorselect == 'All')) {
                multiselect.push(membros[g])


                console.log('hola 4')
            } else if ((checkedBoxes.length === 0) && (membros[g].state == valorselect)) {
                multiselect.push(membros[g])
                console.log('Hola 5')
            }


        }









    }
    console.log(multiselect);
}


//-----REMOVE TABLE------

function removetable() {
    var elemtb = document.getElementsByTagName('tbody')[0];
    var parent = elemtb.parentNode;
    parent.removeChild(elemtb)
}
