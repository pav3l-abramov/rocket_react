
import React,{Component} from "react";
export  default class hamster extends  Component{
    constructor(mass, fuel) {
        super(mass, fuel)
        this.vel = Math.sqrt(9.8 * 6378100);
        this.mass = Number(mass);

        switch (fuel) {
            case 'chem':
                this.fuel=5e3;
                break;
            case 'ion':
                this.fuel=21e4;
                break;
            case 'nucl':
                this.fuel=4e5;
                break;
            case 'therm':
                this.fuel=37.5e6;
                break;
            case 'photon':
                this.fuel=3e8;
                break;
        }
    }

    get getfuel() {
        return this.fuel;
    }

    get getMass() {
        return this.mass;
    }

    get getfirst_space() {
        return Math.sqrt(9.8*6378100);
    }
    get get_vel_list () {
        let vel_list=[];
        const first_vel = Math.sqrt(9.8*6378100);
        let new_mass = this.mass;
        let hamster_velocity = 0;
        let fuel_mass=0;
        while (hamster_velocity < first_vel) {
            hamster_velocity=this.fuel*Math.log(new_mass/this.mass);
            vel_list.push(hamster_velocity);
            new_mass+=10;
            fuel_mass+=10;
            }
            return vel_list;
        }

    get get_fuel_list () {
            let fuel_list=[];
            const first_vel = Math.sqrt(9.8*6378100);
            let new_mass = this.mass;
            let hamster_velocity = 0;
            let fuel_mass=0;
            while (hamster_velocity < first_vel) {
                hamster_velocity=this.fuel*Math.log(new_mass/this.mass);
                fuel_list.push(fuel_mass);
                new_mass+=10;
                fuel_mass+=10;
                }
                return fuel_list;
            }



    get get_end_fuel () {
        return this.mass*((Math.exp(this.vel/this.fuel))-1);

    }



}
export {hamster}


