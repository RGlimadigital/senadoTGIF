let appinfo = new Vue({

    el: '#vue-app',
    data: {

        membros: [],
        republicanos: [],
        democratas: [],
        independentes: [],
        Fullmembers: [],
        numerorepublic: [],
        numerodemocrat: [],
        numeroindepend: [],
        totalrep: [],
        totaldem: [],
        totalind: [],
        pagina: window.location.pathname,
        estatisticas: {},









    },

    created: function () {

        this.getData();
        


    },

    methods: {
        
        numberMembers: function () {
                        console.log('membros')
                        console.log(this.membros)
                        for (let i = 0; i < this.membros.length; i++) {
                            if (this.membros.party == 'R') {
                                this.republicanos.push(this.membros[i]);
                            }
                        }




                    },

        getData: function () {


            if (this.pagina == '/senatehouse-attendance-starter-page.html' || this.pagina == '/senatehouse-party-loyalty-starter-page.html') {
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
                    console.log(this)
                    appinfo.membros = json.results[0].members;
                    appinfo.Fullmembers = json.results[0].members;
                    //                    appinfo.State();
                    //                    appinfo.creatEstat();
                    console.log(appinfo.membros);
                    this.numberMembers();
                    



                }).catch(function (error) {
                    console.log("Meu deu erro " + error.message);
                });




            }


        },


    }



})