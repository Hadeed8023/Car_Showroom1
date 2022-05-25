const CarDetails = [
    {
        id: 1,
        image: require ("./images/urus.jfif"),
        text:"Lamborghini Urus is the first Super Sport Utility Vehicle in the world to merge the soul of a super sports car with the functionality of an SUV.",
        title:"Lamborghini Urus",
        link1:"/Urus"
        
    },
    {
        id: 2,
        image: require ("./images/ferari.jfif"),
        text:"LaFerrari, project name F150 is a limited production mid-engine mild hybrid supercar built by Italian automotive manufacturer Ferrari.",
        title:"Ferrari LaFerrari",
        link1:"/Ferrari"
    },
    {
        id: 3,
        image: require ("./images/ford.jfif"),
        text:"The 2022 Ford Mustang GT Premium Fastback is the perfect mix of class. Choose between the 6-Speed Manual Transmission or 10-speed SelectShift®.",
        title:"Ford Mustang GT ",
        link1:"/Ford"
    },
    {
        id: 4,
        image: require ("./images/hurancan.jfif"),
        text:"The Huracán is the perfect fusion of technology and design.The finest Italian craftsmanship lavished on finishes of unprecedented prestige and quality.",
        title:"Lamborghini Huracán",
        link1:"/Huracan"
    }
];

export function getDetails(){
    return CarDetails;
}