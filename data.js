const cars = [
    {
        id: 'lexus-lfa', brand: 'Lexus', model: 'LFA', year: 2010, price: 750000, mileage: 15000, bodyType: 'Купе',
        description: 'Легендарний суперкар початку 10-их років. Ручна збірка, унікальний звук двигуна V10.',
        image: [
            'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/09q4/300860/2012-lexus-lfa-review-car-and-driver-photo-302743-s-original.jpg',
            'https://mag.lexus.co.uk/wp-content/uploads/sites/3/2015/12/Lexus-LFA-with-Vossen-Forged.jpg',
            'https://images.pistonheads.com/nimg/49230/mceu_13704452231732103158681.jpg'
        ],
        specs: {
            enginePowerHp: 552, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'lexus-lfa@cars.com'
        }
    },
    {
        id: 'jaguar-f-type', brand: 'Jaguar', model: 'F-Type R', year: 2015, price: 85000, mileage: 40000, bodyType: 'Купе',
        description: 'Рідкісний суперкар зі своїм шармом та потужним двигуном.',
        image: [
            'https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/KYzOOgQE-lmqeKNIDel-(edit).jpg?t=168463055753',
            'https://media.autoexpress.co.uk/image/private/s--BMSAV-AJ--/f_auto,t_content-image-full-mobile@1/v1563183432/autoexpress/2018/01/2_13.jpg',
            'https://img.sm360.ca/images/article/dilawri-group-of-companies/48135//17_jaguar_f_type_r_coupe_002001529261022596.jpg'
        ],
        specs: {
            enginePowerHp: 550, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'jaguar-f-type@cars.com'
        }
    },
    {
        id: 'jaguar-xkr', brand: 'Jaguar', model: 'XKR', year: 2008, price: 45000, mileage: 70000, bodyType: 'Купе',
        description: 'Захопливе поєднання потужності та вишуканої розкоші.',
        image: [
            'https://www.tradeclassics.com/wp-content/uploads/2021/04/2008-Jaguar-XKR-S-Black-Featured-1.jpg',
            'https://www.tradeclassics.com/wp-content/uploads/2021/04/2008-Jaguar-XKR-S-Black-Featured-1-19.jpg',
            'https://www.ultimatecarpage.com/images/car/3637/Jaguar-XKR-S-28739.jpg'
        ],
        specs: {
            enginePowerHp: 420, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'jaguar-xkr@cars.com'
        }
    },
    {
        id: 'mazda-rx8', brand: 'Mazda', model: 'RX8', year: 2009, price: 18000, mileage: 120000, bodyType: 'Купе',
        description: 'Роторна революція. Унікальний спортивний автомобіль.',
        image: [
            'https://www.supercars.net/blog/wp-content/uploads/2016/04/717899.jpg',
            'https://ireland.apollo.olxcdn.com/v1/files/vzdv5othvdmk3-UA/image;s=1000x750',
            'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/576000/0/576078.jpg'
        ],
        specs: {
            enginePowerHp: 232, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'mazda-rx8@cars.com'
        }
    },
    {
        id: 'dodge-charger-srt8', brand: 'Dodge', model: 'Charger SRT8', year: 2008, price: 35000, mileage: 85000, bodyType: 'Седан',
        description: 'Сідай за кермо. Відроджуйся. Американська мрія на чотирьох колесах.',
        image: [
            'https://live.staticflickr.com/3316/3326907992_a3f579c00f_b.jpg'
        ],
        specs: {
            enginePowerHp: 425, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'dodge-charger@cars.com'
        }
    },
    {
        id: 'lamborghini-gallardo', brand: 'Lamborghini', model: 'Gallardo', year: 2012, price: 180000, mileage: 25000, bodyType: 'Купе',
        description: 'Один з легендарних авто компанії Lamborghini з прекрасним двигуном V10.',
        image: ['https://hips.hearstapps.com/hmg-prod/images/gallardo-31-6442d3da29a30.jpg'],
        specs: {
            enginePowerHp: 550, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'lamborghini-gallardo@cars.com'
        }
    },
    {
        id: 'lamborghini-murcielago', brand: 'Lamborghini', model: 'Murcielago LP640-4 Coupe', year: 2007, price: 250000, mileage: 20000, bodyType: 'Купе',
        description: 'Один з легендарних авто компанії Lamborghini з прекрасним двигуном V12.',
        image: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gray_Lamborghini_LP640.jpg/1200px-Gray_Lamborghini_LP640.jpg'],
        specs: {
            enginePowerHp: 631, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'lamborghini-murcielago@cars.com'
        }
    },
    {
        id: 'lamborghini-huracan', brand: 'Lamborghini', model: 'Huracan Spyder', year: 2018, price: 280000, mileage: 10000, bodyType: 'Кабріолет',
        description: 'Авто, натхнене іспанським бійцівським биком.',
        image: ['https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10375019/20180307_lambo_huracanspyder_vladsavov12.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100'],
        specs: {
            enginePowerHp: 610, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'lamborghini-huracan@cars.com'
        }
    },
    {
        id: 'nissan-gt-r', brand: 'Nissan', model: 'GT-R R35', year: 2020, price: 110000, mileage: 5000, bodyType: 'Купе',
        description: 'Ікона сучасних спортивних авто, що ламає стереотипи.',
        image: ['https://i.infocar.ua/i/12/5057/1200x800.jpg'],
        specs: {
            enginePowerHp: 565, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'nissan-gt-r@cars.com'
        }
    },
    {
        id: 'nissan-370z', brand: 'Nissan', model: '370Z', year: 2017, price: 32000, mileage: 30000, bodyType: 'Купе',
        description: 'Потужність, Пристрасть, Продуктивність в одному флаконі.',
        image: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nissan_370Z.JPG/960px-Nissan_370Z.JPG'],
        specs: {
            enginePowerHp: 332, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'nissan-370z@cars.com'
        }
    },
    {
        id: 'porsche-911', brand: 'Porsche', model: '911 Turbo S (992)', year: 2022, price: 250000, mileage: 2000, bodyType: 'Купе',
        description: 'Унікальний авто зі своєю унікальною історією та неперевершеною динамікою.',
        image: ['https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijsxlvQB.bu8/v0/-1x-1.webp'],
        specs: {
            enginePowerHp: 640, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'porsche-911@cars.com'
        }
    },
    {
        id: 'mercedes-slr', brand: 'Mercedes-Benz', model: 'SLR McLaren', year: 2004, price: 350000, mileage: 18000, bodyType: 'Купе',
        description: 'Рідкісний Mercedes-Benz з 20-річною історією, результат співпраці двох легенд.',
        image: ['https://upload.wikimedia.org/wikipedia/commons/8/8b/Mercedes-Benz_SLR_McLaren_2.jpg'],
        specs: {
            enginePowerHp: 626, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'mercedes-slr@cars.com'
        }
    },
    {
        id: 'corvette-c6-z06', brand: 'Chevrolet', model: 'Corvette C6 Z06', year: 2012, price: 60000, mileage: 50000, bodyType: 'Купе',
        description: 'Легендарний авто з легендарним двигуном, справжній американський масл-кар.',
        image: ['https://www.lingenfelter.com/mm5/graphics/00000001/3/C6_Corvette_Z06_427_CID_LS7_660_HP_Package_540x540.png'],
        specs: {
            enginePowerHp: 505, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'corvette-c6@cars.com'
        }
    },
    {
        id: 'corvette-c7-zr1', brand: 'Chevrolet', model: 'Corvette C7 ZR1', year: 2019, price: 130000, mileage: 10000, bodyType: 'Купе',
        description: 'Продовження легендарної історії легендарного масл-кару, з ще більшою потужністю.',
        image: ['https://lapmeta.com/storage/vi-images/NQ34s0wVVE.jpeg'],
        specs: {
            enginePowerHp: 755, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'corvette-c7@cars.com'
        }
    },
    {
        id: 'corvette-c8-zr1', brand: 'Chevrolet', model: 'Corvette C8 ZR1', year: 2024, price: 180000, mileage: 500, bodyType: 'Купе',
        description: 'Нове покоління Corvette з середньомоторною компоновкою, інновації та потужність.',
        image: ['https://speednik.s3.amazonaws.com/powerautorax55/wp-content/blogs.dir/1/files/2024/06/chevrolet-teases-possible-twin-turbo-zr1-c8-corvette-2024-06-03_13-54-36_373859.png'],
        specs: {
            enginePowerHp: 850, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'corvette-c8@cars.com'
        }
    },
    {
        id: 'ferrari-f355', brand: 'Ferrari', model: 'F355', year: 1998, price: 150000, mileage: 60000, bodyType: 'Купе',
        description: 'Один із легендарних Ferrari старої школи, з неперевершеним дизайном.',
        image: ['https://upload.wikimedia.org/wikipedia/commons/b/b9/Ferrari_F355_Berlinetta_1X7A7333.jpg'],
        specs: {
            enginePowerHp: 375, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'ferrari-f355@cars.com'
        }
    },
    {
        id: 'range-rover-svr', brand: 'Land Rover', model: 'Range Rover SVR', year: 2015, price: 70000, mileage: 65000, bodyType: 'Позашляховик',
        description: 'Британський спортивний кросовер, поєднання розкоші та динаміки.',
        image: ['https://www.cnet.com/a/img/resize/6e32ea2c080370d66f3f06fea5ace9ea1f7dce57/hub/2015/08/05/b801da55-42ed-4f87-b2ed-9c9267f2da45/landroverrangeroversvr-4.jpg?auto=webp&fit=crop&height=900&width=1200'],
        specs: {
            enginePowerHp: 550, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'range-rover-svr@cars.com'
        }
    },
    {
        id: 'dodge-viper-srt10-acr', brand: 'Dodge', model: 'Viper SRT10 ACR', year: 2008, price: 120000, mileage: 12000, bodyType: 'Купе',
        description: 'Екзотичний суперкар у єдиному екземплярі, створений для треку.',
        image: ['https://www.supercars.net/blog/wp-content/uploads/2016/04/2008_Dodge_ViperSRT10ACR1.jpg'],
        specs: {
            enginePowerHp: 600, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'dodge-viper@cars.com'
        }
    },
    {
        id: 'dodge-srt-viper-gts', brand: 'Dodge', model: 'SRT Viper GTS', year: 2013, price: 90000, mileage: 28000, bodyType: 'Купе',
        description: '640-сильна смертельна пастка, справжній американський звір.',
        image: ['https://hips.hearstapps.com/autoweek/assets/s3fs-public/121009991.jpg'],
        specs: {
            enginePowerHp: 640, fuelType: 'Бензин', transmission: 'Механічна'
        },
        contact: {
            phone: '+380974754398', email: 'dodge-srt-viper@cars.com'
        }
    },
    {
        id: 'bugatti-chiron', brand: 'Bugatti', model: 'Chiron Super Sport', year: 2023, price: 3500000, mileage: 1000, bodyType: 'Купе',
        description: 'Гіперкар, легендарність якого неможливо переоцінити, вершина інженерної думки.',
        image: ['https://www.netcarshow.com/Bugatti-Chiron_Super_Sport_300-2021-1280-355cb16c22db487fd939ee88b09bd2d46d.jpg'],
        specs: {
            enginePowerHp: 1600, fuelType: 'Бензин', transmission: 'Автоматична'
        },
        contact: {
            phone: '+380974754398', email: 'bugatti-chiron@cars.com'
        }
    }
];
