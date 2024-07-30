// const btns = document.querySelectorAll("button")
// const root = document.getElementById("root")
// const _baseUrl = "https://api.sampleapis.com/coffee/"

// function getIcedCoffee() {
//     fetch(_baseUrl + "iced")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             showCoffee(data);
//         });
// }

// function getHotCoffee() {
//     fetch(_baseUrl + "hot")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             showCoffee(data)
//         });
// }
// btns[0].onclick = () => {
//     getHotCoffee();
// };
// btns[1].onclick = () => {
//     getIcedCoffee();
// };

// function showCoffee(arr) {
//     root.innerHTML = "";
//     for (const coffee of arr) {
//         root.innerHTML += `
//         <div class="card">
//         <img width='200px' src=${coffee.image} />
//         <h2>${coffee.title}</h2>
//         </div>
//         `
//     }
// }
const btns = document.querySelectorAll("button");
const root = document.getElementById("root");
const _baseUrl = "https://api.sampleapis.com/movies/";

function getAnimationMovies() {
    fetch(_baseUrl + "animation")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showMovies(data);
        });
}

function getClassicMovies() {
    fetch(_baseUrl + "classic")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showMovies(data);
        });
}

function getComedyMovies() {
    fetch(_baseUrl + "comedy")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showMovies(data);
        });
}

function getDramaMovies() {
    fetch(_baseUrl + "drama")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showMovies(data);
        });
}

function getHorrorMovies() {
    fetch(_baseUrl + "horror")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showMovies(data);
        });
}

function getFamilyMovies() {
    fetch(_baseUrl + "family")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showMovies(data);
        });
}

function getMysteryMovies() {
    fetch(_baseUrl + "mystery")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showMovies(data);
        });
}

function getWesternMovies() {
    fetch(_baseUrl + "western")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showMovies(data);
        });
}

btns[0].onclick = () => {
    getAnimationMovies();
};
btns[1].onclick = () => {
    getClassicMovies();
};
btns[2].onclick = () => {
    getComedyMovies();
};
btns[3].onclick = () => {
    getDramaMovies();
};
btns[4].onclick = () => {
    getHorrorMovies();
};
btns[5].onclick = () => {
    getFamilyMovies();
};
btns[6].onclick = () => {
    getMysteryMovies();
};
btns[7].onclick = () => {
    getWesternMovies();
};

function showMovies(arr) {
    root.innerHTML = "";
    for (const movie of arr) {
        root.innerHTML += `
            <div class="card">
                <img width='200px' src=${movie.posterURL} alt="${movie.title} poster"/>
                <h2>${movie.title}</h2>
                <p>${movie.plot}</p>
            </div>
        `;
    }
}