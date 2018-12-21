//var membros = data.results[0].members;
//
//
//var tabela = document.getElementById('house-data')
//
//
//
//function creatabela(X, Y) {
//    var tabela = document.getElementById('house-data');
////    tabela.style.width = '70%';
//    tabela.style.height = '100%';
////    tabela.setAttribute('border', '1px', 'black');
////    tabela.style.textAlign = 'center';
//    tabela.style.borderCollapse = "collapse";
//
//
//    var tbdy = document.createElement('tbody');
//
//    for (i = 0; i < membros.length; i++) {
//        var tr = document.createElement('tr');
//        tbdy.appendChild(tr);
//
//        function meio(t) {
//            if (t.middle_name === null) {
//                return '   ';
//            }
//            return t.middle_name;
//        }
//
//
//var td = document.createElement('td');
//var link = document.createElement('a');
//var linka = document.createAttribute('href');
//var target = document.createAttribute('target');
//linka.value = membros[i].url
//link.setAttributeNode(linka)
//link.setAttributeNode(target);
//target.value = '_blank'
//
//
//
//
//
//tr.appendChild(td);
//td.appendChild(link);
//link.innerHTML =  membros[i].first_name + ' ' + meio(membros[i]) + ' ' + membros[i].last_name ;
//
//var tdparty = document.createElement('td');
//tr.appendChild(tdparty);
//tdparty.innerHTML = membros[i].party;
//
//var tdstate = document.createElement('td');
//tr.appendChild(tdstate);
//tdstate.innerHTML = membros[i].state;
//
//var tdyears = document.createElement('td');
//tr.appendChild(tdyears);
//tdyears.innerHTML = membros[i].seniority;
//var tdvotes = document.createElement('td');
//tr.appendChild(tdvotes);
//tdvotes.innerHTML = membros[i].votes_with_party_pct;
//
//
//
//
//}
//tabela.appendChild(tbdy);
//}
//
//
////Codigo do botao javascript
//
//let btn1 = document.getElementById('btn1');
//console.log(btn1)
//
//creatabela();

var membros = data.results[0].members;


var tabela = document.getElementById('house-data')

var estados = []
for (var k = 0; k < membros.length - 1; k++) {
    estados.push(membros[k].state);
    //    console.log(estados[k])
}


//Criando o select.

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



//capiturando o valor do value:

var novosselect = []

function getvalue() {
    novosselect = []
    var valorselect = document.getElementById('seletor').value;
    console.log(valorselect)
    for (let j = 0; j < membros.length; j++) {
        if (membros[j].state == valorselect) {
            novosselect.push(membros[j])

        }

    }
    if (valorselect == 'All') {
        console.log('hola')
        novosselect = membros
    }
    console.log(novos)
    //    console.log(novosselect)

}

//Criando a tabela do Select:

function creatselect() {

    var tabela = document.getElementById('house-data');
    tabela.style.height = '100%';
    tabela.style.borderCollapse = "collapse";


    var tbdy = document.createElement('tbody');

    for (j = 0; j < novosselect.length; j++) {
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
        linka.value = novosselect[j].url
        link.setAttributeNode(linka)
        link.setAttributeNode(target);
        target.value = '_blank'





        tr.appendChild(td);
        td.appendChild(link);
        link.innerHTML = novosselect[j].first_name + ' ' + meio(novosselect[j]) + ' ' + novosselect[j].last_name;

        var tdparty = document.createElement('td');
        tr.appendChild(tdparty);
        tdparty.innerHTML = novosselect[j].party;

        var tdstate = document.createElement('td');
        tr.appendChild(tdstate);
        tdstate.innerHTML = novosselect[j].state;

        var tdyears = document.createElement('td');
        tr.appendChild(tdyears);
        tdyears.innerHTML = novosselect[j].seniority;
        var tdvotes = document.createElement('td');
        tr.appendChild(tdvotes);
        tdvotes.innerHTML = novosselect[j].votes_with_party_pct;




    }
    tabela.appendChild(tbdy);
}





//Fim da tabela do select



//Apagando a tabela anterior
function removetableselect() {
    let elemtb = document.getElementsByTagName('tbody')[0];
    let parent = elemtb.parentNode;
    parent.removeChild(elemtb)
}



console.log(est1.length)





function creatabela(X, Y) {
    var tabela = document.getElementById('house-data');
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



creatabela();



var btn1 = document.getElementsByName('party')


var novos = []

function clique() {
    novos = []
    var checkedBoxes = document.querySelectorAll('input[name=partido]:checked');
    console.log(checkedBoxes);
    for (let j = 0; j < checkedBoxes.length; j++) {
        console.log(membros[j].party == checkedBoxes.value)
        console.log(checkedBoxes[j].value)



        for (let g = 0; g < membros.length; g++) {

            if (checkedBoxes[j].value == membros[g].party) {


                novos.push(membros[g])




            }


        }
    }
    if (checkedBoxes.length == 0) {
        console.log('hola')
        novos = membros
    }
    console.log(novos)



}

function removetable() {
    var elemtb = document.getElementsByTagName('tbody')[0];
    var parent = elemtb.parentNode;
    parent.removeChild(elemtb)
}



function creat() {

    var tabela = document.getElementById('house-data');
    tabela.style.height = '100%';
    tabela.style.borderCollapse = "collapse";


    var tbdy = document.createElement('tbody');

    for (j = 0; j < multiselect.length; j++) {
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
        linka.value = multiselect[j].url
        link.setAttributeNode(linka)
        link.setAttributeNode(target);
        target.value = '_blank'





        tr.appendChild(td);
        td.appendChild(link);
        link.innerHTML = multiselect[j].first_name + ' ' + meio(multiselect[j]) + ' ' + multiselect[j].last_name;

        var tdparty = document.createElement('td');
        tr.appendChild(tdparty);
        tdparty.innerHTML = multiselect[j].party;

        var tdstate = document.createElement('td');
        tr.appendChild(tdstate);
        tdstate.innerHTML = multiselect[j].state;

        var tdyears = document.createElement('td');
        tr.appendChild(tdyears);
        tdyears.innerHTML = multiselect[j].seniority;
        var tdvotes = document.createElement('td');
        tr.appendChild(tdvotes);
        tdvotes.innerHTML = multiselect[j].votes_with_party_pct;




    }
    tabela.appendChild(tbdy);
}


//Juntando os dois selectores:

var multiselect = []

function multiselector() {
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




//Aqui tenho uma funcao abarca varias funcoes em uma chamada

function calls() {
    removetable();
    multiselector();
    creat();


}

//multiselector();removetable();creat()



