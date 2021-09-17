export class ChargerNotification {
    

    trigger(connectorID:string){
        this.getConnectorFaulted();
        this.getError(connectorID);
        this.setConnectorFieldAsConnector(connectorID);
        this.sendStatusNotification();
        return
    }

    private getConnectorFaulted(){
        return cy.get('select[id="statusvalue"]').select('Connector - Faulted').first();
    }

    private getError(connectorID:string){
        if(connectorID==="1"){
            return cy.get('select[id="Sicharge_UC_Error_Code"]').select('UnderVoltage - DCLinkUnderVoltage - 27').first();
        }
        return cy.get('select[id="Sicharge_UC_Error_Code"]').select('OtherError - chargingSystemIncompatibility - 24').first();
    }

    private setConnectorFieldAsConnector(connectorID:string){
        return cy.get('input[id="statusconnectorid"]').clear().type(connectorID);
    }

    private sendStatusNotification(){ 
        return cy.get('button[id="status"]').click();
    } 

}