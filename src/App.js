import logo from './logo.svg';
import './App.css';
import {hamster} from './hamster.js'
import React from "react";
//import Colors from './chart.js';
//import { Chart, registerables } from 'chart.js';
//Chart.register(...registerables);
//import {Chart} from 'chart.js';
//import Chart from 'chart.js/auto';
//let Chart = require("chart.js");
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale} from 'chart.js' ;
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title);
//import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js' ;
//Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
function App() {

    function get_first_space() {
        let select = document.getElementById('fuel');
        let selectedValue = select.options[select.selectedIndex].value;
        let hamster_mass = document.getElementById('hamster_mass').value;
        let fuel_type = selectedValue;

        let hamster1 = new hamster(hamster_mass, fuel_type);

        print_hamster_mass(hamster1.getMass);
        print_first_space_vel(hamster1.getfirst_space);
        print_fuel_vel(hamster1.getfuel);

        print_fuel_mass(hamster1.get_end_fuel);
        print_relative_fuel_mass(hamster1.get_end_fuel, hamster1.getMass);
        print_diagram(hamster1.get_fuel_list, hamster1.get_vel_list);
    }

    function print_first_space_vel(first_space_velocity) {
        document.getElementById('first_space_vel1').textContent = 'Первая космическая скорость (v): ' + first_space_velocity + ' м/с';
    }

    function print_hamster_mass(hamster_mass) {
        document.getElementById('initial_mass').textContent = 'Масса хомячка (m): ' + hamster_mass + ' кг';
    }

    function print_fuel_mass(fuel_mass) {
        document.getElementById('needed_fuel').textContent = 'Конечная масса необходимого топлива (M-m): ' + fuel_mass + ' кг';
    }

    function print_fuel_vel(fuel_type) {
        document.getElementById('fuel_vel').textContent = 'Скорость вылета рабочего тела (S): ' + fuel_type + ' м/с';
    }

    function print_relative_fuel_mass(fuel_mass, hamster_mass) {
        document.getElementById('relative_fuel_mass_rocket').textContent = 'Относительная масса топлива и всей массы ракеты (m/M): ' + 100 * fuel_mass / (fuel_mass + hamster_mass) + ' %';
    }

    function print_diagram(fuel_mass, velocity) {
        let diagram=document.getElementById('velocity_diagram').getContext('2d');

    let myChart = new Chart(diagram, {
        type: 'line',
        data: {
            labels: fuel_mass, //Подписи оси x
            datasets: [
        {
            label: 'v(mf)', //Метка
            data: velocity, //Данные
            borderColor: 'red', //Цвет
            borderWidth: 2, //Толщина линии
            fill: false //Не заполнять под графиком
        }
           //Можно добавить другие графики
        ]
        } ,
            options: {
            responsive: true, //Вписывать в размер canvas

    }
    });

    }



  return (
    <div className="App">
      <header className="App-header">
         <div>
            <h1>Полет хомячка в космос</h1>
            <select name="fuel_type" className="s1" id="fuel">
                <option value="chem">Химическое топливо</option>
                <option value="ion">Ионный двигатель</option>
                <option value="nucl">Ядерное топливо</option>
                <option value="therm">Термоядерное топливо</option>
                <option value="photon">Фотонная ракета</option>
            </select>
            <h2>Напишите массу полезной нагрузки(конечная масса ракеты)</h2>
            <input type="text" id="hamster_mass"></input>
            <div className="v1">
                <label id="first_space_vel1">Первая космическая скорость (V):</label>
            </div>
            <div className="mass">
                <label id="initial_mass">Масса хомячка (m):</label>
            </div>
            <div className="fuel_v">
                <label id="fuel_vel">Скорость вылета рабочего тела (S):</label>
            </div>
            <div className="fuel_mass">
                <label id="needed_fuel">Конечная масса необходимого топлива (M-m):</label>
            </div>
            <div className="relative_fuel_mass">
                <label id="relative_fuel_mass_rocket">Относительная масса топлива и всей массы ракеты (m/M):</label>
            </div>
            <div>
            <canvas id="velocity_diagram"></canvas>
            </div>
             <div>
            <button onClick={get_first_space} type="button" id="start">Запустить хомячка </button>
            </div>

        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
