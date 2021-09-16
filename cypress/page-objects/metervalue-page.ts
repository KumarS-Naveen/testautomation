export class meterValuepage {
   const data:object = {"connectorId":1,"meterValue":
   [{"sampledValue":[
       {"context":"Sample.Periodic","format":"Raw","location":"Inlet","measurand":"Voltage","phase":"L3","unit":"V","value":"231"},
       {"context":"Sample.Periodic","format":"Raw","location":"Inlet","measurand":"SoC","value":"10"},
      ],
       "timestamp": new Date().toISOString()}]};
    sendMeterValue(){
        cy.wait(1000);
        this.getMeterValue();
        this.clearDefualtValues();
        this.setMeterValue();
        this.submitMeterValue();
        return;
    } 

    getMeterValue(){
        return cy.get('select[id="testMessageType"]').select('MeterValues').first();
    }
    
    clearDefualtValues(){
        return cy.get('textarea[class="ace_text-input"]').last().clear({force: true})
    }
  
    setMeterValue(){
        return cy.get('div[class="ace_content"]').last().type( JSON.stringify(this.data),{ parseSpecialCharSequences: false });
    }

    submitMeterValue(){
        return cy.contains("Send Test JSON").click(); 
    }
} 