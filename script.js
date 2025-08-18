document.addEventListener('DOMContentLoaded', () => {

    const productsGrid = document.getElementById('products-grid');
    const brandFilter = document.getElementById('brand-filter');
    const yearFilter = document.getElementById('year-filter');
    const priceSort = document.getElementById('price-sort');
    const nameSort = document.getElementById('name-sort');
    const searchInput = document.getElementById('search-input');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const minMileageInput = document.getElementById('min-mileage');
    const maxMileageInput = document.getElementById('max-mileage');
    const paginationControls = document.getElementById('pagination-controls');

    const carsPerPage = 9;
    let currentPage = 1;
    let displayedCars = [...cars];

    function generateCarCardHTML(car) {
        const imageUrl = (car.image && car.image.length > 0) ? car.image[0] : 'https://hips.hearstapps.com/hmg-prod/images/gallardo-31-6442d3da29a30.jpg';

        return `
            <div class="card" style="width: 18rem;" data-car-id="${car.id}">
                <img src="${imageUrl}" class="card-img-top" alt="${car.brand} ${car.model}">
                <div class="card-body">
                    <button class="btn-favorite" data-car-id="${car.id}">
                        &#9733; </button>
                    <h5 class="card-title">${car.brand} ${car.model}</h5>
                    <p class="card-text">Рік: ${car.year}</p>
                    <p class="card-text">Пробіг: ${car.mileage.toLocaleString()} км</p>
                    <p class="card-text">Тип кузова: ${car.bodyType}</p>
                    <p class="card-text"><strong>Ціна: $${car.price.toLocaleString()}</strong></p>
                    <p class="card-text-description">${car.description}</p>
                    <a href="car-details.html?id=${car.id}" class="btn btn-primary">Детальніше</a>
                </div>
            </div>
        `;
    }

    function displayCars(carsToDisplay) {
        productsGrid.innerHTML = '';
        if (carsToDisplay.length === 0) {
            productsGrid.innerHTML = '<p style="text-align: center; width: 100%; color: var(--text-color);">На жаль, за вашим запитом автомобілів не знайдено.</p>';
            return;
        }

        const startIndex = (currentPage - 1) * carsPerPage;
        const endIndex = startIndex + carsPerPage;
        const carsOnCurrentPage = carsToDisplay.slice(startIndex, endIndex);

        carsOnCurrentPage.forEach(car => {
            productsGrid.innerHTML += generateCarCardHTML(car);
        });

        updatePagination(carsToDisplay.length);
        addFavoriteButtonListeners();
    }

    function applyFiltersAndSearch() {
        let filtered = [...cars];
        const selectedBrand = brandFilter.value;
        if (selectedBrand) {
            filtered = filtered.filter(car => car.brand === selectedBrand);
        }

        const selectedYear = yearFilter.value;
        if (selectedYear) {
            filtered = filtered.filter(car => car.year === parseInt(selectedYear));
        }

        const minPrice = parseFloat(minPriceInput.value);
        const maxPrice = parseFloat(maxPriceInput.value);
        if (!isNaN(minPrice)) {
            filtered = filtered.filter(car => car.price >= minPrice);
        }
        if (!isNaN(maxPrice)) {
            filtered = filtered.filter(car => car.price <= maxPrice);
        }

        const minMileage = parseFloat(minMileageInput.value);
        const maxMileage = parseFloat(maxMileageInput.value);
        if (!isNaN(minMileage)) {
            filtered = filtered.filter(car => car.mileage >= minMileage);
        }
        if (!isNaN(maxMileage)) {
            filtered = filtered.filter(car => car.mileage <= maxMileage);
        }

        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            filtered = filtered.filter(car =>
                car.brand.toLowerCase().includes(searchTerm) ||
                car.model.toLowerCase().includes(searchTerm) ||
                car.description.toLowerCase().includes(searchTerm)
            );
        }
        displayedCars = filtered;
        currentPage = 1;
        applySorting();
    }

    function applySorting() {
        const priceSortValue = priceSort.value;
        const nameSortValue = nameSort.value;

        if (priceSortValue !== '') {
            nameSort.value = '';
        } else if (nameSortValue !== '') {
            priceSort.value = '';
        }

        if (priceSortValue === 'price-asc') {
            displayedCars.sort((a, b) => a.price - b.price);
        } else if (priceSortValue === 'price-desc') {
            displayedCars.sort((a, b) => b.price - a.price);
        } else if (nameSortValue === 'name-asc') {
            displayedCars.sort((a, b) => (a.brand + a.model).localeCompare(b.brand + b.model));
        } else if (nameSortValue === 'name-desc') {
            displayedCars.sort((a, b) => (b.brand + b.model).localeCompare(a.brand + a.model));
        }

        displayCars(displayedCars);
    }

    function addFavoriteButtonListeners() {
        document.querySelectorAll('.btn-favorite').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                const carId = event.currentTarget.dataset.carId;
                let favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];
                const index = favoriteCars.indexOf(carId);

                if (index > -1) {
                    favoriteCars.splice(index, 1);
                    button.classList.remove('active');
                } else {
                    favoriteCars.push(carId);
                    button.classList.add('active');
                }
                localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars));
            });
        });
    }

    function updatePagination(totalCars) {
        paginationControls.innerHTML = '';
        const pageCount = Math.ceil(totalCars / carsPerPage);

        if (pageCount <= 1) return;

        for (let i = 1; i <= pageCount; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', (event) => {
                event.preventDefault();
                currentPage = i;
                displayCars(displayedCars);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationControls.appendChild(pageItem);
        }
    }

    function populateFilters() {
        const brands = [...new Set(cars.map(car => car.brand))].sort();
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });

        const years = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a);
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });
    }

    brandFilter.addEventListener('change', applyFiltersAndSearch);
    yearFilter.addEventListener('change', applyFiltersAndSearch);
    priceSort.addEventListener('change', applySorting);
    nameSort.addEventListener('change', applySorting);
    searchInput.addEventListener('input', applyFiltersAndSearch);
    document.getElementById('search-button').addEventListener('click', (event) => {
        event.preventDefault();
        applyFiltersAndSearch();
    });
    minPriceInput.addEventListener('input', applyFiltersAndSearch);
    maxPriceInput.addEventListener('input', applyFiltersAndSearch);
    minMileageInput.addEventListener('input', applyFiltersAndSearch);
    maxMileageInput.addEventListener('input', applyFiltersAndSearch);

    document.getElementById('favorites-link').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'favorites.html';
    });

    populateFilters();
    displayCars(cars);
});
