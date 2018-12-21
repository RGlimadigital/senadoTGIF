var data
var republicanos = []
var democratas = []
var independentes = []
var pagina = window.location.pathname
console.log(pagina)




if (pagina == '/senate:house-attendance-starter-page.html' || pagina == '/senate:house-party-loyalty-starter-page.html') {

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
        var membros = data.results[0].members;
        //inserir aqui as chamadas das funçoes.
        var estatisticas = {}

        partidos(membros, republicanos, democratas, independentes);
        var numerorepublic = republicanos.length
        var numerodemocrat = democratas.length
        var numeroindepend = independentes.length



        var totalrep = totalvotos(republicanos, totalvoter).toFixed(2)
        var totaldem = totalvotos(democratas, totalvoted).toFixed(2)
        var totalind = totalvotos(independentes, totalvotei).toFixed(2)
        totaldem = media(totaldem, numerodemocrat).toFixed(2)
        totalrep = media(totalrep, numerorepublic).toFixed(2)
        totalind = media(totalind, numeroindepend).toFixed(2)



        function senatetabel() {
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
        senatetabel()

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
        var menosmais = []

        function voteswithlist(percent, varial, x) {
            let val = Math.ceil(percent * 0.10)
            for (let h = 0; h < membros.length; h++) {
                if (h < val) {
                    x.push(varial[h])
                }

            }
            console.log(x)
        }
        //Aqui Calculo de los Loyalty
        voteswithlist(membros.length, partyvotesinvert, listavotesreves)
        voteswithlist(membros.length, partyvotes, listavoteswith)
        voteswithlist(membros.length, missedmenosmas, menosmais)

        console.log(media(totalrep, 46).toFixed(2))
        console.log(menosmais)




        maketable(menosmais, listamissed, listavotesreves, listavoteswith)




    }).catch(function (error) {
        console.log("Request failed:" + error.message);
    });

    //-----TERMINA EL IF -------------
} else if (pagina == '/house:house-attendance-starter-page.html' || pagina == '/house:house-party-loyalty-starter-page.html') {

    fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
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
        var membros = data.results[0].members;
        //inserir aqui as chamadas das funçoes.
        var estatisticas = {}

        partidos(membros, republicanos, democratas, independentes);
        var numerorepublic = republicanos.length
        var numerodemocrat = democratas.length
        var numeroindepend = independentes.length



        var totalrep = totalvotos(republicanos, totalvoter).toFixed(2)
        var totaldem = totalvotos(democratas, totalvoted).toFixed(2)
        var totalind = totalvotos(independentes, totalvotei).toFixed(2)
        totaldem = media(totaldem, numerodemocrat).toFixed(2)
        totalrep = media(totalrep, numerorepublic).toFixed(2)
        totalind = media(totalind, numeroindepend).toFixed(2)



        function senatetabel() {
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
        senatetabel()

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
        var menosmais = []

        function voteswithlist(percent, varial, x) {
            let val = Math.ceil(percent * 0.10)
            for (let h = 0; h < membros.length; h++) {
                if (h < val) {
                    x.push(varial[h])
                }

            }
            console.log(x)
        }
        //Aqui Calculo de los Loyalty
        voteswithlist(membros.length, partyvotesinvert, listavotesreves)
        voteswithlist(membros.length, partyvotes, listavoteswith)
        voteswithlist(membros.length, missedmenosmas, menosmais)

        console.log(media(totalrep, 46).toFixed(2))
        console.log(menosmais)




        maketable(menosmais, listamissed, listavotesreves, listavoteswith)




    }).catch(function (error) {
        console.log("Request failed:" + error.message);
    });


}





function partidos(var1, var2, var3, var4) {
    console.log(var4)
    for (let p = 0; p < var1.length; p++) {
        if (var1[p].party == 'R') {
            var2.push(var1[p])
        } else if (var1[p].party == 'D') {
            var3.push(var1[p])
        } else if (var1[p].party == 'I') {
            var4.push(var1[p])

        }

    }
    //    console.log(republican)
    //    console.log(democratas)
    //    console.log(independent)

}

var totalvoter = []
var totalvoted = []
var totalvotei = []
var independentes = []
var totalpartidos = []
var voteswithparty = []
var totaldem = 0
var totalind = 0
var totaltot = 0



function totalvotos(membros, varpush) {
    console.log(membros)
    console.log(varpush)
    let total = 0;
    for (let t = 0; t < membros.length; t++) {
        varpush.push(membros[t].votes_with_party_pct)
        total = total + varpush[t];

    }
    return total;


}
console.log(republicanos.length)


console.log(republicanos)

function media(somatorio, n) {
    return somatorio / n
    console.log(somatorio)
}


// Aqui temos o objeto de trabalho

var missedvotesperc = []

var sumamissedrep = 0;
var tablamembros = []

function senatetabel() {
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


//senatetabel()

function maketable(menosmais, listamissed, listavotesreves, listavoteswith) {
    console.log("esta funcionando")

    if (pagina == '/senate:house-party-loyalty-starter-page.html' || pagina == '/house:house-party-loyalty-starter-page.html') {
        //        createtablemost(menosmais
        createtablemost(listavoteswith, 'most', 'total_votes', 'votes_with_party_pct')
        createtablemost(listavotesreves, 'least', 'total_votes', 'votes_with_party_pct')

    } else if (pagina == '/senate:house-attendance-starter-page.html'|| pagina == '/house:house-attendance-starter-page.html')  {
        createtablemost(menosmais, 'most', 'missed_votes', 'missed_votes_pct')
        console.log(listamissed)
        createtablemost(listamissed, 'least', 'missed_votes', 'missed_votes_pct')
    }
}




function createtablemost(array, id, key, key2) {

    var tabela = document.getElementById(id);
    tabela.style.height = '100%';
    tabela.style.borderCollapse = "collapse";


    var tbdy = document.createElement('tbody');

    for (j = 0; j < array.length; j++) {
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
        linka.value = array[j].url
        link.setAttributeNode(linka)
        link.setAttributeNode(target);
        target.value = '_blank'





        tr.appendChild(td);
        td.appendChild(link);
        link.innerHTML = array[j].first_name + ' ' + meio(array[j]) + ' ' + array[j].last_name;


        var tdmissedvotes = document.createElement('td');
        tr.appendChild(tdmissedvotes);
        tdmissedvotes.innerHTML = array[j][key];

        var tdpercentmissed = document.createElement('td');
        tr.appendChild(tdpercentmissed);
        tdpercentmissed.innerHTML = array[j][key2];
    }
    tabela.appendChild(tbdy);
}