// const APILINK='https://api.themoviedb.org/3/movie/550?api_key=a14c1064c4e334ac53acf15ff3f6dccc';
// const IMG_PATH='https://image.tmdb.org/t/p/w1280'; 
// const SEARCHAPI="https://api.themoviedb.org/3/search/search/movie?&api_key=a14c1064c4e334ac53acf15ff3f6dccc&query=";

// console.log("this is for testing");
// const main=document.getElementById("section");
// const form=document.getElementById("form");
// const search=document.getElementById("query");


// returnMovies(APILINK)
// function returnMovies(url){
//     fetch(url).then(res=> res.json())
//     .then(function(data){
//         console.log(data.results);
//         data.results.forEach(element => {
//             const div_card=document.createElement('div');
//             div_card.setAttribute('class','card');

//             const div_row=document.createElement('div');
//             div_row.setAttribute('class','row');

//             const div_column=document.createElement('div');
//             div_column.setAttribute('class','column');

//             const image=document.createElement('img');
//             image.setAttribute('class','thumbnail');
//             image.setAttribute('id','image');

//             const title=document.createElement('h3');
//             title.setAttribute('id','title');
            
//             const center=document.createElement('center');


//             title.innerHTML=`${element.title}`;
//             image.src=IMG_PATH + element.poster_path;
            
            
//             center.appendChild(image);
//             div_card.appendChild(center);
//             div_card.appendChild(title);
//             div_column.appendChild(div_card);
//             div_row.appendChild(div_column);

        
//             main.appendChild(div_row);




            

            
//         });
//     });
// }

// form.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     main.innerHTML='';
//     const searchItem=search.value;

//     if(searchItem){
//         returnMovies(SEARCHAPI + searchItem);
//         search.value="";

//     }

// });



console.log('jjjsafdi')
const API_KEY = 'api_key=a14c1064c4e334ac53acf15ff3f6dccc';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=a14c1064c4e334ac53acf15ff3f6dccc&query=';


const main = document.getElementById('main');
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovie(url){
    fetch(url).then(res => res.json())
    .then(function(data){

        console.log(data);

        showMovie(data.results);

    });
}

returnMovie(API_URL);

function showMovie(data){
    main.innerHTML = '';
    data.forEach(movie => {

        const {title, poster_path, overview} = movie;
        console.log(title,poster_path)
        const movieElement = document.createElement('div');


        movieElement.innerHTML = `
        <div class="row">
        <div class="column">
        
        <a class="page2" href="revpage.html">
            <div class="card">
                <img src="${IMG_URL+poster_path}" class="thumbnail">
                <h4 style="text-align: center;">${title}</h4>
                <div class="overview">
                    <h4>overview</h4>
                    <p>${overview}</p>
                </div>
            </div>

        </a>
        </div>
    </div>


        `;


        // console.log(title,poster_path)
        // const movieElement = document.createElement('div');
        // movieElement.classList.add('card')

        // movieElement.innerHTML = `
        // <img src="${IMG_URL+poster_path}" class="thumbnail">
        
        // <h4>${title}</h4>
        // <div class="overview">
        //     <h4>overview</h4>
        //     ${overview}
        // </div>


        // `;
            // movieElement.innerHTML = `
            // <img class="movie-image" src="${IMG_URL+poster_path}" alt=${title}">
            // <h3 class="title" >${title}</h3>
            // <div class="overview">
            //     <h4>overview</h4>
            //     ${overview}
            // </div>
            // `;






        main.appendChild(movieElement);

        
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // main.innerHTML = '';

    const searchItem = search.value;
    console.log(search,searchItem)

    if (searchItem) {
        console.log(searchItem)
        returnMovie(SEARCHAPI + searchItem);
        search.value = "";
    }
});