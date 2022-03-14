/* asyne> await fetch use kore mealbd k mealbd.js ar file tar moto o kora jabe */

const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear inputField data
    searchField.value = '';


    /* 
    if(searchField==''){
        console.log()
    } 
    else{
        //load inputField data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
    }
    */


    //load inputField data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `;
    const res = await fetch(url)
    const data = await res.json()
    displaySearchResult(data.meals)
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';


    /* 
    if (meals.length == 0) {
        console.log('No result found')
    } 
    */



    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="LoadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
`;
        searchResult.appendChild(div);
        // console.log(meal)
    });
}

/* const LoadMealDetail = mealId => {
    // console.log(mealId);
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
} */



//fetch na kore onno step use koror niyum:
const LoadMealDetail = async mealId => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    `;
    const res = await fetch(url);
    const data = res.json();
    displayMealDetail(data.meals[0]);
}



const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDetails.appendChild(div);

}