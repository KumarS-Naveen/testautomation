import { SimulatorPage } from '../../page-objects/simulator-page';
import { StausNotificationPage } from '../../page-objects/status-notification-page';
import { SingleMeterValuPage } from '../../page-objects/singlemetervalue-page';
import { vehicleIDPage } from '../../page-objects/vehicleid-page';
import { startTransaction } from '../../page-objects/start-transaction';
import { stopTransaction } from '../../page-objects/stop-transaction';
import {ChargerNotification } from '../../page-objects/charger-notification';
import { Utils } from '../../page-objects/Utils'
import {meterValuepagess} from '../../page-objects/metervalue-page'

const simulate = new SimulatorPage();
const statusNotification = new StausNotificationPage();
const meterValue = new SingleMeterValuPage();
const vehicle = new vehicleIDPage();
const startTransactionPage = new startTransaction();
const stopTransactionPage = new stopTransaction();
const errorNotification = new ChargerNotification();
const utils = new Utils();
const meterValuepage = new meterValuepagess();

describe('Simulator Navigation', () => {
    it('Simulator',() => {
        const loop = 100;
        const initialSOC = 15;
        //connect
        cy.visit('https://ebusdev-simulator-ebusdev.eu1.mindsphere.io/');
        simulate.chargerurl().clear().type('wss://ebuspt-chargerapp-ebusprod.eu1.mindsphere.io/ChargingStations/ebuspt-66940013ad2ac1c103fa80e2c23f6bbf/f46ae1d');
        simulate.changeIDtag().clear().type('Automation');
        simulate.chargerType("Sicharge_UC_Charger").click();
        simulate.connect().click();
        
        for(let i = 0; i < loop; i++){
        
        //status change
            statusNotification.setChargerAsAvailable();
            statusNotification.setConnectorAsAvailable("1"); 
            statusNotification.setConnectorAsPreparing("1");
            
            
            statusNotification.setConnectorAsAvailable("2");
            statusNotification.setConnectorAsPreparing("2");
            

            vehicle.sendvehicleID("1","BUSda4a4751");
            vehicle.sendvehicleID("2","BUSDZBV4");

            // connector id 1 
            meterValue.sendmetervalue("1","SoC",String(0));
            cy.wait(60000);
            statusNotification.setConnectorAsCharging("1");
            startTransactionPage.start("1");
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(15,30)));
            cy.wait(60000);
            meterValuepage.sendMeterValue();
            cy.wait(60000);
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(65,70)));
            cy.wait(60000);
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(75,80)));
            cy.wait(2000); 
            stopTransactionPage.stop();
            cy.wait(2000);
            statusNotification.setConnectorAsAvailable("1");
            errorNotification.trigger("1");


            // connector id 2
            meterValue.sendmetervalue("2","SoC",String(0));
            cy.wait(60000);
            statusNotification.setConnectorAsCharging("2");
            startTransactionPage.start("2");
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(5,10)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(25,35)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(50,60)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(70,80)));
            cy.wait(2000);
            stopTransactionPage.stop();
            cy.wait(2000);
            statusNotification.setConnectorAsAvailable("2");
            errorNotification.trigger("2");
            statusNotification.setConnectorAsAvailable("2");
        }

    });

    it('Simulator1',() => {
        const loop = 100;
        const initialSOC = 15;
        //connect
        cy.visit('https://ebusdev-simulator-ebusdev.eu1.mindsphere.io/');
        simulate.chargerurl().clear().type('wss://ebuspt-chargerapp-ebusprod.eu1.mindsphere.io/ChargingStations/ebuspt-66940013ad2ac1c103fa80e2c23f6bbf/f46ae1d');
        simulate.changeIDtag().clear().type('Automation');
        simulate.chargerType("Sicharge_UC_Charger").click();
        simulate.connect().click();
        
        for(let i = 0; i < loop; i++){
        
        //status change
            statusNotification.setChargerAsAvailable();
            statusNotification.setConnectorAsAvailable("1"); 
            statusNotification.setConnectorAsPreparing("1");
            
            
            statusNotification.setConnectorAsAvailable("2");
            statusNotification.setConnectorAsPreparing("2");
            

            vehicle.sendvehicleID("1","BUSda4a4751");
            vehicle.sendvehicleID("2","BUSDZBV4");

            // connector id 1 
            meterValue.sendmetervalue("1","SoC",String(0));
            cy.wait(60000);
            statusNotification.setConnectorAsCharging("1");
            startTransactionPage.start("1");
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(15,30)));
            cy.wait(60000);
            meterValuepage.sendMeterValue();
            cy.wait(60000);
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(65,70)));
            cy.wait(60000);
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(75,80)));
            cy.wait(2000); 
            stopTransactionPage.stop();
            cy.wait(2000);
            statusNotification.setConnectorAsAvailable("1");
            errorNotification.trigger("1");


            // connector id 2
            meterValue.sendmetervalue("2","SoC",String(0));
            cy.wait(60000);
            statusNotification.setConnectorAsCharging("2");
            startTransactionPage.start("2");
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(5,10)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(25,35)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(50,60)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(70,80)));
            cy.wait(2000);
            stopTransactionPage.stop();
            cy.wait(2000);
            statusNotification.setConnectorAsAvailable("2");
            errorNotification.trigger("2");
            statusNotification.setConnectorAsAvailable("2");
        }

    });

    it('Simulator2',() => {
        const loop = 100;
        const initialSOC = 15;
        //connect
        cy.visit('https://ebusdev-simulator-ebusdev.eu1.mindsphere.io/');
        simulate.chargerurl().clear().type('wss://ebuspt-chargerapp-ebusprod.eu1.mindsphere.io/ChargingStations/ebuspt-66940013ad2ac1c103fa80e2c23f6bbf/f46ae1d');
        simulate.changeIDtag().clear().type('Automation');
        simulate.chargerType("Sicharge_UC_Charger").click();
        simulate.connect().click();
        
        for(let i = 0; i < loop; i++){
        
        //status change
            statusNotification.setChargerAsAvailable();
            statusNotification.setConnectorAsAvailable("1"); 
            statusNotification.setConnectorAsPreparing("1");
            
            
            statusNotification.setConnectorAsAvailable("2");
            statusNotification.setConnectorAsPreparing("2");
            

            vehicle.sendvehicleID("1","BUSda4a4751");
            vehicle.sendvehicleID("2","BUSDZBV4");

            // connector id 1 
            meterValue.sendmetervalue("1","SoC",String(0));
            cy.wait(60000);
            statusNotification.setConnectorAsCharging("1");
            startTransactionPage.start("1");
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(15,30)));
            cy.wait(60000);
            meterValuepage.sendMeterValue();
            cy.wait(60000);
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(65,70)));
            cy.wait(60000);
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(75,80)));
            cy.wait(2000); 
            stopTransactionPage.stop();
            cy.wait(2000);
            statusNotification.setConnectorAsAvailable("1");
            errorNotification.trigger("1");


            // connector id 2
            meterValue.sendmetervalue("2","SoC",String(0));
            cy.wait(60000);
            statusNotification.setConnectorAsCharging("2");
            startTransactionPage.start("2");
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(5,10)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(25,35)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(50,60)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(70,80)));
            cy.wait(2000);
            stopTransactionPage.stop();
            cy.wait(2000);
            statusNotification.setConnectorAsAvailable("2");
            errorNotification.trigger("2");
            statusNotification.setConnectorAsAvailable("2");
        }

    });

    it('Simulator3',() => {
        const loop = 100;
        const initialSOC = 15;
        //connect
        cy.visit('https://ebusdev-simulator-ebusdev.eu1.mindsphere.io/');
        simulate.chargerurl().clear().type('wss://ebuspt-chargerapp-ebusprod.eu1.mindsphere.io/ChargingStations/ebuspt-66940013ad2ac1c103fa80e2c23f6bbf/f46ae1d');
        simulate.changeIDtag().clear().type('Automation');
        simulate.chargerType("Sicharge_UC_Charger").click();
        simulate.connect().click();
        
        for(let i = 0; i < loop; i++){
        
        //status change
            statusNotification.setChargerAsAvailable();
            statusNotification.setConnectorAsAvailable("1"); 
            statusNotification.setConnectorAsPreparing("1");
            
            
            statusNotification.setConnectorAsAvailable("2");
            statusNotification.setConnectorAsPreparing("2");
            

            vehicle.sendvehicleID("1","BUSda4a4751");
            vehicle.sendvehicleID("2","BUSDZBV4");

            // connector id 1 
            meterValue.sendmetervalue("1","SoC",String(0));
            cy.wait(60000);
            statusNotification.setConnectorAsCharging("1");
            startTransactionPage.start("1");
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(15,30)));
            cy.wait(60000);
            meterValuepage.sendMeterValue();
            cy.wait(60000);
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(65,70)));
            cy.wait(60000);
            meterValue.sendmetervalue("1","SoC",String(initialSOC+ utils.getRandomInt(75,80)));
            cy.wait(2000); 
            stopTransactionPage.stop();
            cy.wait(2000);
            statusNotification.setConnectorAsAvailable("1");
            errorNotification.trigger("1");


            // connector id 2
            meterValue.sendmetervalue("2","SoC",String(0));
            cy.wait(60000);
            statusNotification.setConnectorAsCharging("2");
            startTransactionPage.start("2");
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(5,10)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(25,35)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(50,60)));
            cy.wait(60000);
            meterValue.sendmetervalue("2","SoC",String(initialSOC+ utils.getRandomInt(70,80)));
            cy.wait(2000);
            stopTransactionPage.stop();
            cy.wait(2000);
            statusNotification.setConnectorAsAvailable("2");
            errorNotification.trigger("2");
            statusNotification.setConnectorAsAvailable("2");
        }

    });
}); 