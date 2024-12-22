const main = document.querySelector(".all_car_card_container");
var arr = [{ name: "Fortuner", type: "luxury", price: "7999", brand: "Toyota", idval: "", time: "8HRS/80KMS", category: "SUV", year: "", img: "CollectionsImages/newFortuner.jpg", img1: "CollectionsImages/newFortuner.jpg", img2: "CollectionsImages/newFortuner.jpg" },
{ name: "Carnival", type: "luxury", price: "9999", brand: "Kia ", category: "Luxury MPV (Minivan)", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/CARNIVAL1.jpg", img1: "CollectionsImages/CARNIVAL2.jpg", img2: "CollectionsImages/CARNIVAL3.jpg" },
{
    name: "Camry", type: "luxury", price: "9999", brand: "Toyota", category: "Luxury Sedan", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/CAMRY1.jpg", img1: "CollectionsImages/CAMRY2.jpg", img2: "CollectionsImages/CAMRY3.jpg"
},
{
    name: "Granace", type: "luxury", price: "34999", brand: "Toyota", category: "SUV", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/Granace1.jpg", img1: "CollectionsImages/Granace2.jpg", img2: "CollectionsImages/Granace3.jpg"
},
{
    name: "E-220", type: "luxury", price: "11999", brand: "Mercedes", idval: "", time: "8HRS/80KMS", category: "Luxury Sedan", year: "new", img: "CollectionsImages/e220m1.jpg", img1: "CollectionsImages/e220m2.jpg", img2: "CollectionsImages/e220m1.jpg"
},
{
    name: "520-D", type: "luxury", price: "11999", brand: "BMW", category: "Luxury Sedan", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/520DBMW1.jpg", img1: "CollectionsImages/520DBMW2.jpg", img2: "CollectionsImages/520DBMW3.jpg"
},
{
    name: "BMW I7 EV ", type: "luxury", price: "39999", brand: "BMW", category: "Luxury Sedan", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/BMWI7-1.jpg", img1: "CollectionsImages/BMWI7-2.jpg", img2: "CollectionsImages/BMWI7-3.jpg"
},
// {
//     // name: "BMW I7", type: "luxury", price: "39999", brand: "BMW", category: "Luxury Sedan", idval: "", time: "8HRS/80KMS", year: "old", img: "CollectionsImages/.jpg", img1: "CollectionsImages/e220m2.jpg", img2: "CollectionsImages/carnival1.jpg"
// },

{ name: "Commuter", type: "luxury", price: "11999", brand: "Toyota", idval: "", time: "8HRS/80KMS", category: "Van", year: "", img: "CollectionsImages/COMMUTER1.jpg", img1: "CollectionsImages/COMMUTER2.jpg", img2: "CollectionsImages/COMMUTER3.jpg" },
{
    name: "A7", type: "luxury", price: "17999", brand: "Audi", category: "Luxury Sedan", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/AUDIA7-1.jpg", img1: "CollectionsImages/AUDIA7-COM2.jpg", img2: "CollectionsImages/AUDIA7-3.jpg"
},
{ name: "XF", type: "luxury", price: "12999", brand: "Jaguar", category: "Luxury Sedan", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/JAGUARXF1.jpg", img1: "CollectionsImages/JAGUARXF2.jpg", img2: "CollectionsImages/JAGUARXF3.jpg" },
// { name: "commuter", type: "luxury", price: "14999", brand: "Toyota", idval: "", time: "8HRS/80KMS", category: "Van", year: "new" },
{ name: "V-class", type: "luxury", price: "19999", brand: "Mercedes", category: "Luxury MPV (Minivan)", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/VClass1.jpg", img1: "CollectionsImages/VClass2.jpg", img2: "CollectionsImages/VCLASS3.jpg" },
{ name: "X5", type: "luxury", price: "22999", brand: "BMW", category: "Luxury SUV", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/bmwa51.jpg", img1: "CollectionsImages/bmwa52.jpg", img2: "CollectionsImages/bmwa53.jpg" },

{ name: " A3 Convertible", type: "luxury", price: "29999", brand: "Audi", idval: "", time: "8HRS/80KMS", category: "Luxury Convertible", year: "", img: "CollectionsImages/AUDIA3-1.jpg", img1: "CollectionsImages/AUDIA3-COMMON.jpg", img2: "CollectionsImages/AUDIA3-3.jpg" },
{ name: "S-350", type: "luxury", price: "19999", brand: "Mercedes", category: "Luxury Sedan", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/benzS3501.webp", img1: "CollectionsImages/benzS3502.webp", img2: "CollectionsImages/benzS3501.webp" },
{ name: "730D", type: "luxury", price: "19999", brand: "BMW", category: "Luxury Sedan", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/730DBMW1.jpg", img1: "CollectionsImages/730DBMW2.jpg", img2: "CollectionsImages/730DBMW3.jpg" },
{ name: "Q7", type: "luxury", price: "19999", brand: "Audi", category: "Luxury SUV", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/AUDIQ7-1.jpg", img1: "CollectionsImages/AUDIQ7-2.jpg", img2: "CollectionsImages/AUDIQ7-3.jpg" },
// {
// name: "GL-350", type: "luxury", price: "19999", brand: "Mercedes", idval: "", time: "8HRS/80KMS", category: "Luxury SUV", year: "", img: "CollectionsImages/.jpg", img1: "CollectionsImages/bmwa52.jpg", img2: "CollectionsImages/bmwa53.jpg"
// },
{ name: "Land Cruiser ", type: "luxury", price: "29999", brand: "Toyota", category: "Luxury SUV", idval: "", time: "8HRS/80KMS", year: "", img: "CollectionsImages/LANDCRUISER1.jpg", img1: "CollectionsImages/LANDCRUISER2.jpg", img2: "CollectionsImages/LANDCRUISER3.jpg" },

{ name: "GLS-400", type: "luxury", price: "29999", brand: "Mercedes", idval: "", time: "8HRS/80KMS", category: "Luxury SUV", year: "", img: "CollectionsImages/GLS400-1.jpg", img1: "CollectionsImages/GLS400-2.jpg", img2: "CollectionsImages/GLS400-3.jpg" },
{ name: "Maybach S-600", type: "luxury", price: "29999", brand: "Mercedes", idval: "", time: "8HRS/80KMS", category: "Ultra-Luxury Sedan", year: "", img: "CollectionsImages/MAYBACK.jpg", img1: "CollectionsImages/MAYBACK2.jpg", img2: "CollectionsImages/MAYBACK3.jpg" },
{
    name: " A5 Convertible", type: "luxury", price: "35999", brand: "Audi", idval: "", time: "8HRS/80KMS", category: "Luxury Convertible", year: "", img: "CollectionsImages/AUDIA5-1.jpg", img1: "CollectionsImages/AUDIA3-COMMON.jpg", img2: "CollectionsImages/AUDIA5-3.jpg"
},
{ name: "EQS-580(EV CAR)", type: "luxury", price: "39999", brand: "Mercedes", idval: "", time: "8HRS/80KMS", category: "Luxury Electric Sedan", year: "", img: "CollectionsImages/EQSEV1.jpg", img1: "CollectionsImages/EQSEV2.jpg", img2: "CollectionsImages/EQSEV3.jpg" },
{ name: "GHOST", type: "luxury", price: "79999", brand: "Rolls Royce", idval: "", time: "8HRS/80KMS", category: "Ultra-Luxury Sedan", year: "", img: "CollectionsImages/GhostRollsRoyce1.jpg", img1: "CollectionsImages/GhostRollsRoyce2.jpg", img2: "CollectionsImages/GhostRollsRoyce3.jpg" },

// self drive cars
{ name: "Ertiga", type: "self", price: "3499", brand: "Maruti", idval: "", time: "8HRS/80KMS", category: "MPV (Minivan)", year: "", img: "CollectionsImages/ERTIGA_1.jpg", img1: "CollectionsImages/ERTIGA2.jpg", img2: "CollectionsImages/ERTIGA_1.jpg" },
// { name: "XL6", type: "self", price: "6499", brand: "", idval: "", time: "8HRS/80KMS", category: "MPV (Minivan)", year: "", img: "CollectionsImages/.jpg", img1: "CollectionsImages/bmwa52.jpg", img2: "CollectionsImages/bmwa53.jpg" },
// { name: "hexa", type: "self", price: "8999", brand: "tata", idval: "", time: "8HRS/80KMS", category: "SUV", year: "", img: "CollectionsImages/.jpg", img1: "CollectionsImages/bmwa52.jpg", img2: "CollectionsImages/bmwa53.jpg" },
{ name: "Innova crysta", type: "self", price: "3999", brand: "Toyota", idval: "", time: "8HRS/80KMS", category: "MPV (Minivan)", year: "", img: "CollectionsImages/Crysta.jpg", img1: "CollectionsImages/Crysta.jpg", img2: "CollectionsImages/Crysta.jpg" },
// { name: "Mg hector", type: "self", price: "11999", brand: "", idval: "", time: "8HRS/80KMS", category: "SUV", year: "", img: "CollectionsImages/.jpg", img1: "CollectionsImages/.jpg", img2: "CollectionsImages/.jpg" },
// { name: "Fortuner", type: "self", price: "13999", brand: "Toyota", idval: "", time: "8HRS/80KMS", category: "SUV", year: "", img: "CollectionsImages/FORTUNER1.jpg", img1: "CollectionsImages/FORTUNER2.jpg", img2: "CollectionsImages/xuv7003.jpg" },
{ name: "XUV 700", type: "self", price: "7999", brand: "Mahindra", idval: "", time: "8HRS/80KMS", category: "SUV", year: "", img: "CollectionsImages/XUV7001.jpg", img1: "CollectionsImages/XUV7002.jpg", img2: "CollectionsImages/XUV7003.jpg" },
{ name: "City", type: "self", price: "4999", brand: "Honda", idval: "", time: "8HRS/80KMS", category: "Sedan", year: "", img: "CollectionsImages/CITY1.jpg", img1: "CollectionsImages/hondacity2.jpg", img2: "CollectionsImages/hondacity3.jpg" },
{
    name: "I20", type: "self", price: "3999", brand: "Hyundai", idval: "", time: "8HRS/80KMS", category: "Hatchback", year: "", img: "CollectionsImages/I20-1.jpg", img1: "CollectionsImages/hondacity2.jpg", img2: "CollectionsImages/I20-3.jpg"
},
{
    name: "Swift", type: "self", price: "3499", brand: "Maruti", idval: "", time: "8HRS/80KMS", category: "Hatchback", year: "", img: "CollectionsImages/SWIFT1.jpg", img1: "CollectionsImages/SWIFT2.jpg", img2: "CollectionsImages/SWIFT3.jpg"
},
// { name: "urban cruiser", type: "self", price: "4999", brand: "", idval: "", time: "8HRS/80KMS", category: "Compact SUV", year: "" , img: "CollectionsImages/.jpg", img1: "CollectionsImages/bmwa52.jpg", img2: "CollectionsImages/bmwa53.jpg" },
{ name: "Kwid/climber", type: "self", price: "4499", brand: "Renault", idval: "", time: "8HRS/80KMS", category: "Hatchback", year: "", img: "CollectionsImages/kwid1.jpg", img1: "CollectionsImages/kwid1.jpg", img2: "CollectionsImages/kwid1.jpg" },
{ name: "Thar", type: "self", price: "9999", brand: "Mahindra", idval: "", time: "8HRS/80KMS", category: "SUV", year: "", img: "CollectionsImages/THAR1.jpg", img1: "CollectionsImages/THAR2.jpg", img2: "CollectionsImages/THAR3.jpg" },
{
    name: "A6", type: "self", price: "29999", brand: "Audi", idval: "", time: "8HRS/80KMS", category: "Luxury Sedan", year: "", img: "CollectionsImages/AUDIA6-1.jpg", img1: "CollectionsImages/AUDIA7-COM2.jpg", img2: "CollectionsImages/AUDIA6-3.jpg"
},
// { name: "XUV 300", type: "self", price: "4999", brand: "Mahindra", idval: "", time: "8HRS/80KMS", category: "Compact SUV", year: "" , img: "CollectionsImages/.jpg", img1: "CollectionsImages/bmwa52.jpg", img2: "CollectionsImages/bmwa53.jpg" },
{ name: "Q3", type: "self", price: "24999", brand: "Audi", idval: "", time: "8HRS/80KMS", category: "Luxury SUV", year: "", img: "CollectionsImages/AUDIQ3-1.jpg", img1: "CollectionsImages/AUDIQ3-2.jpg", img2: "CollectionsImages/AUDIQ3-3.jpg" },
// vintage car


{
    name: "Vintage FORD", type: "vintage", price: "49999", brand: "Vintage", idval: "", time: "8HRS/80KMS", category: "vintage", year: "", img: "CollectionsImages/vintageFord1.jpg", img1: "CollectionsImages/vintageFord2.jpg", img2: "CollectionsImages/vintageFord1.jpg"
},
{ name: "Vintage FIAT", type: "vintage", price: "49999", brand: "Vintage", idval: "", time: "8HRS/80KMS", category: "vintage", year: "", img: "CollectionsImages/vintageFiat1.jpg", img1: "CollectionsImages/vintageFiat1.jpg", img2: "CollectionsImages/vintageFiat1.jpg" },


// non premium car n busses

{
    name: "Altis 4+1", type: "non", price: "2199", brand: "Toyota", idval: "", time: "8HRS/80KMS", category: "Economic Sedan", year: "", img: "CollectionsImages/altis.jpg", img1: "CollectionsImages/altis.jpg", img2: "CollectionsImages/altis.jpg"
},
// { name: "city", type: "non", price: "3999", brand: "Honda", idval: "", time: "8HRS/80KMS", category: "Sedan", year: "" , img: "CollectionsImages/.jpg", img1: "CollectionsImages/bmwa52.jpg", img2: "CollectionsImages/bmwa53.jpg" },
// { name: "ertiga", type: "non", price: "2499", brand: "Maruti", idval: "", time: "8HRS/80KMS", category: "MPV (Minivan)", year: "" , img: "CollectionsImages/.jpg", img1: "CollectionsImages/bmwa52.jpg", img2: "CollectionsImages/bmwa53.jpg" },
{
    name: "FOTON 9+1 Executive Van", type: "non", price: "19999", brand: "Benz", idval: "large", time: "8HRS/80KMS", category: "Van", year: "", img: "CollectionsImages/VClass1.jpg", img1: "CollectionsImages/VClass2.jpg", img2: "CollectionsImages/VCLASS3.jpg"
},
{ name: "Mini TEMPO TRAVELLER 7+1 SEATER", type: "non", price: "5999", brand: "Tata", idval: "large", time: "8HRS/80KMS", category: "Van", year: "", img: "CollectionsImages/TEMPOVAN1.jpg", img1: "CollectionsImages/TEMPOVAN2.jpg", img2: "CollectionsImages/TEMPOVAN3.jpg" },
{ name: "TEMPO TRAVELLER 9+1 SEATER", type: "non", price: "5999", brand: "Tata", idval: "large", time: "8HRS/80KMS", category: "Van", year: "", img: "CollectionsImages/TEMPO9-1.jpg", img1: "CollectionsImages/TEMPO9-2.jpg", img2: "CollectionsImages/TEMPO9-3.jpg" },
{ name: "TEMPO TRAVELLER 12+1 SEATER", type: "non", price: "3999", brand: "Force", idval: "large", time: "8HRS/80KMS", category: "Van", year: "", img: "CollectionsImages/TEMPOTRAVELLER1.jpg", img1: "CollectionsImages/TEMPOTRAVELLER_added.jpg", img2: "CollectionsImages/TEMPOTRAVELLER3.jpg" },
{ name: "BHARAT BENZ 25 seater", type: "non", price: "11999", brand: "", idval: "large", time: "8HRS/80KMS", category: "Bus", year: "", img: "CollectionsImages/BHARATBENZ1.jpg", img1: "CollectionsImages/BHARATBEZ2.jpg", img2: "CollectionsImages/BHARATBENZ3.jpg" },
{ name: "BHARAT BENZ 35 seater", type: "non", price: "14999", brand: "", idval: "large", time: "8HRS/80KMS", category: "Bus", year: "", img: "CollectionsImages/BHARATBENZ1.jpg", img1: "CollectionsImages/BHARATBEZ2.jpg", img2: "CollectionsImages/BHARATBENZ3.jpg" },
{ name: "BHARAT BENZ 35 seater", type: "non", price: "14999", brand: "", idval: "large", time: "8HRS/80KMS", category: "Bus", year: "", img: "CollectionsImages/BHARATBENZ1.jpg", img1: "CollectionsImages/BHARATBEZ2.jpg", img2: "CollectionsImages/BHARATBENZ3.jpg" },
{ name: "BHARAT BENZ 20 seater with Bio toilet", type: "non", price: "14999", brand: "", idval: "large", time: "8HRS/80KMS", category: "Bus", year: "", img: "CollectionsImages/BHARATBENZ1.jpg", img1: "CollectionsImages/BHARATBEZ2.jpg", img2: "CollectionsImages/BHARATBENZ3.jpg" },


];




function displayArr(arr) {

    var clultter = "";

    arr.forEach((item) => {
        clultter += `<div class="carsinfo">
                            <div class="carinforight">
                                <div class="imagebox">
                                    <section class="main swiper mySwiper">
                                        <div class="wrapper swiper-wrapper">
                                            <div class="slide swiper-slide">
                                                <img src="${item.img}"
                                                    alt="" class="image" />
    
                                            </div>
                                            <div class="slide swiper-slide">
                                                <img src="${item.img1}"
                                                    alt="" class="image" />
    
                                            </div>
                                            <div class="slide swiper-slide">
                                                <img src="${item.img2}"
                                                    alt="" class="image" />
    
                                            </div>
                                        </div>
    
                                        <div class="swiper-button-next nav-btn"></div>
                                        <div class="swiper-button-prev nav-btn"></div>
                                        <div class="swiper-pagination">
    
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div class="carinfocont" id="${item.idval}">
                                <h1>${item.name}</h1>
                                <p class="TnC">*T&C Apply</p>
                                <!-- <h2>Starts from Rs 7999/- for 8hr/80km</h2> -->
                                <div>
                                    
                                    <button class="category"  data-category="${item.category}"><i class="ri-car-line"></i>${item.category} || ${item.brand}</button>
                                    <!-- <button>Manual</button> -->
                                </div>
                                <div class="line"></div>
                                <div class="container_price">
                                    <div class="price">
                                        <p>Starts from</p>
                                        <h1>Rs ${item.price}</h1>
                                        <p class="time">(80KM/8hr)</p>
                                    </div>
                                    <a href="https://api.whatsapp.com/send/?phone=919590268049&text=Hello,%20I%20want%20to%20rent%20this%20Car%20-%20${item.name}%20${item.brand}%20with%20starting%20price%20${item.price}!">Book Now !!</a>
                                    
                                </div>
                            </div>
                        </div>`;
    });
    main.innerHTML = clultter;
    
    

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        autoplay: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}
displayArr(arr);

document.querySelector("select").addEventListener("change", function (re) {

    var category = document.querySelector("#category");
    if (category.value == "all") {
        displayArr(arr);
        return;
    }
    var newData = arr.filter(function (e) {
        return e.category == category.value;
    });
    if (newData.length == "") {
        alert("Currently, All cars are booked in this category!!Sorry, You can choose any other category or contact us")
        category.value = ""
        return;
    }
    if (category.value != "") {
        displayArr(newData);
    }
    re.preventDefault();
});