export class StausNotificationPage {

    setChargerAsAvailable(){
        cy.wait(1000);
        this.getChargerAsPerStatus('Connector - Available');
        this.setConnectorFieldAsCharger();
        this.sendStatusNotification();
        return;    
    }

    setConnectorAsAvailable(connectorID:string){
        cy.wait(1000);
        this.getChargerAsPerStatus('Connector - Available');
        this.setConnectorFieldAsConnector(connectorID);
        this.sendStatusNotification();
        return; 
    }

    setConnectorAsPreparing(connectorID:string){
        cy.wait(1000);
        this.getChargerAsPerStatus('Connector - Preparing');
        this.setConnectorFieldAsConnector(connectorID);
        this.sendStatusNotification();
        return; 
    }

    setConnectorAsCharging(connectorID:string){
        cy.wait(1000);
        this.getChargerAsPerStatus('Connector - Charging');
        this.setConnectorFieldAsConnector(connectorID);
        this.sendStatusNotification();
        return; 
    }

    getChargerAsPerStatus(status:string){
        return cy.get('select[id="statusvalue"]').select(status).first();
    }

    setConnectorFieldAsCharger(){
        return cy.get('input[id="statusconnectorid"]').clear().type("0");
    }

    setConnectorFieldAsConnector(connectorID:string){
        return cy.get('input[id="statusconnectorid"]').clear().type(connectorID);
    }

    sendStatusNotification(){ 
        return cy.get('button[id="status"]').click();
    } 

}