var reviews = [
    {   
        "name": "Alice Johnson",
        "review" : "Absolutely fantastic experience! The service was top-notch, and the product quality exceeded my expectations. I'll definitely be coming back!",
        "rating" : 5
    },
    {
        "name" : "Mark Thompson",
        "review": "The service was decent, but there were some delays in delivery. The product was good, but not as exceptional as I hoped.",
        "rating" : 3
    },
    {
        "name" : "Sarah Williams",
        "review": "I was disappointed with my purchase. The item didn't match the description and customer service was unhelpful. Not a great experience.",
        "rating" : 2
    },
    {
        "name" : "David Brown",
        "review": "Incredible! Everything from start to finish was seamless. The customer support team was very responsive and the product was exactly as advertised.",
        "rating" : 5
    },
    {
        "name" : "Emily Davis",
        "review": "Overall, a good experience. There were minor issues with the packaging, but the product itself was excellent. Will recommend to friends.",
        "rating" : 4
    },
    {
        "name" : "Michael Martinez",
        "review": "Terrible experience. The product arrived damaged and the customer service team didn't offer any viable solutions. Very disappointed.",
        "rating" : 1
    },
    {
        "name" : "Jessica Taylor",
        "review": "Great value for money. The quality was better than expected, and the shipping was quicker than anticipated. A few minor flaws, but nothing major.",
        "rating" : 4
    },
    {
        "name" : "Daniel Wilson",
        "review": "Mixed feelings. Some aspects were great, like the customer service, but the product had some issues. It's an okay experience overall.",
        "rating" : 3
    },
    {
        "name" : "John Anderson",
        "review": "Exceptional! High-quality product and excellent customer service. Everything was handled professionally and efficiently. Highly recommend!",
        "rating" : 5
    }
];

function closeReviews() {
    document.getElementById("overlay").style.display = "none";
    document.getElementsByClassName("reviewSection")[0].style.display = "none"
}


// Shuffle array and select 3 random reviews
function randomReviews() {
    let n = 3;
    const shuffled = reviews.sort(() => 0.5 - Math.random());
    
    let selected = shuffled.slice(0, n);
    let reviewList = document.getElementsByClassName("review");
    document.getElementById("overlay").style.display = "block";
    document.getElementsByClassName("reviewSection")[0].style.display = "block";
    for(let i = 0; i < n; ++i) {
        // console.log(reviewList[i].children[1]);
        reviewList[i].children[0].children[0].innerHTML = selected[i]["name"]
        reviewList[i].children[1].innerHTML = selected[i]["review"];
        let stars = selected[i]["rating"];
        console.log(stars);
        for(let j = 0; j < stars; ++j) {
            reviewList[i].children[0].children[1].children[j].classList.remove("fa");
            reviewList[i].children[0].children[1].children[j].classList.remove("fa-star");
            reviewList[i].children[0].children[1].children[j].innerHTML = "&#11088;";
        }
        for(let j = stars; j < n; ++j){
            reviewList[i].children[0].children[1].children[j].innerHTML = "";
            reviewList[i].children[0].children[1].children[j].classList.add("fa");
            reviewList[i].children[0].children[1].children[j].classList.add("fa-star");
        }
    }    
}
