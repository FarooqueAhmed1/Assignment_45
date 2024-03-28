// // Excercise1 
// // Installation Completted


// // Exercise 2
// // let personName: string= "ERIC";
// // console.log(`Hello ${personName}, Would you like to learn some python today?`);


// // Exercise 3 
// //lower case
// // let personName: string ="Christiano Ronaldo"
// // console.log("lowercase:", personName.toLowerCase());

// // //upper case
// // console.log("uppercase:", personName.toLocaleUpperCase());

// // //Title Case
// // console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));




// // Exercise 4
// // let quote: string= "A person who never made a mistake never tried anything new";
// // let author: string= "Albert Einstein";
// // console.log(`${author} once said, ${quote}`);


// // Exercise 5
// let quote: string= "A person who never made a mistake never tried anything new";
// let famous_person="Albert Einstein";
// let message=`${famous_person} once said, ${quote}`;
// console.log(message);


// // Exercise 6
// let personName: string = `\n\t MUHAMMAD AMIR\t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped);

// // Exercise 7 & 8
// console.log(6 +2);
// console.log(19 -11);
// console.log(4 *2);
// console.log(32 / 4);

// // Exercise 9
// let favouriteNumber: number = 7;
// console.log(`My favourite number is ${favouriteNumber}`);

// // Exercise 10
// //My Name is Farooque Sheikh
// //Dated: 25/02/2024
// //This program will run simple code Just like Hello Farooque
// console.log('Hello World Simple Program');


// //Ex no 11
// let members: string[] =[`Nasir`,`Aziz`,`Israr`,`Ayesha`];
// for(let i=0; i<members.length; i++){
//     console.log(members[i]);
// }

// //Ex no 12
// let member: string[] =[`Nasir`,`Aziz`,`Israr`,`Ayesha`];
// let message: string=`Chlo Android Leny :`;
// for(let i=0; i<members.length; i++){
//     console.log(message + members[i]);
// }


// //Ex no 13
// let transportation : string [] = [`Grande`,`Heavy Bike`,`Local Bus`,`Rikshaw`];
// for(let i=0; i<transportation.length; i++){
//     console.log(`I would like to own ` + transportation[i]);
// }

// // Exercise 14 & 15
// let guest_list : string [] = [`Ali`,`Farooque`,`Usman`,`Kashif`];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear Respected Sir/Madam ` + guest_list[i] + `,\nWe are inviting you to dinner on Tommorow.\nThank You`);
// }

// let not_present : string = `Farooque`;
// let new_guest : string = `Muhammad Amir`;
// guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear Respected Sir/Madam ` + guest_list[i] + `,\nWe are inviting you to dinner on Tommorow.\nThank You`);
// }
// console.log(`Mr. ${not_present} wil not coming tommorow dinner`)


// // Exercise 16
// let guest_list : string [] = [`Ali`,`Farooque`,`Usman`,`Kashif`];
// // for(let i=0; i<guest_list.length; i++){
//     // console.log(`Dear Respected Sir/Madam ` + guest_list[i] + `,\nWe are inviting you to dinner on Tommorow.\nThank You`);
// // }

// let not_present : string = `Farooque`;
// let new_guest : string = `Muhammad Amir`;
// guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear Respected Sir/Madam ` + guest_list[i] + `,\nWe are inviting you to dinner on Tommorow.\nThank You`);
// }
// console.log(`Mr. ${not_present} wil not coming tommorow dinner`)

// guest_list.unshift(`Virat`,`Saifi Bhai`,`Mir Hamza`);
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear Respected Sir/Madam ` + guest_list[i] + `,\nWe are inviting you to dinner on Tommorow. We found a big dinner table. So Now we decide to invite 3 more close guests.\nThank You`);
// }


// // Exercise 17
// let guest_list : string [] = [`Ali`,`Farooque`,`Usman`,`Kashif`];
// // for(let i=0; i<guest_list.length; i++){
//     // console.log(`Dear Respected Sir/Madam ` + guest_list[i] + `,\nWe are inviting you to dinner on Tommorow.\nThank You`);
// // }

// let not_present : string = `Farooque`;
// let new_guest : string = `Muhammad Amir`;
// guest_list[1] = new_guest;
// // for(let i=0; i<guest_list.length; i++){
// //     console.log(`Dear Respected Sir/Madam ` + guest_list[i] + `,\nWe are inviting you to dinner on Tommorow.\nThank You`);
// // }
// guest_list.unshift(`Virat`,`Saifi Bhai`,`Mir Hamza`);
// // for(let i=0; i<guest_list.length; i++){
// //     console.log(`Dear Respected Sir/Madam ` + guest_list[i] + `,\nWe are inviting you to dinner on Tommorow. We found a big dinner table. So Now we decide to invite 3 more close guests.\nThank You`);
// // }
// console.log(`\nUnfortunately we can not arrange Big table, Only two people are Allow`);
// while(guest_list.length>2){
//     let remove_guest = guest_list.pop();
//     console.log(`Sorry Sir,${remove_guest} you are not inviting for dinner `); 
// }
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear Respected Sir, ` + guest_list[i] + `,\nYes you are still invited on tommorow.\nThank You`);
// }
// guest_list.splice(0,2)
// console.log(guest_list)

// // Exercise 18
// let places : string [] = [`Istanbul`,`Delhi`,`Faisalabad`,`Colombo`,`Tokyo`]
// // console.log(`original ` + places);
// // Print your array in alphabetical order without modifying the actual list.
// // console.log(`copy` + [...places].sort());

// // Show that your array is still in its original order by printing it.

// // console.log(`original ` + places);

// // Print your array in reverse alphabetical order without changing the order of the original list.

// console.log(`copy` + [...places].sort().reverse());

// // Show that your array is still in its original order by printing it again.

// console.log(`copy` + [...places].sort().reverse());

// // Reverse the order of your list. Print the array to show that its order has changed.

// console.log(`copy` + [...places].sort());

// // Reverse the order of your list again. Print the list to show it’s back to its original order.

// console.log(`copy` + [...places].sort().reverse());





// // Excerise 19
// // Dinner Guest
// // let invitations: string[] = ['Faraz','Rizwan'];
// // let count_invitatons: number = invitations.length;
// // console.log(`${count_invitatons} , People will invited in the dinner`);





// // Task 20
// // // Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// // let country: string [] = ["Pakistan","Turkey","Bangladesh","Iran"]
// // console.log("list of Country:");
// // console.log(country)


// // // Task 21
// // // // They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// // // let person: {name: string, fname: string , age: number} = {name: `Farooque`, fname: `Male` , age: 20}
// // // console.log(person)

// // // Task 22
// // // Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// // const days : string [] = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]
// // // console.log(days{7})
// // console.log(days[6])






// // // Task no 23
// // // Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// // let car = "subaru";

// // console.log("is car == `subaru`? predict true")
// // console.log(car == `subaru`)

// // console.log("is car != `Honda Civic? predict true")
// // console.log(car != `Honda Civic`)

// // console.log("is car == `subaru`? predict false")
// // console.log(car == `Subaru`)

// // console.log("is car == `SUBARU`? predict false")
// // console.log(car == `SUBARU`)

// // console.log("is car.length ==6? predict true")
// // console.log(car.length == 6)

// // console.log("is car.length !==10? predict true")
// // console.log(car.length !== 10)

// // console.log("is 3 <= 2 ? predict false")
// // console.log(3 <= 2)

// // console.log("is 72 > 83 ? predict false")
// // console.log(72 > 83)

// // console.log("is car == `subaru` && car.length == 6? predict true ")
// // console.log(car == `subaru` && car.length == 6)

// // console.log("is 45 > 72 ? predict false")
// // console.log(45 > 72)




// // // Task 24
// // // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// // // Tests for equality and Inequality with strings. 

// // // let name_1 : string = "ALI"
// // // let name_2 : string = "ALI Ahmed"
// // // let name_3 : string = "ALI Ahmed Sheikh"

// // // if (name_1 == name_3){
// // //     console.log("names are equal")
// // // } else {
// // //     console.log("names are not equal")
// // // }

// // // if (name_1 != name_2){
// // //     console.log("names are equal")
// // // } else {
// // //     console.log("names are not equal")
// // // }

// // let age_1 : number = 18
// // let age_2 : number = 22

// // // if (age_1 == 18) {
// // // console.log("eligible for vote")
// // // }

// // // if (age_1 == 22) {
// // //     console.log("eligible for vote in newer category")
// // //  }

// // // if (age_1 <= age_2){  //lesser
// // //     console.log("younger")
// // // }

// // // if (age_2 >= age_1){  //greater
// // //     console.log("Older")
// // // }


// // // AND Operator
// // // if (age_1 == 18 && age_2 == 22){
// // //     console.log("person is eligible for vote")
// // // }

// // // OR OPERATOR
// // // if (age_1 == 18 || age_2 != 22){
// // //     console.log("person is eligible not for vote")
// // // }

// // // Items in Array

// // let country : string [] = ["South Korea","Japan","China","India"]
// // // if (country.includes("India")){
// // //     console.log("India is in country list")
// // // }


// // // Not in array
// // if (!country.includes ("America")){
// //     console.log("America is not include in array")
// // }


      




// // // Task25

// // // let alien_color : string ="green"

// // // if (alien_color == "green")

// // // console.log("you earn 5 points")


// // let alien_color : string = "red"
// // if (alien_color == "green")
// // console.log("no output")



// // Task26
// // Earned 5 points

// // let alien_color : string ="green"

// // if (alien_color == "green"){
// // console.log("player just earned 5 points for shooting the alien.")
// // } else{
// //     console.log("player just earned 10 points.")
// // }

// // // Earned 10 Points

// // let alien_color : string ="red"

// // if (alien_color == "green"){
// // console.log("player just earned 5 points for shooting the alien.")
// // } else{
// //     console.log("player just earned 10 points.")
// // }




// // Task 27

// // let alien_color : string ="red"

// // if (alien_color == "green"){
// // console.log("5 points")
// // } else if (alien_color =="yellow") {
// //     console.log("10 points")
// // } else {
// //     console.log("15 points")
// // }



// // Task 28
// // let age : number = 67 
// // if (age < 2) {
// // console.log("you are a baby")
// // } else if (age < 4) {
// //     console.log("you are a toddler")
// // } else if ( age < 13) {
// //     console.log("you are a kid")
// // } else if (age < 20) {
// //     console.log("you are a Teenager")
// // } else if (age < 65) {
// //     console.log("you are a Adult")
// // } else {
// //     console.log("You are older")
// // }




// // Task 29
// // You really like bananas!

// // let favourite_fruits : string [] = ["Strawberry","Mango","Orange","Watermelon","peach","berry"]

// // if (favourite_fruits.includes("Mango")) {
// //     console.log("Mango")
// // }
// // if (favourite_fruits.includes("Orange")) {
// //     console.log("Orange")
// // }
// // if (favourite_fruits.includes("Watermelon")) {
// //     console.log("Watermelon")
// // }
// // if (favourite_fruits.includes("peach")) {
// //     console.log("You really like bananas")
// // }
// // if (favourite_fruits.includes("berry")) {
// //     console.log("You really like bananas")
// // }





// // Task 30

// // Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


// // let users : string [] = ["Admin","Eric","Ali","Najeeb","Khadija"]
// // for(let user of users) {
// // if (user === "admin"){
// //     console.log("Hello admin, would you like to see a status report?")
// // } else {
// //     console.log(`Hello ${user} thankyou for loging in again`)
// // }
// // }




// // Excerise 31
// // NO User
// // let users: string[] = ["Qayoom","Eric","Sajid","Bilal","Admin"]
// // if(users.length === 0){
// //    console.log("we need to find some users!")
// // }else{
// //    for(let user of users){
// //        if(user === "Admin"){
// //            console.log("Hellow Admin would you like see a status report?")
// //        }else{
// //            console.log(`Hellow ${user} thankyou for loging in again`)
// //      }
// //    }
// // }

// // users = []
// // if(users.length === 0){
// //    console.log("we need to find some new users")
// // }


// // Excerise 32
// // Checking User Names
// let current_users: string[] =["ALi","Awais","Ahmed","Atif"];
// let new_users: string[ ] =["Admin","Eric","Sajid","Bilal"];

// let current_users_lower: string[] = current_users.map(user => user.toLowerCase())

// for(let new_user of new_users){
//    if(current_users_lower.includes (new_user.toLowerCase())){
//        console.log(`Sorry ${new_user}, that name is taken`)
//        }else{
//            console.log(`yes ${new_user}, is still avialble in list`)
//     }
// }



// // Excerise 33
// // Ordinal Number
// // let numbers: number[] = [1,2,3,4,5,6,7,8,9]
// // for (let number of numbers){
// //    if(number === 1){
// //        console.log(`${number}st`)//1st
// //     } else if(number === 2){
// //     console.log(`${number}nd`)//2nd
// //     }
// //     else if(number === 3){
// //        console.log(`${number}rd`)//3rd
// //     }
// //      else if(number === 4){
// //        console.log(`${number}th`)//4th
// //    }
// //     else if(number === 5){
// //        console.log(`${number}th`)//5th
// //     }
// //     else if(number === 6){
// //        console.log(`${number}th`)//6th
// //     }
// //     else if(number === 7){
// //        console.log(`${number}th`)//7th
// //     }
// //     else if(number === 8){
// //        console.log(`${number}th`)//8th
// //     }
// //     else if(number === 9){
// //        console.log(`${number}th`)//9th
// //     }
// //     }


// //     Excerise 34
// //     pizza 
// //     let favorite_pizza: string[] = ["pepperoni","veg","chiken"]

// // for(let pizza of favorite_pizza){
// //    console.log(pizza)
// // }
// // console.log("\n")

// // for(let pizza of favorite_pizza){
// //    console.log(`I really like ${pizza} Pizza`)
// // }

// // console.log("I really love Pizza!")


// // Excerise 35
// // Animals
// // let animals: string[] = ["cat","dog","lion","monkey"]
// // for(let animal of animals){
// //    console.log(animal)
// // }
// // console.log("\n")

// // for(let animal of animals){
// //    console.log(`A ${animal} has a tail`)
// // }

// // console.log("\n")

// // console.log("\n All of these are great pets!, but i like cats more")


// // Excerise 36
// // T-Shirt
// // function makeShirt (size: string, text: string) : void {
// //    console.log(`you order ${size} shirt that says ${text}`)
// // }

// // makeShirt(`large`,`"I love typescript"`)
// // makeShirt(`Medium`,`"I need abig shirt"`)



// // Excerise 37
// // Large Shirt
// // function makeShirt (size: string= "large", text: string= "I love typescript") : void {
// //    console.log(`you order ${size} shirt that says ${text}`)
// // }

// // makeShirt()
// // makeShirt(`medium`)
// // makeShirt(`small`,`"i need a big shirt to wear"`)



// // Excerise 38
// // Cities
// // function describecity(city: string, country : string="pakistan"): void{
// //    console.log(`${city} is in ${country}`)
// // }

// // describecity('Karachi')//Default sentence
// // describecity('France','europe')
// // describecity('Newyork','America')


// // Excerise 39
// // City Names
// // function citycountry(city: string, country: string): string  {
// //    return `${city}, ${country}`
     
// //  }
 
// //  let C1 = citycountry(`lahore`,`pakistan`)
// //  let C2 = citycountry(`tokyo`,`japan`)
// //  let C3 = citycountry(`Newyork`,`USA`)
 
// //  console.log(C1)
// //  console.log(C2)
// //  console.log(C3)

 
// //  Excerise 40
// //  Album
// //  function makealbum (artist: string, tittle: string): {artist: string; tittle: string}; {
// //    const dictionaries = {
// //        artist: artist.charAt(0).toupperCase() + artist.slice(1)
// //        tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1)

// //     };
// //     return dictionaries;
// // }

// // let album = makealbum("Ali","light")
// // console.log(album)


// //  album = makealbum("Sajid","Red Wave")
// // console.log(album)


// //  album = makealbum("Qayoom","Rainbow")
// // console.log(album)


// // Excerise 41
// // Magicians
// // function show_magicians(show_magicians: string[]): void {

// //    for(const magician of show_magicians){
// //        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
// //     }
// //     }
    
// //     const magician: string []=["Bilal","sajid","Qayoom"]
// //     show_magicians(magician)


// //     Excerise 42
// //     Great Magicians
// //     function make_great(magicians: string[]): void{
// //        for(let i=0 ; i< magicians.length; i++){
// //        magicians[i] = magicians[i] + "the great"
// //         }
// //         }
        
// //         const magicians2: string[]= ["Bilal ","Farooque ","Qayoom "]
// //         make_great(magicians2)
// //        console.log(magicians2)



// //         Excerise 43
// //         Unchanged Magicians
// //         function make_great2(magicians: string[]): string[] {
// //            const greatmagicians: string[] = [];
// //             for(let i = 0; i < magicians.length; i++){
// //               greatmagicians.push(magicians[i] + 'The Great');
// //             }
// //             return greatmagicians
// //            }
// //             const magicians3: string[] = ["Bilal","Sajid","Qayoom"];
// //             const greatmagicians2: string[] = make_great2(magicians3);
           
// //             console.log(magicians3);
// //             console.log (greatmagicians2);


// //             Excerise 44
// //             Sandwiches
// //             function sandwich(...items: string[]): void{
// //                console.log("sandwich order:")
// //                 for(let i=0; i < items.length; i++){
// //                    console.log(`${items[i]}`)
// //                 }
// //             }
// //             console.log("Enjoy your sandwich sajid ali")
            
// //             sandwich("capcicum","tomato","chiken")
// //            sandwich("beef","cheese")
// //             sandwich("garlic chiken","mayo sauce")



// //             Excerise 45
// //             Cars
// //             type car {
// //                manufacturs: string
// //                 modle: string
// //                 [key: string]: any;

// //             function Createcar(manufacturs: string, modle: string, optional: Record<string, any>): car {
// //              return{
// //                manufacturs,
// //                 modle,
// //                 ...optional
// //              }
// //             }
            
// //             const mycar: car = Createcar ("Toyota","Corolla", {color:"silver", year: "2024"})
// //             console.log(mycar)