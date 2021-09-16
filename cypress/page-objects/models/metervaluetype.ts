export class MeterValueType {
    connectorId:number;
    meterValue:sampleValue[] = [];
    private sampleValue = new sampleValue();
    setmeterValue(connectorID:number,measurand:string,value:string){
        this.connectorId = connectorID;
        this.sampleValue.setSampledValue("Sample.Periodic","Raw","Inlet",measurand,value)
    }
}


  export class sampleValue{
    sampledValue:sampledValue[] = [];
    timestamp:string

    setSampledValue(context:string,format:string,location:string,measurand:string,value:string){
        this.sampledValue.push({context,format,location,measurand,value});
        this.timestamp = new Date().toISOString();
    }

  }   

    export class sampledValue{
        context:string = "Sample.Periodic";
        format:string = "Raw";
        location:string = "Inlet";
        measurand:string;
        value:string
    }
