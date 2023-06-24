const loadData = (searchFieldText) => {
    console.log(searchFieldText);
    if (searchFieldText == undefined) {
        return 0;

    }
    else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchFieldText}`;
        fetch(url)
            .then(data => data.json())
            .then(res => displayDrinks(res.drinks));
    }


}

const displayDrinks = (drinks) => {
    console.log(drinks);
    const drinksContainer = document.getElementById('drinks-container');
    drinks.forEach(drink => {
        const drinkdiv = document.createElement('div');
        drinkdiv.classList.add('col');
        drinkdiv.innerHTML = `
        
        <div class="col">
        <div class="card p-4 ">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${drink.strIngredient3 ? drink.strIngredient3 : 'Juice'}</h5>
                <p class="card-text">${drink.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
    </div>
        
        `;
        drinksContainer.appendChild(drinkdiv);
    })
}
const searchContainervalue = () => {
    const searchContainer = document.getElementById('search-container');
    const searchContainerText = searchContainer.value;
    loadData(searchContainerText);
}
document.getElementById('search-container').addEventListener('keydown', function (e) {
    searchContainervalue();
    if (e.key === 'Enter') {
        searchContainervalue();
    }


})
document.getElementById('btn-search').addEventListener('click', function () {
    searchContainervalue()

})


