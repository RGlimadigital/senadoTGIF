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
    var membros = data.results[0].members;
    //inserir aqui as chamadas das funçoes.
//    var estatisticas = {}
	
    partidos(membros,republicanos,democratas, independentes);
    var numerorepublic = republicanos.length
    var numerodemocrat = democratas.length
    var numeroindepend = independentes.length
    estatisticas.numerorepublic = numerorepublic

    
    var totalrep = totalvotos(republicanos,totalvoter).toFixed(2)
    var totaldem = totalvotos(democratas,totalvoted).toFixed(2)
    var totalind = totalvotos(independentes,totalvotei).toFixed(2)
    totaldem = media(totaldem,numerodemocrat).toFixed(2)
    totalrep = media(totalrep,numerorepublic).toFixed(2)
    totalind = media(totalind,numeroindepend).toFixed(2)
    

//estatisticas.percentrep = media(totalrep,numerorepublic)
//estatisticas.numerodemocrat = numerodemocrat
//estatisticas.percentdemocrat = media(totaldem,numerodemocrat)
//estatisticas.numeroindepend = numeroindepend
//estatisticas.percentindepend = media(totalind,numeroindepend)


function senatetabel (){
    var republicinf = document.getElementById('republicinfo')
     var tdrep = document.createElement('td');
     republicinfo.appendChild(tdrep)
     tdrep.innerHTML = numerorepublic
    var tdvotes = document.createElement('td');
     republicinfo.appendChild(tdvotes)
     tdvotes.innerHTML = totalrep
    
    var republicinf = document.getElementById('democrtinfo')
     var tddem = document.createElement('td');
     democrtinfo.appendChild(tddem)
     tddem.innerHTML = numerodemocrat
    var tddemvotes = document.createElement('td');
     democrtinfo.appendChild(tddemvotes)
     tddemvotes.innerHTML = totaldem
    
    var republicinf = document.getElementById('independinfo')
     var tdind = document.createElement('td');
     independinfo.appendChild(tdind)
     tdind.innerHTML = numeroindepend
    var tdindvotes = document.createElement('td');
     independinfo.appendChild(tdindvotes)
     tdindvotes.innerHTML = totalind
    
}
//    senatetabel ()
    
//Criando a tabela de MissedVotes
var missedvotesperc = []

var sumamissedrep = 0;
var tablamembros = []
    
    
    

function missedvotes() {
    for (let t = 0; t < membros.length; t++) {
        missedvotesperc.push(membros[t].missed_votes_pct)
        sumamissedrep += missedvotesperc[t];
    }
    //    missedvoterep.sort()
    missedvotesperc.sort((a, b) => a - b);

    //colando em ordem da forma correta.
    console.log(missedvotesperc)

}
var membrosesmissed = membros.slice(0);
var missedmenosmas = membros.slice(0);



var partyvotes = membros.slice(0);
var partyvotesinvert = membros.slice(0);


var assistence = membros.slice(0);


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
missedpercent(membros.length, missedmenosmas, listamissed)
missedpercent(membros.length, mimenosmais, mimenosmais)

var listavoteswith = []
var listavotesreves = []
var menosmais =[]

function voteswithlist(percent, varial, x) {
    let val = Math.ceil(percent * 0.10)
    for (let h = 0; h < membros.length; h++) {
        if (h < val) {
            x.push(varial[h])
        }

    }
    console.log(x)
}
//Aqui tenho os calculos com os parametros corretos
voteswithlist(membros.length, partyvotesinvert, listavotesreves)
voteswithlist(membros.length, partyvotes, listavoteswith)
voteswithlist(membros.length, missedmenosmas, menosmais)

console.log(media(totalrep, 46).toFixed(2))
console.log(menosmais)
    
    
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