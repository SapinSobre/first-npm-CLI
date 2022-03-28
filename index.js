#!/usr/bin/env node

const axios = require('axios');
const country = require('country-list');
const readlineSync = require('readline-sync');
const day = new Date().getFullYear();
const url ='https://date.nager.at/api/v3/PublicHolidays/';

const userCountry = readlineSync.question('Please enter the name of a country: ');
const countryCode = country.getCode(userCountry.trim());

const displayHolidays = async () => {   
   try {
       const response = await axios.get(`${url}${day}/${countryCode}`);
       const datas = response.data;
        datas.forEach((data) => {
           console.log(`${data.name}/${data.date}`);    
    });
   }catch(error) {
       console.log(error);
   }
}
displayHolidays(day, countryCode);