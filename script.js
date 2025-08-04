document.addEventListener('DOMContentLoaded', () => {
    // 1. ДАНІ АВТОМОБІЛІВ (ЗАМІНИ URL-АДРЕСИ ЗОБРАЖЕНЬ НА РЕАЛЬНІ!)
    const cars = [
        {
            id: 'lexus-lfa', brand: 'Lexus', model: 'LFA', year: 2010, price: 750000, mileage: 15000, bodyType: 'Купе',
            description: 'Легендарний суперкар початку 10-их років. Ручна збірка, унікальний звук двигуна V10.',
            images: [
                'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/09q4/300860/2012-lexus-lfa-review-car-and-driver-photo-302743-s-original.jpg',
                'https://mag.lexus.co.uk/wp-content/uploads/sites/3/2015/12/Lexus-LFA-with-Vossen-Forged.jpg',
                'https://images.pistonheads.com/nimg/49230/mceu_13704452231732103158681.jpg'
            ]
        },
        {
            id: 'jaguar-f-type', brand: 'Jaguar', model: 'F-Type R', year: 2015, price: 85000, mileage: 40000, bodyType: 'Купе',
            description: 'Рідкісний суперкар зі своїм шармом та потужним двигуном.',
            images: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1M2kywHhEZgNfJAuqiDBEUQTe08w2PQM-mA&s.jpg',
                'https://media.autoexpress.co.uk/image/private/s--BMSAV-AJ--/f_auto,t_content-image-full-mobile@1/v1563183432/autoexpress/2018/01/2_13.jpg',
                'https://img.sm360.ca/images/article/dilawri-group-of-companies/48135//17_jaguar_f_type_r_coupe_002001529261022596.jpg'
            ]
        },
        {
            id: 'jaguar-xkr', brand: 'Jaguar', model: 'XKR', year: 2008, price: 45000, mileage: 70000, bodyType: 'Купе',
            description: 'Захопливе поєднання потужності та вишуканої розкоші.',
            images: [
            'https://www.tradeclassics.com/wp-content/uploads/2021/04/2008-Jaguar-XKR-S-Black-Featured-1.jpg',
            'https://www.tradeclassics.com/wp-content/uploads/2021/04/2008-Jaguar-XKR-S-Black-Featured-1-19.jpg',
            'https://www.ultimatecarpage.com/images/car/3637/Jaguar-XKR-S-28739.jpg'
        ], 
        },
        {
            id: 'mazda-rx8', brand: 'Mazda', model: 'RX8', year: 2009, price: 18000, mileage: 120000, bodyType: 'Купе',
            description: 'Роторна революція. Унікальний спортивний автомобіль.',
            images: [
                    'https://www.supercars.net/blog/wp-content/uploads/2016/04/717899.jpg',
                    'https://ireland.apollo.olxcdn.com/v1/files/vzdv5othvdmk3-UA/image;s=1000x750',
                    'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/576000/0/576078.jpg'
            ]
        },
        {
            id: 'dodge-charger-srt8', brand: 'Dodge', model: 'Charger SRT8', year: 2008, price: 35000, mileage: 85000, bodyType: 'Седан',
            description: 'Сідай за кермо. Відроджуйся. Американська мрія на чотирьох колесах.',
            images: [
                     'https://static.wikia.nocookie.net/nfs/images/5/5a/NFSE_Dodge_ChargerSRT8_2013.jpg/revision/latest/scale-to-width-down/250?cb=20220515155434&path-prefix=en'
                     
            ]
        },
        {
            id: 'lamborghini-gallardo', brand: 'Lamborghini', model: 'Gallardo', year: 2012, price: 180000, mileage: 25000, bodyType: 'Купе',
            description: 'Один з легендарних авто компанії Lamborghini з прекрасним двигуном V10.',
            image: [
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg/960px-Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg'             
    ], 
        },
        {
            id: 'lamborghini-murcielago', brand: 'Lamborghini', model: 'Murcielago LP640-4 Coupe', year: 2007, price: 250000, mileage: 20000, bodyType: 'Купе',
            description: 'Один з легендарних авто компанії Lamborghini з прекрасним двигуном V12.',
            images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lamborghini_Murci%C3%A9lago_LP640_coupe_side.jpg/1280px-Lamborghini_Murci%C3%A9lago_LP640_coupe_side.jpg']
        },
        {
            id: 'lamborghini-huracan', brand: 'Lamborghini', model: 'Huracan Spyder', year: 2018, price: 280000, mileage: 10000, bodyType: 'Кабріолет',
            description: 'Авто, натхнене іспанським бійцівським биком.',
            images: ['https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10375019/20180307_lambo_huracanspyder_vladsavov12.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100']
        },
        {
            id: 'nissan-gt-r', brand: 'Nissan', model: 'GT-R R35', year: 2020, price: 110000, mileage: 5000, bodyType: 'Купе',
            description: 'Ікона сучасних спортивних авто, що ламає стереотипи.',
            images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nissan_GT-R_R35_front.jpg/1200px-Nissan_GT-R_R35_front.jpg']
        },
        {
            id: 'nissan-370z', brand: 'Nissan', model: '370Z', year: 2017, price: 32000, mileage: 30000, bodyType: 'Купе',
            description: 'Потужність, Пристрасть, Продуктивність в одному флаконі.',
            images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nissan_370Z.JPG/960px-Nissan_370Z.JPG']
        },
        {
            id: 'porsche-911', brand: 'Porsche', model: '911 Turbo S (992)', year: 2022, price: 250000, mileage: 2000, bodyType: 'Купе',
            description: 'Унікальний авто зі своєю унікальною історією та неперевершеною динамікою.',
            images: ['https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijsxlvQB.bu8/v0/-1x-1.webp']
        },
        {
            id: 'mercedes-slr', brand: 'Mercedes-Benz', model: 'SLR McLaren', year: 2004, price: 350000, mileage: 18000, bodyType: 'Купе',
            description: 'Рідкісний Mercedes-Benz з 20-річною історією, результат співпраці двох легенд.',
            images: ['https://upload.wikimedia.org/wikipedia/commons/8/8b/Mercedes-Benz_SLR_McLaren_2.jpg']
        },
        {
            id: 'corvette-c6-z06', brand: 'Chevrolet', model: 'Corvette C6 Z06', year: 2012, price: 60000, mileage: 50000, bodyType: 'Купе',
            description: 'Легендарний авто з легендарним двигуном, справжній американський масл-кар.',
            images: ['https://www.lingenfelter.com/mm5/graphics/00000001/3/C6_Corvette_Z06_427_CID_LS7_660_HP_Package_540x540.png']
        },
        {
            id: 'corvette-c7-zr1', brand: 'Chevrolet', model: 'Corvette C7 ZR1', year: 2019, price: 130000, mileage: 10000, bodyType: 'Купе',
            description: 'Продовження легендарної історії легендарного масл-кару, з ще більшою потужністю.',
            images: ['https://darwinproaero.com/cdn/shop/products/1_188b7aa7-3578-4641-a6e9-fbb6948eea42_1024x1024.jpg?v=1749728206']
        },
        {
            id: 'corvette-c8-zr1', brand: 'Chevrolet', model: 'Corvette C8 ZR1', year: 2024, price: 180000, mileage: 500, bodyType: 'Купе',
            description: 'Нове покоління Corvette з середньомоторною компоновкою, інновації та потужність.',
            images: ['https://speednik.s3.amazonaws.com/powerautorax55/wp-content/blogs.dir/1/files/2024/06/chevrolet-teases-possible-twin-turbo-zr1-c8-corvette-2024-06-03_13-54-36_373859.png']
        },
        {
            id: 'ferrari-f355', brand: 'Ferrari', model: 'F355', year: 1998, price: 150000, mileage: 60000, bodyType: 'Купе',
            description: 'Один із легендарних Ferrari старої школи, з неперевершеним дизайном.',
            images: ['https://maessencsc.com/wp-content/uploads/gallery/39289077/39289077-6.jpg']
        },
        {
            id: 'range-rover-svr', brand: 'Land Rover', model: 'Range Rover SVR', year: 2015, price: 70000, mileage: 65000, bodyType: 'Позашляховик',
            description: 'Британський спортивний кросовер, поєднання розкоші та динаміки.',
            images: ['https://www.cnet.com/a/img/resize/6e32ea2c080370d66f3f06fea5ace9ea1f7dce57/hub/2015/08/05/b801da55-42ed-4f87-b2ed-9c9267f2da45/landroverrangeroversvr-4.jpg?auto=webp&fit=crop&height=900&width=1200']
        },
        {
            id: 'dodge-viper-srt10-acr', brand: 'Dodge', model: 'Viper SRT10 ACR', year: 2008, price: 120000, mileage: 12000, bodyType: 'Купе',
            description: 'Екзотичний суперкар у єдиному екземплярі, створений для треку.',
            images: ['https://www.supercars.net/blog/wp-content/uploads/2016/04/2008_Dodge_ViperSRT10ACR1.jpg']
        },
        {
            id: 'dodge-srt-viper-gts', brand: 'Dodge', model: 'SRT Viper GTS', year: 2013, price: 90000, mileage: 28000, bodyType: 'Купе',
            description: '640-сильна смертельна пастка, справжній американський звір.',
            images: ['https://hips.hearstapps.com/autoweek/assets/s3fs-public/121009991.jpg']
        },
        {
            id: 'bugatti-chiron', brand: 'Bugatti', model: 'Chiron Super Sport', year: 2023, price: 3500000, mileage: 1000, bodyType: 'Купе',
            description: 'Гіперкар, легендарність якого неможливо переоцінити, вершина інженерної думки.',
            images: ['https://www.netcarshow.com/Bugatti-Chiron_Super_Sport_300-2021-1280-355cb16c22db487fd939ee88b09bd2d46d.jpg']
        }
    ];

    // Отримання посилань на елементи DOM
    const productsGrid = document.getElementById('products-grid');
    const brandFilter = document.getElementById('brand-filter');
    const yearFilter = document.getElementById('year-filter');
    const priceSort = document.getElementById('price-sort');
    const nameSort = document.getElementById('name-sort');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Нові елементи для фільтрації за діапазоном
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const minMileageInput = document.getElementById('min-mileage');
    const maxMileageInput = document.getElementById('max-mileage');

    // Елементи пагінації
    const paginationControls = document.getElementById('pagination-controls');
    const carsPerPage = 9; // Кількість авто на сторінці
    let currentPage = 1;

    let displayedCars = [...cars]; // Копія масиву для відображення, яку будемо фільтрувати/сортувати
    let favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || []; // Завантажуємо обрані з localStorage

    // --- Функції для генерації та відображення карток ---

    // Генерує HTML для слайдера зображень
    function generateSliderHtml(images, carId) {
        if (!images || images.length === 0) {
            return `<img src="https://via.placeholder.com/286x200?text=No+Image" class="card-img-top" alt="Немає зображення">`;
        }
        // Використовуємо перше зображення для картки
        return `
            <div class="car-slider" data-car-id="${carId}">
                <div class="slider-images">
                    <img src="${images[0]}" alt="${carId} image 1">
                </div>
                </div>
        `;
    }

    // Генерує HTML для однієї картки автомобіля
    function generateCarCardHTML(car) {
        const isFavorite = favoriteCars.includes(car.id);
        const favoriteClass = isFavorite ? 'active' : '';

        return `
            <div class="card" style="width: 18rem;" data-car-id="${car.id}">
                ${generateSliderHtml(car.images, car.id)}
                <div class="card-body">
                    <button class="btn-favorite ${favoriteClass}" data-car-id="${car.id}">
                        &#9733; </button>
                    <h5 class="card-title">${car.brand} ${car.model}</h5>
                    <p class="card-text">Рік: ${car.year}</p>
                    <p class="card-text">Пробіг: ${car.mileage.toLocaleString()} км</p>
                    <p class="card-text">Тип кузова: ${car.bodyType}</p>
                    <p class="card-text">**Ціна: $${car.price.toLocaleString()}**</p>
                    <p class="card-text-description">${car.description}</p>
                    <a href="car-details.html?id=${car.id}" class="btn btn-primary">Детальніше</a>
                </div>
            </div>
        `;
    }

    // Відображає картки на сторінці
    function displayCars(carsToDisplay) {
        productsGrid.innerHTML = ''; // Очищаємо контейнер
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
        initializeSliders(); // Ініціалізуємо слайдери після додавання карток
        addFavoriteButtonListeners(); // Додаємо слухачі для кнопок "Обране"
    }

    // --- Функції для фільтрації та пошуку ---

    function applyFiltersAndSearch() {
        let filtered = [...cars]; // Починаємо з повного списку

        // Фільтрація за маркою
        const selectedBrand = brandFilter.value;
        if (selectedBrand) {
            filtered = filtered.filter(car => car.brand === selectedBrand);
        }

        // Фільтрація за роком
        const selectedYear = yearFilter.value;
        if (selectedYear) {
            filtered = filtered.filter(car => car.year === parseInt(selectedYear));
        }

        // Фільтрація за діапазоном ціни
        const minPrice = parseFloat(minPriceInput.value);
        const maxPrice = parseFloat(maxPriceInput.value);
        if (!isNaN(minPrice)) {
            filtered = filtered.filter(car => car.price >= minPrice);
        }
        if (!isNaN(maxPrice)) {
            filtered = filtered.filter(car => car.price <= maxPrice);
        }

        // Фільтрація за діапазоном пробігу
        const minMileage = parseFloat(minMileageInput.value);
        const maxMileage = parseFloat(maxMileageInput.value);
        if (!isNaN(minMileage)) {
            filtered = filtered.filter(car => car.mileage >= minMileage);
        }
        if (!isNaN(maxMileage)) {
            filtered = filtered.filter(car => car.mileage <= maxMileage);
        }

        // Пошук за ключовими словами
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            filtered = filtered.filter(car =>
                car.brand.toLowerCase().includes(searchTerm) ||
                car.model.toLowerCase().includes(searchTerm) ||
                car.description.toLowerCase().includes(searchTerm)
            );
        }

        displayedCars = filtered; // Оновлюємо масив для сортування
        currentPage = 1; // Скидаємо на першу сторінку при зміні фільтрів/пошуку
        applySorting(); // Застосовуємо сортування до відфільтрованих авто
    }

    // --- Функції для сортування ---

    function applySorting() {
        const priceSortValue = priceSort.value;
        const nameSortValue = nameSort.value;

        // Скидаємо інші сортування, якщо одне вибрано
        if (priceSortValue !== '') {
            nameSort.value = ''; // Скидаємо сортування за назвою
        } else if (nameSortValue !== '') {
            priceSort.value = ''; // Скидаємо сортування за ціною
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

        displayCars(displayedCars); // Відображаємо відсортовані авто
    }

    // --- Функції для "Обраного" ---

    function toggleFavorite(carId) {
        const index = favoriteCars.indexOf(carId);
        if (index > -1) {
            favoriteCars.splice(index, 1); // Видалити, якщо вже є
        } else {
            favoriteCars.push(carId); // Додати, якщо немає
        }
        localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars)); // Зберігаємо в localStorage
        updateFavoriteButtons(); // Оновлюємо вигляд кнопок
    }

    function addFavoriteButtonListeners() {
        document.querySelectorAll('.btn-favorite').forEach(button => {
            // Видаляємо старі слухачі, щоб уникнути дублювання
            button.removeEventListener('click', handleFavoriteButtonClick);
            button.addEventListener('click', handleFavoriteButtonClick);
        });
    }

    function handleFavoriteButtonClick(event) {
        event.preventDefault(); // Запобігаємо переходу по посиланню
        event.stopPropagation(); // Запобігаємо спрацьовуванню кліку на картці
        const carId = this.dataset.carId;
        toggleFavorite(carId);
        // Оновлюємо клас кнопки, щоб відобразити стан
        this.classList.toggle('active', favoriteCars.includes(carId));
    }

    function updateFavoriteButtons() {
        document.querySelectorAll('.btn-favorite').forEach(button => {
            const carId = button.dataset.carId;
            if (favoriteCars.includes(carId)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // --- Функції для слайдера зображень (на картці) ---

    function initializeSliders() {
        document.querySelectorAll('.car-slider').forEach(slider => {
            const carId = slider.dataset.carId;
            const car = cars.find(c => c.id === carId);
            const images = car ? car.images : [];

            const sliderImagesContainer = slider.querySelector('.slider-images');
            sliderImagesContainer.innerHTML = ''; // Очищаємо, щоб уникнути дублювання

            if (!images || images.length === 0) {
                sliderImagesContainer.innerHTML = `<img src="https://via.placeholder.com/286x200?text=No+Image" alt="Немає зображення">`;
                return;
            }

            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = car.model;
                sliderImagesContainer.appendChild(img);
            });

            const currentImages = slider.querySelectorAll('.slider-images img');
            let currentIndex = 0;

            if (currentImages.length > 1) {
                // Додаємо кнопки навігації, якщо їх немає і зображень більше 1
                if (!slider.querySelector('.slider-nav-button.prev')) {
                    const prevBtn = document.createElement('button');
                    prevBtn.className = 'slider-nav-button prev';
                    prevBtn.innerHTML = '&#10094;';
                    slider.appendChild(prevBtn);
                    prevBtn.addEventListener('click', (e) => {
                        e.stopPropagation(); // Запобігаємо спрацьовуванню кліку на картці
                        currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1;
                        updateSlider();
                    });
                }

                if (!slider.querySelector('.slider-nav-button.next')) {
                    const nextBtn = document.createElement('button');
                    nextBtn.className = 'slider-nav-button next';
                    nextBtn.innerHTML = '&#10095;';
                    slider.appendChild(nextBtn);
                    nextBtn.addEventListener('click', (e) => {
                        e.stopPropagation(); // Запобігаємо спрацьовуванню кліку на картці
                        currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0;
                        updateSlider();
                    });
                }
            } else {
                // Видаляємо кнопки, якщо зображення одне
                const prevBtn = slider.querySelector('.slider-nav-button.prev');
                const nextBtn = slider.querySelector('.slider-nav-button.next');
                if (prevBtn) prevBtn.remove();
                if (nextBtn) nextBtn.remove();
            }

            function updateSlider() {
                const imageWidth = currentImages[0].clientWidth;
                sliderImagesContainer.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
            }

            // Оновлюємо слайдер при зміні розміру вікна
            window.removeEventListener('resize', updateSlider); // Запобігаємо дублюванню
            window.addEventListener('resize', updateSlider);
            updateSlider(); // Ініціалізація позиції слайдера
        });
    }


    // --- Функції для пагінації ---

    function updatePagination(totalCars) {
        paginationControls.innerHTML = ''; // Очищаємо пагінацію
        const pageCount = Math.ceil(totalCars / carsPerPage);

        if (pageCount <= 1) return; // Не показуємо пагінацію, якщо сторінка одна

        for (let i = 1; i <= pageCount; i++) {
            const pageItem = document.createElement('li');
            pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener('click', (event) => {
                event.preventDefault();
                currentPage = i;
                displayCars(displayedCars); // Перемальовуємо картки для нової сторінки
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокручуємо до верху сторінки
            });
            paginationControls.appendChild(pageItem);
        }
    }

    // --- Ініціалізація та слухачі подій ---

    // Заповнюємо фільтри унікальними значеннями
    function populateFilters() {
        const brands = [...new Set(cars.map(car => car.brand))].sort();
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });

        const years = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a); // Сортуємо роки за спаданням
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });
    }

    // Додаємо слухачі подій для фільтрів та сортування
    brandFilter.addEventListener('change', applyFiltersAndSearch);
    yearFilter.addEventListener('change', applyFiltersAndSearch);
    priceSort.addEventListener('change', applySorting);
    nameSort.addEventListener('change', applySorting);
    searchInput.addEventListener('input', applyFiltersAndSearch);
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        applyFiltersAndSearch();
    });

    // Слухачі для нових полів діапазону
    minPriceInput.addEventListener('input', applyFiltersAndSearch);
    maxPriceInput.addEventListener('input', applyFiltersAndSearch);
    minMileageInput.addEventListener('input', applyFiltersAndSearch);
    maxMileageInput.addEventListener('input', applyFiltersAndSearch);

    // Слухач для кнопки "Мої обрані" у навігації
    document.getElementById('favorites-link').addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'favorites.html';
    });


    // Початкове завантаження
    populateFilters();
    displayCars(cars); // Відображаємо всі авто при завантаженні сторінки
});