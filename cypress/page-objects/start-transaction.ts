export class startTransaction {

    
    start(connectorId:string){ 
        this.starttransaction();
        cy.wait(1000);
        //this.checkConnectorID()
        this.enterConnectorID(connectorId);
        this.starttransactionModel();
        return
    } 

    private starttransaction(){ 
        cy.get('button[id="start"]').then(($btn) => {
            if ($btn.is(":disabled")) {
                return cy.get('button[id="stop"]').click();
            } else {
              return  cy.get('button[id="start"]').click();
            }
          })
    } 

    private starttransactionModel(){ 
        return cy.get('button[id="startTransactionModalButton"]').click();
    } 

    private checkConnectorID(){
      return  cy.get('#stModalChangeCID input[type="checkbox"]').check();
    }

    private enterConnectorID(connectorId:string){
        return cy.get('input[id="stModalConnectorID"]').clear().type(connectorId);
    }

    
}