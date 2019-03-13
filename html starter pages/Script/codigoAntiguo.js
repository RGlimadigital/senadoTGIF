filterMembers: function () {
            this.membros = this.Fullmembers
            console.log("ei")
            app.multiselect = [];
            app.valorselect = document.getElementById('seletor').value;
            app.checkedBoxes = document.querySelectorAll('input[name=partido]:checked');
            console.log(app.checkedBoxes);
            console.log('Checked', app.multiselect.length)
            

            for (let g = 0; g < app.membros.length; g++) {
                

                if (app.checkedBoxes.length === 0) {
                    if (app.valorselect == 'All') {
                        console.log('0 and all')
                        app.multiselect.push(app.membros[g])
                        
                        console.log(app.multiselect)


                    } else if (app.membros[g].state == app.valorselect) {
                        console.log('0 and state')

                        app.multiselect.push(app.membros[g])
                    }
                }
            }


            for (let j = 0; j < app.checkedBoxes.length; j++) {
                for (let g = 0; g < app.membros.length; g++) {

                    if (app.valorselect == 'All' && (app.checkedBoxes[j].value == app.membros[g].party)) {
                        app.multiselect.push(app.membros[g])
                        //                console.log('hola hola')
                    } else if ((app.membros[g].state == app.valorselect) && (app.checkedBoxes[j].value == app.membros[g].party)) {
                        console.log('hola hola')
                        app.multiselect.push(app.membros[g]);


                    } else if ((app.checkedBoxes.length === 0) && (app.valorselect == 'All')) {
                        app.multiselect.push(app.membros[g])


                        console.log('hola 4')
                    } else if ((app.checkedBoxes.length === 0) && (app.membros[g].state == app.valorselect)) {
                        app.multiselect.push(app.membros[g])
                        console.log('Hola 5')
                    }
                    
                     else if((app.multiselect == 0 )  && (app.membros[g].state == app.valorselect)){
                        console.log('vazio')
                        app.nFound = true;
                      
                    }
                    


                }

            }
            console.log(app.multiselect.length)
            this.membros = this.multiselect



            //Como poderia ser:
function miFiltro(){
    string estado
    arr partidos

    miembros.filter(m => m.estado === estado)
    .filter(m => partidos.includes(m.partidos))
}


filterdouble(){
    app.checkedBoxes.length ?  
    this.membros = app.checkedBoxes.flatMap(p => 
        app.Fullmembers.filter(membro => membro.party == p))
    : this.membros = this.Fullmembers;
     (app.select == 'All' && app.checkedBoxes.length ?  )? this.membros = this.Fullmembers:
     app.doublefilter =  app.membros.includes(memb => memb.state == app.select);


}

filterMembers(){
    app.checkedBoxes.length ?  
    this.membros = app.checkedBoxes.flatMap(p => 
        app.Fullmembers.filter(membro => membro.party == p))
    : this.membros = this.Fullmembers;

    
},
//Filtros com os campos dos estados.
filterState(){
    console.log(app.select);
    app.select == 'All'? this.membros = this.Fullmembers:
  
  this.membros =  app.Fullmembers.filter(memb => memb.state == app.select);

       
},

filterMembers(){
    app.checkedBoxes.length ?  
    this.membros = app.checkedBoxes.flatMap(p => 
        app.Fullmembers.filter(membro => membro.party == p))
    : this.membros = this.Fullmembers;

    
},
//Filtros com os campos dos estados.
filterState(){
    console.log(app.select);
    app.select == 'All'? this.membros = this.Fullmembers:
  
  this.membros =  app.Fullmembers.filter(memb => memb.state == app.select);

       
},






           

        }