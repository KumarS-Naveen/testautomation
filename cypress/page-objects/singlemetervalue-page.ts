
export class SingleMeterValuPage{
    sendmetervalue(connectorID:string,measurand,value){
        this.getmeasurand(measurand);
        this.setConnectorFieldAsConnector(connectorID);
        this.setValue(value);
        this.sendtoServer();
    }
   

    getmeasurand(measurand:string){
        return cy.get('select[id="metervaluetype"]').select(measurand).first();
    }

    setConnectorFieldAsConnector(connectorID:string){
        return cy.get('input[id="metervaluesconnectorid"]').clear().type(connectorID);
    }

    setValue(value:string){
        return cy.get('input[id="metervalue"]').clear().type(value);
    }

    sendtoServer(){ 
        return cy.get('button[id="mv"]').click();
    } 
}