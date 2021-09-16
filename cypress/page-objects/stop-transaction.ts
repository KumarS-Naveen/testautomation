export class stopTransaction {

    
    stop(){ 
       this.stoptransaction();
    } 

    private stoptransaction(){ 
        return cy.get('button[id="stop"]').click();
    } 

   

    
}