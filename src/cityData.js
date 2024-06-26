const cities = {
  A: [
    "Amsterdam",
    "Athens",
    "Auckland",
    "Ahmedabad",
    "Agra",
    "Aranthangi",
    "Arakkonam",
    "Arani",
    "Alangudi",
    "Ambasamudram",
    "Alwarkurichi",
    "Andipatti",
    "Ariyalur",
    "Attur",
    "Annamalai Nagar",
  ],
  B: [
    "Berlin",
    "Beijing",
    "Bangkok",
    "Barcelona",
    "Buenos Aires",
    "Bodinayakkanur",
    "Bodinaickanur",
    "Bhavani",
    "Bhuvanagiri",
    "Bargur",
    "Berhampur",
    "Brahmana Periya-Agraharam",
    "B. Meenakshipuram",
    "Belur, India",
    "B. Mallapuram",
  ],
  C: [
    "Cairo",
    "Cape Town",
    "Chicago",
    "Copenhagen",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Chidambaram",
    "Chengalpattu",
    "Chingleput",
    "Chettinad",
    "Chettinadu",
    "Cholamandalam",
    "Cholapuram",
  ],
  D: [
    "Dublin",
    "Delhi",
    "Doha",
    "Dresden",
    "Denver",
    "Devakottai",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Edayathankudi",
    "Edaganasalai",
    "Ettayapuram",
    "Egmore",
    "Elampillai",
  ],
  E: [
    "Edinburgh",
    "Eindhoven",
    "Erbil",
    "Eugene",
    "El Paso",
    "Erode",
    "Elumalai",
    "Elayirampannai",
    "Eraniel",
    "Eraiyur",
    "Edakalinadu",
    "Elathur",
    "Eraiyur",
    "Erumaipatti",
    "Edathala",
  ],
  F: ["Florence", "Frankfurt", "Fukuoka", "Fortaleza", "Fresno"],
  G: [
    "Geneva",
    "Guangzhou",
    "Guatemala City",
    "Glasgow",
    "Giza",
    "Gobichettipalayam",
    "Gudalur, Nilgiris",
    "Gudalur, Coimbatore",
    "Gudalur, Theni",
    "Gudiyatham",
    "Gummidipoondi",
    "Gurusamipalayam",
    "Gudiyattam",
    "Gopichettipalayam",
    "Gundlupet",
  ],
  H: [
    "Hanoi",
    "Hamburg",
    "Helsinki",
    "Hiroshima",
    "Hyderabad",
    "Harur",
    "Harveypatti",
    "Highways",
    "Hosur",
    "Hubbathala",
    "Hanumanthampatti",
    "Hasthampatti",
    "Hogenakkal",
    "Hosur",
    "Hullahalli",
  ],
  I: [
    "Istanbul",
    "Incheon",
    "Islamabad",
    "Irvine",
    "Indianapolis",
    "Idappadi",
    "Idikarai",
    "Ilampillai",
    "Ilanji",
    "Iluppaiyurani",
    "Iluppur",
    "Inam Karur",
    "Inam Maniyachi",
    "Injambakkam",
    "Irugur",
  ],
  J: [
    "Jakarta",
    "Jerusalem",
    "Johannesburg",
    "Jaipur",
    "Jeddah",
    "Jaffrabad, Coimbatore",
    "Jagathala",
    "Jalakandapuram",
    "Jambai",
    "Jayankondam",
    "Jolarpet",
  ],
  K: [
    "Kyoto",
    "Kuala Lumpur",
    "Kolkata",
    "Kansas City",
    "Kiev",
    "Kadathur",
    "Kadayal",
    "Kadayanallur",
    "Kadiapatti",
    "Kalakkad",
    "Kalambur",
    "Kalappanaickenpatti",
    "Kalavai",
    "Kalinjur",
    "Kaliyakkavilai",
    "Kallakkurichi",
    "Kallakudi",
  ],
  L: [
    "London",
    "Los Angeles",
    "Lisbon",
    "Lima",
    "Luxembourg City",
    "Lalgudi",
    "Lalpet",
    "Llayangudi",
    "Lakkampatti",
    "Lakshmi Mills",
    "Lalgudi",
    "Lalpet",
    "Llayangudi",
    "Lakkampatti",
    "Lakshmi Mills",
  ],
  M: [
    "Madrid",
    "Moscow",
    "Mumbai",
    "Mexico City",
    "Milan",
    "Madurai",
    "Mannargudi",
    "Mayiladuthurai",
    "Melur",
    "Mettur",
    "Mettupalayam",
    "Mettupalayam, Coimbatore",
    "Mettupalayam, Salem",
    "Metturdam",
    "Moolapatti",
  ],
  N: [
    "New York",
    "Nairobi",
    "Nagoya",
    "Nice",
    "Naples",
    "Nagapattinam",
    "Nagercoil",
    "Namakkal",
    "Nandivaram-Guduvancheri",
    "Natham",
    "Nellikuppam",
    "Neyveli",
    "Nilakkottai",
  ],
  O: [
    "Oslo",
    "Ottawa",
    "Orlando",
    "Oxford",
    "Ouagadougou",
    "Odaiyakulam",
    "Odaiyapatti",
    "Odaipatti",
    "Odaiyakulam",
    "Odaiyapatti",
    "Odaipatti",
    "Odaipatti",
    "Odaipatti",
    "Odaiyakulam",
    "Odaiyapatti",
  ],
  P: [
    "Paris",
    "Prague",
    "Perth",
    "Portland",
    "Pune",
    "Palani",
    "Palladam",
    "Pallapalayam",
    "Pallapatti, Karur",
    "Pallapatti, Erode",
    "Pallavaram",
    "Pallikaranai",
    "Pammal",
    "Panagudi",
    "Panaimarathupatti",
  ],
  Q: ["Quebec City", "Quito", "Qingdao", "Quanzhou", "Queens"],
  R: [
    "Rome",
    "Rio de Janeiro",
    "Reykjavik",
    "Rotterdam",
    "Raleigh",
    "Rajapalayam",
    "Ramanathapuram",
    "Rameswaram",
    "Ranipet",
    "Rasipuram",
    "Rayagiri",
  ],
  S: [
    "Sydney",
    "Shanghai",
    "Seoul",
    "Singapore",
    "San Francisco",
    "Sivagiri, Tamil Nadu",
    "Sivagiri, Tirunelveli",
    "Sivakasi",
    "Srivilliputtur",
    "Surandai",
    "Sankarankovil",
    "Sattur",
    "Shenkottai",
    "Singampuneri",
    "Sankarnagar",
  ],
  T: [
    "Tokyo",
    "Toronto",
    "Tehran",
    "Tel Aviv",
    "Toulouse",
    "Tambaram",
    "Taramangalam",
    "Tattayyangarpettai",
    "Tiruchendur",
    "Tiruchengode",
    "Tiruchirappalli",
    "Tirukalukundram",
    "Tirukarungudi",
    "Tirukkoyilur",
    "Tirunelveli",
  ],
  U: [
    "Utrecht",
    "Ulaanbaatar",
    "Ushuaia",
    "Urubamba",
    "Udon Thani",
    "Udhagamandalam",
    "Udumalaipettai",
    "Ullur",
    "Ulundurpettai",
    "Unjalur",
    "Uppiliapuram",
    "Usilampatti",
    "Uthamapalayam",
    "Uthangarai",
    "Uthayendram",
  ],
  V: [
    "Vienna",
    "Vancouver",
    "Valencia",
    "Verona",
    "Victoria",
    "Vadakarai Keezhpadugai",
    "Vadalur",
    "Vadipatti",
    "Valangaiman",
    "Valasaravakkam",
    "Valavanur",
    "Vallam, India",
    "Valparai",
    "Vandavasi",
    "Vaniputhur",
  ],
  W: [
    "Warsaw",
    "Washington D.C.",
    "Wellington",
    "Wuhan",
    "Winnipeg",
    "Walajabad",
    "Walajapet",
    "Wandiwash",
    "Ambattur",
    "Avinashi",
    "Bhavani",
    "Chinnasalem",
    "Coimbatore",
    "Coonoor",
    "Cuddalore",
  ],
  X: ["Xi'an", "Xiamen", "Xining", "Xalapa", "Xuzhou"],
  Y: [
    "Yokohama",
    "Yerevan",
    "Yakutsk",
    "Yantai",
    "Yichang",
    "Yercaud",
    "Yelagiri",
    "Yellapur, Tamil Nadu",
    "Yercaud",
    "Yelagiri",
    "Yellapur, Tamil Nadu",
    "Yercaud",
    "Yelagiri",
    "Yellapur, Tamil Nadu",
    "Yercaud",
  ],
  Z: [
    "Zurich",
    "Zagreb",
    "Zaragoza",
    "Zhenjiang",
    "Zamboanga City",
    "Zamin Uthukuli",
    "Zamin Endathur",
    "Zamin Karur",
    "Zamin Kallikuppam",
    "Zamin Kottampatti",
    "Zamin Samathur",
    "Zamin Uthukuli",
    "Zamin Endathur",
    "Zamin Karur",
    "Zamin Kallikuppam",
  ],
};

export default cities;
