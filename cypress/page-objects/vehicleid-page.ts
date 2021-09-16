export class vehicleIDPage {
    
    sendvehicleID(connectorID:string,vehicleID:string){
        this.getVehicleID();
        this.setConnectorFieldAsConnector(connectorID);
        this.setValue(vehicleID);
        this.sendtoServer();
    }
   

    getVehicleID(){
        return cy.get('select[id="metervaluetype"]').select('Connector - VehicleID').first();
    }

    setConnectorFieldAsConnector(connectorID:string){
        return cy.get('input[id="metervaluesconnectorid"]').clear().type(connectorID);
    }

    setValue(vehicleID:string){
        return cy.get('input[id="metervalue"]').clear().type(vehicleID);
    }

    sendtoServer(){ 
        return cy.get('button[id="mv"]').click();
    } 
}