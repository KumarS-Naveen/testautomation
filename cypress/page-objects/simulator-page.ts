export class SimulatorPage{
   chargerurl(){
   return cy.get('input[id="CP"]').first();
   }
   changeIDtag(){
    return cy.get('input[id="TAG"]').first();
    }
    chargerType(chargerType:string){
        return cy.get('input[id='+chargerType+']').first();
    }
    connect(){
        return cy.get('button[id="connect"]').first();
    }
 }