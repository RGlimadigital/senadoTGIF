let app = new Vue({

    el: '#vue-app',

    data: {
        membros: [],
        mensaje: 'Olá mundo',
        name: 'Rodrigo Lima',
        pagina: window.location.pathname,
        Fullmembers: [],
        multiselect: [],
        valorselect: '',
        checkedBoxes: [], 
        tabela: '',
        elemtb:'',
        estados: [],
        est1: [],
        table1: false,
        loader: true,
        nFound: false,
        select: "All",
        doublefilter:[]
        
       

    },

    created: function () {

        console.log('hola, hola'),
        console.log(this.pagina)

            this.getData();
            
           
        

    },

    methods: {


        mundo: function () {
            console.log(this.mensaje)
        },

        getData: function () {
           



            if (this.pagina.includes('/senate-datacopia.html')) {
                console.log('GetData')
                fetch("https://api.propublica.org/congress/v1/113/senate/members.json/", {
                    method: "GET",
                    headers: {
                        'X-API-Key': 'kTMHMGpGpOiq5LsQGKWpAWH2UQqoM8UWAbvm9ZRO'
                    }
                }).then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }

                }).then(function (json) {
                    app.membros = json
                    
                    app.loader = false;
                    app.table1 = true;
                    app.membros = json.results[0].members;
                    console.log(app.membros)
                    app.Fullmembers = json.results[0].members;
                    app.State();
                    app.creatEstat();
                    console.log(app.membros)
                    //inserir aqui as chamadas das funçoes.
                }).catch(function (error) {
                    console.log("Request failed:" + error.message);
                })
            } else if (this.pagina == '/house-data.html') {
                console.log('mi llamada')
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
                    console.log(app)
                    console.log(this)
                    app.membros = json.results[0].members;
                     app.State();
                    app.creatEstat();
                    console.log('Aqui no fetch')
                    console.log(app.membros)
                    app.Fullmembers = app.membros
                    //inserir aqui as chamadas das funçoes.
                }).catch(function (error) {
                    console.log("Request failed:" + error.message);
                })

            }


        },
        //nueva sintaxis de vue
        filterdouble(){
            const doubleFilter = (app.checkedBoxes.length > 0
            ? app.Fullmembers.filter(membro => app.checkedBoxes.includes(membro.party))
            : app.Fullmembers)
            .filter(membro => app.select !== "All" ? membro.state === app.select : true);
            app.membros = doubleFilter;

            console.log("filtrados:", doubleFilter)  
        
        },
        
        
        State() {
            this.estados = [];
            for (var k = 0; k < this.membros.length - 1; k++) {
                this.estados.push(this.membros[k].state);
                //        console.log(estados[k])
            }

        },
        
        creatEstat(){
            this.est1 = [];

    for (let i = 0; i < this.estados.length; i++) {
        if (this.est1.indexOf(this.estados[i]) == -1) {
            this.est1.push(this.estados[i]);
            
        }
    }
            
        }
        
       
    }


})