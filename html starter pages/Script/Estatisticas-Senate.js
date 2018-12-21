var data;


fetch("https://api.propublica.org/congress/v1/113/senate/members.json",{
		method:"GET",
		headers: {
			'X-API-Key': 'kTMHMGpGpOiq5LsQGKWpAWH2UQqoM8UWAbvm9ZRO'
		}	
}).then(function(response){
		if (response.ok){
	return response.json();
}

}).then(function(json){
	data = json;
    //inserir aqui as chamadas das funçoes.
	console.log(data)
    console.log(data.results[0].members)
    partidos()  
    
}).catch(function (error){
	 console.log("Request failed:" + error.message);
});


//Lamada fetch





var membroses = data.results[0].members;
console.log(membroses[0].party)

var republican = []
var democratas = []
var independent = []



function partidos() {
    for (let p = 0; p < membroses.length; p++) {
        if (membroses[p].party == 'R') {
            republican.push(membroses[p])
        } else if (membroses[p].party == 'D') {
            democratas.push(membroses[p])
        } else if (membroses[p].party == 'I') {
            independent.push(membroses[p])
        }

    }
//    console.log(republican)
//    console.log(democratas)
//    console.log(independent)

}
partidos()

var totalvoter = []
var totalvoted = []
var totalvotei = []
var totalpartidos = []
var voteswithparty = []
var totalrep = 0
var totaldem = 0
var totalind = 0
var totaltot = 0



function totalvotos() {
    for (let t = 0; t < republican.length; t++) {
        totalvoter.push(republican[t].votes_with_party_pct)
        totalrep += totalvoter[t];

    }

    for (let d = 0; d < democratas.length; d++) {
        totalvoted.push(democratas[d].votes_with_party_pct)
        totaldem += totalvoted[d]

    }
    for (let i = 0; i < independent.length; i++) {
        totalvotei.push(independent[i].votes_with_party_pct)
        totalind += totalvotei[i]; //somatorio

    }
    for (let i = 0; i< membroses.length;i++){
       totalpartidos.push(membroses[i].votes_with_party_pct)
        totaltot += totalpartidos[i];  
    }
    

     console.log(totalpartidos)  
//    console.log(totaldem)
//    console.log(totalind)
    console.log(totaltot)
}
totalvotos()

//Media do total de votos

function media(somatorio, n) {
    return somatorio / n
    console.log(somatorio)
}

media(totalrep, 46).toFixed(2)
media(totaldem, 57).toFixed(2)
media(totalind, 2).toFixed(2)
media(totaltot, 105).toFixed(2)
//console.log
//Coluna numero de representantes
var numerorepublic = republican.length
var numerodemocrat = democratas.length
var numeroindepend = independent.length
var totalmembros = membroses.length

console.log(numerorepublic)

var estatisticas = {}

estatisticas.numerorepublic = numerorepublic
estatisticas.percentrep = media(totalrep, 46).toFixed(2)
estatisticas.numerodemocrat = numerodemocrat
estatisticas.percentdemocrat = media(totaldem, 57).toFixed(2)
estatisticas.numeroindepend = numeroindepend
estatisticas.percentindepend = media(totalind, 2).toFixed(2)

console.log(estatisticas)



var missedvotesperc = []

var sumamissedrep = 0;
var tablamembros = []


function missedvotes() {
    for (let t = 0; t < membroses.length; t++) {
        missedvotesperc.push(membroses[t].missed_votes_pct)
        sumamissedrep += missedvotesperc[t];
    }
    //    missedvoterep.sort()
    missedvotesperc.sort((a, b) => a - b);

    //colando em ordem da forma correta.
    console.log(missedvotesperc)

}
var membrosesmissed = membroses.slice(0);
var missedmenosmas = membroses.slice(0);



var partyvotes = membroses.slice(0);
var partyvotesinvert = membroses.slice(0);


var assistence = membroses.slice(0);


//valores de Missed Votes:
membrosesmissed.sort(function (a, b) {
    return a.missed_votes_pct - b.missed_votes_pct
})

missedmenosmas.sort(function (b, a) {
    return a.missed_votes_pct - b.missed_votes_pct
})


//Valores de Party with votes
partyvotes.sort(function (a, b) {
    return a.votes_with_party_pct - b.votes_with_party_pct
})
partyvotesinvert.sort(function (b, a) {
    return a.votes_with_party_pct - b.votes_with_party_pct
})

//console.log(missedmenosmas)




//funciont con parametros
//missedvotes(partyvotes,)
var val = 0
var listamissed = []
var mimenosmais = []



function missedpercent(j, outro, z) {
    let val = Math.ceil(j * 0.10)
    for (let g = 0; g < membrosesmissed.length; g++) {
        if (g < val) {
            z.push(membrosesmissed[g])

        }
    }
    console.log(z)
}
missedpercent(membroses.length, missedmenosmas, listamissed)
missedpercent(membroses.length, mimenosmais, mimenosmais)

console.log(listamissed)

console.log(missedmenosmas)


//Vamos criar uma funcao mais geral com o patty with votes.
var listavoteswith = []
var listavotesreves = []
var menosmais =[]

function voteswithlist(percent, varial, x) {
    let val = Math.ceil(percent * 0.10)
    for (let h = 0; h < membroses.length; h++) {
        if (h < val) {
            x.push(varial[h])
        }

    }
    console.log(x)
}
//Aqui tenho os calculos com os parametros corretos
voteswithlist(membroses.length, partyvotesinvert, listavotesreves)
voteswithlist(membroses.length, partyvotes, listavoteswith)
voteswithlist(membroses.length, missedmenosmas, menosmais)

console.log(media(totalrep, 46).toFixed(2))
console.log(menosmais)







function senatetabel (){
    var republicinf = document.getElementById('republicinfo')
     var tdrep = document.createElement('td');
     republicinfo.appendChild(tdrep)
     tdrep.innerHTML = estatisticas.numerorepublic
    var tdvotes = document.createElement('td');
     republicinfo.appendChild(tdvotes)
     tdvotes.innerHTML = estatisticas.percentrep
    
    var republicinf = document.getElementById('democrtinfo')
     var tddem = document.createElement('td');
     democrtinfo.appendChild(tddem)
     tddem.innerHTML = estatisticas.numerodemocrat
    var tddemvotes = document.createElement('td');
     democrtinfo.appendChild(tddemvotes)
     tddemvotes.innerHTML = estatisticas.percentdemocrat
    
    var republicinf = document.getElementById('independinfo')
     var tdind = document.createElement('td');
     independinfo.appendChild(tdind)
     tdind.innerHTML = estatisticas.numeroindepend
    var tdindvotes = document.createElement('td');
     independinfo.appendChild(tdindvotes)
     tdindvotes.innerHTML = estatisticas.percentindepend
    
}


senatetabel()


//creando tabla least:

function createtable() {

    var tabela = document.getElementById('least');
    tabela.style.height = '100%';
    tabela.style.borderCollapse = "collapse";


    var tbdy = document.createElement('tbody');

    for (j = 0; j < listamissed.length; j++) {
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
        linka.value = listamissed[j].url
        link.setAttributeNode(linka)
        link.setAttributeNode(target);
        target.value = '_blank'





        tr.appendChild(td);
        td.appendChild(link);
        link.innerHTML = listamissed[j].first_name + ' ' + meio(listamissed[j]) + ' ' + listamissed[j].last_name;

        
        var tdmissedvotes = document.createElement('td');
        tr.appendChild(tdmissedvotes);
        tdmissedvotes.innerHTML = listamissed[j].missed_votes;
        
        var tdpercentmissed = document.createElement('td');
        tr.appendChild(tdpercentmissed);
        tdpercentmissed.innerHTML = listamissed[j].missed_votes_pct;
    }
    tabela.appendChild(tbdy);
}
createtable()



//Funcao uso geral de criaçao de tabela


function createtablemost() {

    var tabela = document.getElementById('most');
    tabela.style.height = '100%';
    tabela.style.borderCollapse = "collapse";


    var tbdy = document.createElement('tbody');

    for (j = 0; j < menosmais.length; j++) {
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
        linka.value = menosmais[j].url
        link.setAttributeNode(linka)
        link.setAttributeNode(target);
        target.value = '_blank'





        tr.appendChild(td);
        td.appendChild(link);
        link.innerHTML = menosmais[j].first_name + ' ' + meio(menosmais[j]) + ' ' + menosmais[j].last_name;

        
        var tdmissedvotes = document.createElement('td');
        tr.appendChild(tdmissedvotes);
        tdmissedvotes.innerHTML = menosmais[j].missed_votes;
        
        var tdpercentmissed = document.createElement('td');
        tr.appendChild(tdpercentmissed);
        tdpercentmissed.innerHTML = menosmais[j].missed_votes_pct;
    }
    tabela.appendChild(tbdy);
}
createtablemost()








    
     
     
    
    
    